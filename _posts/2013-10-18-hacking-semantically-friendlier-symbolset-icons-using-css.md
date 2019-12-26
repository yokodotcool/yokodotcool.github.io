---
title: Hacking semantically-friendlier Symbolset icons using CSS
---

*&#42; This post is ooold and some parts are broken; namely, the icons don’t work anymore because I don’t use Symbolsets anymore.*

I love [Symbolset](http://symbolset.com), [Oak](http://oak.is)’s collection of semantic fonts. I knew as I was rebuilding this site that I wanted to create a collection of tags for my blog posts, each associated with an icon. [SS Standard](http://symbolset.com/icons/standard) was perfect for this, except for one thing: many of the keywords mapped to the icons I wanted to use didn’t always coincide with the tags I wanted to use them for. 

If I published a post with photographs in it, I would want to use the tag “photos,” but Standard would map that word to a more general-looking <span class="ss-icon">photos</span>, which could be confusing because I plan on posting drawings and other visual content that isn’t photographic (sure enough, that icon is also mapped to “image” and “images”). I would prefer to use <span class="ss-icon">camera</span> — mapped “camera” — for photo-related posts. Unsurprisingly, I also have several tag words that aren’t mapped at all to Standard’s icons. 

I didn’t want to compromise the language I used for tags for the following reasons:

1. It would feel semantically wrong. 
2. Remembering the right mapping keyword to use every time I wanted to publish a new post is something I don’t trust myself to do.
3. If I do redesign this site (which is inevitable) and decide to use another semantic font that maps keywords differently, I would likely have to go through each post and modify the tags, which is a huge pain in the ass that I would much rather avoid.

I didn’t want to “hack” the font themselves either — if I were to use them outside of the context of my blog tags (in the body of this post, for example), I would prefer to have the icons be mapped as originally intended. 

My solution was to use empty elements with a `ss-icon` class, and inject another class, the tag slug, using Liquid. Here’s an example using a link to a tag URL:

> `<a href="{{ tag.url }}" class="ss-icon {{ tag.slug }}"></a>`

And then create a separate CSS snippet in my theme where any element with both the `ss-icon` class and the `[slug]` class will have the properly mapped keyword injected into the empty element:

![A pie chart, because it looks like a pie, which is food! I know, it’s a bit of a stretch.](/assets/images/2013-10-18-symbolset-hacking.jpg) 

This way, if I wanted to change the icon associated with any of my tags, I only need to open up and edit this one file. Another nice thing is that it’s a file associated only with the theme being used, and the hacking of Symbolset happens independently of any of the content living in Siteleaf. 

A drawback of this is that if Symbolset isn’t supported, the original keyword would appear as text instead of the keyword I used for the tag, and the discrepancy could get confusing. But I suppose that would happen as long as the original keyword is mapped to that icon.
