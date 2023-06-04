---
title: Why Aren’t We Dancing?

last_updated: 2022-12-18
permalink: "why-arent-we-dancing"

categories:
- projects
- featured

tags:
- dance
- video
- newsletters
- essays
- wawd
---

<div class="wawd">

<p>
    Why Aren't We Dancing? (WAWD) was an email newsletter about Youtube dance videos that I wrote in 2014–2015. If you'd like to read a little bit more about this project, <a href="#wawd-commentary">jump down to the commentary</a>. Otherwise, onward to ...
</p>

<h2 id="wawd-list">All past editions of WAWD</h2>
{% assign wawd_posts = site.categories.wawd %}

<p>
    {{ wawd_posts.size }} editions of WAWD, “remastered” for reading on this website. Ordered from latest to earliest:
</p>

<ul class="wawd-thumbnail-list">
    {% for post in wawd_posts %}
    <li>
        {% assign foundImage = 0 %}
        {% assign images = post.content | split:"<img " %}
        {% for image in images %}
            {% if image contains 'src' %}
                {% if foundImage == 0 %}
                    {% assign html = image | split:"/>" | first %}
                     <a href="{{ post.url }}"><img {{ html }} /></a>
                    {% assign foundImage = 1 %}
                {% endif %}
            {% endif %}
        {% endfor %}

      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
<h2 id="wawd-commentary">And now, some commentary</h2>

<h3>What was it and why'd I start it?</h3>
<p>
    WAWD was an email newsletter about Youtube dance videos. I started it after I came to a realization that I was spending a LOT of time watching videos by dancers and choreographers, and I began to feel guilty because I had "nothing to show for it." (2022 me is like 🙄 lol). 
</p>
<p>
    So WAWD was a way to me to justify that time spent by articulating and sharing what I found so compelling about the videos I was watching. You know, to help someone understand why I would stay up until 3am, watching the same dance competition piece over and over, from multiple angles.
</p>
<p>
    Also around that time, my coworking mate Chesley had been writing Bey Cheatsheet, which was a similar newsletter but for videos of Beyoncé's live performances. As of 2022 it's not online anymore, but it was amazing. And it deepened my appreciation for Beyoncé beyond even my level of fandom then. And it inspired me to make a newsletter of my own.
</p>
<h3>How'd it work? How'd it go?</h3>
<p>
    The publishing schedule started at once a week, then later slowed down to every other week. I had a private list of saved videos on Youtube that I would continuously add to and pull from for each edition. I used Mailchimp for distribution — I liked that I could tweak the email design and easily keep track of engagement — but I also had a Squarespace website to hold the archives because I thought that Mailchimp's archive views were limiting (no thumbnails, no way to see more than ~20 "campaigns"). 
</p>
<p>
    Because the content seemed so niche at the time, I treated each edition as a foundational layer of dance knowledge/nerdery. I remember doing quite a bit of independent research and fact-checking to make sure I wasn't misrepresenting a genre of dance or its origins. I didn't want to repeat definitions or contextualize from scratch every time, but I also wanted readers to feel like they could read a current edition without having read any of the past ones. So I also remember taking a lot of care in linking back to old editions if I was revisiting a person, a genre, or something else.
</p>
<p>
    I started the newsletter at the beginning of 2014, and I sent my "last" edition, the 63rd, in late 2015. By then I had about 650+ subscribers, which is not a viral amount but also nothing to sniff at, I think! Looking at the data now, the average open rate was ~50% and an average click rate was ~25%! Also for some reason I currently have 800+ subscribers now, which means a bunch of people signed up after I sent my last edition 😅
</p>

<h3>Reflections in 2022</h3>
<p>
    So yeah, I think a lot has changed since 2015! In terms of ~ the world of platforms ~ now with Tiktok dance challenges and Youtube reaction videos being a thing, I wonder how novel (or necessary) a newsletter like this would be today. 
</p>
<p>
    My circumstances have also changed — I've since met some of the people I'd written about, which is so cool! And I also was able to find a dance community locally. Before, I felt that the dance community vibe in NYC was really different from what I was seeing in these videos, which were centered around the west coast. But I eventually found a NYC/NJ based community that had similar styles and goals. It turns out that actually meeting these people, and actually finding and joining a likeminded dance community, ended up scratching the same itch that I was scratching with this newsletter. 
</p>

{% comment %}
{% if wawd_posts.size > 0 %}
<ul>
    {% for post in wawd_posts %}
        {% if post.url %}
            <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
    {% endfor %}
</ul>
{% endif %}
{% endcomment %}

</div>