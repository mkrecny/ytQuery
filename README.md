# ytQuery

ytQuery (query youtube from the browser)

##usage

````html
<head>
  <!-- Include the ytquery javascript file -->
  <script type="text/javascript" src="../ytquery-min.js"> </script>
</head>
  <!-- Important: - you must have a <head> tag -->

<body>
  Check the console to see results
</body>

<script type="text/javascript"> 
  
  // Create a query params object
  var params = {
    "q" : "puppy dogs",
    "max-results" : "5",
    "orderby" : "published"
  };

  // Create a callback
  var cb = function(res){
    console.log('puppy dog results', res);
  };
  
  // Call ytQuery.query, passing params and your callback
  ytQuery.query(params, cb);

</script>
````

##params

Note: not all parameters are applicable when a standard_feed is defined_

###q
Find videos matching this query string
###max-results
Return at most this many results (ceiling is 50)
###start-index
Return results starting at this offset (use this to overcome 50 result limit)
###orderby
Return results in the specified order. Can be one of relevance, published, viewCount or rating
###category
e.g Comedy, Music, News, Sports
###standard_feed
Return results belonging to a youtube 'standard feed'. Must be one of 'top_rated', 'top_favorites', 'most_viewed', 'most_shared', 'most_popular', 'most_recent', 'most_discussed', 'most_responded', 'recently_featured', 'on_the_web'_
###duration
Must be one of short, medium or long
###time
Must be one of today, this_week, this_month, or all_time_
###caption
(boolean) Return results that do or do not have captions
###3d
(boolean) Return 3d videos
###hd
(boolean) Return only HD videos
###lang
Return videos in a given language. Specify the language using 2 character country code (e.g. JP for Japanese)
###license
Return videos with the given license attributed. Values can be one of cc or youtube
###location
Return videos from the given latitude and longitude, e.g: {location : '37.42307,-122.08427'}

## license

(The MIT License)

Copyright (c) 2011 Myles Recny <myles@shelby.tv>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.