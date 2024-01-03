---
title: Home
permalink: "/"
---

## <span id="random-greeting"></span> ~

I’m Yoko. I like wearing statement earrings, the smell of incense at Japanese temples, and drinking hot water when it's cold. [My husband](https://kiwimonk.com) and I live in [Sunset Park, Brooklyn](https://en.wikipedia.org/wiki/Sunset_Park,_Brooklyn) aka THE best neighborhood of all time. We have a chaotic roommate named [Soleil](https://arc.net/e/84748DE8-8CDB-4BDE-8093-4B43DD713C0F), and we are expecting a child!!! in January 2024 omg???

## Work work talk talk 

I'm a systems thinker—I enjoy understanding how things come together to create a bigger picture. It's one of the reasons I like my job at Etsy, where I'm a [staff product designer](https://www.linkedin.com/in/yokodotcool/) on the shipping and fulfillment team.

I also enjoy [connecting](/lets-chat) with prospective designers from diverse and underrepresented backgrounds, but at the moment I'm taking a break to focus on parental leave. If you're interested in talking shop, I suggest checking out [Merit](https://get-merit.com), a mentorship platform for people who work on software product teams :) You can also try to [email me](mailto:ysohama+site@gmail.com); just know that I might not respond right away!

## This wobsite

It's made with [Jekyll](https://jekyllrb.com/), and it runs on [Github Pages](https://github.com/yokodotcool/yokodotcool.github.io). I've been a web dev noob for 20+ years lol and now and then I'll mess around with my site for fun. Here are some notable updates of late:

<!-- Show posts categorized as "recent," if there are any -->
{% assign recent_posts = site.categories.recent %}
{% if recent_posts.size > 0 %}
<section>
	<ul>
		{% for post in recent_posts %}
			{% if post.url %}
				<li><a href="{{ post.url }}">{{ post.title }}</a></li>
			{% endif %}
		{% endfor %}
	</ul>
</section>
{% endif %}

The sans-serif font is [GT America](https://www.gt-america.com/), licensed from [Grilli Type](https://www.grillitype.com/). The serif is TNR, a *classique*.

<script type="text/javascript">insertGreeting();</script>