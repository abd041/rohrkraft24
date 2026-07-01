# Korrekturen & Anpassungen – rohrkraft24.vercel.app
**An:** Webdeveloper
**Von:** Sarkis Agojan, RohrRetter24 UG
**Stand:** 01.07.2026

Nachfolgend alle Korrekturen zur aktuellen Version der Website, strukturiert nach Bereich. Bitte die Punkte der Reihe nach abarbeiten und nach Umsetzung kurz Rückmeldung geben, welche Punkte erledigt sind.

---

## 1. Branding & Markenname

**1.1 Schreibweise korrigieren**
Der korrekte Markenname ist **„RohrRetter24"** (großes R, großes R) – aktuell steht an den meisten Stellen „Rohrretter24". Bitte global per Suchen & Ersetzen prüfen (Header, Footer, Meta-Title/Meta-Description, Alt-Texte der Bilder, Bildunterschriften, Texte auf Unterseiten, Impressum, Datenschutz) und konsequent vereinheitlichen.

**1.2 Bildmaterial/Trust-Badges prüfen**
Im Hero-Bereich erscheinen aktuell Vertrauenssiegel mit Bezug zu „Handwerkskammer Frankfurt · RheinMain" und „IHK Frankfurt" sowie Bilddateinamen wie `rohrkraft24-team-hessen.webp`. Das sind offenbar unbereinigte Reste aus einer Vorlage für ein anderes Unternehmen/Region (Frankfurt/Hessen statt Berlin). Bitte:
- Diese Badges entfernen oder durch Inhalte ersetzen, die tatsächlich zu RohrRetter24 passen (siehe Punkt 4).
- Alle Bilddateinamen und Alt-Texte auf Berlin-Bezug umstellen.
- Generell einmal komplett durch den Code gehen und nach weiteren Vorlagen-Resten suchen (Texte, Bilder, strukturierte Daten/Schema.org), die noch auf das Ursprungs-Template verweisen.

---

## 2. Rechtlich sensible Begriffe

Wir sind **kein Meisterbetrieb** und **kein (zertifizierter) Fachbetrieb** im handwerksrechtlichen Sinne. Diese Begriffe sind geschützt bzw. mit Voraussetzungen verbunden, die wir nicht erfüllen – das ist ein wettbewerbsrechtliches Risiko (Abmahnung nach UWG).

**2.1 Zu entfernen/ersetzen, überall auf der Seite:**
- „Meisterbetrieb"
- „Zertifizierter Betrieb" / „Zertifiziertes Team"
- „Fachbetrieb" (z. B. „Als zertifizierter Fachbetrieb...", „Fachbetrieb mit über 10 Jahren Erfahrung", in den Seitentiteln der Dienstleistungsseiten „– Rohrretter24 Fachbetrieb")
- „Zertifizierter Rohrreinigungsfachbetrieb"

**2.2 Vorschlag für unbedenkliche Alternativformulierungen:**
Statt der o. g. Begriffe können neutrale, sachlich korrekte Formulierungen verwendet werden, z. B.:
- „erfahrenes Team" / „erfahrenes RohrRetter24-Team"
- „spezialisiert auf Rohrreinigung und Sanitärnotfälle"
- „über 10 Jahre Erfahrung im Bereich Rohrreinigung"
- „geschultes Fachpersonal" (sofern Mitarbeiter entsprechend qualifiziert/eingewiesen sind – bitte intern kurz abklären, bevor das verwendet wird)
- „zuverlässiger Partner für Rohrreinigung in Berlin und Umgebung"

Bitte diese Liste als Grundlage nehmen, aber **vor dem finalen Go-Live nochmal von mir freigeben lassen**, da die genaue Formulierung je nach Unternehmensgegenstand der UG stimmig sein muss.

