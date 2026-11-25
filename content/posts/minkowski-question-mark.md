---
title: "Minkowski Question Mark Function"
date: 2026-11-23T00:00:00Z
draft: false
math: true
---

I've spent significant time exploring both the surreal and Stern-Brocot tree structures, but I haven't spent a lot of time connecting the dyadic and positive rationals they both encode. Luckily such a connection already exists, and it was found by the same research who studied light cones and quantum fields, the diagrams of which you may recognize.

![spacetime](https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/World_line.svg/960px-World_line.svg.png?utm_source=simple.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail#center)

The connection between quantum mechanics and number theory isn't unexpected at this point. Much of what we have been doing is building the concept of rationals from discrete quantized values.

## The question mark function

The question mark function connects the quadratics irrational numbers to the rational numbers, and also the rationals to the dyadic rationals. We are only interested in the latter. The function describes a nearly continous and strictly increasing fractal line. Thus this function preserves the order as you swap between values on the two trees.

![question-mark function](https://upload.wikimedia.org/wikipedia/commons/6/64/Minkowski_question-mark_function.gif?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled#center)

Specifically this function has a relationship with the mediant used to construct the Stern-Brocot tree.

$$
\begin{align}
?\left(\frac{0}{1}\right) &= 0 \\
?\left(\frac{p + r}{q + s}\right) &= \frac{1}{2}\left(?\left(\frac{p}{q}\right) + ?\left(\frac{r}{s}\right)\right) \\
?\left(\frac{1}{0}\right) &= \infty
\end{align}
$$

When applied to all nodes of the Stern-Brocot tree, we get the positive half of the surreal number tree. I've added a Minkowski view to the stern brocot tree application, such that you can see this for yourself. Because I have extended the tree to the negatives using matrix inverses, you have access to both halves of the surreal tree! 

https://github.com/montokapro/stern-brocot/releases/tag/v2.1.0

## References

[Wolfram](https://mathworld.wolfram.com/MinkowskisQuestionMarkFunction.html) was very helpful in helping me understand the connection between the dyadic and positive rationals.