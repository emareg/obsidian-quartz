---
title: Tesserakt
type: essay
author: Emanuel Regnath
lang: de
date: 2010-01-29
share: true
category: projects
imgage: res/img/tesserakt/hypercube.gif
permalink: tesserakt
---

<small>Der folgende Text ist Größtenteils ein Auszug aus meiner Facharbeit in Mathematik „Computersimulation eines vierdimensionalen Würfels“, eingereicht am 29. Januar 2010.</small> $\renewcommand\ma[1]{\boldsymbol{#1}}$

Das Wort Tesserakt stammt von der Griechischen Bezeichnung „τέσσερεις ακτίνες“ („tésseris aktínes“) und bedeutet etwa „vier Strahlen“, weil immer vier „Strahlen“ an einem Eckpunkt zusammentreffen. Damit ist der Tesserakt die Verallgemeinerung des klassischen Würfels auf vier Dimensionen und verhält sich zum Würfel, wie sich der Würfel zum Quadrat verhält. Das bedeutet, dass bei jedem Eckpunkt des Tesserakts vier Kanten zusammenlaufen, die alle senkrecht aufeinander stehen und jeweils vier Kanten ein Quadrat bilden. Jeweils sechs solcher Quadrate bilden wiederum einen normalen dreidimensionalen Würfel. Der Tesserakt besteht also insgesamt aus 8 Würfeln, 16 Ecken, 32 Kanten und 24 Quadraten. Der vierdimensionale Würfel ist auch noch unter den Bezeichnungen 8-Zeller, 4-Kubus und Hyperwürfel bekannt, allerdings ist ein Hyperwürfel definiert als ein n-dimensionales Analogon des zweidimensionalen Quadrates mit $n \ge 4$ und muss somit nicht unbedingt vierdimensional sein, auch wenn oft der Tesserakt damit gemeint ist.

<figure>
<img src="res/img/tesserakt/tesserakt-construction.png"> 
<figcaption>Konstruktion eines Tesserakts</figcaption>
</figure>



## Rotationsmatrizen
Eine Rotationsmatrix ist eine Matrix die verwendet wird, um auf einfache Weise einen Vektor
um den Ursprung zu drehen. Dazu wird der Vektor mit der Rotationsmatrix multipliziert. Die
2D-Rotationsmatrix für Rotationen in einer Ebene XY ist: 

$$%
\ma R_{xy} = \begin{bmatrix} 
	\cos (θ) & -\sin (θ) \\ 
	\sin (θ) & \cos (θ) 
\end{bmatrix}
$$

Mit dieser 2D-Rotationsmatrix können allerdings auch nur Punkte in der zweidimensionalen
Ebene gedreht werden. Da allerdings Punkte grundsätzlich in Ebenen gedreht werden, ist dies
die Basisrotationsmatrix und kann leicht auf höhere Dimensionen erweitert werden.

Im dreidimensionalen Raum drehen wir einen Würfel um eine Rotationsachse und es gibt drei Rotationsachsen die orthogonal zueinander stehen. Folgt man diesen Überlegungen stellt man fest, dass im vierdimensionalen Raum sechs zueinander orthogonale Rotationsebenen möglich sind.

Die Rotationsmatrix $\ma R\_{xy}$ dreht einen Punkt in der XY Ebene und um die ZW Ebene, während die Rotationsmatrix $\ma R\_{zw}$ einen Punkt in der ZW Ebene und um die XY Ebene dreht.


$$%
\ma R_{xy} = 
	\begin{bmatrix} 
		\cos (θ) & -\sin (θ) & & \\ 
		\sin (θ) & \cos (θ) & & \\
		& & 1 & \\
		& & & 1\\
	\end{bmatrix}
\qquad\qquad 
\ma R_{zw} = 
	\begin{bmatrix} 
		1 & & &\\
		& 1 & &\\
		& & \cos (θ) & -\sin (θ)\\ 
		& & \sin (θ) & \cos (θ)\\
	\end{bmatrix}
$$


Die beiden Vorzeichen der Sinusfunktionen innerhalb der Matrizen bestimmen dabei die Dreh-
richtung.


## Projektion
Da ein Tesserakt Punkte besitzt, die nicht im dreidimensionalen Raum liegen, lässt er sich im dreidimensionalen Raum nicht vollständig konstruieren. Will man nun einen Tesserakt darstellen, muss man sich ein maximal dreidimensionales Abbild des vierdimensionalen Kubus erstellen. Dazu projiziert man den Tesserakt auf den dreidimensionalen Raum und erhält das dreidimensionale Abbild – sozusagen den Schatten der vierten Dimension.
Bei einer geometrischen Projektion werden alle Punkte des $n$-dimensionalen Raumes auf Punkte eines $(n-1)$-dimensionalen Raumes, dem Projektionsraum, abgebildet. Es wird praktisch ein –
um eine Dimension verringertes – Abbild eines Körpers erzeugt.

<figure>
 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Zentralprojektion.jpg">
 <figcaption><p>Zentralprojektion.<a href="https://commons.wikimedia.org/wiki/File:Zentralprojektion.jpg">[Quelle]</a>.</p></figcaption>
</figure>

Dieses Verfahren lässt sich nun auf vier Dimensionen erweitern. Bei der Projektion werden die
Koordinaten aller Punkte des vierdimensionalen Raumes um eine Dimension reduziert. Die zu
reduzierende Dimension ist bei allen Punkten gleich. Deswegen kann man die vierdimensionale
Projektion in einzelne, zweidimensionale Projektionen unterteilen, bei denen jeweils eine der
drei Koordinaten des Bildpunktes berechnet wird.
Die Projektionsgleichungen sind

$$
x' = \frac{x \cdot f}{f+d} \qquad y' = \frac{y \cdot f}{f+d} \qquad z' = \frac{z \cdot f}{f+d}
$$
wobei $f$ der Abstand zwischen dem Projektionszentrum und Projektionsfläche ist, $d$ der Abstand zwischen Punkt und Projektionsfläche und
$x,y,z$ die X, Y, und Z-Koordinate des Bildpunktes.

Bei diesen drei Projektionsgleichungen wird jeweils die W-Koordinate „herrausgerechnet“, indem die Koordinaten $x,y,z$ durch Abstand $d$, welcher die relative W-Koordinate zum Projektionsraum darstellt, geteilt werden. Dadurch rücken Punkte, die weiter weg sind (größeres d) weiter in die Mitte des Projektionsraumes und das Bild erscheint dadurch kleiner.


## Simulation
Nachdem das Programm <a href="/res/app/Tesserakt.jar">Tesserakt.jar</a> mit Java (JRE) gestartet wurde, öffnet sich das Hauptfenster. Auf der
linken Seite ist das Bildfeld, in dem das Abbild des Tesserakt gezeichnet wird und das den
Großteil des Fensterinhalts füllt. Auf der rechten Seite befindet sich das Steuerungsmenü für die
Simulation. Die oberen drei Schaltflächen sind die Hauptbedienungselemente. Mit der ersten
Schaltfläche „▶/||“ wird die Simulation gestartet oder gestoppt. Die zweite Schaltfläche „Reset“
setzt die Simulation auf den Anfangszustand zurück. Die dritte Schaltfläche „Step“ berechnet
den Simulationsablauf für eine Sekunde und führt diesen sofort aus. Die Rotationsgeschwindigkeiten, mit denen der Tesserakt um die einzelnen Rotationsebenen gedreht werden soll, lassen
sich über Schieberegler unterhalb der Schaltflächen einstellen und sind in Grad pro Sekunde angegeben. Neben den Rotationsgeschwindigkeiten lassen sich mit weiteren Kontrollkästen noch
die Diagonale einzeichnen oder der Stereo-Modus aktivieren, bei dem ein stereoskopisches
Doppelbild des Tesserakts in das Bildfeld gezeichnet wird. Der 3D Effekt tritt dabei nur mit einer aufgesetzten 3D-Brille (Anaglyph) ein.

<div class="row">
<figure class="col-12 my-0">
 <img class="col-sm-10" src="res/img/tesserakt/tesserakt-simulation.png">
 <figcaption><p>Screenshot of Simulation.</p></figcaption>
</figure>
</div>

## Ausblick

Wer jetzt glaubt, dass die vierte Dimension nur eine mathematische Spielerei ohne weiteren
Nutzen sei, der liegt hier gänzlich falsch. Einige Denkspiele wurden auf die vierte
Dimension erweitert, um den Schwierigkeitsgrad zu erhöhen und neue Denkweisen zu eröffnen.
So kann man beispielsweise „Vier gewinnt“ oder „Minesweeper“ in vierdimensionaler Ausführung spielen. Es wurde auch der Zauberwürfel als Java Simulation für die vierte, bzw.
fünfte Dimension programmiert und von Menschen gelöst . Zugegeben, diese Anwendungsbeispiele könnten noch unter die Kategorie „Spielerei“ fallen. Allerdings ist die vierte Dimension auch in der Physik von großer Bedeutung. So kann die Zeit als fortlaufende Koordinate der 4. Dimension betrachtet werden. Auch die
Mathematik benötigt mehr Dimensionen, um Funktionen, die mehr als zwei Parameter haben
graphisch darstellen zu können. Und vor allem eine der jüngsten, noch sehr umstrittenen, aber
hoch interessanten Theorien – die Stringtheorie – die die Existenz von Räumen bis zur 10. Dimension voraussetzt, macht natürlich enormen Gebrauch von Berechnungen in vier- oder mehr-dimensionalen Räumen. So wie es aussieht, wird die vierte Dimension auch in Zukunft ein Thema von Bedeutung sein; und wenn nicht speziell die vierte Dimension, dann auf
alle Fälle allgemein höhere Dimensionen, welche der Physik und anderen Wissenschaften Tore
zu neuen Ideen und Erklärungen öffnen. Auch wenn der Körper des Menschen sich nur in den
drei Raumdimensionen bewegen kann, so ist sein Geist in der Lage auch höhere Dimensionen
zu erforschen und dadurch neue Erkenntnisse zu erlangen.

