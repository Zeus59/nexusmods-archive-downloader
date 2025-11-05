# 🌃 NexusMods Archive Downloader V2

Ein **ViolentMonkey/Tampermonkey UserScript** das Download-Buttons für archivierte Files auf NexusMods hinzufügt.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-NexusMods-orange.svg)

## 🎯 Features

- ✅ **Automatische Download-Buttons** für archivierte Files
- ✅ **Mod Manager Download** - direkt mit `&nmm=1` Parameter
- ✅ **Manual Download** - normaler Download-Prozess
- ✅ **Authentic Design** - sieht aus wie originale NexusMods-Buttons
- ✅ **URL Preview** - hover über Buttons zeigt korrekte URLs
- ✅ **Same-Tab Navigation** - keine Pop-ups oder neue Tabs
- ✅ **Performance optimiert** - läuft nur auf archived files Seiten

## 🚀 Installation

### Schritt 1: UserScript Manager installieren
- **ViolentMonkey** (empfohlen): [Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag) | [Firefox](https://addons.mozilla.org/de/firefox/addon/violentmonkey/)
- **Tampermonkey**: [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) | [Firefox](https://addons.mozilla.org/de/firefox/addon/tampermonkey/)

### Schritt 2: Script installieren
**[📥 Script installieren - Klick hier!](https://raw.githubusercontent.com/Zeus59/nexusmods-archive-downloader/master/nexusmods-archive-downloader-v2.user.js)**

*Der Link führt direkt zur `.user.js` Datei. ViolentMonkey/Tampermonkey erkennt automatisch das UserScript und bietet die Installation an.*

### Schritt 3: Fertig!
Besuche eine NexusMods Seite mit archivierten Files (z.B. `?tab=files&category=archived`) und die Download-Buttons erscheinen automatisch.

## 📱 Verwendung

1. **Gehe zu einer Mod-Seite** auf NexusMods
2. **Klicke auf "Files"** Tab
3. **Wähle "Archived files"** (oder benutze direkt einen Link mit `category=archived`)
4. **Download-Buttons erscheinen** automatisch bei jedem archivierten File
5. **Klicke auf einen Button** für direkten Download

### Beispiel URLs wo es funktioniert:
```
https://www.nexusmods.com/cyberpunk2077/mods/3315?tab=files&category=archived
https://www.nexusmods.com/skyrimspecialedition/mods/12345?tab=files&category=archived
```

## 🎮 Unterstützte Spiele

Das Script funktioniert auf **allen NexusMods-Spielen**, einschließlich:
- Cyberpunk 2077
- Skyrim Special Edition
- Fallout 4
- The Witcher 3
- Baldur's Gate 3
- Starfield
- ... und alle anderen auf NexusMods verfügbaren Spiele

## ⚡ Technische Details

- **Target**: Nur Seiten mit `category=archived` Parameter
- **Performance**: Läuft einmal beim Seitenaufruf + Fallback nach 2 Sekunden
- **DOM Integration**: Nutzt originale NexusMods CSS-Klassen und Icon-System
- **File-ID Erkennung**: Extrahiert `data-id` aus Accordion-Headern
- **URL Construction**: Baut korrekte Download-URLs mit Game-Name, Mod-ID und File-ID

## 🔧 Entwicklung

### Lokale Installation für Entwickler
```bash
git clone https://github.com/Zeus59/nexusmods-archive-downloader.git
cd nexusmods-archive-downloader
```

### File-Struktur
```
nexusmods-archive-downloader/
├── nexusmods-archive-downloader-v2.user.js  # Haupt UserScript
├── README.md                                 # Diese Datei
├── LICENSE                                   # MIT License
└── .gitignore                               # Git ignore Regeln
```

## 📝 Changelog

### Version 2.0.0
- ✅ Komplette Neuentwicklung basierend auf Accordion-Struktur
- ✅ Authentic NexusMods Button-Design
- ✅ URL-Match Filter für bessere Performance
- ✅ Zentrales Logging-System
- ✅ Entfernung aller unnötigen Features (Notifications, Status-Anzeigen)
- ✅ Same-Tab Navigation
- ✅ Korrekte URL-Previews beim Hover

## 🤝 Contributing

Contributions sind willkommen! 

1. **Fork** das Repository
2. **Erstelle** einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. **Committe** deine Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Öffne** eine Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🌃 Credits

Entwickelt von **V (Night City Netrunner)** aka **Zeus59**

*"Sometimes you gotta jack in to get the job done, choom!"* 🦾

---

**⚠️ Disclaimer**: Dieses Script ist ein inoffizielles Tool und nicht von NexusMods endorsed. Nutze es auf eigene Verantwortung.

**🔗 NexusMods**: https://www.nexusmods.com/