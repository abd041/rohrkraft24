# RohrRetter24 – Offene Korrekturen & SEO (Stand 02.07.2026)
**An:** Webdeveloper
**Von:** Sarkis Agojan

---

## ⚠️ 1. Inliner-Sanierung entfernen – bieten wir nicht an

Wir bieten **keine grabenlose Sanierung / kein Inliner-Verfahren (Rohr-in-Rohr-Methode)** an. Aktuell steht das aber noch als Leistungsversprechen in der FAQ „Kann man Rohre reparieren ohne aufzugraben?" (Startseite, Rohrreinigung-Leistungsseite, vermutlich weitere Leistungsseiten mit demselben FAQ-Block):

> *„Ja. Mithilfe grabenloser Sanierungstechniken können beschädigte Rohre von innen saniert werden – z. B. durch das Inliner-Verfahren..."*

Bitte zusätzlich den kompletten Blog-Bestand nach „Inliner" durchsuchen (der Artikel zur Kanalinspektion könnte das Thema ebenfalls ansprechen).

Formulierungsvorschlag für die FAQ-Antwort:

> „Bei aufgrabungsfreien Reparaturen kommt es auf den Einzelfall an – häufig lässt sich ein Rohrschaden gezielt lokalisieren und punktuell reparieren, ohne den gesamten Leitungsverlauf freizulegen. Sprechen Sie uns an, wir prüfen vor Ort, welche Lösung für Ihren Fall sinnvoll ist."

Wichtig ist vor allem, dass nirgends mehr das Inliner-/Rohr-in-Rohr-Verfahren als unsere Leistung dargestellt wird (sonst Irreführungs-/Gewährleistungsrisiko, falls ein Kunde das explizit bestellt).

## 2. Header – Layout & Kontrast

