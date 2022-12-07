---
title: Why Aren’t We Dancing?

last_updated: 
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

{% assign wawd_posts = site.categories.wawd %}
{% if wawd_posts.size > 0 %}
<section>
	<ul>
		{% for post in wawd_posts %}
			{% if post.url %}
				<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			{% endif %}
		{% endfor %}
	</ul>
</section>
{% endif %}

<ul>
  {% for post in wawd_posts %}
    <li>

      {% assign foundImage = 0 %}
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src' %}

            {% if foundImage == 0 %}
                {% assign html = image | split:"/>" | first %}
                <img {{ html }} />
                {% assign foundImage = 1 %}
            {% endif %}
        {% endif %}
      {% endfor %}

      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>