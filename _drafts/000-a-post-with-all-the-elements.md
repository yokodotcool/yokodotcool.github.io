---
title: Test post with all the elements

last_updated: 2022-12-13
permalink: "/test"

categories:
- site

tags:
- doot
---

Bầu trời trong xanh thăm thẳm, không một gợn mây.
Almost before we knew it, we had left the ground.
ニューヨーク市のアッパー・ウエスト・サイドで生まれ育ち、現在はブルックリンのサンセット・パークに住んでいます。

`“Welcome to our village wee one,” Prime Minister Jacinda Ardern posted on Instagram.`

Sometimes it seems as if we’re living under a constant barrage of *heavy news*. But it isn’t all bad out there. This feature is meant to send you into the weekend **with a smile**, or at least a lighter heart. 

# H1s default to 2em, but sometimes they default to 1.5em

It defaults to 1.5em when the H1 is inside a `article`, `aside`, `nav`, or `section`. At least, with Chrome it does :x

## H2 - Defaults to 1.5em. 

A collection of around 500 mature giant sequoias, some of the oldest living things in the world, is open to visitors again after the largest restoration project in Yosemite’s history. <mark>And this is what a highlight looks like.</mark>

### H3 New Zealand’s prime minister became the first world leader in almost three decades to give birth while in office.

“Welcome to our village wee one,” Prime Minister Jacinda Ardern posted on Instagram.

The last world leader to deliver a baby while in office was Benazir Bhutto of Pakistan, who had her second child, a daughter, in 1990. That daughter, Bakhtawar Bhutto Zardari, congratulated Ms. Ardern on Twitter on Thursday.

<small>Small text: Ms. Ardern will take six weeks of leave before returning to work. She announced her pregnancy three months after a surprise election victory, and the news prompted an international reckoning about the rarity of pregnant women in the corridors of power.</small>

#### An H4 - Defaults to 1em

##### An H5 - .83em

###### An H6 - .67em

This is what an ordered list looks like ([text from this article](https://canoe.com/news/weird/12-year-old-young-jackson-pollock-has-art-exhibit-in-manhattan)):

1. NEW YORK — Cynics who view pricey abstract art and scoff “a kid probably painted that” are finally right.
2. At just 12 years old, Xeo Chu is setting sales records with his colourful, abstract paintings, which are selling for more than US$150,000 and are being compared to works by reknown American artist Jackson Pollock.
3. Now the seventh grade student from Vietnam is hosting his first solo exhibition, at the George Berges Gallery in Manhattan’s upscale SoHo neighbourhood. The exhibition titled Big World, Little Eyes, which opened on Thursday and runs through Jan. 2, comes years after the artist who started painting at age four made his first sale.

Dope animals: 
- Panda
    - Use a tab in the code to nest a list item
- Cat
- Bird
- Shark
- Bugs, all kinds

<aside>
    <p>This is what an <code>aside</code> looks like</p>
    <p>
        I noticed that <a href="https://robinsloan.com">Robin Sloan</a> separates the act of publishing his content to the web from the act of sharing that content with others. In the newsletters that he (quite infrequently) sends, he includes a short list of recent-ish developments in his world of content creation. And then when I click through I'll sometimes find that there's even more new stuff that I hadn't seen before. 
    </p>
    <p>
        The email is a vehicle for content discovery, and because he has more control over the vehicle itself, he's able to editorialize and annotate. I'm so intrigued by this format and the pacing for sharing it allows!
    </p>
</aside>


![An image of a cat that is really big](http://placekitten.com/1000/750)
<small>A big image embedded using Markdown (gets encapsulated in a <code>p</code>)</small>

<figure>
    <img src="http://placekitten.com/1000/750" alt="An image of a cat that is really big">
    <figcaption>
        A big image using <code>figure</code> and <code>figcaption</code>
    </figcaption>
</figure>

<figure>
    <img src="http://placekitten.com/60/60" alt="An image of a cat that is smaller than a viewport">
    <figcaption>
        A small image using <code>figure</code> and <code>figcaption</code>
    </figcaption>
</figure>

{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

