---
title: "Stern-Brocot and Calkin-Wilf Swapped Matrix"
date: 2026-11-21T00:00:00Z
draft: false
math: true
---

What happens when we choose alternate multiplication matrices for traversing the trees?

## Representations

### Matrix

$$
L = \begin{pmatrix}
1 & 1 \\
1 & 0
\end{pmatrix} \quad
R = \begin{pmatrix}
0 & 1 \\
1 & 1
\end{pmatrix} \quad
L^{-1} = \begin{pmatrix}
0 & 1 \\
1 & -1
\end{pmatrix} \quad
R^{-1} = \begin{pmatrix}
-1 & 1 \\
1 & 0
\end{pmatrix}
$$

How does this definitional change affect tree traversal? This time we swap values before replacing!

#### Swapped Stern-Brocot

Moving left swaps the columns, then replaces the left column. Moving right swaps the columns, then replaces the right column.

$$
M \times L =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
1 & 1 \\
1 & 0
\end{pmatrix} =
\begin{pmatrix}
a + b & a \\
c + d & c
\end{pmatrix}
$$
$$
M \times R =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
0 & 1 \\
1 & 1
\end{pmatrix} =
\begin{pmatrix}
b & a + b \\
d & c + d
\end{pmatrix}
$$
$$
M \times L^{-1} =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
0 & 1 \\
1 & -1
\end{pmatrix} =
\begin{pmatrix}
b & a - b \\
d & c - d
\end{pmatrix}
$$
$$
M \times R^{-1} =
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
-1 & 1 \\
1 & 0
\end{pmatrix} =
\begin{pmatrix}
b - a & a \\
d - c & c
\end{pmatrix}
$$

#### Swapped Calkin-Wilf

Moving left swaps the rows, then replaces the top row. Moving right swaps the rows, then replaces the bottom row.

$$
L \times M =
\begin{pmatrix}
1 & 1 \\
1 & 0
\end{pmatrix}
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} =
\begin{pmatrix}
a + c & b + d \\
a & b
\end{pmatrix}
$$
$$
R \times M =
\begin{pmatrix}
0 & 1 \\
1 & 1
\end{pmatrix}
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} =
\begin{pmatrix}
c & d \\
a + c & b + d
\end{pmatrix}
$$
$$
L^{-1} \times M =
\begin{pmatrix}
0 & 1 \\
1 & -1
\end{pmatrix}
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} =
\begin{pmatrix}
c & d \\
a - c & b - d
\end{pmatrix}
$$
$$
R^{-1} \times M =
\begin{pmatrix}
-1 & 1 \\
1 & 0
\end{pmatrix}
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix} =
\begin{pmatrix}
c - a & d - b \\
a & b
\end{pmatrix}
$$

### Rationals

So, how does this affect the rationals? Not much, though the matrix representations are a bit different.

Each swapped matrix is its own transpose. In practice, this means you can approach the golden ratio by repeatingly multiply the same matrix, rather than "zigzagging" down the Stern-Brocot or Calkin-Wilf tree. 