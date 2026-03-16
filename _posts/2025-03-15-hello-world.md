---
layout: post
title: "Testing the design"
date: 2025-03-15
---

This post exists to test every visual feature of the blog — typography at
reading length, images, code blocks, links, and the aside column. If
everything looks right here, the design is working.

## Typography

A paragraph of body text at normal reading length. The font is Georgia, set
at 17px with a line-height of 1.8. That combination gives the text enough
room to breathe without feeling airy. The warm green background and dark
text create a lower contrast than pure black on white — easier on the eyes
for longer reading sessions.

<aside markdown="0">
Georgia was designed by Matthew Carter in 1993 specifically for reading on
low-resolution screens. It remains one of the best choices for body text on
the web.
</aside>

Here is a paragraph with [a link to somewhere](https://example.com) to test
the link color and hover state. Links use the coffee brown from the palette
— distinct from the body text but not jarring. Hover over it to see the
subtle background highlight.

## Code

Inline code looks like this: `const greeting = "hello"`. It sits quietly
in the flow of the text using the same warm background tint as code blocks.

<aside markdown="0">
<code>parse_block_html: true</code> must be set in <code>_config.yml</code>
for HTML tags like <code>aside</code> to work inside Markdown files.
</aside>

A fenced code block:
```javascript
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("world"));
```

The block uses the same `--bg-code` variable as inline code, so both
respond correctly when switching between light and dark mode.

## Images

An image below sits full-width in the main column. Below it is an example
of an image inside an aside — smaller, with a caption, anchored beside a
paragraph of text.

![A placeholder image](https://picsum.photos/seed/blog/660/340)

<aside markdown="0">
<img src="https://picsum.photos/seed/aside/220/140" alt="aside image">
Images in the aside column stretch to fill the 220px column width. Keep
them simple — small details are lost at this size.
</aside>

This paragraph sits beside the aside image above. The aside is anchored to
the top of the grid row created by this paragraph. If this paragraph is
taller than the aside, the aside floats at the top and the extra space
below it stays empty. The main column always controls the vertical rhythm.

## Blockquote

> The best writing feels inevitable in retrospect — like the words could
> not have been arranged any other way.

A blockquote uses a left border in the muted border color and italic text
in the muted tone. It recedes from the main text without disappearing.

## The toggle

Hit the **toggle theme** button in the top right to switch between moss
(light) and dark forest (dark). All colors are CSS variables — the switch
is instant with a 0.2s transition on background and color.