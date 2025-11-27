// ===== DAVI BOT - BAUARBEITER-SUPPORT =====

// Sprachvariable
let currentLanguage = 'de'; // Standard ist Deutsch

// Übersetzungen für alle Sprachen
const translations = {
    de: {
        // Header
        headerTitle: "Hey! Ich bin DAVI 👋",
        headerSubtitle: "Dein DeepUp Support rund um die Uhr. Suche nach deinem Problem oder klicke es unten an",
        searchPlaceholder: "Suche...",
        
        // Footer
        footerMain: "🏗️ DAVI ist 24/7 für dich da - auch am Wochenende!",
        footerSub: "Du kannst einen Rückruf anfordern, wir rufen dich Montag - Freitag von 7-17 Uhr zurück. Am Samstag kann dich der Bereitschaftsdienst von 8-14 Uhr zurückrufen, wenn das Problem nicht bis Montag warten kann.",
        
        // Allgemeine Buttons
        yesButton: "👍 Ja",
        noButton: "👎 Nein",
        homeButton: "Zur Startseite",
        callbackButton: "Rückruf anfordern (Mo bis Fr 7-17 und Sa 8-14 Uhr)",
        
        // Bestätigung
        confirmQuestion: "Ist das dein Problem? 🤔",
        solutionHeader: "Die Lösung:",
        hasWorked: "Hat's geklappt? 🎉",
        hasWorkedSub: "Falls nicht, fordere einen Rückruf an, wir melden uns am nächsten Morgen (Montag bis Freitag).",
        
        // Formular
        formTitle: "📞 Rückruf anfordern",
        formName: "Dein Name:",
        formNamePlaceholder: "z.B. Max Mustermann",
        formPhone: "Deine Telefonnummer:",
        formPhonePlaceholder: "z.B. 0171 123456789",
        formSerial: "Seriennummer (SN):",
        formSerialPlaceholder: "z.B. ABC123DEF456",
        formProblem: "Beschreib dein Problem kurz:",
        formProblemPlaceholder: "Was genau funktioniert nicht? Auf welcher Baustelle bist du?",
        formUrgency: "Heute ist SAMSTAG? Dann sag uns bitte, wie eilig deine Anfrage ist und wann wir dich anrufen sollen:",
        formUrgencyMonday: "nächster Werktag (Montag bis Freitag)",
        formUrgencyNow: "heute am Samstag (Bereitschaftsdienst)",
        subjectMonday: "DAVI Rückruf am Montag",
        subjectNow: "DAVI Rückruf Samstag sofort",
        saturdayOnly: "NUR AM",
        saturdayWord: "SAMSTAG",
        saturdayOnlyEnd: "AUSFÜLLEN",
        submitButton: "Senden",
        
        // Danke Screen
        thankYou: "Danke! 🙏",
        thankYouSub: "Wir melden uns Mo-Fr morgens bei dir.",
        thankYouSubMonday: "Wir melden uns am nächsten Werktag (Montag bis Freitag) bei dir.",
        thankYouSubNow: "Wir melden uns schnellstmöglich bei dir.",
        
        // Fehlermeldungen
        fillAllFields: "Bitte füll alle Felder aus! 📝",
        sendError: "Fehler beim Senden! Versuch es nochmal oder ruf direkt im Büro an. 📞",
        sending: "Wird gesendet..."
    },
    en: {
        // Header
        headerTitle: "Hey! I'm DAVI 👋",
        headerSubtitle: "Your DeepUp Support 24/7. Search for your problem or click on it below",
        searchPlaceholder: "Search...",
        
        // Footer
        footerMain: "🏗️ DAVI is here for you 24/7 - even on weekends!",
        footerSub: "You can request a callback, we'll call you back Monday - Friday 7am-5pm. On Saturday the on-call service can call you back 8am-2pm if the problem can't wait until Monday.",
        
        // Allgemeine Buttons
        yesButton: "👍 Yes",
        noButton: "👎 No",
        homeButton: "Back to Home",
        callbackButton: "Request Callback (Mon-Fri 7am-5pm and Sat 8am-2pm)",
        
        // Bestätigung
        confirmQuestion: "Is this your problem? 🤔",
        solutionHeader: "The Solution:",
        hasWorked: "Did it work? 🎉",
        hasWorkedSub: "If not, request a callback and we'll contact you the next morning (Monday to Friday).",
        
        // Formular
        formTitle: "📞 Request Callback (Mon-Fri)",
        formName: "Your Name:",
        formNamePlaceholder: "e.g. John Smith",
        formPhone: "Your Phone Number:",
        formPhonePlaceholder: "e.g. +44 20 1234 5678",
        formSerial: "Serial Number (SN):",
        formSerialPlaceholder: "e.g. ABC123DEF456",
        formProblem: "Describe your problem briefly:",
        formProblemPlaceholder: "What exactly doesn't work? Which construction site are you at?",
        formUrgency: "Today is SATURDAY? Then please tell us how urgent your request is and when we should call you:",
        formUrgencyMonday: "next business day (Monday to Friday)",
        formUrgencyNow: "today on Saturday (on-call service)",
        subjectMonday: "DAVI Callback on Monday",
        subjectNow: "DAVI Callback Saturday immediately",
        saturdayOnly: "ONLY FILL OUT ON",
        saturdayWord: "SATURDAY",
        saturdayOnlyEnd: "",
        submitButton: "Send",
        
        // Danke Screen
        thankYou: "Thank you! 🙏",
        thankYouSub: "We'll contact you Mon-Fri morning.",
        thankYouSubMonday: "We'll contact you on the next business day (Monday to Friday).",
        thankYouSubNow: "We'll contact you as soon as possible.",
        
        // Fehlermeldungen
        fillAllFields: "Please fill all fields! 📝",
        sendError: "Error sending! Try again or call the office directly. 📞",
        sending: "Sending..."
    },
    ru: {
        // Header
        headerTitle: "Привет! Я DAVI 👋",
        headerSubtitle: "Ваша поддержка DeepUp 24/7. Найдите вашу проблему или нажмите на неё ниже",
        searchPlaceholder: "Поиск...",
        
        // Footer
        footerMain: "🏗️ DAVI здесь для вас 24/7 - даже в выходные!",
        footerSub: "Вы можете запросить обратный звонок, мы перезвоним вам понедельник-пятница 7-17. В субботу дежурная служба может перезвонить 8-14, если проблема не может ждать до понедельника.",
        
        // Allgemeine Buttons
        yesButton: "👍 Да",
        noButton: "👎 Нет",
        homeButton: "На главную",
        callbackButton: "Запросить обратный звонок (Пн-Пт 7-17 и Сб 8-14)",
        
        // Bestätigung
        confirmQuestion: "Это ваша проблема? 🤔",
        solutionHeader: "Решение:",
        hasWorked: "Сработало? 🎉",
        hasWorkedSub: "Если нет, запросите обратный звонок, мы свяжемся с вами следующим утром (понедельник-пятница).",
        
        // Formular
        formTitle: "📞 Запросить обратный звонок (Пн-Пт)",
        formName: "Ваше имя:",
        formNamePlaceholder: "например, Иван Петров",
        formPhone: "Ваш номер телефона:",
        formPhonePlaceholder: "например, +7 495 123 45 67",
        formSerial: "Серийный номер (SN):",
        formSerialPlaceholder: "например, ABC123DEF456",
        formProblem: "Кратко опишите вашу проблему:",
        formProblemPlaceholder: "Что именно не работает? На какой стройплощадке вы находитесь?",
        formUrgency: "Сегодня СУББОТА? Тогда скажите, насколько срочен ваш запрос и когда мы должны вам позвонить:",
        formUrgencyMonday: "следующий рабочий день (понедельник-пятница)",
        formUrgencyNow: "сегодня в субботу (дежурная служба)",
        subjectMonday: "DAVI Обратный звонок в понедельник",
        subjectNow: "DAVI Обратный звонок суббота срочно",
        saturdayOnly: "ЗАПОЛНЯТЬ ТОЛЬКО В",
        saturdayWord: "СУББОТУ",
        saturdayOnlyEnd: "",
        submitButton: "Отправить",
        
        // Danke Screen
        thankYou: "Спасибо! 🙏",
        thankYouSub: "Мы свяжемся с вами утром Пн-Пт.",
        thankYouSubMonday: "Мы свяжемся с вами в следующий рабочий день (понедельник-пятница).",
        thankYouSubNow: "Мы свяжемся с вами как можно скорее.",
        
        // Fehlermeldungen
        fillAllFields: "Пожалуйста, заполните все поля! 📝",
        sendError: "Ошибка отправки! Попробуйте ещё раз или звоните в офис напрямую. 📞",
        sending: "Отправка..."
    },
    tr: {
        // Header
        headerTitle: "Merhaba! Ben DAVI 👋",
        headerSubtitle: "DeepUp desteğiniz 7/24. Sorununuzu arayın veya aşağıdakilerden birine tıklayın",
        searchPlaceholder: "Ara...",
        
        // Footer
        footerMain: "🏗️ DAVI 7/24 sizin için burada - hafta sonları da!",
        footerSub: "Geri arama talep edebilirsiniz, Pazartesi-Cuma 7-17 arası sizi ararız. Cumartesi günü problem Pazartesi'ye kadar bekleyemezse, nöbetçi servisi 8-14 arası sizi arayabilir.",
        
        // Allgemeine Buttons
        yesButton: "👍 Evet",
        noButton: "👎 Hayır",
        homeButton: "Ana Sayfaya Dön",
        callbackButton: "Geri Arama Talep Et (Pzt-Cum 7-17 ve Cmt 8-14)",
        
        // Bestätigung
        confirmQuestion: "Bu sizin probleminiz mi? 🤔",
        solutionHeader: "Çözüm:",
        hasWorked: "İşe yaradı mı? 🎉",
        hasWorkedSub: "Olmadıysa, geri arama talep edin, ertesi sabah size ulaşacağız (Pazartesi-Cuma).",
        
        // Formular
        formTitle: "📞 Geri Arama Talep Et (Pzt-Cum)",
        formName: "Adınız:",
        formNamePlaceholder: "örn. Ahmet Yılmaz",
        formPhone: "Telefon Numaranız:",
        formPhonePlaceholder: "örn. +90 212 123 45 67",
        formSerial: "Seri Numarası (SN):",
        formSerialPlaceholder: "örn. ABC123DEF456",
        formProblem: "Sorununuzu kısaca açıklayın:",
        formProblemPlaceholder: "Tam olarak ne çalışmıyor? Hangi şantiyedesiniz?",
        formUrgency: "Bugün CUMARTESİ mi? O zaman lütfen talebinizin ne kadar acil olduğunu ve sizi ne zaman aramamız gerektiğini söyleyin:",
        formUrgencyMonday: "sonraki iş günü (Pazartesi-Cuma)",
        formUrgencyNow: "bugün Cumartesi (nöbetçi servis)",
        subjectMonday: "DAVI Pazartesi geri arama",
        subjectNow: "DAVI Cumartesi hemen geri arama",
        saturdayOnly: "SADECE",
        saturdayWord: "CUMARTESİ",
        saturdayOnlyEnd: "DOLDURULACAK",
        submitButton: "Gönder",
        
        // Danke Screen
        thankYou: "Teşekkürler! 🙏",
        thankYouSub: "Pzt-Cum sabah size ulaşacağız.",
        thankYouSubMonday: "Sonraki iş günü (Pazartesi-Cuma) size ulaşacağız.",
        thankYouSubNow: "En kısa sürede size ulaşacağız.",
        
        // Fehlermeldungen
        fillAllFields: "Lütfen tüm alanları doldurun! 📝",
        sendError: "Gönderim hatası! Tekrar deneyin veya ofisi doğrudan arayın. 📞",
        sending: "Gönderiliyor..."
    }
};

