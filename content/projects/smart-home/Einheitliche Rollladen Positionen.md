---
title: Einheitliche Rollladen Positionen in KNX und Home Assistant
type: essay
author: Emanuel Regnath
lang: de
date: 2025-11-08
share: true
category: projects/smart-home
permalink: projects/smart-home/einheitliche-rollo-positionen
---

**TL;DR:** Wie schafft man es, dass in KNX, Home Assistant (und über Alexa), die Soll-Position 0% den Rollladen ganz nach unten fährt und danach überall 0% (= unten) angezeigt wird? → Wir invertieren in KNX so gut wie alles, außer der Prozentkodierung und dann invertieren wir in der KNX Integration von HA die automatische Invertierung. Klingt komisch, funktioniert aber aktuell wohl nur so 🤷‍♂️

<figure>
  <img src="res/img/KNX-HA-Real-Same2-Marked.png">
  <figcaption>Resultat für Rollladen auf 92%: Konsistente Positionen in KNX (MDT Taster), im Home Assistant Dashboard, und in der Realität.</figcaption>
</figure>

### 🧩 Das Problem
Wenn ein Rollladen auf "20%" steht, verdeckt er dann 20% der Fensterfläche oder lässt er noch 20% Licht rein? Diese Frage scheint wohl keine klare Antwort zu kennen. Zumindest sehen die beiden Systeme KNX und Home Assistant (HA) das unterschiedlich und je nach Perspektive erscheint auch beides logisch.

Für KNX ist die Frage "Wie weit ist der Rollladen geschlossen?" und somit bedeutet 0% offen/oben und 100% zu/unten. Für HA ist die Frage allerdings "Auf welcher Höhe (wie weit oben) ist der Rollladen?" und deshalb ist 100% offen/oben und 0% zu/unten. Die Visualisierung in HA mit dem Schieberegler macht so auch mehr Sinn. Das ganze Thema wäre an sich völlig nebensächlich, wenn man als Benutzer einfach einstellen könnte, welche Sichtweise man bevorzugt. Kann man aber nicht. 

Sowohl KNX als auch Home Assistant sind so dermaßen von der Richtigkeit ihrer Perspektive überzeugt, dass einfach beide Systeme diese Prozentkodierung hard-gecoded eingebrannt haben, ohne eine Möglichkeit eines von beiden zu invertieren. Und das, obwohl beide Systeme überall sonst unzählige und teils redundante Möglichkeiten haben um Automationen bis ins kleinste Detail zu konfigurieren. Aber bei der Rollladenposition scheint der Spaß vorbei zu sein.

Gut, dieser Text würde nicht existieren, wenn es nicht doch eine Lösung gäbe. Allerdings nur für die Variante bei der der Rollladen bei 100% ganz oben ist.

### 🛠️ Mein Setup
Es gibt sicher noch mehr Systeme, für die das Ganze funktioniert aber ich habe es mit folgendem Setup getestet:

* Home Assistant 2025.5.2 mit KNX Integration
* MDT Universalaktor AKU 24x
* MDT Taster Smart 86 (gleich zu Glastaster II Smart)

### 💡 Die Lösung
Nachdem nur die Prozentkodierung fest eingebrannt ist und wir sonst viele Möglichkeiten haben, vertauschen wir einfach alles *außer* der Prozentkodierung. “Bitte was?” Ja genau, los gehts.

Im AKU nutzt man die Option "Auf/Ab vertauscht", so dass der Rollladen erstmal "falsch" herum fährt. Somit ist der Rollladen bei 100% tatsächlich oben und bei 0% tatsächlich unten. 

![[MDT-Universalaktor-Motor-vertauscht.png|MDT-Universalaktor-Motor-vertauscht.png]]

Die Bedeutung der Prozentangaben sind aber unverändert, also 0% sind für den AKU immer noch "oben" und er fährt nur den Rollladen falsch. Das bedeutet eben auch, dass alle Geräte, die ein "Auf" (hochfahren) Befehl an die Gruppenadresse des AKU schicken, die Prozentwerte in Richtung 0% treiben. Deswegen tauschen wir auch das Verhalten der "anderen Geräte". In meinem Fall sind das nur zwei Arten: MDT Taster und Home Assistant. 

Zum Taster: Beim Taster vertauschen wir zuerst die Richtungstasten. Wollen wir links nach unten fahren, stellen wir links "Auf" ein. Das schickt ein hochfahren Befehl an den AKU, der ja den Motor falsch rum nach unten fahren wird. Danach vertauschen wir noch die Pfeile für die Tasten und die Statussymbole des Rollladens. Lediglich die Prozentangaben bleiben unverändert, denn da haben wir ja keine andere Wahl. 

![[MDT-Taster-Rollo-Position-Invertiert-Marked.png|MDT-Taster-Rollo-Position-Invertiert-Marked.png]]

Soweit so gut. Allerdings werden immer noch alle anderen Geräte, die ein "Auf" Befehl an die Gruppenadresse des AKU schicken, die Prozentwerte in Richtung 0% treiben.

Deswegen muss auch in Home Assistant das Verhalten noch angepasst werden. Die KNX Integration in Home Assistant invertiert von sich aus bereits die Prozentwerte für KNX damit zumindest hoch/runter das gleiche bedeuten. Nachdem wir aber jetzt alles vertauscht haben, müssen wir das Home Assistant wieder austreiben. Deswegen wird als letzter Schritt das `inverted_position` flag in HA gesetzt (also quasi eine "doppelte" Invertierung):

```yaml
cover:
- name: "Schlafzimmer"
  stop_address: "2/2/230"
  position_address: "2/2/231"
  position_state_address: "2/2/232"
  invert_position: true
```

Und das wars auch schon. Wir haben endlich ein komplett einheitliches Verhalten. Wie bisher auch, fährt "Auf" am Taster und "Auf" in HA den Rollladen tatsächlich nach oben. Sowohl auf dem Tasterdisplay als auch in HA wird der Rollladen auch als "offen" dargestellt. Neu ist, dass nun sowohl am Taster als auch in HA der Prozentwert 100% angegeben wird. Schickt man jetzt 0% über KNX oder HA (oder Alexa) an den Rollladen, fährt dieser komplett nach unten. 🥳 

![[KNX-HA-Real-Same2-Marked.png|KNX-HA-Real-Same2-Marked.png]]


### ⚓ Andere Ansätze

Ich hatte zuerst [diesen Beitrag](https://community.home-assistant.io/t/cover-entities-that-are-0-open-and-100-closed/581979) gefunden, der eine inverse dummy Entity via Automation in HA erstellt:  Diese Lösung invertiert alles in HA, so dass 0% oben und 100% unten bedeutet. Das Klang zuerst vielversprechend aber man hat dann viele redundante entities in HA. Außerdem ist die Visualisierung in HA dann falsch, denn auch hier bedeutet 0% immer noch unten. Also keine komplett konsistente Lösung.

Andere Ideen wären noch ganz auf HA zu verzichten oder zu warten/hoffen bis es eine direkte Einstellmöglichkeit gibt. Eventuell gibt es auch andere KNX Geräte, die Prozentinvertierung direkt unterstützen aber das ist für bestehende Anlagen auch keine Lösung. 

Nach meiner bisherigen Erfahrung ist die oben genannte Lösung die einzige, die wirklich komplette Konsistenz über alle Ansichten schafft. Allerdings auch nur, wenn alle Sender von Befehlen das vertauschen können. In meinem Fall sind das nur HA und der MDT Taster also Glück gehabt.  

