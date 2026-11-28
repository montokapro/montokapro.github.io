---
title: "Left-pad Wasn't the Problem"
date: 2026-11-26T00:00:00Z
draft: false
math: true
---

When developers think of supply-chain attacks, the first instance they consider is the 2016 incident when Azer Koçulu removed the left-pad package from npm.

This package was relied upon by thousands of other packages, including React. Many large corporations like Facebook, Paypal, and Netflix relied on this transitive dependency. For two hours, the entire ecosystem was affected by outages. NPM responded by making the removal of packages impossible under many circumstances (this was the correct call). But the ecosystem soon after became beset by malicious replacements of packages instead of removals.

When people think back to this incident, a common takeaway is to limit the number of dependencies you rely on. By reducing the number of dependencies, you reduce the surface area for supply chain attacks.

Reducing the number of dependencies and relying on bespoke software is becoming more tenable with LLMs. Surely, the risks of supply chain attacks are mitigated now?

![xkcd blocks](https://imgs.xkcd.com/comics/dependency_2x.png#center)

I believe we took away the wrong lesson here. We now have more bespoke code with less security auditing. And developers, product managers, and c-suites are now running LLMs with unfettered access to their personal system and therefore all personal communication and infrastructure.

[It sure would be bad if Claude was compromised by a supply chain attack.](https://www.wired.com/story/trojan-malware-targets-thousands-of-anthropic-claude-developer-systems/)

What alternative is there though? Well, just as Rust has managed to fanaticize a large population of developers with its memory safety and therefore reduced attack surface, a [language built around object capabilities](https://tutorial.ponylang.io/object-capabilities/object-capabilities.html) is positioned to make the priniciple of least privilege equally trivial to implement. Once our languages enforce what capabilities a library requires, we have the information to know when upgrading is safe.

Most people do not understand Rust's linear (technically affine) type system, and they probably won't understand object capabilities. But they will understand the ease of use that comes from a principled approach. They will ask "could X have prevented this breach", and gradually momentum will build. Exciting times ahead.

PS: In the short term, please sandbox your agents. A fully containerized solution is perhaps best but I find a sandbox that shares your kernel to be a reasonable compromise between convenience and security. The Nix and Guix ecosystems make this quite tenable, such as this out of the box [solution](https://github.com/archie-judd/agent-sandbox.nix).
