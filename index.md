---
title: Home
permalink: "/"
---

## <span id="random-greeting"></span> ~

I’m Yoko. I like moody natural lighting, feeling a breeze on warm days, and relaxed weekends where I can vibe through doing my laundry. I read [a lot of internet](https://twitter.com/yokogoesplorin) and [some books](https://oku.club/user/yokodotcool). I take dance class for fun, and I guess I also run for fun now, too. [My husband](https://kiwimonk.com) and I live in [Sunset Park, Brooklyn](https://en.wikipedia.org/wiki/Sunset_Park,_Brooklyn) aka THE best neighborhood of all time. We have a chaotic roommate named [Soleil](https://arc.net/e/84748DE8-8CDB-4BDE-8093-4B43DD713C0F).

## Work work talk talk 

I'm a systems thinker—I enjoy understanding how things come together to create a bigger picture. It's one of the reasons I like my job at Etsy, where I'm a [staff product designer](https://www.linkedin.com/in/yokodotcool/) working on tools to help sellers ship orders to buyers. Mail is so complex! 

I also like to [talk shop](https://blog.get-merit.com/office-hours-with-yoko-sakao-ohama/), especially with prospective designers from diverse and underrepresented backgrounds. If this is you and you want to chat, read more [here](/lets-chat). You can also [email me](mailto:ysohama+site@gmail.com); that’s cool too :)

## This wobsite

It's made with [Jekyll](https://jekyllrb.com/), and it runs on [Github Pages](https://jekyllrb.com/). I've been a web dev noob for 20+ years lol and now and then I'll mess around with my site for fun. Here are some notable updates of late:

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

<!-- The sans-serif font is [GT America](), licensed from [Grilli Type](). The serif is TNR, a *classique*. This site uses no trackers ✨ -->

<script type="text/javascript">insertGreeting();</script>