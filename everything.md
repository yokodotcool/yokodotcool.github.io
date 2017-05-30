---
title: Archive
permalink: "/archive"
category: nav
layout: page
---

# Big list of everything*

<ul>
    {% for post in site.posts %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
</ul>

* Everything that I could find, that I felt like putting here.