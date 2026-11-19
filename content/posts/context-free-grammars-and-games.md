---
title: "Context-Free Grammars and Games"
date: 2026-11-17T00:00:00Z
draft: false
math: true
---

I attended the latest Virtual Combinatorial Games Seminar. The speaker was Yusuke Inoue. I will cover his presentation, filtered through my flawed understanding.
https://sites.google.com/view/virtual-cgt/

He gave an example of a context-free grammar that looked something like this:
```
S -> TU
T -> aT | bT | a | b
U -> aUa | bUb | a | b
```

Then he described a game such that we could deconstruct a word using this grammar, which I'll represent with a tree. The depth of each leaf gives a nimber.
```
{S: abababa}
  {T: b, U: bab}
    {U: a}
  {T: bab, U: b}
    {T: ab}
      {T: b}
  {T: babab, U: a}
    {T: abab}
      {T: bab}
        {T: ab}
          {T: b}
```

*Edit: Yusuke clarified that the depth of each leaf does not give a nimber. I made this flawed connection because there is a connection to Grundy values.*

Yusuke acknowledged some restrictions, such as this method only working for impartial games. An impartial game is one where both players play by the same ruleset. More intuitively, those players may own pieces that only they can move. However, using a mutually recursive context-free grammar that swaps between two sets of rules, even this restriction seems unnecessary. I'm not sure this is a particularly interesting game, but an example might look like the following where $L$ and $R$ represent the rulesets relevant to the left and right player. 

```
S -> L
L -> xR | yRy | x | y
R -> xLx | Ly | x | y
```

*Edit: Yusuke clarified that alternating turns like this only was valid for linear grammars.*

One restriction that was harder to ignore was that a player had to evaluate a game to ensure it matched a context-free grammar, which felt very much like each player had to do most of the work necessary to solve the game for the winning moves. This really only seemed to be computationally elegant for linear regular grammars, which had a minimal lookahead.

I found Yusuke's paper, which may be worth a deeper look. For now, I'm using this talk to reflect on what a serialized form of Hackenbush should look like, and whether certain forms are more amenable to analysis. I apologize if I butchered his presentation and examples in this post - they were all from memory, mixed with some of my own commentary!
https://arxiv.org/abs/2609.00871
