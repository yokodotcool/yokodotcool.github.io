---
title: Welcome!
permalink: "/"
---

<span id="random-greeting"></span>, I'm Yoko. I like to dance, cook and eat, explore [the city](/nyc-guide), read [the internet](https://twitter.com/yokogoesplorin), and make incremental changes to this website. Sometimes I make [zines](/zine). [My husband](https://kiwimonk.com) and I live in the wonderful neighborhood of [Sunset Park](https://en.wikipedia.org/wiki/Sunset_Park,_Brooklyn) with our [cat]({% post_url 2021-10-06-we-have-adopted-a-cat %}). 

I work at [Etsy](https://etsy.com), where I'm a [staff product designer](https://www.linkedin.com/in/yokodotcool/) on the shipping and fulfillment team. I enjoy [chatting](https://blog.get-merit.com/office-hours-with-yoko-sakao-ohama/) about UX design and working in the product industry! If you're interested in entering the field, I offer free mentoring to diverse, underrepresented, prospective talent through [Merit](https://www.get-merit.com/p/yoko-sakao-ohama). Otherwise, [send me an email](mailto:ysohama+site@gmail.com) :) 

<!-- Show posts categorized as "recent," if there are any -->
{% assign recent_posts = site.categories.recent %}
{% if recent_posts.size > 0 %}
<section>
	<h3>Lately ...</h3>
	<ul>
		{% for post in recent_posts %}
			{% if post.url %}
				<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			{% endif %}
		{% endfor %}
	</ul>
</section>
{% endif %}


<script type="text/javascript">insertGreeting();</script>