// Multilinguale Problem-Daten
const problemDataMultiLang = {
    de: {
    app_glitch: {
        title: "App startet nicht",
        backendTitle: "App Glitch",
        icon: "fas fa-wifi",
        description: "schließt sich wieder, öffnet sich nicht",
        solutions: [
            {
                title: "Neustart machen",
                icon: "fas fa-cog",
                description: "Starte deinen Scan Device neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            },
            {
                title: "Verbindung abwarten",
                icon: "fas fa-sync",
                description: "Warte 5 Minuten, manchmal dauert es, bis eine neue Verbindung kommt."
            }
        ]
    },
    app_glitch_einstellungen: {
        title: "App & Einstellungen starten nicht",
        backendTitle: "App Glitch mit Einstellungen",
        icon: "fas fa-cogs",
        description: "App und Einstellungen-App schließen sich wieder oder öffnen sich nicht",
        solutions: [
            {
                title: "Neustart ab iOS 18",
                icon: "fas fa-power-off",
                description: "Wenn dein Scan Device eine iOS18 oder höher Version hat, starte es bitte neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot_ab_iOS_18.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>. Hast du eine kleinere Version als iOS18, starte bitte unten eine <a href='#' onclick='scrollToCallback(); return false;' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>Rückrufbitte</a>."
            },
            {
                title: "Flugmodus Trick",
                icon: "fas fa-plane",
                description: "Flugmodus mehrere Male ein und ausschalten. Hilft bei Verbindungsproblemen."
            },
            {
                title: "Batterie komplett leer machen",
                icon: "fas fa-battery-empty",
                description: "Wenn nichts hilft: Gerät komplett leer laufen lassen, dann wieder aufladen."
            }
        ]
    },
    sma_rueckfragen_projekt: {
        title: "Projekt oder SMA wird nicht angezeigt",
        backendTitle: "SMA, Projekt Rückfrage",
        icon: "fas fa-project-diagram",
        description: "Projekt wird nicht angezeigt - SMA nicht sichtbar",
        solutions: [
            {
                title: "Neustart + iOS Update",
                icon: "fas fa-sync-alt",
                description: "Starte deinen Scan Device neu (wie erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>) und schaue, ob es ein iOS Update gibt, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
         
            }
        ]
    },
    sma_rueckfragen_qr: {
        title: "QR Code für SMA",
        backendTitle: "QR Code für SMA",
        icon: "fas fa-qrcode",
        description: "fehlt, geht nicht, wird nicht erkannt",
        solutions: [
            {
                title: "QR Code fehlt",
                icon: "fas fa-broom",
                description: "Lasse ihn dir vom Auftraggeber senden"
            },
            {
                title: "Kamera sauber machen",
                icon: "fas fa-broom",
                description: "Kameralinse hinten sauber wischen. QR Codes brauchen eine saubere Linse."
            },
            {
                title: "Besseres Licht + Abstand",
                icon: "fas fa-lightbulb",
                description: "Mehr Licht holen und verschiedene Abstände zum QR Code probieren."
            },
            {
                title: "Neustart machen",
                icon: "fas fa-redo",
                description: "Starte dein Scan Device neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            }
        ]
    },
    no_signal: {
        title: "Kein Netz / kein Internet",
        backendTitle: "Kein Signal",
        icon: "fas fa-signal",
        description: "Verbindungsprobleme - kein Netz",
        solutions: [
            {
                title: "Standort wechseln",
                icon: "fas fa-location-arrow",
                description: "Geh mal ein paar Meter weiter oder höher. Manchmal ist das Signal woanders besser."
            },
            {
                title: "Ladeimpuls geben",
                icon: "fas fa-plug",
                description: "Steck den Scan Device einmal kurz ans Ladekabel. Das kann die Verbindung wieder aktivieren."
            },
            {
                title: "Neustart machen",
                icon: "fas fa-wifi",
                description: "Starte deinen Scan Device neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            }
        ]
    },
    scan_photo: {
        title: "Scan, Foto geht nicht",
        backendTitle: "Probleme Scan Photo",
        icon: "fas fa-camera",
        description: "Probleme beim Scannen oder Fotografieren",
        solutions: [
            {
                title: "Kamera sauber machen",
                icon: "fas fa-broom",
                description: "Kameralinse hinten am Tablet sauber wischen. Staub und Dreck stört das Scannen."
            },
            {
                title: "Besseres Licht",
                icon: "fas fa-lightbulb",
                description: "Mehr Licht holen oder aus dem Schatten gehen. Die Kamera braucht gutes Licht."
            },
            {
                title: "Neustart machen",
                icon: "fas fa-redo",
                description: "Starte deinen Scan Device neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            }
        ]
    },
    quality_freeze: {
        title: "Scanner hängt bei \"Berechne Qualität\"",
        backendTitle: "Berechne Qualität Freeze",
        icon: "fas fa-hourglass-half",
        description: "Scanner hängt sich auf bei Qualitätsberechnung",
        solutions: [
            {
                title: "Einfach warten",
                icon: "fas fa-coffee",
                description: "Manchmal dauert die Berechnung einfach länger. Gönn dir einen Kaffee und warte 5-10 Minuten."
            },
            {
                title: "Neustart machen",
                icon: "fas fa-power-off",
                description: "Starte deinen Scan Device neu, wie du das machst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            },
            {
                title: "⚠️ Wichtiger Hinweis",
                icon: "fas fa-exclamation-triangle",
                description: "Wenn alles wieder funktioniert, musst du den Scan komplett wiederholen - die vorherigen Daten sind verloren."
            }
        ]
    },
    update_service: {
        title: "Update Service",
        icon: "fas fa-download",
        description: "iOS oder die App brauchen ein Update",
        solutions: [
            {
                title: "App updaten",
                icon: "fas fa-mobile-alt",
                description: "Wie du die App updaten kannst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/App_Update.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            },
            {
                title: "iOS updaten",
                icon: "fas fa-cog",
                description: "Wie du iOS updaten kannst erfährst du <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HIER</a>."
            }
        ]
    },
    lost_mode: {
        title: "Scanner gesperrt / Lost Mode",
        backendTitle: "Lost Mode",
        icon: "fas fa-search-location",
        description: "Gerät ist verloren gegangen oder im Lost Mode gesperrt",
        solutions: [
            {
                title: "iPad verloren",
                icon: "fas fa-search",
                description: "Bei dieser Meldung wende dich bitte an deinen Auftraggeber, er muss das Gerät zurücksenden und ein neues bestellen."
            },
            {
                title: "iPad gesperrt",
                icon: "fas fa-lock",
                description: "Wenn die Meldung anders als unter 1. ist, dann starte bitte eine Rückrufbitte und wir kümmern uns darum."
            }
        ]
    },
    bestellung: {
        title: "Bestellung",
        icon: "fas fa-shopping-cart",
        description: "Zubehör oder Geräte bestellen",
        solutions: [
            {
                title: "Was wird benötigt?",
                icon: "fas fa-list",
                description: "Aufschreiben was genau gebraucht wird - Ladekabel, Scan Device, Koffer etc."
            },
            {
                title: "Auftraggeber kontaktieren",
                icon: "fas fa-exclamation-triangle",
                description: "Den Auftraggeber bitte zu bestellen."
            }
        ]
    },
    geraete_retoure: {
        title: "Geräte Retoure",
        icon: "fas fa-undo",
        description: "Defektes oder nicht benötigtes Gerät zurücksenden",
        solutions: [
            {
                title: "Auftraggeber kontaktieren",
                icon: "fas fa-file-alt",
                description: "Kontaktiere deinen Auftraggeber, damit er die Retoure organisieren kann."
            }
        ]
    }
},
en: {
    app_glitch: {
        title: "App won't start",
        backendTitle: "App Glitch",
        icon: "fas fa-wifi",
        description: "closes again, won't open",
        solutions: [
            {
                title: "Restart Device",
                icon: "fas fa-cog",
                description: "Restart your Scan Device, learn how to do it <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            },
            {
                title: "Wait for Connection",
                icon: "fas fa-sync",
                description: "Wait 5 minutes, sometimes it takes time for a new connection to establish."
            }
        ]
    },
    app_glitch_einstellungen: {
        title: "App & Settings won't start",
        backendTitle: "App Glitch mit Einstellungen",
        icon: "fas fa-cogs",
        description: "App and Settings app close again or won't open",
        solutions: [
            {
                title: "Restart from iOS 18",
                icon: "fas fa-power-off",
                description: "If your Scan Device has iOS18 or higher version, please restart it, learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot_ab_iOS_18.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>. If you have a version lower than iOS18, please start a <a href='#' onclick='scrollToCallback(); return false;' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>callback request</a> below."
            },
            {
                title: "Airplane Mode Trick",
                icon: "fas fa-plane",
                description: "Turn airplane mode on and off several times. Helps with connection issues."
            },
            {
                title: "Drain Battery Completely",
                icon: "fas fa-battery-empty",
                description: "If nothing helps: Let device run completely empty, then recharge."
            }
        ]
    },
    sma_rueckfragen_projekt: {
        title: "Project or SMA not displayed",
        backendTitle: "SMA, Projekt Rückfrage",
        icon: "fas fa-project-diagram",
        description: "Project not displayed - SMA not visible",
        solutions: [
            {
                title: "Restart + iOS Update",
                icon: "fas fa-sync-alt",
                description: "Restart your Scan Device (learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>) and check for iOS updates, learn how <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            }
        ]
    },
    sma_rueckfragen_qr: {
        title: "QR Code for SMA",
        backendTitle: "QR Code für SMA",
        icon: "fas fa-qrcode",
        description: "missing, doesn't work, not recognized",
        solutions: [
            {
                title: "QR Code Missing",
                icon: "fas fa-broom",
                description: "Ask your client to send it to you"
            },
            {
                title: "Clean Camera",
                icon: "fas fa-broom",
                description: "Clean the rear camera lens. QR codes need a clean lens."
            },
            {
                title: "Better Light + Distance",
                icon: "fas fa-lightbulb",
                description: "Get more light and try different distances to the QR code."
            },
            {
                title: "Restart Device",
                icon: "fas fa-redo",
                description: "Restart your Scan Device, learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            }
        ]
    },
    no_signal: {
        title: "No Network / no Internet",
        backendTitle: "Kein Signal",
        icon: "fas fa-signal",
        description: "Connection problems - no network",
        solutions: [
            {
                title: "Change Location",
                icon: "fas fa-location-arrow",
                description: "Move a few meters away or higher. Sometimes the signal is better elsewhere."
            },
            {
                title: "Charging Pulse",
                icon: "fas fa-plug",
                description: "Briefly connect the Scan Device to the charging cable. This can reactivate the connection."
            },
            {
                title: "Restart Device",
                icon: "fas fa-wifi",
                description: "Restart your Scan Device, learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            }
        ]
    },
    scan_photo: {
        title: "Scan, Photo doesn't work",
        backendTitle: "Probleme Scan Photo",
        icon: "fas fa-camera",
        description: "Problems with scanning or taking photos",
        solutions: [
            {
                title: "Clean Camera",
                icon: "fas fa-broom",
                description: "Clean the rear camera lens on the tablet. Dust and dirt interfere with scanning."
            },
            {
                title: "Better Light",
                icon: "fas fa-lightbulb",
                description: "Get more light or move out of shadows. The camera needs good light."
            },
            {
                title: "Restart Device",
                icon: "fas fa-redo",
                description: "Restart your Scan Device, learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            }
        ]
    },
    quality_freeze: {
        title: "Scanner freezes at \"Calculate Quality\"",
        backendTitle: "Berechne Qualität Freeze",
        icon: "fas fa-hourglass-half",
        description: "Scanner freezes during quality calculation",
        solutions: [
            {
                title: "Just Wait",
                icon: "fas fa-coffee",
                description: "Sometimes the calculation just takes longer. Have a coffee and wait 5-10 minutes."
            },
            {
                title: "Restart Device",
                icon: "fas fa-power-off",
                description: "Restart your Scan Device, learn how <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            },
            {
                title: "⚠️ Important Note",
                icon: "fas fa-exclamation-triangle",
                description: "When everything works again, you must repeat the entire scan - previous data is lost."
            }
        ]
    },
    update_service: {
        title: "Update Service",
        icon: "fas fa-download",
        description: "iOS or the app needs an update",
        solutions: [
            {
                title: "Update App",
                icon: "fas fa-mobile-alt",
                description: "Learn how to update the app <a href='https://dikodu.github.io/DAVIbot2.0/App_Update.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            },
            {
                title: "Update iOS",
                icon: "fas fa-cog",
                description: "Learn how to update iOS <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>HERE</a>."
            }
        ]
    },
    lost_mode: {
        title: "Scanner locked / Lost Mode",
        backendTitle: "Lost Mode",
        icon: "fas fa-search-location",
        description: "Device is lost or locked in Lost Mode",
        solutions: [
            {
                title: "iPad Lost",
                icon: "fas fa-search",
                description: "With this message, please contact your client, they must return the device and order a new one."
            },
            {
                title: "iPad Locked",
                icon: "fas fa-lock",
                description: "If the message is different than #1, please start a callback request and we'll take care of it."
            }
        ]
    },
    bestellung: {
        title: "Order",
        icon: "fas fa-shopping-cart",
        description: "Order accessories or devices",
        solutions: [
            {
                title: "What is Needed?",
                icon: "fas fa-list",
                description: "Write down exactly what is needed - charging cable, Scan Device, case etc."
            },
            {
                title: "Contact Client",
                icon: "fas fa-exclamation-triangle",
                description: "Ask the client to place the order."
            }
        ]
    },
    geraete_retoure: {
        title: "Device Return",
        icon: "fas fa-undo",
        description: "Return defective or unneeded device",
        solutions: [
            {
                title: "Contact Client",
                icon: "fas fa-file-alt",
                description: "Contact your client so they can organize the return."
            }
        ]
    }
},
ru: {
    app_glitch: {
        title: "Приложение не запускается",
        backendTitle: "App Glitch",
        icon: "fas fa-wifi",
        description: "закрывается снова, не открывается",
        solutions: [
            {
                title: "Перезагрузить устройство",
                icon: "fas fa-cog",
                description: "Перезагрузите ваше сканирующее устройство, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            },
            {
                title: "Дождаться соединения",
                icon: "fas fa-sync",
                description: "Подождите 5 минут, иногда требуется время для установления нового соединения."
            }
        ]
    },
    app_glitch_einstellungen: {
        title: "Приложение и Настройки не запускаются",
        backendTitle: "App Glitch mit Einstellungen",
        icon: "fas fa-cogs",
        description: "Приложение и приложение настроек закрываются снова или не открываются",
        solutions: [
            {
                title: "Перезагрузка с iOS 18",
                icon: "fas fa-power-off",
                description: "Если ваше сканирующее устройство имеет iOS18 или более высокую версию, перезагрузите его, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot_ab_iOS_18.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>. Если у вас версия ниже iOS18, запросите <a href='#' onclick='scrollToCallback(); return false;' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>обратный звонок</a> ниже."
            },
            {
                title: "Трюк с авиарежимом",
                icon: "fas fa-plane",
                description: "Несколько раз включите и выключите авиарежим. Помогает при проблемах с соединением."
            },
            {
                title: "Полностью разрядить батарею",
                icon: "fas fa-battery-empty",
                description: "Если ничего не помогает: дайте устройству полностью разрядиться, затем зарядите."
            }
        ]
    },
    sma_rueckfragen_projekt: {
        title: "Проект или SMA не отображается",
        backendTitle: "SMA, Projekt Rückfrage",
        icon: "fas fa-project-diagram",
        description: "Проект не отображается - SMA не видна",
        solutions: [
            {
                title: "Перезагрузка + обновление iOS",
                icon: "fas fa-sync-alt",
                description: "Перезагрузите сканирующее устройство (как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>) и проверьте обновления iOS, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            }
        ]
    },
    sma_rueckfragen_qr: {
        title: "QR-код для SMA",
        backendTitle: "QR Code für SMA",
        icon: "fas fa-qrcode",
        description: "отсутствует, не работает, не распознается",
        solutions: [
            {
                title: "QR-код отсутствует",
                icon: "fas fa-broom",
                description: "Попросите заказчика отправить его вам"
            },
            {
                title: "Очистить камеру",
                icon: "fas fa-broom",
                description: "Протрите заднюю линзу камеры. QR-коды требуют чистой линзы."
            },
            {
                title: "Лучше освещение + расстояние",
                icon: "fas fa-lightbulb",
                description: "Обеспечьте больше света и попробуйте разные расстояния до QR-кода."
            },
            {
                title: "Перезагрузить устройство",
                icon: "fas fa-redo",
                description: "Перезагрузите сканирующее устройство, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            }
        ]
    },
    no_signal: {
        title: "Нет сети / нет интернета",
        backendTitle: "Kein Signal",
        icon: "fas fa-signal",
        description: "Проблемы с соединением - нет сети",
        solutions: [
            {
                title: "Сменить местоположение",
                icon: "fas fa-location-arrow",
                description: "Переместитесь на несколько метров или выше. Иногда сигнал лучше в другом месте."
            },
            {
                title: "Импульс зарядки",
                icon: "fas fa-plug",
                description: "Кратковременно подключите сканирующее устройство к зарядному кабелю. Это может восстановить соединение."
            },
            {
                title: "Перезагрузить устройство",
                icon: "fas fa-wifi",
                description: "Перезагрузите сканирующее устройство, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            }
        ]
    },
    scan_photo: {
        title: "Сканирование, фото не работает",
        backendTitle: "Probleme Scan Photo",
        icon: "fas fa-camera",
        description: "Проблемы со сканированием или фотографированием",
        solutions: [
            {
                title: "Очистить камеру",
                icon: "fas fa-broom",
                description: "Протрите заднюю линзу камеры на планшете. Пыль и грязь мешают сканированию."
            },
            {
                title: "Лучше освещение",
                icon: "fas fa-lightbulb",
                description: "Обеспечьте больше света или выйдите из тени. Камере нужно хорошее освещение."
            },
            {
                title: "Перезагрузить устройство",
                icon: "fas fa-redo",
                description: "Перезагрузите сканирующее устройство, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            }
        ]
    },
    quality_freeze: {
        title: "Сканер зависает на \"Расчет качества\"",
        backendTitle: "Berechne Qualität Freeze",
        icon: "fas fa-hourglass-half",
        description: "Сканер зависает при расчете качества",
        solutions: [
            {
                title: "Просто подождать",
                icon: "fas fa-coffee",
                description: "Иногда расчет просто занимает больше времени. Выпейте кофе и подождите 5-10 минут."
            },
            {
                title: "Перезагрузить устройство",
                icon: "fas fa-power-off",
                description: "Перезагрузите сканирующее устройство, как это сделать узнайте <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            },
            {
                title: "⚠️ Важная заметка",
                icon: "fas fa-exclamation-triangle",
                description: "Когда все снова заработает, вы должны полностью повторить сканирование - предыдущие данные потеряны."
            }
        ]
    },
    update_service: {
        title: "Служба обновлений",
        icon: "fas fa-download",
        description: "iOS или приложение нуждается в обновлении",
        solutions: [
            {
                title: "Обновить приложение",
                icon: "fas fa-mobile-alt",
                description: "Как обновить приложение узнайте <a href='https://dikodu.github.io/DAVIbot2.0/App_Update.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            },
            {
                title: "Обновить iOS",
                icon: "fas fa-cog",
                description: "Как обновить iOS узнайте <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>ЗДЕСЬ</a>."
            }
        ]
    },
    lost_mode: {
        title: "Сканер заблокирован / Режим потери",
        backendTitle: "Lost Mode",
        icon: "fas fa-search-location",
        description: "Устройство потеряно или заблокировано в режиме потери",
        solutions: [
            {
                title: "iPad потерян",
                icon: "fas fa-search",
                description: "При этом сообщении обратитесь к заказчику, он должен вернуть устройство и заказать новое."
            },
            {
                title: "iPad заблокирован",
                icon: "fas fa-lock",
                description: "Если сообщение отличается от п.1, запросите обратный звонок, и мы разберемся."
            }
        ]
    },
    bestellung: {
        title: "Заказ",
        icon: "fas fa-shopping-cart",
        description: "Заказать аксессуары или устройства",
        solutions: [
            {
                title: "Что нужно?",
                icon: "fas fa-list",
                description: "Запишите точно что нужно - зарядный кабель, сканирующее устройство, чехол и т.д."
            },
            {
                title: "Связаться с заказчиком",
                icon: "fas fa-exclamation-triangle",
                description: "Попросите заказчика сделать заказ."
            }
        ]
    },
    geraete_retoure: {
        title: "Возврат устройства",
        icon: "fas fa-undo",
        description: "Вернуть дефектное или ненужное устройство",
        solutions: [
            {
                title: "Связаться с заказчиком",
                icon: "fas fa-file-alt",
                description: "Свяжитесь с заказчиком, чтобы он организовал возврат."
            }
        ]
    }
},
tr: {
    app_glitch: {
        title: "Uygulama başlamıyor",
        backendTitle: "App Glitch",
        icon: "fas fa-wifi",
        description: "tekrar kapanıyor, açılmıyor",
        solutions: [
            {
                title: "Cihazı Yeniden Başlat",
                icon: "fas fa-cog",
                description: "Tarama Cihazınızı yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            },
            {
                title: "Bağlantıyı Bekle",
                icon: "fas fa-sync",
                description: "5 dakika bekleyin, bazen yeni bağlantının kurulması zaman alır."
            }
        ]
    },
    app_glitch_einstellungen: {
        title: "Uygulama ve Ayarlar başlamıyor",
        backendTitle: "App Glitch mit Einstellungen",
        icon: "fas fa-cogs",
        description: "Uygulama ve Ayarlar uygulaması tekrar kapanıyor veya açılmıyor",
        solutions: [
            {
                title: "iOS 18'den Yeniden Başlatma",
                icon: "fas fa-power-off",
                description: "Tarama Cihazınızda iOS18 veya daha yüksek sürüm varsa, lütfen yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot_ab_iOS_18.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin. iOS18'den düşük bir sürümünüz varsa, lütfen aşağıdan <a href='#' onclick='scrollToCallback(); return false;' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>geri arama talebi</a> başlatın."
            },
            {
                title: "Uçak Modu Hilesi",
                icon: "fas fa-plane",
                description: "Uçak modunu birkaç kez açıp kapatın. Bağlantı sorunlarında yardımcı olur."
            },
            {
                title: "Bataryayı Tamamen Bitir",
                icon: "fas fa-battery-empty",
                description: "Hiçbir şey işe yaramazsa: cihazı tamamen bitirin, sonra şarj edin."
            }
        ]
    },
    sma_rueckfragen_projekt: {
        title: "Proje veya SMA görüntülenmiyor",
        backendTitle: "SMA, Projekt Rückfrage",
        icon: "fas fa-project-diagram",
        description: "Proje görüntülenmiyor - SMA görünmüyor",
        solutions: [
            {
                title: "Yeniden Başlatma + iOS Güncellemesi",
                icon: "fas fa-sync-alt",
                description: "Tarama Cihazınızı yeniden başlatın (nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin) ve iOS güncellemelerini kontrol edin, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            }
        ]
    },
    sma_rueckfragen_qr: {
        title: "SMA için QR Kod",
        backendTitle: "QR Code für SMA",
        icon: "fas fa-qrcode",
        description: "eksik, çalışmıyor, tanınmıyor",
        solutions: [
            {
                title: "QR Kod Eksik",
                icon: "fas fa-broom",
                description: "Müşterinizden size göndermesini isteyin"
            },
            {
                title: "Kamerayı Temizle",
                icon: "fas fa-broom",
                description: "Arka kamera lensini temizleyin. QR kodlar temiz lens gerektirir."
            },
            {
                title: "Daha İyi Işık + Mesafe",
                icon: "fas fa-lightbulb",
                description: "Daha fazla ışık alın ve QR koda farklı mesafeler deneyin."
            },
            {
                title: "Cihazı Yeniden Başlat",
                icon: "fas fa-redo",
                description: "Tarama Cihazınızı yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            }
        ]
    },
    no_signal: {
        title: "Ağ yok / internet yok",
        backendTitle: "Kein Signal",
        icon: "fas fa-signal",
        description: "Bağlantı sorunları - ağ yok",
        solutions: [
            {
                title: "Konumu Değiştir",
                icon: "fas fa-location-arrow",
                description: "Birkaç metre uzağa veya daha yükseğe gidin. Bazen sinyal başka yerde daha iyi olur."
            },
            {
                title: "Şarj Darbesi",
                icon: "fas fa-plug",
                description: "Tarama Cihazını şarj kablosuna kısaca bağlayın. Bu bağlantıyı yeniden etkinleştirebilir."
            },
            {
                title: "Cihazı Yeniden Başlat",
                icon: "fas fa-wifi",
                description: "Tarama Cihazınızı yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            }
        ]
    },
    scan_photo: {
        title: "Tarama, Foto çalışmıyor",
        backendTitle: "Probleme Scan Photo",
        icon: "fas fa-camera",
        description: "Tarama veya fotoğraf çekme sorunları",
        solutions: [
            {
                title: "Kamerayı Temizle",
                icon: "fas fa-broom",
                description: "Tabletteki arka kamera lensini temizleyin. Toz ve kir taramayı engeller."
            },
            {
                title: "Daha İyi Işık",
                icon: "fas fa-lightbulb",
                description: "Daha fazla ışık alın veya gölgeden çıkın. Kamera iyi ışığa ihtiyaç duyar."
            },
            {
                title: "Cihazı Yeniden Başlat",
                icon: "fas fa-redo",
                description: "Tarama Cihazınızı yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            }
        ]
    },
    quality_freeze: {
        title: "Tarayıcı \"Kalite Hesapla\"da donuyor",
        backendTitle: "Berechne Qualität Freeze",
        icon: "fas fa-hourglass-half",
        description: "Tarayıcı kalite hesaplamasında donuyor",
        solutions: [
            {
                title: "Sadece Bekle",
                icon: "fas fa-coffee",
                description: "Bazen hesaplama sadece daha uzun sürer. Bir kahve için ve 5-10 dakika bekleyin."
            },
            {
                title: "Cihazı Yeniden Başlat",
                icon: "fas fa-power-off",
                description: "Tarama Cihazınızı yeniden başlatın, nasıl yapılacağını <a href='https://dikodu.github.io/DAVIbot2.0/Neustart_-_Reboot.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            },
            {
                title: "⚠️ Önemli Not",
                icon: "fas fa-exclamation-triangle",
                description: "Her şey tekrar çalıştığında, tüm taramayı tekrarlamanız gerekir - önceki veriler kayboldu."
            }
        ]
    },
    update_service: {
        title: "Güncelleme Servisi",
        icon: "fas fa-download",
        description: "iOS veya uygulama güncelleme gerektiriyor",
        solutions: [
            {
                title: "Uygulamayı Güncelle",
                icon: "fas fa-mobile-alt",
                description: "Uygulamayı nasıl güncelleyeceğinizi <a href='https://dikodu.github.io/DAVIbot2.0/App_Update.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            },
            {
                title: "iOS'u Güncelle",
                icon: "fas fa-cog",
                description: "iOS'u nasıl güncelleyeceğinizi <a href='https://dikodu.github.io/DAVIbot2.0/iOS_Update_2025.pdf' target='_blank' style='color: #1DD1A1; font-weight: bold; text-decoration: underline;'>BURADA</a> öğrenin."
            }
        ]
    },
    lost_mode: {
        title: "Tarayıcı kilitli / Kayıp Modu",
        backendTitle: "Lost Mode",
        icon: "fas fa-search-location",
        description: "Cihaz kayboldu veya Kayıp Modunda kilitli",
        solutions: [
            {
                title: "iPad Kayboldu",
                icon: "fas fa-search",
                description: "Bu mesajla müşterinizle iletişime geçin, cihazı iade etmeli ve yeni sipariş vermeli."
            },
            {
                title: "iPad Kilitli",
                icon: "fas fa-lock",
                description: "Mesaj 1. maddeden farklıysa, geri arama talebi başlatın ve biz halledeceğiz."
            }
        ]
    },
    bestellung: {
        title: "Sipariş",
        icon: "fas fa-shopping-cart",
        description: "Aksesuar veya cihaz siparişi",
        solutions: [
            {
                title: "Neye İhtiyaç Var?",
                icon: "fas fa-list",
                description: "Tam olarak neye ihtiyaç olduğunu yazın - şarj kablosu, Tarama Cihazı, çanta vs."
            },
            {
                title: "Müşteriyle İletişime Geç",
                icon: "fas fa-exclamation-triangle",
                description: "Müşteriden sipariş vermesini isteyin."
            }
        ]
    },
    geraete_retoure: {
        title: "Cihaz İadesi",
        icon: "fas fa-undo",
        description: "Arızalı veya gereksiz cihazı iade et",
        solutions: [
            {
                title: "Müşteriyle İletişime Geç",
                icon: "fas fa-file-alt",
                description: "İadeyi organize etmesi için müşterinizle iletişime geçin."
            }
        ]
    }
}
};

// Aktuelle Problem-Daten (wird je nach Sprache gesetzt)
let problemData = {};

    // Aktueller Status
    let currentView = 'language';
    let currentProblem = null;

    // DOM-Elemente
    const languageView = document.getElementById('languageView');
    const welcomeView = document.getElementById('welcomeView');
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');

    // Event Listeners
    document.addEventListener('DOMContentLoaded', function() {
        initializeEventListeners();
        showLanguageSelection();
    });

    // ===== SPRACHAUSWAHL =====
    function selectLanguage(language) {
        currentLanguage = language;
        problemData = problemDataMultiLang[language];
        
        // Analytics: Track language selection
        if (window.daviAnalytics) {
            window.daviAnalytics.trackLanguageSelected(language);
        }
        
        updateLanguageButton();
        updateUI();
        showWelcome();
    }

    function showLanguageSelection() {
        currentView = 'language';
        languageView.classList.add('active');
        welcomeView.classList.remove('active');
        
        // Hide language button on language selection screen
        const languageBtn = document.getElementById('languageBtn');
        if (languageBtn) {
            languageBtn.style.display = 'none';
        }
        
        // Hide search section on language selection
        const searchSection = document.querySelector('.search-section');
        if (searchSection) {
            searchSection.style.display = 'none';
        }
        
        // Update header for language selection
        updateHeaderForLanguageSelection();
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateLanguageButton() {
        const languageBtn = document.getElementById('languageBtn');
        const currentFlag = document.getElementById('currentFlag');
        const currentLangText = document.getElementById('currentLangText');
        
        // Language data for button display
        const langData = {
            de: { flag: '🇩🇪', name: 'Deutsch' },
            en: { flag: '🇬🇧', name: 'English' },
            ru: { flag: '🇷🇺', name: 'Русский' },
            tr: { flag: '🇹🇷', name: 'Türkçe' }
        };
        
        if (languageBtn && currentFlag && currentLangText && langData[currentLanguage]) {
            currentFlag.textContent = langData[currentLanguage].flag;
            currentLangText.textContent = langData[currentLanguage].name;
            languageBtn.style.display = 'flex';
        }
    }

    function updateHeaderForLanguageSelection() {
        const headerTitle = document.querySelector('.header-text h1');
        const headerSubtitle = document.querySelector('.header-text p');
        
        if (headerTitle) {
            headerTitle.innerHTML = 'Hey! Ich bin DAVI 👋';
        }
        if (headerSubtitle) {
            headerSubtitle.innerHTML = 'Wähle deine Sprache • Choose your language • Выберите язык • Dilinizi seçin';
        }
    }

    function updateHeaderForMainView() {
        const t = translations[currentLanguage];
        const headerTitle = document.querySelector('.header-text h1');
        const headerSubtitle = document.querySelector('.header-text p');
        
        if (headerTitle && t) {
            headerTitle.innerHTML = t.headerTitle;
        }
        if (headerSubtitle && t) {
            headerSubtitle.innerHTML = t.headerSubtitle;
        }
    }

    function updateUI() {
        const t = translations[currentLanguage];
        
        // Header aktualisieren
        document.querySelector('.header-text h1').innerHTML = t.headerTitle;
        document.querySelector('.header-text p').innerHTML = t.headerSubtitle;
        
        // Suchfeld aktualisieren
        searchInput.placeholder = t.searchPlaceholder;
        
        // Footer aktualisieren
        const footerParagraphs = document.querySelectorAll('.footer p');
        if (footerParagraphs.length >= 2) {
            footerParagraphs[0].innerHTML = t.footerMain;
            footerParagraphs[1].innerHTML = t.footerSub;
        }
        
        // Problem-Grid aktualisieren
        updateProblemGrid();
    }

    function updateProblemGrid() {
        const problemGrid = document.querySelector('.problem-grid');
        if (!problemGrid) return;
        
        const problemKeys = Object.keys(problemData);
        let gridHTML = '';
        
        problemKeys.forEach(problemKey => {
            const problem = problemData[problemKey];
            gridHTML += `
                <div class="problem-item">
                    <button class="problem-card" onclick="toggleProblem('${problemKey}', this)">
                        <div class="problem-icon">
                            <i class="${problem.icon}"></i>
                        </div>
                        <h3>${problem.title}</h3>
                        <p>${problem.description}</p>
                    </button>
                    <div class="problem-details" id="details_${problemKey}">
                        <div class="problem-description">
                            <h4 style="color: #1DD1A1; margin-bottom: 15px; font-size: 1.3rem;">
                                <i class="${problem.icon}"></i> ${problem.title}
                            </h4>
                            <p style="margin-bottom: 20px; color: #2C3E50; font-size: 1.1rem;">
                                ${problem.description}
                            </p>
                        </div>
                        <div class="confirm-question">
                            <h3>${translations[currentLanguage].confirmQuestion}</h3>
                            <div class="confirm-buttons">
                                <button class="yes-btn" onclick="showSolutionInline('${problemKey}', 'details_${problemKey}')">
                                    ${translations[currentLanguage].yesButton}
                                </button>
                                <button class="no-btn" onclick="handleProblemConfirmedNo('${problemKey}')">
                                    ${translations[currentLanguage].noButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        problemGrid.innerHTML = gridHTML;
    }

    function initializeEventListeners() {
        searchInput.addEventListener('input', handleSearch);
        clearSearch.addEventListener('click', clearSearchFunction);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }

    // ===== VIEW MANAGEMENT =====
    function showWelcome() {
        currentView = 'welcome';
        currentProblem = null;
        languageView.classList.remove('active');
        welcomeView.classList.add('active');
        
        // Analytics: Track navigation to home
        if (window.daviAnalytics) {
            window.daviAnalytics.trackNavigation('home');
        }
        
        // Show language button in main view
        updateLanguageButton();
        
        // Show search section again
        const searchSection = document.querySelector('.search-section');
        if (searchSection) {
            searchSection.style.display = 'block';
        }
        
        // Update header for main view
        updateHeaderForMainView();
        
        clearSearchFunction();
        // Close all open problem details
        closeAllProblems();
        // Reset all problem details to original content
        resetAllProblemDetails();
        // Scroll to the very top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function resetAllProblemDetails() {
        // Reset each problem details to original content
        const problemKeys = Object.keys(problemData);
        const t = translations[currentLanguage];
        
        problemKeys.forEach(problemKey => {
            const detailsElement = document.getElementById(`details_${problemKey}`);
            if (detailsElement) {
                // Get the original problem data
                const problem = problemData[problemKey];
                
                // Reset to original content with confirmation question
                detailsElement.innerHTML = `
                    <div class="problem-description">
                        <h4 style="color: #1DD1A1; margin-bottom: 15px; font-size: 1.3rem;">
                            <i class="${problem.icon}"></i> ${problem.title}
                        </h4>
                        <p style="margin-bottom: 20px; color: #2C3E50; font-size: 1.1rem;">
                            ${problem.description}
                        </p>
                    </div>
                    <div class="confirm-question">
                        <h3>${t.confirmQuestion}</h3>
                        <div class="confirm-buttons">
                            <button class="yes-btn" onclick="showSolutionInline('${problemKey}', 'details_${problemKey}')">
                                ${t.yesButton}
                            </button>
                            <button class="no-btn" onclick="handleProblemConfirmedNo('${problemKey}')">
                                ${t.noButton}
                            </button>
                        </div>
                    </div>
                `;
            }
        });
    }

    // ===== INLINE PROBLEM MANAGEMENT =====
    function toggleProblem(problemKey, cardElement) {
        const detailsElement = document.getElementById(`details_${problemKey}`);
        
        // Check if this problem is already open
        const isCurrentlyOpen = detailsElement.classList.contains('active');
        
        // Close all problems first
        closeAllProblems();
        
        // If it wasn't open before, open it now
        if (!isCurrentlyOpen) {
            cardElement.classList.add('active');
            detailsElement.classList.add('active');
            
            // Analytics: Track problem clicked
            const problemTitle = problemData[problemKey].backendTitle || problemData[problemKey].title;
            if (window.daviAnalytics) {
                window.daviAnalytics.trackProblemClicked(problemKey, problemTitle);
            }
            
            // Scroll to the problem card
            setTimeout(() => {
                cardElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }, 100);
        }
    }

    function closeProblem(problemKey) {
        const cardElement = document.querySelector(`[onclick*="toggleProblem('${problemKey}', this)"]`);
        const detailsElement = document.getElementById(`details_${problemKey}`);
        
        if (cardElement) cardElement.classList.remove('active');
        if (detailsElement) detailsElement.classList.remove('active');
    }

    function closeAllProblems() {
        // Close all problem cards
        document.querySelectorAll('.problem-card.active').forEach(card => {
            card.classList.remove('active');
        });
        
        // Close all problem details
        document.querySelectorAll('.problem-details.active').forEach(details => {
            details.classList.remove('active');
        });
    }

    // Handle "Nein" click
    function handleProblemConfirmedNo(problemKey) {
        const problemTitle = problemData[problemKey].backendTitle || problemData[problemKey].title;
        
        // Analytics: Track "Nein" click
        if (window.daviAnalytics) {
            window.daviAnalytics.trackProblemConfirmedNo(problemKey, problemTitle);
        }
        
        // Then show welcome (go back to start)
        showWelcome();
    }

    function showSolutionInline(problemKey, detailsElementId) {
        const problem = problemData[problemKey];
        const detailsElement = document.getElementById(detailsElementId);
        const t = translations[currentLanguage];
        const problemTitle = problem.backendTitle || problem.title;
        
        // Analytics: Track "Ja" click (problem confirmed yes)
        if (window.daviAnalytics) {
            window.daviAnalytics.trackProblemConfirmedYes(problemKey, problemTitle);
            // Also track that solution is viewed
            window.daviAnalytics.trackSolutionViewed(problemKey, problemTitle);
        }
        
        let html = `
            <div class="solution-header" style="margin-bottom: 30px;">
                <h2 style="color: white; font-size: 1.8rem; margin-bottom: 10px;">${t.solutionHeader}</h2>
            </div>
            <div class="solution-list">
        `;
        
        problem.solutions.forEach((solution, index) => {
            html += `
                <div class="solution-card" style="margin-bottom: 20px;">
                    <h3 style="color: #1DD1A1; font-size: 1.3rem; margin-bottom: 15px; display: flex; align-items: center;">
                        <i class="${solution.icon}" style="margin-right: 12px;"></i> ${index + 1}. ${solution.title}
                    </h3>
                    <p style="color: #2C3E50; font-size: 1.1rem; line-height: 1.6;">${solution.description}</p>
                </div>
            `;
        });
        
        html += `
            </div>
            <div style="text-align: center; margin-top: 30px; padding: 25px; background: #f8f9fa; border-radius: 15px;">
                <h3 style="color: #1DD1A1; margin-bottom: 15px;">${t.hasWorked}</h3>
                <p style="color: #6c757d; margin-bottom: 20px;">${t.hasWorkedSub}</p>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="back-btn" onclick="showWelcome()" style="background: #1DD1A1;">
                        <i class="fas fa-home"></i> ${t.homeButton}
                    </button>
                    <button class="callback-btn" onclick="showCallbackFormInline('${detailsElementId}', '${problemKey}')">
                        <i class="fas fa-phone"></i> ${t.callbackButton}
                    </button>
                </div>
            </div>

            <!-- Rückruf Formular (versteckt) -->
            <div id="callbackForm_${problemKey}" class="callback-form" style="margin-top: 20px;">
                <h4>${t.formTitle}</h4>
                <form onsubmit="return submitCallbackFormInline(event, '${problemKey}')">
                    <div class="form-group">
                        <label for="userName_${problemKey}">${t.formName}</label>
                        <input type="text" id="userName_${problemKey}" class="form-input" placeholder="${t.formNamePlaceholder}" required>
                    </div>
                    <div class="form-group">
                        <label for="userPhone_${problemKey}">${t.formPhone}</label>
                        <input type="tel" id="userPhone_${problemKey}" class="form-input" placeholder="${t.formPhonePlaceholder}" required>
                    </div>
                    <div class="form-group">
                        <label for="userSerial_${problemKey}">${t.formSerial}</label>
                        <input type="text" id="userSerial_${problemKey}" class="form-input" placeholder="${t.formSerialPlaceholder}" required>
                    </div>
                    <div class="form-group">
                        <label for="userProblem_${problemKey}">${t.formProblem}</label>
                        <textarea id="userProblem_${problemKey}" class="form-input" placeholder="${t.formProblemPlaceholder}" required></textarea>
                    </div>
                    
                    <!-- Klare Abgrenzung für Samstags-Bereich -->
                    <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border: 3px solid #ffc107; border-radius: 12px; box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2); -webkit-box-sizing: border-box; box-sizing: border-box;">
                        <div style="display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: start; -ms-flex-align: start; align-items: flex-start; gap: 10px; margin-bottom: 15px; -ms-flex-wrap: wrap; flex-wrap: wrap;">
                            <i class="fas fa-calendar-day" style="font-size: 24px; color: #dc3545; -ms-flex-negative: 0; flex-shrink: 0; margin-top: 2px;"></i>
                            <h4 style="margin: 0; color: #856404; font-size: 16px; font-weight: bold; line-height: 1.4; word-break: break-word; -webkit-box-flex: 1; -ms-flex: 1; flex: 1;">⚠️ ${t.saturdayOnly} <span style="color: #dc3545; font-weight: bold;">${t.saturdayWord}</span> ${t.saturdayOnlyEnd}</h4>
                        </div>
                        <div style="margin: 0;">
                            <label style="color: #856404; font-weight: 600; font-size: 15px; margin-bottom: 12px; display: block; line-height: 1.4;">${t.formUrgency}</label>
                            <div style="display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; gap: 12px; margin-top: 10px;">
                                <label class="saturday-radio-label">
                                    <input type="radio" name="urgency_${problemKey}" value="monday">
                                    <span class="saturday-radio-text">${t.formUrgencyMonday}</span>
                                </label>
                                <label class="saturday-radio-label">
                                    <input type="radio" name="urgency_${problemKey}" value="now">
                                    <span class="saturday-radio-text">${t.formUrgencyNow}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="submit-btn" id="submitBtn_${problemKey}">
                        <i class="fas fa-paper-plane"></i> ${t.submitButton}
                    </button>
                </form>
            </div>
        `;
        
        detailsElement.innerHTML = html;
        
        // Add event listeners for radio buttons to update styling
        setTimeout(() => {
            const radioButtons = document.querySelectorAll(`input[name="urgency_${problemKey}"]`);
            radioButtons.forEach(radio => {
                radio.addEventListener('change', function() {
                    // Remove highlight from all labels
                    radioButtons.forEach(r => {
                        const label = r.closest('label');
                        label.style.borderColor = '#dee2e6';
                        label.style.backgroundColor = 'white';
                    });
                    // Add highlight to selected label
                    if (this.checked) {
                        const label = this.closest('label');
                        label.style.borderColor = '#1DD1A1';
                        label.style.backgroundColor = 'rgba(29, 209, 161, 0.05)';
                    }
                });
            });
        }, 50);
        
        // Scroll to solutions
        setTimeout(() => {
            detailsElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest'
            });
        }, 100);
    }

    function showCallbackFormInline(detailsElementId, problemKey) {
        const form = document.getElementById(`callbackForm_${problemKey}`);
        const problemTitle = problemData[problemKey].backendTitle || problemData[problemKey].title;
        
        // Analytics: Track callback button clicked
        if (window.daviAnalytics) {
            window.daviAnalytics.trackCallbackRequested(problemKey, problemTitle);
        }
        
        if (form) {
            form.classList.add('active');
            form.style.display = 'block';
            // Scroll to form
            setTimeout(() => {
                form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    }

    function submitCallbackFormInline(event, problemKey) {
        event.preventDefault();
        
        const userName = document.getElementById(`userName_${problemKey}`).value.trim();
        const userPhone = document.getElementById(`userPhone_${problemKey}`).value.trim();
        const userSerial = document.getElementById(`userSerial_${problemKey}`).value.trim();
        const userProblem = document.getElementById(`userProblem_${problemKey}`).value.trim();
        const urgencyRadio = document.querySelector(`input[name="urgency_${problemKey}"]:checked`);
        const submitBtn = document.getElementById(`submitBtn_${problemKey}`);
        const t = translations[currentLanguage];

        if (!userName || !userPhone || !userSerial || !userProblem) {
            alert(t.fillAllFields);
            return false;
        }
        
        // Alle E-Mails immer auf Deutsch, unabhängig von der gewählten Sprache
        // Wenn keine Urgency ausgewählt wurde (nicht Samstag), Standard = nächster Werktag
        let urgencyTextDE = 'nächster Werktag (Montag bis Freitag)';
        let subjectTextDE = 'DAVI Rückruf nächster Werktag';
        let urgencyValue = 'monday'; // default
        
        if (urgencyRadio) {
            urgencyValue = urgencyRadio.value;
            urgencyTextDE = urgencyRadio.value === 'monday' ? 'nächster Werktag (Montag bis Freitag)' : 'heute am Samstag (Bereitschaftsdienst)';
            subjectTextDE = urgencyRadio.value === 'monday' ? 'DAVI Rückruf nächster Werktag' : 'DAVI Rückruf Samstag Bereitschaft';
        }

        // Button deaktivieren während des Sendens
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${t.sending}`;

        // Web3Forms verwenden mit deinem echten Access Key
        const formData = new FormData();
        formData.append('access_key', '6af2f4a8-bf8e-4f07-b4df-128188635ea2');
        formData.append('name', userName);
        formData.append('phone', userPhone);
        const problemTitle = problemData[problemKey].backendTitle || problemData[problemKey].title;
        formData.append('message', `DAVI Rückruf anfordern (Mo bis Fr 7-17 und Sa 8-14 Uhr)

👤 Name: ${userName}
📞 Telefonnummer: ${userPhone}
🔢 Seriennummer (SN): ${userSerial}
🏗️ Problem: ${userProblem}
⏰ Dringlichkeit: ${urgencyTextDE}
📅 ${new Date().toLocaleString('de-DE')}
🌐 Kundensprache: ${currentLanguage.toUpperCase()}
🤖 Quelle: DAVI Bot - Problem: ${problemTitle}`);
        formData.append('subject', `${subjectTextDE} - ${currentLanguage.toUpperCase()}`);
        formData.append('from_name', 'DAVI Support Bot');
        formData.append('to', 'diana.koehnemann@deepup.ai');

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async response => {
            if (response.ok) {
                // Analytics: Track successful callback submission
                if (window.daviAnalytics) {
                    window.daviAnalytics.trackCallbackSubmitted(problemKey, problemTitle, urgencyValue);
                }
                
                // Show success message in place with dynamic message based on urgency
                const detailsElement = document.getElementById(`details_${problemKey}`);
                let thankYouMessage = t.thankYouSubMonday; // Standard: Montag
                if (urgencyRadio && urgencyRadio.value === 'now') {
                    thankYouMessage = t.thankYouSubNow;
                }
                detailsElement.innerHTML = `
                    <div class="thank-you-screen" style="border-left: none; box-shadow: none; padding: 30px; text-align: center;">
                        <h2 style="color: #1DD1A1; font-size: 2rem; margin-bottom: 20px;">${t.thankYou}</h2>
                        <p style="color: #2C3E50; font-size: 1.2rem; margin-bottom: 30px;">${thankYouMessage}</p>
                        <button class="back-btn" onclick="showWelcome()" style="background: #1DD1A1;">
                            <i class="fas fa-home"></i> ${t.homeButton}
                        </button>
                    </div>
                `;
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert(t.sendError);
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${t.submitButton}`;
        });

        return false;
    }

    // ===== SUCHFUNKTION (vereinfacht) =====
    function handleSearch() {
        // Suchfunktion deaktiviert für einfacheres Interface
    }

    function clearSearchFunction() {
        searchInput.value = '';
        clearSearch.style.display = 'none';
    }

    // ===== LEGAL MODALS =====
    
    // Impressum anzeigen
    function showImprint() {
        document.getElementById('imprintModal').classList.add('active');
        document.body.style.overflow = 'hidden'; // Scrolling deaktivieren
        
        // Analytics: Track impressum click
        if (window.daviAnalytics) {
            window.daviAnalytics.trackNavigation('impressum');
        }
    }
    window.showImprint = showImprint;
    
    // Impressum schließen
    function closeImprint() {
        document.getElementById('imprintModal').classList.remove('active');
        document.body.style.overflow = 'auto'; // Scrolling wieder aktivieren
    }
    window.closeImprint = closeImprint;
    
    // Datenschutz anzeigen
    function showPrivacy() {
        document.getElementById('privacyModal').classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Analytics: Track datenschutz click
        if (window.daviAnalytics) {
            window.daviAnalytics.trackNavigation('datenschutz');
        }
    }
    window.showPrivacy = showPrivacy;
    
    // Datenschutz schließen
    function closePrivacy() {
        document.getElementById('privacyModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    window.closePrivacy = closePrivacy;
    
    // Modal schließen bei Klick außerhalb
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('legal-modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Funktion zum Scrollen zur Rückruf-Sektion
    function scrollToCallback() {
        // Finde die aktive Problem-Details und zeige das Rückruf-Formular
        const activeDetails = document.querySelector('.problem-details.active');
        if (activeDetails) {
            const problemKey = activeDetails.id.replace('details_', '');
            showCallbackFormInline(activeDetails.id, problemKey);
        }
    }
    window.scrollToCallback = scrollToCallback;

    // ===== GLOBALE FUNKTIONEN =====
    window.selectLanguage = selectLanguage;
    window.showLanguageSelection = showLanguageSelection;
    window.showWelcome = showWelcome;
    window.toggleProblem = toggleProblem;
    window.closeProblem = closeProblem;
    window.closeAllProblems = closeAllProblems;
    window.showSolutionInline = showSolutionInline;
    window.showCallbackFormInline = showCallbackFormInline;
    window.submitCallbackFormInline = submitCallbackFormInline;
    window.handleProblemConfirmedNo = handleProblemConfirmedNo;
