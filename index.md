---
layout: default
title: SiteVision - Goto Online Version from Offline URL
---

## Use case

In one browser you just made some changes to a SiteVision page in offline mode (edit mode). 
Now you want to open this page in online mode in another browser to see how it works <i>and</i>
 keep the offline version open if you need to make more changes. 
 
 Copy the offline URL, switch to the other browser and click the bookmarklet. Paste the offline
  UR and get redirected to the online version.

## Install bookmarklet
<p class="lead">Drag the button to the bookmarks bar:</p>
<p>
<a href="javascript:(function(a){var b=a.createElement('script');b.setAttribute('src','//henrikekelof.github.io/sv-goto-online/goto-online.min.js?t='+(new Date).getTime()),a.body.appendChild(b)}(document));" 
class="btn btn-success btn-lg" 
title="Drag to bookmarks bar">
GoTo Online
</a>
</p>

## Source

Get the source for the bookmarklet at [https://github.com/henrikekelof/sv-goto-online](https://github.com/henrikekelof/sv-goto-online).


