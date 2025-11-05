---
title: Einheitliche Rollladen Positionen in KNX und Home Assistant
type: essay
author: Emanuel Regnath
lang: de
date: 2025-11-02
share: true
category: projects/smart-home
---


Wenn ein Rollladen auf "20%" steht, verdeckt er dann 20% der Fensterfläche oder lässt er noch 20% Licht rein? Diese Frage scheint wohl keine klare Antwort zu kennen. Zumindest sehen die beiden Systeme KNX und Home Assistant (HA) das unterschiedlich und je nach Perspektive erscheint auch beides logisch.
### Das Problem

Für KNX ist die Frage "Wie weit ist der Rollladen geschlossen?" und somit bedeutet 0% offen/oben und 100% zu/unten. Für HA ist die Frage allerdings "Wie weit ist das Fenster offen?" und desehalb ist 100% offen und 0% zu. Die Visualisierung in HA mit dem Schieberegler macht so auch mehr Sinn. Das ganze Thema wäre an sich völlig nebensächlich, wenn man als Benutzer einfach eintellen könnte, welche Sichtweise man bevorzugt. Aber das geht nicht. 

Sowohl KNX als auch Home Assistant sind so dermaßen von der Richtigkeit ihrer Perspektive überzeugt, dass einfach mal beide Systeme diese Prozentkodierung hard-gecoded eingebrannt haben ohne eine Möglichkeit eines von beiden zu invertieren. Und das obwohl sich beide als "offene" Systeme bezeichnen und überall sonst unzählige und teils redundante Möglichkeiten haben um Automationen bis ins kleinste Detail zu konfigurieren. Aber bei der Rollladenposition scheint der Spaß vorbei zu sein.

Gut, dieser Text würde nicht existieren wenn es nicht doch eine Lösung gäbe. Allerdings nur für die Variante bei der 100% Rolladen oben bedeutet.

### Mein Setup
Es gibt sicher noch mehr Systeme für die das Ganze funktioniert aber ich habe es mit folgendem Setup getestet:

* Home Assistant 2025.5.2 mit KNX Integration
* MDT Universalaktor AKU 24x
* MDT Taster Smart 86 (gleich wie Glastaster II Smart)

### Die Lösung
TL;DR: Wir invertieren in KNX so gut wie alles, außer der Prozentkodierung und dann invertieren wir in der KNX Integration von HA die automatische Invertierung. Klingt komisch, funktioniert aber aktkuell wohl nur so.

Im AKU nutzt man die Option "Auf/Ab vertauscht", so dass der Rolladen erstmal "falsch" rum fährt. Somit ist der Rolladen bei 100% tatsächlich oben und bei 0% tatsächlich unten. 

![[Pasted image 20251103223232.png|Pasted image 20251103223232.png]]

Die Bedeutung der Prozentangaben sind aber unverändert, also 0% sind für den AKU immer noch "oben" und er fährt nur den Rolladen falsch. Das bedeutet eben auch, dass alle Geräte, die ein "Auf" (hochfahren) Befehl an die Gruppenadresse des AKU schicken, die Prozentwerte in Richtung 0% treiben. Deswegen tauschen wir auch das Verhalten der "anderen Geräte". In meinem Fall sind das nur zwei Arten: MDT Taster und Home Assistant. 

Zuerst der Taster. Beim Taster vertauschen wir zuerst die Richtungstasten. Wollen wir links nach unten fahren, stellen wir links "Auf" ein. Das schickt ein hochfahren Befehl an den AKU, der ja den Motor falsch rum nach unten fahren wird. Danach vertauschen wir noch die Pfeile für die Tasten und die Statussymbole des Rolladen. Lediglich die Prozentangaben lassen wir unverändert (da haben wir auch keine andere Wahl). 

![[Pasted image 20251103234654.png|Pasted image 20251103234654.png]]

Und das wars auch schon. Allerdings werden immer noch alle anderen Geräte, die ein "hoch" fahren Befehl an die Gruppenadresse des AKU schicken, die Prozentwerte in Richtung 0% treiben.

Deswegen muss in Home Assistant in der KNX Integration noch das `inverted_position` flag gesetzt werden.
![[Pasted image 20251103235812.png|Pasted image 20251103235812.png]]






### Eine genauere Erklärung

Die tatsächlich Richtung des Motors wird in der Einstellung des AKU verdreht. Die Prozentangaben sind aber unverändert, also 0% sind für den AKU immer noch "oben" und er fährt nur den Rolladen falsch. Das bedeutet eben auch, dass alle Geräte, die ein "Auf" (hochfahren) Befehl an die Gruppenadresse des AKU schicken, die Prozentwerte in Richtung 0% treiben. Deswegen tauschen wir auch das Verhalten der "anderen Geräte". In meinem Fall sind das nur zwei Arten: MDT Taster und Home Assistant. 

Beim Taster vertauschen wir zuerst die Richtungstasten. Wollen wir links nach unten fahren, stellen wir links "Auf" ein. Das schickt ein hochfahren Befehl an den AKU, der ja den Motor falsch rum nach unten fahren wird. Danach vertauschen wir noch die Pfeile für die Tasten und die Statussymbole des Rolladen. Lediglich die Prozentangaben lassen wir unverändert (da haben wir auch keine andere Wahl). 

Die KNX Integration in Home Assistant invertiert von sich aus bereits die Pozentwerte für KNX. Nachdem wir aber jetzt alles vertauscht haben, müssen wir das Home Assistant wieder austreiben.

TODO: check effect of invert position and invert updown!


Bedient man in Home Assistant den Schieberegler wird ein Prozentwert an die "Absolute Position" Gruppenadresse geschickt und der Rolladen fährt korrekt. Drückt man allerdings den hochfahren Button im Dashboard, schickt dieser ein "Auf" Befehl an die Single Object Control Adresse und die bedeutet für den AKU immer noch Richtung 0%, was verkehrt ist. Deswegen wird als letzter Schritt das `inverted_position` flag in HA gesetzt.


TODO: 

### Andere Ansätze und warum sie nicht so gut sind.

* Eine inverse dummy Entity via Automation: Aufwand, Visualisierung falsch
* Andere KNX Geräte kaufen: Teuer (MDT ist eine der wenigen günstigeren Marken) 
* Nicht Home Assistant verwenden: Wenig gute Alternativen. Alexa direkt würde gehen.


Nach meiner Erfahrung ist die oben genannte Lösung die einzige, die wirklich komplette Konsistenz über alle Ansichten und Befehle schafft. Allerdings auch nur wenn alle Sender von Befehlen das vertauschen können. In meinem Fall sind das nur HA und MDT Taster. Somit 


Artikel zu "Einheitliche Prozentwerte für Rolladen in HA, Alexa, und KNX/MDT" 🧩 Problem: HA 0% offen, MDT 100% zu. 💡 Idee: Invertiere Motor und Symbole in MDT (3er Bild: HA, MDT, Real Photo) ⚓ Alternativen: * Invertierte Dummy Entities in HA (effort, viz) * Buy different KNX? * Not use HA