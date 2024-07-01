---
type: concept
tags:
  - precision
  - recall
author: Emanuel Regnath
date: 2023-08-16
lang: en
share: true
category: info
---

There are two error types in classification problems: False positives (FP) and false negatives (FN). I find it more convenient to think in **False Alarms** (FP) and **Missed Hits** (FN).

![[Pasted image 20240701120405.png|Pasted image 20240701120405.png]]

> [!example] Example: “Is a person infected?” 
> → classify each person into infected/healthy
> * Error 1 (FP), False Alarm: classify "infected" but is healthy
> * Error 2 (FN), Missed Hit: classify "healthy" but is infected

Classification tests can be tuned to favor one error over the other:

* Favor *false alarms*: HIV test → You do not want to miss an infected person
* Favor *missed hits*: Airbag trigger → You do not want an exploding airbag in your face when driving normally

For example, the sensor in the car for triggering the airbag is designed to favor *missed hits* but almost never produce a *false alarm*. Thus, the airbag may only trigger 50% of the time when having a bad accident but should never trigger when bumping into a pot hole. The rationale is that an airbag that unexpectedly explodes into your face during normal driving leads to accidents in over 50% of the time.