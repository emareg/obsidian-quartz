---
title: The 37% Stopping Rule
author: Emanuel Regnath
lang: en
share: true
category: mind
---
👨‍🔬 E. Regnath · 📆 Jun. 2023 · 🧪 v-0.2

How to choose wisely if you know little: *Observe* 25%–37% of options, then *select* the next best.

The optimal strategy for selecting the best car, phone, or romantic partner is easy to follow and proven by math – yet known by few. If $N$ is the number of options, $T$ the maximum time to decide, and $P$ the probability that you get the option if you select it, we can derive the optimal strategies that are shown in the following table. 

| Condition        | Problem    | Strategy                             |     |
| ---------------- | ---------- | ------------------------------------ | --- |
| Known $N, P=1$   | Interviews | Observe 37% of $N$, choose next best |     |
| Known $T, P=1$   | Purchasing | Observe 37% of $T$, choose next best |     |
| Known $T, P=0.5$ | Marriage   | Observe 25% of $T$, choose next best |     |

* **Known $N$ and $P=1$:** This is called the *secretary problem* in which you interview $N$ applicants for a secretary position and need to decide to reject or accept each applicant directly after the interview. $P = 1$ means that an applicant will take the job if you make an offer. The optimal strategy to maximize the chance for selecting *the* best candidate
* **Known $T$ and $P=1$:**  If the number of options is unknown, we can apply the same rule to the timeframe we have: Observe options (as they come in) for 37% of the time, then select.

> [!note] Good Choice Variant:
> If the goal is to maximize the chance for a good selection instead of the chance of hitting the best choice, a shorter observation ratio of 25% is better.


## 📚 References
* Algorithms to Live By: The Computer Science of Human Decisions, 2017
* [Up and Atom: “When to Quit”, YouTube](https://youtu.be/tVRGadNoHC0) 
