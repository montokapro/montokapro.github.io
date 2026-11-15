---
title: "Christoffel Surreals: Second Attempt"
date: 2026-11-14T00:00:00Z
draft: false
math: true
---

I'd like to give some rationale for a previous labeling of surreal values for Christoffel turn orders.

## Labeling our stalks

Given player $n$, $t_n$ is the number of turns for that player and $s_n$ is the value of a Hackenbush stalk for that player. For a two player game, we'd like to preserve the following invariant.

$$
t_0 \times s_0 + t_1 \times s_1 = 0
$$

There are two particularly obvious and meaningful solutions. In both solutions we'll evaluate from the standpoint of player $0$, so we'll use a positive value for player $0$ and a negative value for player $1$.

$$
s_0 = \frac{1}{t_0} \quad s_1 = -\frac{1}{t_1}
$$
$$
s_0 = t_1 \quad s_1 = -t_0
$$

Originally I began with the fractional labeling, but I've found the second labeling appears to better map to triadics for $t_0 + t_1 = 3$, as it eliminates a linear factor on the denominator.

$$
\frac{n}{(t_0 + t_1)^k}
$$

I use the labels $u$ and $v$ for $t_0$ and $t_1$ respectively, to follow the convention of the literature on Christoffel words.

## Connecting Hackenbush and Surreals

It appears that we do not need to adjust the notation of surreals based on its context of $u$ and $v$. We only need to adjust the labeling and abandon the canonical forms, because both are dependent on the turn order.

We'll analyze red-blue-green Hackenbush, thus extending beyond the surreal numbers to explore other positions. We will generate all Hackenbush tree games reachable in two generations.

### Generation 0

We begin at a familiar place. The first play always loses, regardless of the turn order and where one is in a round. Only the root node exists.

$$
\{ \mid \} = 0
$$

### Generation 1

At generation 1, we introduce one red, green, or blue branch. The label of the red and blue branch is dependent on the number of turns per player in a given round.

![generation 1 - root](a.svg#center)

$$
\{ \mid 0 \} = -u \quad \{ 0 \mid 0 \} = \ast \quad \{ 0 \mid \} = v
$$

For an strictly alternating turn order of $u = 1$, $v = 1$, we get the traditional mapping of Hackenbush onto the surreals.

### Generation 2

For generation 2, we have two places where we can extend the tree. If we extend from the root there are six additional games we can play.

![generation 2 - root](c.svg#center)

$$
\{ \mid -u \} = -2u \quad \{ -u \mid -u \} = \ast - u \quad \{ -u \mid v \} = \frac{v - u}{u + v}
$$
$$
\{ \ast \mid \ast \} = 2\ast \quad \{ v \mid v \} = v + \ast
$$
$$
\{ v \mid \} = 2v
$$

If we extend the game via the last branch node, we get nine additional games.

![generation 2 - branch](b.svg#center)

$$
\{ \mid -u \} = -2u \quad \{ -u \mid -u \} = \ast - u \quad \{ -u \mid 0 \} = \frac{- u}{u + v}
$$
$$
\{ 0 \mid 0, \ast \} = \downarrow\ast \quad \{ \ast \mid \ast \} = \ast2 \quad \{ 0, \ast \mid 0 \} = \uparrow\ast
$$
$$
\{ 0 \mid v \} = \frac{v}{u + v} \quad \{ v \mid v \} = v + \ast \quad \{ v \mid \} = 2v
$$

## Further states

Once we extend beyond this point, my understanding gets murkier. There are clearly some analogs to confused games, but it is unclear to be how exactly they behave given that $u$ and $v$ are of different magnitudes.

The simplicity rule and canonical forms no longer make sense without a round structure to ground them.

Still, it does seem likely that many of the rules that govern the surreal games should continue to hold.

$$
\{ -u \mid \ast \} = \downarrow - u
$$

$$
\{ \ast \mid v \} = v + \uparrow
$$

It is certainly odd that $u$ and $v$ when represented in surreal game sets no longer directly describe the number of options available to a player. They act more ordinal in nature.
