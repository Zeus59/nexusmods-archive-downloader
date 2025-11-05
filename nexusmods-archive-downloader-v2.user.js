// ==UserScript==
// @name         NexusMods Archive Downloader V2
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  Fügt Download-Buttons für Archive-Files auf NexusMods hinzu (Clean Version)
// @author       Zeus59
// @match        https://www.nexusmods.com/*/*?*category=archived*
// @grant        none
// @updateURL    https://github.com/Zeus59/nexusmods-archive-downloader/raw/refs/heads/main/nexusmods-archive-downloader-v2.user.js
// @downloadURL  https://github.com/Zeus59/nexusmods-archive-downloader/raw/refs/heads/main/nexusmods-archive-downloader-v2.user.js
// ==/UserScript==

(function() {
    'use strict';
    

    
    // Warten bis die Seite vollständig geladen ist
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initArchiveDownloader);
    } else {
        initArchiveDownloader();
    }
    
    function initArchiveDownloader() {
        // Initial check - Archive Files werden nur einmal beim Seitenaufruf geladen
        const initialCount = addArchiveButtons();
        
        // Fallback: Nach 2 Sekunden nochmal prüfen falls DOM noch nicht ready war
        setTimeout(() => {
            const fallbackCount = addArchiveButtons();
            const totalButtons = initialCount + fallbackCount;
            
            // Zentraler Status-Log
            if (totalButtons > 0) {
                console.log(`🎯 Archive Downloader V2 ready! ${totalButtons} button pairs added to archived files.`);
            } else {
                console.log('🌃 Archive Downloader V2 ready! No archived files found on this page.');
            }
        }, 2000);
    }
    
    function addArchiveButtons() {
        // Finde die archived files accordion container
        const archivedFilesContainer = document.querySelector('#file-container-archived-files');
        if (!archivedFilesContainer) {
            return 0;
        }
        
        // Suche nach allen accordion-headern mit data-id
        const accordionHeaders = archivedFilesContainer.querySelectorAll('dt[id^="file-expander-header-"][data-id]');
        let buttonsAdded = 0;
        
        accordionHeaders.forEach((header) => {
            const dataId = header.getAttribute('data-id');
            
            if (dataId && !hasArchiveButtonForDataId(dataId)) {
                addArchiveButtonToAccordion(header, dataId);
                buttonsAdded++;
            }
        });
        
        return buttonsAdded;
    }
    

    
    function hasArchiveButtonForDataId(dataId) {
        return document.querySelector(`[data-archive-file-id="${dataId}"]`) !== null;
    }
    
    function addArchiveButtonToAccordion(header, dataId) {
        // Finde die zugehörige <dd> mit derselben data-id
        const accordionContent = document.querySelector(`dd[data-id="${dataId}"]`);
        if (!accordionContent) {
            return;
        }
        
        // Finde die accordion-downloads Liste
        const accordionDownloadsList = accordionContent.querySelector('.accordion-downloads.clearfix');
        if (!accordionDownloadsList) {
            return;
        }
        
        // Erstelle beide Download-Buttons (Mod Manager + Manual)
        const modManagerButton = createModManagerDownloadButton(dataId);
        const spacerLi = document.createElement('li'); // Spacer wie in original
        const manualButton = createManualDownloadButton(dataId);
        
        // Füge Buttons in die vorhandene accordion-downloads Liste ein
        accordionDownloadsList.appendChild(modManagerButton);
        accordionDownloadsList.appendChild(spacerLi);
        accordionDownloadsList.appendChild(manualButton);
    }
    
    function createOriginalStyleDownloadButton(fileId) {
        // Erstelle <li> Element EXAKT wie NexusMods original
        const li = document.createElement('li');
        li.setAttribute('data-archive-file-id', fileId);
        
        // Erstelle den Link mit exakter NexusMods Struktur
        const link = document.createElement('a');
        link.className = 'btn inline-flex popup-btn-ajax archive-direct-download';
        link.href = '#';
        link.setAttribute('data-file-id', fileId);
        
        // Icon Container
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.setAttribute('class', 'icon icon-manual');
        
        const iconUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        iconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/assets/images/icons/icons.svg#icon-manual');
        iconSvg.appendChild(iconUse);
        
        // Text Span
        const textSpan = document.createElement('span');
        textSpan.className = 'flex-label';
        textSpan.textContent = 'Archive Direct Download';
        
        // Zusammenbauen
        link.appendChild(iconSvg);
        link.appendChild(textSpan);
        li.appendChild(link);
        
        // Click-Handler hinzufügen
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleArchiveDownload(fileId, this);
        });
        
        return li;
    }
    
    function createModManagerDownloadButton(fileId) {
        // Erstelle <li> Element EXAKT wie NexusMods original
        const li = document.createElement('li');
        li.setAttribute('data-archive-file-id', fileId);
        li.setAttribute('data-download-type', 'mod-manager');
        
        // Extrahiere Game-Name und Mod-ID für korrekte href URL
        const gameName = getGameNameFromUrl(window.location.href);
        const modId = extractModIdFromUrl(window.location.href);
        const downloadUrl = `https://www.nexusmods.com/${gameName}/mods/${modId}?tab=files&file_id=${fileId}&nmm=1`;
        
        // Erstelle den Link mit exakter NexusMods Struktur
        const link = document.createElement('a');
        link.className = 'btn inline-flex popup-btn-ajax archive-mod-manager-download';
        link.href = downloadUrl;
        link.setAttribute('data-file-id', fileId);
        
        // Icon Container (NMM Icon)
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.setAttribute('class', 'icon icon-nmm');
        
        const iconUse = document.createElementNS('http://www.w3.org/1999/xlink', 'use');
        iconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/assets/images/icons/icons.svg#icon-nmm');
        iconSvg.appendChild(iconUse);
        
        // Text Span
        const textSpan = document.createElement('span');
        textSpan.className = 'flex-label';
        textSpan.textContent = 'Mod manager download';
        
        // Zusammenbauen
        link.appendChild(iconSvg);
        link.appendChild(textSpan);
        li.appendChild(link);
        
        // Click-Handler hinzufügen
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleArchiveDownload(fileId, this, 'mod-manager');
        });
        
        return li;
    }
    
    function createManualDownloadButton(fileId) {
        // Erstelle <li> Element EXAKT wie NexusMods original
        const li = document.createElement('li');
        li.setAttribute('data-archive-file-id', fileId);
        li.setAttribute('data-download-type', 'manual');
        
        // Extrahiere Game-Name und Mod-ID für korrekte href URL
        const gameName = getGameNameFromUrl(window.location.href);
        const modId = extractModIdFromUrl(window.location.href);
        const downloadUrl = `https://www.nexusmods.com/${gameName}/mods/${modId}?tab=files&file_id=${fileId}`;
        
        // Erstelle den Link mit exakter NexusMods Struktur
        const link = document.createElement('a');
        link.className = 'btn inline-flex popup-btn-ajax archive-manual-download';
        link.href = downloadUrl;
        link.setAttribute('data-file-id', fileId);
        
        // Icon Container (Manual Icon)
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.setAttribute('class', 'icon icon-manual');
        
        const iconUse = document.createElementNS('http://www.w3.org/1999/xlink', 'use');
        iconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '/assets/images/icons/icons.svg#icon-manual');
        iconSvg.appendChild(iconUse);
        
        // Text Span
        const textSpan = document.createElement('span');
        textSpan.className = 'flex-label';
        textSpan.textContent = 'Manual download';
        
        // Zusammenbauen
        link.appendChild(iconSvg);
        link.appendChild(textSpan);
        li.appendChild(link);
        
        // Click-Handler hinzufügen
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            handleArchiveDownload(fileId, this, 'manual');
        });
        
        return li;
    }
    
    function handleArchiveDownload(fileId, button, downloadType = 'manual') {
        // Extrahiere Game-Name und Mod-ID aus der aktuellen URL
        const gameName = getGameNameFromUrl(window.location.href);
        const modId = extractModIdFromUrl(window.location.href);
        
        if (!gameName || !modId) {
            return;
        }
        
        // Konstruiere direkten Download-Link (mit oder ohne nmm=1 Parameter)
        let downloadUrl = `https://www.nexusmods.com/${gameName}/mods/${modId}?tab=files&file_id=${fileId}`;
        if (downloadType === 'mod-manager') {
            downloadUrl += '&nmm=1';
        }
        
        // Öffne Download-Link im selben Tab
        window.location.href = downloadUrl;
    }
    
    function getGameNameFromUrl(url) {
        const gameMatch = url.match(/nexusmods\.com\/([^\/]+)\//);
        return gameMatch ? gameMatch[1] : null;
    }
    
    function extractModIdFromUrl(url) {
        const match = url.match(/\/mods\/(\d+)/);
        return match ? match[1] : null;
    }
    

    // Keine zusätzlichen Styles - Buttons sehen 1:1 wie das Original aus
})();