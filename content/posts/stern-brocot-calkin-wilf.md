---
title: "Stern-Brocot and Calkin-Wilf"
date: 2026-11-20T00:00:00Z
draft: false
math: true
---

I have given a lot of attention to the Stern-Brocot tree, but not the Calkin-Wilf tree. The two are deeply connected. I'd like to make this connection clear.

## Representations

### Rationals

Both trees enumerate the rationals, but the order of elements varies at each depth.

![Tree comparison](https://www.px-pict.com/preprints/grundlagen/im17/a.gif)

The actual path through the tree is reversed. See how the path to $\frac{4}{7}$ is $LLRL$ on the Calkin-Wilf tree, and $LRLL$ on the Stern-Brocot tree.

### Matrix

Both the Stern-Brocot tree and the Calkin-Wilf tree can be described using matrices. Both matricies describe the same elements at each depth, but the elements are reordered at that depth. Both trees are binary trees. Each node of the tree is a matrix that looks like this.

$$
M = \begin{pmatrix}
a && b \\
c && d
\end{pmatrix} \quad rational(M) = \frac{a + b}{c + d}
$$

At depth $0$, both trees have the exact same root node, which is the identity matrix.

$$
I = \begin{pmatrix}
1 && 0 \\
0 && 1
\end{pmatrix} \quad rational(I) = \frac{1 + 0}{0 + 1} = 1
$$

The matrices we use to multiply and traverse down the tree are the same too.

$$
L = \begin{pmatrix}
1 && 0 \\
1 && 1
\end{pmatrix} \quad
R = \begin{pmatrix}
1 && 1 \\
0 && 1
\end{pmatrix}
$$

Even the matrices we use to walk up the tree instead of down are the same.

$$
L' = \begin{pmatrix}
1 && 0 \\
-1 && 1
\end{pmatrix} \quad
R' = \begin{pmatrix}
1 && -1 \\
0 && 1
\end{pmatrix}
$$

So what actually changes? Just like the you reverse the path to convert the address of a node from one tree to the other, you reverse the order of multiplication when you want to traverse via one tree instead of the other.

#### Stern-Brocot

Moving left replaces the left column of the result, and moving right replaces the right column.

$$
M \times L =
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix}
\begin{pmatrix}
1 && 0 \\
1 && 1
\end{pmatrix} =
\begin{pmatrix}
a + b && b \\
c + d && d
\end{pmatrix}
$$
$$
M \times R =
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix}
\begin{pmatrix}
1 && 1 \\
0 && 1
\end{pmatrix} =
\begin{pmatrix}
a && a + b \\
c && c + d
\end{pmatrix}
$$
$$
M \times L' =
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix}
\begin{pmatrix}
1 && 0 \\
-1 && 1
\end{pmatrix} =
\begin{pmatrix}
a - b && b \\
c - d && d
\end{pmatrix}
$$
$$
M \times R' =
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix}
\begin{pmatrix}
1 && -1 \\
0 && 1
\end{pmatrix} =
\begin{pmatrix}
a && b - a \\
c && d - c
\end{pmatrix}
$$

#### Calkin-Wilf

Moving left replaces the bottom row of the result, and moving right replaces the top row.

$$
L \times M =
\begin{pmatrix}
1 && 0 \\
1 && 1
\end{pmatrix}
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix} =
\begin{pmatrix}
a && b \\
a + c && b + d
\end{pmatrix}
$$
$$
R \times M =
\begin{pmatrix}
1 && 1 \\
0 && 1
\end{pmatrix}
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix} =
\begin{pmatrix}
a + c && b + d \\
c && d
\end{pmatrix}
$$
$$
L' \times M =
\begin{pmatrix}
1 && 0 \\
-1 && 1
\end{pmatrix}
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix} =
\begin{pmatrix}
a && b \\
c - a && d - b
\end{pmatrix}
$$
$$
R' \times M =
\begin{pmatrix}
1 && -1 \\
0 && 1
\end{pmatrix}
\begin{pmatrix}
a && b \\
c && d
\end{pmatrix} =
\begin{pmatrix}
a - c && b - d \\
c && d
\end{pmatrix}
$$
