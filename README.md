# 🤖 DAVI - DeepUp Support Bot mit integriertem Analytics

Ein multilingualer Support-Bot für DeepUp mit eigenem, einfachem Analytics-System.

## 🎯 Projekt-Übersicht

DAVI ist ein benutzerfreundlicher Support-Bot, der Bauarbeitern bei technischen Problemen mit Scan Devices hilft. Der Bot unterstützt 4 Sprachen (Deutsch, Englisch, Russisch, Türkisch) und verfügt über ein vollständig integriertes Analytics-System zur Auswertung aller Nutzerinteraktionen.

## ✨ Hauptfunktionen

### Bot-Funktionen
- **Mehrsprachigkeit**: Deutsch, English, Русский, Türkçe
- **11 Problem-Kategorien** mit Schritt-für-Schritt-Lösungen
- **Rückruf-Anforderung** mit Dringlichkeitsstufen (Samstag vs. Werktag)
- **PDF-Anleitungen** für detaillierte Problemlösungen
- **Responsive Design** für mobile und Desktop-Nutzung

### Analytics-Funktionen
- **Echtzeit-Tracking** aller Bot-Interaktionen
- **Übersichtliches Dashboard** mit Statistiken und Charts
- **CSV-Export** für weitere Analysen
- **Zeitfilter**: Heute, Letzte 7 Tage, Letzter Monat, Alle Zeit
- **Sprachfilter**: Nach Nutzersprache filtern

## 📊 Was wird getrackt?

Das Analytics-System erfasst automatisch:

1. **Sprachauswahl** - Welche Sprache wählen die Nutzer?
2. **Problem-Klicks** - Welche Probleme werden am häufigsten angeklickt?
3. **Bestätigungen** - Wird "Ja" oder "Nein" geklickt bei "Ist das dein Problem?"
4. **Lösungen angezeigt** - Wie oft werden Lösungen betrachtet?
5. **PDF-Downloads** - Welche Anleitungen werden heruntergeladen?
6. **Rückruf-Anfragen** - Wie viele Rückrufe werden angefordert?
7. **Dringlichkeit** - Samstag-Notfall vs. nächster Werktag
8. **Navigation** - Klicks auf Startseite, Impressum, Datenschutz
9. **Seite verlassen** - Wann verlassen Nutzer die Seite?
10. **Timestamps** - Genaue Zeitpunkte aller Events

## 🗂️ Dateistruktur

```
/
├── index.html              # Haupt-Bot-Seite
├── analytics.html          # Analytics Dashboard
├── js/
│   ├── analytics.js        # Analytics Tracking-System
│   └── main.js             # Bot-Hauptlogik
└── README.md               # Diese Datei
```

## 🚀 Verwendung

### Bot-Seite
```
https://[deine-domain]/index.html
```

Die Startseite für alle Nutzer. Hier wählen sie ihre Sprache und interagieren mit dem Support-Bot.

### Analytics Dashboard
```
https://[deine-domain]/analytics.html
```

Das Dashboard zur Auswertung aller Bot-Interaktionen. Zeigt:
- **Statistik-Karten**: Gesamt-Sessions, Problem-Klicks, Erfolgsrate, Rückrufe
- **Diagramme**: 
  - Meist-geklickte Probleme (Balkendiagramm)
  - Sprachverteilung (Tortendiagramm)
  - Events über Zeit (Liniendiagramm)
- **Event-Tabelle**: Letzte 50 Events mit allen Details
- **Export-Funktion**: CSV-Download für Excel/Sheets

## 📈 Analytics-Dashboard Funktionen

### Filter

1. **Zeitfilter**
   - Alle Zeit
   - Heute
   - Letzte 7 Tage
   - Letzter Monat

2. **Sprachfilter**
   - Alle Sprachen
   - Deutsch
   - English
   - Русский
   - Türkçe

### Statistiken

- **Gesamt-Sessions**: Anzahl einzigartiger Besucher
- **Problem-Klicks**: Wie oft wurden Probleme angeklickt
- **Erfolgsrate**: Prozentsatz "Ja"-Klicks bei Bestätigung
- **Rückrufe**: Anzahl angeforderter Rückrufe

### Diagramme

1. **Meist-geklickte Probleme**
   - Top 10 Probleme
   - Anzahl der Klicks pro Problem

2. **Sprachverteilung**
   - Tortendiagramm
   - Zeigt Verteilung der Nutzersprachen

3. **Events über Zeit**
   - Liniendiagramm
   - Events pro Tag

### CSV-Export

Exportiert alle gefilterten Daten mit folgenden Spalten:
- Zeitstempel
- Event-Typ
- Sprache
- Problem Key
- Problem Titel
- PDF Name
- Dringlichkeit
- Navigation Ziel
- Session ID