**2.3 Betroffene Bereiche konkret:**
- Hero-Badges auf der Startseite („Zertifizierter Betrieb Meisterbetrieb Faire Festpreise")
- Trust-Badge-Leiste unter dem Hero-Bild
- Abschnitt „Fachbetrieb mit über 10 Jahren Erfahrung"
- Meta-Titles/Beschreibungen der einzelnen Leistungsseiten (z. B. „Rohrreinigung & Verstopfungen – Rohrretter24 Fachbetrieb")
- ggf. strukturierte Daten (Schema.org / JSON-LD), falls dort ebenfalls „Fachbetrieb" hinterlegt ist

---

## 3. Preise & Kosten

**3.1 Anfahrtskosten korrigieren**
Aktuell steht an mehreren Stellen „Gratis Anfahrt" / „Keine Anfahrtskosten" / „0 € Schadenscheck". Die korrekte Information ist: **Anfahrtskosten 49 €**.

Betroffene Stellen, die ich gefunden habe:
- Meta-Description („Gratis Anfahrt!")
- Hero-Text („Gratis Anfahrt, 0 € Schadenscheck")
- Info-Kacheln unter dem Hero („Gratis Anfahrt – Keine Zusatzkosten", „0€ Schadenscheck – Kostenfrei vor Ort")
- Bereich „Faire Festpreise" („Keine Anfahrtskosten, keine Wochenendzuschläge")
- Preiskarte „Abflussreinigung" („Keine Anfahrtskosten")
- Footer-Bereich „30–45 Minuten Reaktionszeit · Gratis Anfahrt · Festpreis vor Arbeitsbeginn"

Bitte überall durch eine einheitliche, korrekte Formulierung ersetzen, z. B. „Anfahrt pauschal 49 €" oder „49 € Anfahrtspauschale". Bitte auch klären, ob die Anfahrtspauschale bei Beauftragung verrechnet wird – das würde ich gerne als Zusatzsatz mit aufnehmen, das wirkt vertrauensbildender als ein reiner Festpreis ohne Kontext.

**3.2 Konsistenzprüfung**
Bitte einmal die komplette Seite (inkl. Unterseiten und Blog) nach dem Begriff „kostenlos"/„gratis"/„0 €" durchsuchen, da vermutlich noch weitere Stellen betroffen sind, die mir beim Überfliegen nicht aufgefallen sind.

---

## 4. Header

**4.1 Top-Bar**
Aktuell steht im Header oben die E-Mail-Adresse (`info@rohrretter24.de`) neben „24h Notdienst". Bitte die E-Mail-Adresse durch die Telefonnummer ersetzen, sodass im Header oben direkt **„0176 2022 2200" / „24h Notdienst"** sichtbar ist – das ist der relevantere Kontaktweg für Notfälle und sollte prominent und klickbar (`tel:`-Link) sein.

Die E-Mail-Adresse kann gerne im Footer oder auf der Kontaktseite bestehen bleiben.

---

## 5. Startseite – „Alle Leistungen im Überblick"

**5.1 Notdienst visuell und strukturell trennen**
Der „24h Notdienst" wird aktuell als eine von 8 gleichwertigen Kacheln in der Leistungsübersicht dargestellt. Das ist inhaltlich nicht korrekt – der Notdienst ist kein einzelnes Leistungsfeld, sondern eine übergeordnete Verfügbarkeits-/Serviceleistung, die für (fast) alle anderen Leistungen gilt.

Bitte:
- Den Notdienst aus dem 8er-Grid herausnehmen.
- Stattdessen eine eigenständige, optisch hervorgehobene Sektion gestalten (z. B. breiter Banner direkt unter oder über dem Leistungs-Grid, mit eigenem Hintergrund/Akzentfarbe, größerem Call-to-Action „Jetzt anrufen").
- Inhaltlich z. B.: „24h Notdienst – für alle unsere Leistungen, rund um die Uhr erreichbar" mit Telefonnummer als großem Button.

**5.2 Telefon-Icon-Kontrast**
Das Telefon-Icon in der Notdienst-Kachel ist aktuell dunkelgrau/schwarz auf dunkelblauem Hintergrund und dadurch kaum erkennbar (Kontrastproblem, auch im Sinne der Barrierefreiheit/WCAG relevant). Bitte Icon-Farbe auf Weiß oder eine helle Akzentfarbe ändern, die sich klar vom Hintergrund abhebt.

---

## 6. Leistungsseiten – Texte

**6.1 Mehr Inhalt pro Leistung**
Die einzelnen Dienstleistungsseiten (Rohrreinigung, TV-Kamera-Inspektion, Rohrreparatur, Leckageortung, Abwasserreinigung, Hebeanlagen-Service, Sanitärarbeiten, Wasserschaden) sind aktuell sehr knapp gehalten. Bitte mit KI-Unterstützung ausführlichere, eigenständige Texte je Leistung erstellen lassen – idealerweise mit:
- Kurzer Einleitung (Problem/Bedarf des Kunden)
- Ablauf der Leistung in Schritten
- Typischen Anwendungsfällen/Beispielen
- Hinweis auf Festpreis, Reaktionszeit, Anfahrtspauschale (49 €)
- Internem Verweis/Link zu verwandten Leistungen (z. B. Rohrreinigung ↔ Kamera-Inspektion)

Das verbessert sowohl die Nutzererfahrung als auch die SEO-Relevanz der einzelnen Unterseiten, da diese aktuell sehr ähnlich und dünn aufgebaut sind (Duplicate-Content-Risiko bei Suchmaschinen).

---

## 7. Einsatzgebiete & Karte (Startseite)

**7.1 Karte funktionsfähig machen**
Im Bereich „Unser Einsatzgebiet" auf der Startseite ist die Karte aktuell nicht sichtbar. Bitte eine funktionierende Kartenansicht von Berlin und dem Umkreis von 100 km einbinden, auf der die bedienten Orte einzeln markiert/gekennzeichnet sind (siehe Vorlage). Die Liste der ca. 85 Standorte ist im Footer bzw. in der Regionsauswahl bereits vorhanden und sollte als Datengrundlage für die Marker dienen.

**7.2 Seitenleiste (Region- und Stadtauswahl) reparieren**
Die Seitenleiste neben der Karte („Region wählen" → „Stadt wählen" → „Leistung wählen") ist aktuell nicht interaktiv. Bitte die Klick-Funktionalität herstellen, sodass:
1. Nutzer eine Region auswählen können (aktuell ist nur „Berlin" aktiv, der Rest ist als „demnächst" markiert – das ist okay, sollte aber zumindest als deaktivierter Zustand klar erkennbar/anklickbar-aber-inaktiv sein),
2. nach Regionsauswahl die zugehörigen Städte erscheinen und auswählbar sind,
3. nach Stadtauswahl die verfügbaren Leistungen für diese Stadt angezeigt werden bzw. der Nutzer auf die jeweilige Stadt-Landingpage weitergeleitet wird (z. B. `/rohrreinigung-potsdam/`).

**7.3 Anzahl der Städte korrigieren**
Im Bereich „Einsatzgebiete" unten auf der Startseite steht aktuell „Alle 48 Städte ansehen". Die tatsächliche Zahl ist höher (laut Kartenbereich aktuell 85 Standorte). Bitte die korrekte, aktuelle Zahl einsetzen und an einer zentralen Stelle (z. B. CMS-Feld/Variable) pflegen, damit sie nicht an mehreren Stellen manuell synchron gehalten werden muss und zukünftig automatisch konsistent bleibt – das wäre meine Empfehlung, um diesen Fehler künftig zu vermeiden.

---

## 8. Kundenbewertungen

**8.1 Echte Google-Rezensionen einbinden**
Im Bereich „Was unsere Kunden sagen" sind aktuell offenbar Platzhalter-Bewertungen (Namen/Orte wie Frankfurt, Wiesbaden, Offenbach, Darmstadt, Hanau – das ist wieder das Hessen-Template, siehe Punkt 1.2, und passt nicht zu unserem Einsatzgebiet Berlin/Brandenburg).

Bitte stattdessen die echten Google-Rezensionen von unserem Google-Unternehmensprofil einbinden:
👉 https://share.google/KnFZqUUoqnI4pqbCj

Technisch z. B. über:
- Google Places API (Reviews-Feld) mit serverseitigem Caching, oder
- ein etabliertes Embed-Widget/Plugin für Google-Bewertungen (z. B. Elfsight, Trustindex o. ä.), das automatisch aktuelle Bewertungen zieht.

Bitte kurz Rücksprache halten, welche Variante technisch/kostenmäßig sinnvoller ist – ich habe keine Präferenz, solange die Bewertungen echt und aktuell sind und sich automatisch aktualisieren (kein manuelles Nachpflegen nötig).

---

## 9. FAQ-Bereich

**9.1 Akkordeon-Funktion reparieren**
Im FAQ-Bereich „Häufige Fragen rund um die Rohrreinigung" klappt eine Frage beim Anklicken nicht auf, sondern der gesamte Eintrag verschwindet. Bitte die Akkordeon-Logik prüfen und korrigieren, sodass beim Klick auf eine Frage die Antwort sauber ein-/ausklappt (Standard-Akkordeon-Verhalten, idealerweise mit Animation/Transition für ein hochwertigeres Look & Feel).

---

## 10. Blog

**10.1 Header-Darstellung auf Kategorieseiten korrigieren**
Auf Blog-Unterseiten (z. B. Kategorie „Kosten & Preise") zieht sich aktuell ein blauer Hintergrund komplett über den gesamten Headerbereich, auch über Bereiche ohne Text. Bitte korrigieren, sodass die blaue Hintergrundfarbe nur exakt den Bereich des jeweiligen Kategorie-/Überschrift-Textes umfasst (z. B. als Badge/Pill-Element statt vollflächiger Hintergrund).

**10.2 Header-Konsistenz zwischen Unterseiten**
Der Header sieht auf der Unterseite „Blog" anders aus als z. B. auf „Kontakt". Bitte den Header auf allen Unterseiten einheitlich nach dem Layout der Subpage „Blog" gestalten (sofern das die gewünschte Zielversion ist – bitte vor Umsetzung kurz mit mir bestätigen, falls hier Zweifel an der Referenzversion bestehen).

**10.3 Blogtexte umschreiben lassen**
Die aktuellen Blogartikel-Texte sind zu nah an der ursprünglich gesendeten Vorlage. Bitte alle Blogtexte mit KI-Unterstützung komplett neu/umformuliert schreiben lassen, sodass sie inhaltlich denselben Mehrwert bieten, aber nicht mit der Vorlage identisch oder zu stark abgeleitet sind (Stichwort: Duplicate Content, Plagiat-Risiko, SEO). Gleiches gilt sinngemäß für Punkt 6 (Leistungstexte).

---

## 11. Footer / Impressum / Datenschutz

**11.1 Unternehmensdaten aktualisieren**
Bitte im Impressum und in der Datenschutzerklärung folgende Daten hinterlegen bzw. aktualisieren:

```
RohrRetter24 UG
Mühlenstr. 8a
14167 Berlin
```

Bitte zusätzlich prüfen, ob im Impressum noch weitere Pflichtangaben fehlen (z. B. Handelsregisternummer/Amtsgericht sobald die UG eingetragen ist, Geschäftsführer, USt-IdNr., Aufsichtsbehörde falls relevant) – diese reiche ich nach, sobald die notarielle Eintragung abgeschlossen ist. Bitte das Impressum so vorbereiten, dass diese Felder leicht nachträglich ergänzt werden können.

---

## 12. Allgemeine Empfehlungen (zusätzlich zu den genannten Korrekturen)

Diese Punkte habe ich beim Durchsehen der Seite zusätzlich bemerkt und würde sie gerne mit aufnehmen:

1. **Globale Suche nach Vorlagenresten:** Da mehrere Inhalte (Trust-Badges, Bewertungen, Bilddateinamen) offensichtlich aus einer Vorlage für ein anderes Unternehmen (Hessen/Frankfurt-Bezug) stammen, bitte einmal komplett durch Texte, Bilder, Alt-Tags und strukturierte Daten (JSON-LD/Schema.org) gehen und alles auf RohrRetter24/Berlin vereinheitlichen.
2. **Konsistente Zahlen:** Bitte zentrale Kennzahlen (Anzahl Städte, Anzahl Bewertungen, Erfahrungsjahre, Reaktionszeit „30–60 Min." vs. „30–45 Min." im Footer – hier gibt es aktuell eine Abweichung) an einer Stelle pflegen, damit sie überall synchron sind.
3. **Reaktionszeit-Abweichung:** Im Hauptbereich steht „30–60 Minuten Reaktionszeit", im Footer-CTA „30–45 Minuten Reaktionszeit" – bitte auf eine einheitliche, korrekte Angabe festlegen.
4. **Mobile- und Kontrastprüfung:** Da bereits ein Kontrastproblem beim Telefon-Icon aufgefallen ist (Punkt 5.2), bitte einmal generell die Farbkontraste auf dunkelblauem Hintergrund prüfen (Buttons, Icons, Sekundärtexte).
5. **Strukturierte Daten/SEO:** Nach Umsetzung der inhaltlichen Korrekturen (Preise, Markenname, Begriffe) bitte auch prüfen, ob Schema.org-Markup (LocalBusiness, Reviews etc.) entsprechend aktualisiert ist, damit Google keine veralteten/falschen Informationen anzeigt.

---

### Priorisierung (Vorschlag)

| Priorität | Punkte |
|---|---|
| **Hoch (rechtlich/inhaltlich kritisch)** | 2 (Meisterbetrieb/Fachbetrieb), 3 (Anfahrtskosten), 11 (Impressum/Datenschutz) |
| **Mittel (Funktion/UX)** | 7.1–7.2 (Karte), 9 (FAQ), 4 (Header-Telefonnummer), 5 (Notdienst-Sektion) |
| **Niedrig (Inhalt/Politur)** | 1 (Markenname), 6 (Leistungstexte), 8 (Google-Rezensionen), 10 (Blog), 12 (Allgemein) |

Bitte bei Rückfragen einfach melden – am liebsten würde ich vor dem finalen Go-Live nochmal eine Vorschau der wichtigsten Punkte (insbesondere 2, 3, 11) sehen.
