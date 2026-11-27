---
title: "Christoffel Words with Negative Coprimes"
date: 2026-11-25T00:00:00Z
draft: false
math: true
---

We've extended the Stern-Brocot and related trees successfully in the upwards direction past the root. But we have not yet extended the Christoffel tree. Let's do that now.

## Bresenham's line algorithm

We've discussed previously how Christoffel words share a relationship with Bresenham's line algorithm, which is used to interpolate pixels between two points on a grid.

![brensenham](https://i.ytimg.com/vi/CceepU1vIKo/maxresdefault.jpg#center)

Under this interpretation, $a$ and $b$ represent steps as we traverse between the two points defining the line.

![reflection](https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-319-76285-2_6/MediaObjects/442685_1_En_6_Fig1_HTML.gif#center)

Inverse steps would then represent moving in the opposite direction of the coordinate system. And an inverse slope would represent moving backwards in one axis but not the other. Notice how in the above picture there are two traversals with the same slope. One traversal moves up and to the right in positive steps, and one moves down and to the right in negative steps.

$$
a = (1, 0) \quad \bar{a} = (-1, 0) \quad b = (0, 1) \quad \bar{b} = (0, -1)
$$

By extending to both positive and negative steps we now have four different ways to move from the origin $(0, 0)$ to points $(\vert{}x\vert{}, \vert{}y\vert{})$. We use a convention such that the path stays on the right-hand side of the vector, thereby flipping the Christoffel word under a double inverse.

$$
\begin{array}{c|c|c}
\textbf{Coprime Pair } (u,v) & \textbf{Slope} & \textbf{Christoffel Word} \\
\hline
(5, 3) & 3/5 & aabaabab \\
(-5, 3) & -3/5 & \bar{a}\bar{a}b\bar{a}\bar{a}b\bar{a}b \\
(5, -3) & -3/5 & \bar{b}a\bar{b}aa\bar{b}aa \\
(-5, -3) & 3/5 & \bar{b}\bar{a}\bar{b}\bar{a}\bar{a}\bar{b}\bar{a}\bar{a}
\end{array}
$$

## Properties

When we extend Christoffel words with integer coprimes $u$ and $v$, we still preserve the property where a word for $(u, v)$ has length $\vert{}u\vert{} + \vert{}v\vert{}$. However, we extend our allowed two by two matrices from $SL_2(\mathbb{Z})$ to $GL_2(\mathbb{Z})$, such that the determinant can be negative.

$$
\begin{align}
SL_2(\mathbb{Z}) &= \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \,\middle\vert{}\, a, b, c, d \in \mathbb{Z} \text{ and } ad - bc = 1 \right\} \\
GL_2(\mathbb{Z}) &= \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \,\middle\vert{}\, a, b, c, d \in \mathbb{Z} \text{ and } ad - bc = \pm 1 \right\}
\end{align}
$$

## Application

You can now explore this yourself in my latest version of my application. Enjoy!
https://github.com/montokapro/stern-brocot/releases/tag/v2.2.0

```
    View: christoffel | Swap: off | Inverse: off

    Path: → ←

                  ┌         ┐
                   xxxy╷xxy  
                       │     
                       ╵     
                  └         ┘
                       ↑
    ┌         ┐   ┏         ┓   ┌         ┐
     xxyxy╷xy       xxy╷xy       xxy╷xxyxy 
          │     ←      │      →     │      
          ╵            ╵            ╵      
    └         ┘   ┗         ┛   └         ┘
                       ↓
                  ┌         ┐
                   xyxyy╷xyy 
                        │    
                        ╵    
                  └         ┘

    [←↑↓→] Move | [V] View | [S] Swap | [I] Inverse | [R] Reset | [Q] Quit
```

## References

I skimmed the following articles, but have not had time to absorb them. They convinced me that there exists some conjugate of a Christoffel word that makes sense when traversing upwards on the Stern-Brocot tree. However I haven't verified that the construction I used matches the construction in these articles.

This article gave me some confidence that Christoffel words with negative coprimes were reasonable, especially when it stated the connection between matrix representations and Christoffel words. In **Proposition 5.1** we see the same inverse matrices we used for traversing upwards in the Stern-Brocot tree.
https://www.sciencedirect.com/science/article/pii/S0195669807000509

**Section 6** of this article describes two related slopes and describes the relationship between them. **Section 7** describes conjugate Christoffel words.
https://dmtcs.episciences.org/en/articles/15140/download

