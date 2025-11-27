// ===== DAVI ANALYTICS SYSTEM =====
// Einfaches, eigenes Analytics ohne externe Abhängigkeiten

(function() {
    'use strict';
    
    // Session ID generieren (bleibt während Browser-Session gleich)
    let sessionId = sessionStorage.getItem('davi_session_id');
    if (!sessionId) {
        sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('davi_session_id', sessionId);
    }
    
    // Analytics API Endpoint
    const API_ENDPOINT = '/tables/davi_analytics';
    
    // User Agent erfassen
    const userAgent = navigator.userAgent;
    
    // Aktuelle Sprache
    let currentLang = 'de';
    
    // Track Event Funktion
    async function trackEvent(eventType, eventData = {}) {
        try {
            const event = {
                event_type: eventType,
                timestamp: new Date().toISOString(),
                language: currentLang,
                session_id: sessionId,
                user_agent: userAgent,
                problem_key: eventData.problem_key || '',
                problem_title: eventData.problem_title || '',
                pdf_name: eventData.pdf_name || '',
                urgency: eventData.urgency || '',
                navigation_target: eventData.navigation_target || ''
            };
            
            // Event zur Datenbank senden
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            });
            
            if (!response.ok) {
                console.warn('Analytics tracking failed:', response.status);
            }
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
        if (!exitTracked) {
            exitTracked = true;
            // Sync request für page exit, damit es noch gesendet wird
            const event = {
                event_type: 'page_exit',
                timestamp: new Date().toISOString(),
                language: currentLang,
                session_id: sessionId,
                user_agent: userAgent,
                problem_key: '',
                problem_title: '',
                pdf_name: '',
                urgency: '',
                navigation_target: ''
            };
            
            // sendBeacon nutzen für garantierte Übertragung beim Verlassen
            if (navigator.sendBeacon) {
                const blob = new Blob([JSON.stringify(event)], { type: 'application/json' });
                navigator.sendBeacon(API_ENDPOINT, blob);
            }
        }
    });
    
    // Visibility Change tracken (Tab wechseln, minimieren)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && !exitTracked) {
            window.daviAnalytics.trackPageExit();
        }
    });
    
    console.log('✅ DAVI Analytics initialized - Session ID:', sessionId);
})();
