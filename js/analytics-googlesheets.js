// ===== DAVI ANALYTICS SYSTEM - GOOGLE SHEETS VERSION =====
// Sendet Analytics-Daten direkt zu Google Sheets via Web App

(function() {
    'use strict';
    
    // ⚠️ WICHTIG: Hier deine Google Apps Script Web App URL eintragen
    // Anleitung: siehe GOOGLE_SHEETS_SETUP.md
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzv6pDXa-4uKyL_Ov3g8ZkxmNK3_LBYI7XipxSrrRRhf8GoDLYoGIE57p73yBK2o0ehTQ/exec';
    
    // Session ID generieren (bleibt während Browser-Session gleich)
    let sessionId = sessionStorage.getItem('davi_session_id');
    if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('davi_session_id', sessionId);
    }
    
    // User Agent erfassen
    const userAgent = navigator.userAgent;
    
    // Aktuelle Sprache
    let currentLang = 'de';
    
    // Track Event Funktion
    async function trackEvent(eventType, eventData = {}) {
        // Prüfen ob Google Sheets URL gesetzt ist
        if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL === 'HIER_DEINE_GOOGLE_SHEETS_WEB_APP_URL_EINTRAGEN') {
            console.warn('Analytics disabled: GOOGLE_SHEETS_URL not configured');
            return;
        }
        
        try {
            const event = {
                event_type: eventType,
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString('de-DE'),
                time: new Date().toLocaleTimeString('de-DE'),
                language: currentLang,
                session_id: sessionId,
                user_agent: userAgent,
                problem_key: eventData.problem_key || '',
                problem_title: eventData.problem_title || '',
                pdf_name: eventData.pdf_name || '',
                urgency: eventData.urgency || '',
                navigation_target: eventData.navigation_target || ''
            };
            
            // Event zu Google Sheets senden
            const response = await fetch(GOOGLE_SHEETS_URL + '?action=log', {
                method: 'POST',
                mode: 'no-cors', // Wichtig für Google Apps Script
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            });
            
            console.log('✅ Analytics event sent:', eventType);
        } catch (error) {
            console.warn('Analytics error:', error);
        }
    }
    
    // Sprache aktualisieren
    window.daviAnalytics = {
        setLanguage: function(lang) {
            currentLang = lang;
        },
        
        // Sprachauswahl tracken
        trackLanguageSelected: function(lang) {
            currentLang = lang;
            trackEvent('language_selected', { navigation_target: lang });
        },
        
        // Problem geklickt
        trackProblemClicked: function(problemKey, problemTitle) {
            trackEvent('problem_clicked', {
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // "Ja" - Ist das dein Problem?
        trackProblemConfirmedYes: function(problemKey, problemTitle) {
            trackEvent('problem_confirmed_yes', {
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // "Nein" - Ist das dein Problem?
        trackProblemConfirmedNo: function(problemKey, problemTitle) {
            trackEvent('problem_confirmed_no', {
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // Lösungen angezeigt
        trackSolutionViewed: function(problemKey, problemTitle) {
            trackEvent('solution_viewed', {
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // PDF geklickt
        trackPdfClicked: function(pdfName, problemKey = '', problemTitle = '') {
            trackEvent('pdf_clicked', {
                pdf_name: pdfName,
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // Rückruf-Button geklickt
        trackCallbackRequested: function(problemKey, problemTitle) {
            trackEvent('callback_requested', {
                problem_key: problemKey,
                problem_title: problemTitle
            });
        },
        
        // Rückruf erfolgreich abgeschickt
        trackCallbackSubmitted: function(problemKey, problemTitle, urgency) {
            trackEvent('callback_submitted', {
                problem_key: problemKey,
                problem_title: problemTitle,
                urgency: urgency // 'monday' oder 'now'
            });
        },
        
        // Navigation (Startseite, Impressum, Datenschutz)
        trackNavigation: function(target) {
            trackEvent('navigation', {
                navigation_target: target // 'home', 'impressum', 'datenschutz'
            });
        },
        
        // Seite verlassen
        trackPageExit: function() {
            trackEvent('page_exit', {});
        }
    };
    
    // Automatisches Tracking von PDF-Links
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href*=".pdf"]');
        if (target) {
            const pdfUrl = target.getAttribute('href');
            const pdfName = pdfUrl.split('/').pop();
            window.daviAnalytics.trackPdfClicked(pdfName);
        }
    });
    
    // Page Exit tracken (wenn User Seite verlässt)
    let exitTracked = false;
    window.addEventListener('beforeunload', function() {
        if (!exitTracked && GOOGLE_SHEETS_URL && GOOGLE_SHEETS_URL !== 'HIER_DEINE_GOOGLE_SHEETS_WEB_APP_URL_EINTRAGEN') {
            exitTracked = true;
            
            // Für Google Sheets: Beacon mit URL-Parameter
            const params = new URLSearchParams({
                action: 'log',
                event_type: 'page_exit',
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString('de-DE'),
                time: new Date().toLocaleTimeString('de-DE'),
                language: currentLang,
                session_id: sessionId,
                user_agent: userAgent
            });
            
            if (navigator.sendBeacon) {
                navigator.sendBeacon(GOOGLE_SHEETS_URL + '?' + params.toString());
            }
        }
    });
    
    // Visibility Change tracken (Tab wechseln, minimieren)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && !exitTracked) {
            window.daviAnalytics.trackPageExit();
        }
    });
    
    console.log('✅ DAVI Analytics initialized (Google Sheets Mode) - Session ID:', sessionId);
    if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL === 'HIER_DEINE_GOOGLE_SHEETS_WEB_APP_URL_EINTRAGEN') {
        console.warn('⚠️ Google Sheets URL not configured - tracking disabled');
    }
})();
