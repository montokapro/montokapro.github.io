---
title: "Euclid games"
date: 2026-11-19T00:00:00Z
draft: false
math: true
---

What other games are related to the Stern-Brocot Tree? The first result I could find was [Euclid, Calkin & Wilf – Playing with rationals](https://ems.press/content/serial-article-files/45350?nt=1). The Calkin-Wilf tree is identical to the Stern-Brocot tree, except the ordering of elements at each depth is different.

The game *Euclid* is impartial - the ruleset and pieces are identical for each player. It is highly reminiscent of Nim. Players take turns decreasing the sizes of two heaps. A player must decrease the size of the larger heap by a multiple of the smaller heap on their turn. Play is standard - the first player unable to make a move loses.

There is a winning strategy that is tightly tied to the golden ratio. If the larger heap is a multiple of the smaller heap, you can force a loss for the other player. Beyond that if the size of the larger heap is greater than $\phi$ times larger than the smaller heap, your best move is to take the maximum from the larger heap. If the size of the heap is less than $\phi$ times the size of the smaller heap, your best play is take just under the maximum from the larger heap.

The paper expands upon this game by pointing out the connection to the continued fraction representation and the winning strategy.

One thing unique about this paper is that it defines a probability. Even though the game is deterministic, it performs an analysis on all of the starting positions within some bounds, and then specifies the probablility that the first player would win (specifically $\frac{1}{\phi}$).