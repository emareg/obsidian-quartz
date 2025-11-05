---
title: Komplexe KNX/MDT Rollladen Steuerung mit nur einer Taste
type: essay
author: Emanuel Regnath
lang: de
date: 2025-11-02
share: true
category: projects/smart-home
---

Hier ist eine Lösung, um mit einer Taste einen Rollladen automatisch in bestimmte Positionen fahren zu lassen *UND* manuell jederzeit stoppen zu können.
Mein Setup: MDT Taster Smart 86 (≙Glastaster II) und MDT Universalaktor.

### 🧩 Problem: Auf/Ab muss abgewartet werden. 

Standardmäßig nutzt man bei MDT die Zweitastenfunktion für Rollos, welche für Auf und Ab jeweils eine separate Taste anbietet und in der Mitte den Positionsstatus anzeigt. Das ist sehr intuitiv. Der Nachteil ist jedoch, dass man warten muss, wenn man das Rollo an einer bestimmten Position dazwischen stoppen möchte, da man dafür im richtigen Moment eine der beiden Tasten erneut drücken muss (Single Object Control).

### ⚠️ Bisheriger Lösungsansatz: Separate Werte/Szenen Taste

Wenn man eine Position häufiger braucht, wie z.B. "80% geschlossen" damit noch etwas Licht rein kommt, dann lohnt es sich diese auf eine separate Taste zu legen. Diese kann man dann einmal antippen und sofort wieder weggehen, da das Rollo automatisch an der richtigen Position stoppen wird. Mit der "Werte durchschalten" Funktion lassen sich sogar bis zu 4 Werte ansteuern also z.B. 0%, 40%, 80% und 100%. Soweit so gut. Außer die Sonne blendet dann immer noch und man möchte doch ein kleines Stück weiter runter fahren. Dann braucht man wieder die zwei Tasten Auf und Ab zum nachjustieren. Möchte man also beides, muss man 3 Tasten auf seinem Glastaster dafür belegen. Okay, es geht auch mit 2 Tasten wenn man die Einzeltastenfunktion nutzt oder manuelle Auf/Ab über kurz/lang auf eine Taste legt. Aber geht das nicht noch besser?

### 💡 Neue Lösung: Eine Taste für Alle Funktionen!

Die Lösung ist eine Kombination aus "Werte durchschalten" und langer Taste auf "Single Object Control" und erlaubt es bis zu 5 Positionen direkt anzufahren und jederzeit stoppen zu können. 

Anleitung: Im MDT Universalaktor aktiviert man "Auf/Ab kann stoppen (Single Object Control)" und das Kommunikationsobjekt (KO) für "absolute Position". Im MDT Taster (Smart86/Glastaster II) definiert man eine Einzeltaste als "Werte senden / Werte umschalten". Ich nutze z.B. die 3 Prozentwerte 25%, 50%, 75%. Danach aktiviert man die "lange Taste", und setzt diese auf "AUS senden auf zweites Objekt". 

![[Pasted image 20251104191233.png|Pasted image 20251104191233.png]]

Dann verknüpft man das KO "Prozentwert" mit der Absoluten Position des Rollos (bei mir GA 1/2/131) und das KO der langen Taste mit der Gruppenadresse (GA) für Single Object Control vom Aktor. Hierbei gibt es eine Warnung aber nachdem beide Datentypen 1 Bit sind, funktioniert es trotzdem. Danach noch wie gewohnt "Status Prozentwert" vom Taster noch auf "Status aktuelle Position" vom Aktor (GA 1/2/132) und man ist fertig.

![[Pasted image 20251104193158.png|Pasted image 20251104193158.png]]

Ergebnis: Mit einem kurzem Tastendruck kann man jetzt 3 verschiedene Werte durchschalten, die automatisch angefahren werden. Man sieht die neue Position als Status im Display bevor das Rollo dort hin fährt. Wenn das Rollo steht und man drückt die lange Taste, fährt das Rollo komplett nach oben. Drückt man die lange Taste während das Rollo fährt (egal in welche Richtung), bleibt es an der aktuellen Position stehen! 🥳 Wer möchte, kann auch noch den 0% Wert beim durchschalten dazunehmen. Das ist aber nicht nötig, da das Rollo ja über die lange Taste auch ganz nach oben fährt. Für mich ist das eine smarte Lösung, die nur noch zwei kleine Nachteile besitzt:

1. Verzögerte Statusanzeige bei langer Taste: Drücke ich die lange Taste, bleibt die Statusanzeige vorerst unverändert auf der aktuellen Position, da ich keinen Wert auswähle sondern direkt einen "Auf" Befehl schicke. Bei der kurzen Taste sehe ich die neue Position als "Vorschau" bevor das Rollo dort hin fährt. Das ist leider kein konsistentes Verhalten. Vielleicht könnte MDT ein neues Feature aufnehmen, bei dem auch die lange Taste einen eigenen Statuswert definieren kann?
2. Die Steuerung ist nicht intuitiv und auch kein KNX Standard: Selber kann man sowas nutzen aber ein Gast braucht erstmal eine Erklärung. Einmal half auch das "Lange rechts unten drücken, dann fährt es hoch" nichts. Derjenige hat etwas zu kurz gedrückt und das Rollo fuhr weiter nach unten. Beim erneuten Versuch ist er auf die versteckte "Seite umschalten" Taste gekommen und war dann komplett verwirrt. Da hilft nur noch aufstehen und selber bedienen. Bei Übernachtungsgästen also weniger zu empfehlen oder man hängt eine komplette "Bedienungsanleitung" daneben. Ob die dann nochmal zu Besuch kommen? xD

Nachdem ich bisher stiller Leser in diesem Forum war und dadurch nützliche Infos bekommen habe, möchte ich hier meine Lösung als ersten Beitrag teilen. Ich hoffe die Erklärung ist hilfreich für alle, die auf ein MDT Setup setzen und gerne die Funktionalität ihrer wertvollen Glastaster Tasten auf der ersten Seite maximal ausreizen wollen 😉

Auf Beitrag Antworten?
https://knx-user-forum.de/forum/%C3%B6ffentlicher-bereich/knx-eib-forum/knx-einsteiger/2048450-mdt-glastaster-ii-rolladen-extra-langer-tastendruck-zum-beschatten