---
title: "Christoffel Counterexamples"
date: 2026-11-15T00:00:00Z
draft: false
math: true
---

There is a problematic counterexample that suggests imbalanced turn orders do not fit with much of the surreal game theory.

A single branch of player $0$ is worth $t_1$ which is the number of turns that player $1$ takes in a round. So, with a turn order of $001$, a single blue branch is positive, and yet after a two turns in a row player $0$ will lose.

This isn't a new counterexample to me. I instead have been looking at how to create postions with value $0$, such that the first player who moves loses.

While so far I haven't been able to find any counterexamples, the converse is less certain. It may be possible to create a non-zero position such that the first player always loses.

Consider a forest of stalks $R+RB+BRR$ under a turn order $011$. The first player will always lose. Yet the value of this position doesn't seem to be zero.

$R+RB$ is expected to be $-\frac{4}{3}$. But $BRR$ is a bit ambiguous in its evaluation. Should it be $v + 2 \times \frac{-u}{u+v}$ because player $1$ gets to move twice in a row after player $0$? Or should we consider a lesser evaluation? This is likely a big problem with my approach. This is even more of an issue with turn orders like $01011$ where it is dependent on context whether player $1$ will get one turn or two after player $0$ moves.