## 🔧 Technische Details

### Datenbank-Schema

Tabelle: `davi_analytics`

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| id | text | Eindeutige Event-ID |
| event_type | text | Art des Events |
| timestamp | datetime | Zeitstempel |
| language | text | Nutzersprache (de, en, ru, tr) |
| problem_key | text | Problem-Identifier |
| problem_title | text | Problem-Titel |
| pdf_name | text | Name der geklickten PDF |
| urgency | text | Dringlichkeit (monday, now) |
| navigation_target | text | Navigationsziel (home, impressum, datenschutz) |
| session_id | text | Session-Identifier |
| user_agent | text | Browser User-Agent |

### Event-Typen

1. `language_selected` - Sprache wurde gewählt
2. `problem_clicked` - Problem wurde angeklickt
3. `problem_confirmed_yes` - "Ja, das ist mein Problem" geklickt
4. `problem_confirmed_no` - "Nein" geklickt
5. `solution_viewed` - Lösungen werden angezeigt
6. `pdf_clicked` - PDF-Anleitung wurde geklickt
7. `callback_requested` - Rückruf-Button geklickt
8. `callback_submitted` - Rückruf-Formular abgeschickt
9. `navigation` - Navigation zu Startseite/Impressum/Datenschutz
10. `page_exit` - Nutzer verlässt die Seite

### API-Endpunkte

Das System nutzt die RESTful Table API:

```javascript
// Daten abrufen
GET /tables/davi_analytics?limit=1000&sort=-timestamp

// Neues Event erfassen
POST /tables/davi_analytics
{
  "event_type": "problem_clicked",
  "timestamp": "2025-01-27T10:30:00Z",
  "language": "de",
  "problem_key": "app_glitch",
  "problem_title": "App Glitch",
  ...
}
```

## 📝 Auswertungs-Beispiele

### Häufigste Fragen identifizieren
1. Dashboard öffnen
2. "Meist-geklickte Probleme" Diagramm ansehen
3. Top 3 Probleme notieren

### Erfolgsrate messen
1. "Erfolgsrate" Statistik prüfen
2. Hohe Rate (>70%) = Nutzer finden ihr Problem
3. Niedrige Rate (<50%) = Probleme passen nicht zu Nutzeranfragen

### Samstag-Notfälle analysieren
1. CSV exportieren
2. Nach `urgency = "now"` filtern
3. Probleme mit Samstag-Dringlichkeit identifizieren

### Sprachpräferenzen
1. "Sprachverteilung" Diagramm ansehen
2. Zeigt, welche Sprachen am meisten genutzt werden
3. Hilfreich für zukünftige Content-Entscheidungen

## 🎨 Design

- **Farben**: 
  - Türkis `#1DD1A1` (DAVI Primary)
  - Dunkelgrau `#2C3E50` (Text)
- **Schriftart**: Inter (Google Fonts)
- **Icons**: Font Awesome 6
- **Charts**: Chart.js

## 🔐 Datenschutz

- **Keine personenbezogenen Daten** im Analytics
- **Keine Namen, Telefonnummern oder Seriennummern** getrackt
- **Session IDs** sind anonyme Identifikatoren
- **IP-Adressen** werden nicht gespeichert
- **User-Agent** nur für technische Statistiken

## 🆕 Nächste Entwicklungsschritte

### Empfohlene Features (Optional):

1. **Erweiterte Filter**
   - Nach Problem-Typ filtern
   - Nach Event-Typ filtern

2. **Mehr Statistiken**
   - Durchschnittliche Session-Dauer
   - Conversion-Funnel (Sprache → Problem → Lösung → Erfolg)
   - Abbruch-Punkte identifizieren

3. **Benachrichtigungen**
   - E-Mail-Benachrichtigung bei neuen Rückruf-Anfragen
   - Alert bei ungewöhnlich vielen Abbrüchen

4. **A/B Testing**
   - Verschiedene Formulierungen testen
   - Verschiedene Lösungsreihenfolgen testen

5. **Heatmap**
   - Wo klicken Nutzer am häufigsten?
   - Scroll-Tiefe analysieren

## 📞 Support & Kontakt

**DeepUp GmbH**  
Portlandweg 1  
53227 Bonn  
Deutschland

E-Mail: meet@deepup.de  
Telefon: +49 170 4874736

## 📄 Lizenz

© 2025 DeepUp GmbH. Alle Rechte vorbehalten.

---

**Letzte Aktualisierung**: 27.01.2025  
**Version**: 2.0 mit integriertem Analytics
