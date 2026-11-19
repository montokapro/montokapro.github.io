---
title: "Context-Free Grammar for Hackenbush"
date: 2026-11-18T00:00:00Z
draft: false
math: true
---

I took a moment to reflect on what a context-free grammar for Hackenbush looks like. Here's what came of it. I'll only look at trees, for simplicity. There are rules for converting Hackenbush graphs into trees, minimally for green games.

## Green Hackenbush

An obvious context-free grammar for Hackenbush is one that represents a simple tree, which looks like:
```
S -> TS | ε
T -> (S)
```

Breaking this down, the first row is the starting rule and describes a list. $TS$ describes the cons-ing of a tree onto the list, and $\epsilon$ describes the nil list. The second row adds a closure in which we describe the nested tree. Apparently this grammar has the formal name **Dyck**, and is the language of balanced parentheses. Note that this grammar is *not* regular.

Each $S$ is a node, from which many $T$ edges are attached. Each edge $T$ leads its own node $S$. The tree represented by this grammer is ordered, despite thecommutative nature of the game. 

## Again, with color

Adding color is simple. We make the list heterogeneous, such that the closures are labeled. Using s-expressions would be equivalent here. $R$, $G$, and $B$ are characters, not labels of rules.

```
S -> TS | ε
T -> RSr | GSg | BSb
```

## Weak connection to Grundy values.

Neither of these constructions express interesting two player parsing games as described in the previous post. With Hackenbush, once an edge is chopped, we don't care about the rest of the graph. This would be like how with practical use of regular expressions we sometimes care that an expression matched, but don't care *how* it matched. In other cases we care about the exact rules that matched so we can extract a value.

Making a game out of parsing would require some ambiguity in the rules where we can decide how deeply to parse - this would correspond to choosing the branch to cut. The grammars I expressed are unambiguous. One could add ambiguity intentionally, but I am not sure how in a manner that doesn't add infinite rules to represent cutting at arbitrary depths.

Furthermore, the addition of colors doesn't work well with alternating turns. Again, fixing this feels like it could lead to an infinite set of rules, or rules that are dependent on the starting state. I don't see an elegant path to making this an interesting game to play.