---
title: "Inversing the Stern-Brocot Tree"
date: 2026-11-02T00:00:00Z
draft: false
math: true
---

Previously, I covered the surreals and Stern-Brocot trees. While the surreals covered the negative numbers, the typical Stern-Brocot tree construction did not. Let's explore the Stern-Brocot tree and see if we can do better.

## Representation Matters

Before we try to extend the tree, let's start with the most common representation. 

### Rationals

Typically, we represent nodes in the Stern-Brocot tree as rationals. The following are typical nodes:

$$
\frac{0}{1}, \quad \frac{1}{2}, \quad \frac{1}{1}, \quad \frac{2}{1}, \quad \frac{1}{0}
$$

If you are eagle-eyed though, you might notice that $\frac{1}{0}$ doesn't make sense! You can't divide by zero. If you view these as ratios, $0 : 1$ might not make sense either. Luckily, these are only the seed elements of the tree, and we never need to divide them or treat them as arithmetic ratios. 

### Matrix

If we use a matrix, we can use a single seed to generate the tree instead of $\frac{0}{1}$ and $\frac{1}{0}$. We can concatenate these together to get a matrix.

$$
\begin{pmatrix}
0 && 1 \\
1 && 0
\end{pmatrix}
$$

Hmm... that looks a lot like an identity matrix. Let's flip the column order and look at adjacent nodes in the tree.

$$
\begin{pmatrix}
1 && 0 \\
1 && 1
\end{pmatrix}, \quad
\begin{pmatrix}
1 && 0 \\
0 && 1
\end{pmatrix}, \quad
\begin{pmatrix}
1 && 1 \\
0 && 1
\end{pmatrix}
$$

If we add the rows together (numerator sum over denominator sum), these start to look like the rationals again!

$$
\frac{1 + 0}{1 + 1} = \frac{1}{2}, \quad \frac{1 + 0}{0 + 1} = \frac{1}{1}, \quad \frac{1 + 1}{0 + 1} = \frac{2}{1}
$$

## But what about the negatives?

The matrices for $\frac{1}{2}$ and $\frac{2}{1}$ are rather interesting... applying them to the identity matrix returns themselves by definition, and repeated applications are equivalent to descending the Stern-Brocot tree with the mediant.

What if we rotate these matrices? It turns out that applications of these matrices let us generate the negative numbers!

$$
\begin{pmatrix}
1 && 0 \\
-1 && 1
\end{pmatrix}, \quad
\begin{pmatrix}
1 && -1 \\
0 && 1
\end{pmatrix}
$$

This is easier to *feel* than to explain, so I've created a [rust terminal application](https://github.com/montokapro/stern-brocot) to that effect. With it you can explore the tree in four directions, beyond the usual two. You can also swap between matrix, fraction, and decimal representations. There is a bit more detail in the README.md as well. If this interested you, take a look!

