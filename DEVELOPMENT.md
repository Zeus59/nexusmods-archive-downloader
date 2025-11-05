# 🌃 NexusMods Archive Downloader - Development Guide

## 🎯 Projekt-Setup für GitHub

### Repository erstellen
```bash
# Lokales Repository initialisieren
cd C:\Users\dev\NexusMods
git init

# Remote Repository hinzufügen (nach Erstellung auf GitHub)
git remote add origin https://github.com/Zeus59/nexusmods-archive-downloader.git

# Initial commit
git add .
git commit -m "🚀 Initial release: NexusMods Archive Downloader V2

✅ Automatic download buttons for archived files
✅ Authentic NexusMods design integration  
✅ Mod manager & manual download support
✅ Performance optimized with @match filtering
✅ Clean logging system"

# Push zum GitHub
git push -u origin main
```

### GitHub Repository Settings

**Repository Name**: `nexusmods-archive-downloader`
**Description**: `🌃 UserScript that adds download buttons for archived files on NexusMods`
**Tags**: `userscript`, `tampermonkey`, `violentmonkey`, `nexusmods`, `modding`, `javascript`

### Release erstellen

Nach dem Push kannst du ein GitHub Release erstellen:

1. Gehe zu **Releases** → **Create a new release**
2. **Tag version**: `v2.0.0`
3. **Release title**: `🚀 Archive Downloader V2.0.0 - Initial Release`
4. **Description**:
```markdown
## 🎯 Initial Release

Das erste stable Release des NexusMods Archive Downloaders!

### ✨ Features
- 🎮 **Automatic Download Buttons** für archivierte Files
- 🦾 **Mod Manager Support** mit &nmm=1 Parameter
- 📱 **Manual Download** für normalen Prozess  
- 🎨 **Authentic Design** - sieht aus wie NexusMods Original
- ⚡ **Performance optimiert** - läuft nur auf archived files
- 🌃 **Clean Code** - minimal und effizient

### 📥 Installation
**[Direkt installieren](https://raw.githubusercontent.com/Zeus59/nexusmods-archive-downloader/main/nexusmods-archive-downloader-v2.user.js)**

### 🎮 Kompatibilität
- Alle NexusMods Spiele (Cyberpunk 2077, Skyrim, Fallout 4, etc.)
- ViolentMonkey & Tampermonkey
- Chrome, Firefox, Edge
```

## 🔧 Development Workflow

### Neue Features entwickeln
```bash
# Feature branch erstellen
git checkout -b feature/neue-funktion

# Changes committen
git add .
git commit -m "✨ Add neue Funktion"

# Push feature branch
git push origin feature/neue-funktion

# Pull Request auf GitHub erstellen
```

### Version Updates
```bash
# Version im UserScript Header erhöhen
# Changelog in README.md aktualisieren
# Commit & Push

git add .
git commit -m "🔖 Bump version to 2.1.0"
git tag v2.1.0
git push && git push --tags
```

## 📊 UserScript Auto-Updates

Das Script ist bereits konfiguriert für automatische Updates:
- **@updateURL**: Checkt auf neue Versionen
- **@downloadURL**: Lädt Updates herunter
- User bekommen automatisch Benachrichtigung bei Updates

## 🌃 Next Steps

1. **GitHub Repository erstellen** mit Name `nexusmods-archive-downloader`
2. **Files pushen** wie oben beschrieben
3. **Release v2.0.0 erstellen**
4. **README.md Link testen** - Installation sollte funktionieren
5. **Community sharen** - r/nexusmods, Discord, etc.

---

**Ready to jack into GitHub, choom!** 🦾⚡