- Logo im Header etwas größer darstellen.
- Seitenüberschriften im Headerbereich der Unterseiten sind nach oben verrutscht – bitte vertikale Zentrierung global prüfen und korrigieren.
- Telefonnummer im Header ist ebenfalls verrutscht (vermutlich derselbe Fehler) – bitte im selben Zug korrigieren.
- **Icons sitzen tiefer als der danebenstehende Text** (z. B. Telefon-Hörer neben der Nummer im Header, Häkchen in den Badges „Erfahrenes Team"/„Faire Festpreise"/„Schnelle Hilfe", Icons in den Buttons „Jetzt anrufen"/„Termin vereinbaren", Telefon-Icon im Notdienst-Button) – Icon und Text sind nicht auf gleicher optischer Höhe zentriert. Siehe angehängte Screenshots (`01_telefonnummer_header.png`, `02_badges_buttons.png`, `03_notdienst_button.png`). Das betrifft vermutlich mehrere Stellen mit demselben Icon+Text-Baustein, daher bitte den zugrundeliegenden Component/CSS-Baustein einmal grundsätzlich fixen (z. B. `align-items: center` auf dem Flex-Container), statt jede Stelle einzeln zu korrigieren.
- „24h Notdienst"-Schriftzug neben der Telefonnummer im Header hat aktuell dieselbe Farbe wie der Hintergrund und ist praktisch unsichtbar – bitte auf eine gut lesbare, kontrastreiche Farbe ändern.

## 3. Header „Einsatzgebiete" zurücksetzen

War in einer früheren Version schon gut gelöst – bitte auf die vorherige Gestaltung zurücksetzen (ggf. im Versionsverlauf/Git nachschauen).

## 4. Header der Blogartikel überarbeiten

Aktuell blauer Farbverlauf über den gesamten Kopfbereich. Vorschlag: stattdessen das jeweilige Artikelbild als Hintergrund verwenden, mit dunklem Overlay für gute Lesbarkeit des weißen Textes. Bitte 1–2 Varianten zur Abstimmung vorschlagen.

## 5. Notdienst-Kachel – Telefonnummer korrigieren

In der (bereits eigenständig gestalteten) 24h-Notdienst-Sektion bei „Alle Leistungen im Überblick" ist die Telefonnummer nach oben verrutscht – bitte korrigieren.

## 6. FAQ-Akkordeon bestätigen

Bitte kurz bestätigen, ob das Auf-/Zuklappen beim Anklicken einer FAQ-Frage inzwischen sauber funktioniert (Antwort soll ein-/ausklappen, nicht verschwinden).

## 7. Google-Rezensionen bestätigen

Bitte bestätigen, ob die angezeigten Kundenbewertungen echte, live gezogene Google-Rezensionen sind oder weiterhin von Hand geschriebene Beispieltexte.

## 8. Logos benennen und differenzieren

Aktuell wird überall dieselbe Datei `images/logo.svg` verwendet. Bitte zwei separate Logo-Dateien einsetzen:
- **„Logo Header"** – Header (Desktop & Mobile) sowie Blog-Autorenbereich „RohrRetter24 Redaktion"
- **„Logo Footer"** – Footer

## 9. Bilder für „Modernes Equipment für schnelle Hilfe"

Für jedes Werkzeug/Gerät in dieser Liste soll ein passendes Foto angezeigt werden (Bild-Grid oder Bild+Text-Karten statt reiner Aufzählung):
- TV-Kamerasysteme
- Rohrortungsgeräte
- Rothenberger Rohrreinigungsmaschinen
- RIDGID FlexShaft-Systeme
- Nasssauger
- Mobile Hochdruckspülung
- Spezialwerkzeuge für Kunststoff-, Kupfer- und Stahlrohrarbeiten

📎 **Die passenden Bilder bekommst du von mir separat als ZIP-Datei zugeschickt** (nicht Teil dieses Dokuments).

## 10. Blogartikel – Datum entfernen

Bei den Blogartikeln (Übersicht und Einzelartikel) wird aktuell ein Veröffentlichungsdatum angezeigt (z. B. „📅 12. März 2026"). Bitte entfernen.

## 11. Hero-Text auf der Startseite aktualisieren

Bitte den Haupttext im Hero-Bereich der Startseite durch folgenden Text ersetzen:

> „Rohr verstopft? Abfluss blockiert? Wir sind in 30–60 Min. bei Ihnen – in Berlin, Potsdam, Oranienburg und im gesamten Umkreis von 100 km. Unser erfahrenes RohrRetter24-Team beseitigt Verstopfungen, repariert Rohrbrüche und hilft bei Sanitär-Notfällen – zum garantierten Festpreis. Anfahrt pauschal 49 € – Die Anfahrtspauschale wird bei Beauftragung verrechnet."

Falls eine kürzere, kompaktere Variante besser ins Layout passt, hier eine Alternative:

> „Rohr verstopft? Wir sind in 30–60 Min. bei Ihnen.
> Berlin, Potsdam, Oranienburg + 100 km Umkreis
> Festpreis 49 € Anfahrt – Rohrreparatur, Abflussreinigung, Sanitär-Notfälle"

Bitte die für das Layout passendere Variante einsetzen bzw. kurz Rückmeldung geben, welche besser funktioniert.

---

## SEO & Technik

Die Vercel-Preview-Domain (`rohrkraft24.vercel.app`) ist aktuell nur die Arbeitsumgebung, darüber wird die eigentliche Seite bearbeitet – Domain-Umzug/Redirects sind daher aktuell **kein Thema**, das kommt erst beim Launch auf die echte Domain. Die folgenden Punkte betreffen aber die Content- und Code-Struktur selbst und ziehen mit um, unabhängig von der Domain:

### 12. Individualisierung der Stadt-Seiten

Uns ist aufgefallen, dass wir mit 85 Städten × 9 Leistungen auf bis zu 765 URLs kommen (z. B. `/rohrreinigung-potsdam/`). Wichtig: **Alle Einsatzgebiete sollen bestehen bleiben** – gerade aus dem Berliner Umland kommen viele gute Aufträge, das wollen wir nicht einschränken.

Trotzdem zwei Fragen dazu an dich:

1. **Bilddateinamen/Alt-Tags anpassen.** Einige Bilder tragen noch Dateinamen/Alt-Texte, die nach der ursprünglichen Vorlage aussehen (z. B. mit „hessen" im Namen). Kannst du die Alt-Tags und Dateinamen so anpassen, dass klar erkennbar ist, dass die Seite zu uns (RohrRetter24, Berlin) gehört, und nicht wie kopiert von der Vorlage wirkt?

2. **Automatisierte Individualisierung möglich?** Sind die Texte auf den einzelnen Stadt-Leistungs-Seiten aktuell ein reines Template mit ausgetauschtem Stadtnamen, oder gibt es schon individuelle Inhalte? Falls Template: Lässt sich das automatisiert individualisieren – z. B. indem echte, unterschiedliche Fakten pro Stadt (Stadtteile, PLZ, Entfernung von Berlin-Mitte) automatisch in den Text eingebaut werden, statt die Seiten nur umzuformulieren? Wenn ja, wie viel Aufwand wäre das ungefähr?

### 13. Strukturierte Daten (Schema.org / JSON-LD)

Für ein lokales Handwerksunternehmen ist `LocalBusiness`-Markup wichtig (Adresse, Öffnungszeiten, Telefonnummer, Bewertungen, Preisspanne), damit Google in den Suchergebnissen z. B. Sterne und Öffnungszeiten direkt anzeigt. Ist das bei uns schon eingebaut? Und falls ja: auch pro Stadtseite mit passendem `areaServed`-Feld?

### 14. NAP-Konsistenz (Name, Adresse, Telefonnummer)

Die Angaben auf der Website sollten exakt mit unserem Google-Unternehmensprofil übereinstimmen, sonst verwässert das lokale Ranking-Signal. Sobald das Impressum final ist (inkl. HRB-Nummer etc.), lasst uns das gemeinsam einmal gegenchecken.

### 15. Sitemap & robots.txt

Sind `sitemap.xml` und `robots.txt` bei uns schon sauber angelegt, und enthält die Sitemap alle relevanten Seiten (inkl. der Stadt-Leistungs-Seiten)? Die Struktur kann ja schon jetzt stehen, auch wenn die Einreichung bei der Google Search Console erst mit der echten Domain passiert.

### 16. Page Speed / Core Web Vitals

Die Seite nutzt bereits `next/image` (gutes Zeichen für Bildoptimierung). Trotzdem empfehlenswert: einmal PageSpeed Insights / Lighthouse laufen lassen, auch schon auf der aktuellen Vercel-Preview-URL testbar.

---

## Priorisierung

| Priorität | Punkte |
|---|---|
| **Sofort** | 1 (Inliner-Sanierung entfernen), 11 (Hero-Text aktualisieren) |
| **Hoch** | 2 (Header-Layout/Kontrast), 5 (Notdienst-Kachel), 6 (FAQ bestätigen), 12 (Individualisierung Stadt-Seiten) |
| **Mittel** | 3 (Header Einsatzgebiete), 4 (Blogartikel-Header), 7 (Google-Rezensionen bestätigen), 9 (Equipment-Bilder, sobald ZIP verschickt), 13 (Schema.org-Markup), 16 (Page Speed Check) |
| **Niedrig** | 8 (Logo-Benennung), 10 (Datum entfernen), 14 (NAP-Konsistenz – erst final sobald Impressum steht), 15 (Sitemap/robots.txt) |

Bitte zuerst Punkt 1 und 11 angehen und kurz Rückmeldung geben.
