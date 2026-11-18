---
title: "Christoffel Counterexample - Deceptive Signs"
date: 2026-11-16T00:00:00Z
draft: false
math: true
---

I'd like to write out a problematic example from my last post, and it explain why I think it further invalidates the idea of Christoffel Hackenbush.

I considered the following ruleset.
- When a player can't make a turn, their turn is removed from the turn order.
- When a player has no turns in the turn order, they lose.

I required that the following invariants would hold:
- A value of 0 means the first position to move is the first position to go out- A positive value means the player 1 will lose all of its turns first.
- A negative value means the player 0 will lose all of its turns first.

This means that a $011$ game would degrade into a $01$ game when player $1$ can't take a turn. This is a property I was hoping to work toward, such that more complex games could degrade into simpler ones.

While this did fix problems with single color stalk games, it didn't resolved problems with multi-color stalk games.

Recall the following, which suggested that a red stalk was worth $-1$, and a ble stalk was worth $2$ in a $011$ turn order.

![single stalks](a.svg#center)

Also recall that a blue-red stalk was worth $\frac{2}{3}$.

![double stalks](b.svg#center)

Now consider this position. This should be valued at $-\frac{1}{3}$ to be consistent with other evaluations and assuming positions can be added. Yet, red _still_ loses under the modified ruleset.

![negative position](c.svg#center)

It certainly appears that the problems of collusion found under n-player games can be expressed even more simply with unequal turn orders - no collusion is needed to make addition of positions difficult.

I'll probably take a break from this line of thought for a while to read more literature.