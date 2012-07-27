(function(){
  window.ytQuery = {
    _validStandardFeeds :['top_rated', 'top_favorites', 'most_viewed', 'most_shared', 'most_popular', 'most_recent', 'most_discussed', 'most_responded', 'recently_featured', 'on_the_web'],
    _validParams : ['q', 'max-results', 'start-index', 'standard_feed', 'caption', '3d', 'category', 'duration', 'hd', 'lang', 'license', 'location', 'orderby', 'time'],
    _baseUrls : {
      default : 'http://gdata.youtube.com/feeds/api/videos',
      standard_feed : 'http://gdata.youtube.com/feeds/api/standardfeeds/'
    },
    _callbacks : [],
    _registerCallback : function(url, cb){
      return this._callbacks.push(cb);
    },
    _queryCallback : function(data){
      data = this._formatResponse(data);
      return this._callbacks.pop()(data);
    },
    _appendQueryScript : function(url){
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      document.head.appendChild(script);
    },
    _formatResponse : function(data){
      return data.feed.entry;
    },
    _getUrlFromParams : function(params){
      var queryItems = ['cbid='+new Date().getTime()];
      Object.keys(params).forEach(function(key){
        queryItems.push(escape(key)+'='+escape(params[key]));
      });
      return this._getBaseUrl(params)+'?alt=json-in-script&callback=ytQuery._queryCallback&v=2&'+queryItems.join('&');
    },
    _getBaseUrl : function(params){
      return params.standard_feed ? this._baseUrls.standard_feed+params.standard_feed : this._baseUrls.default;  
    },
    _verifyParams : function(params){
      var self = this;
      var invalidParams = [];
      Object.keys(params).forEach(function(key){
        if (self._validParams.indexOf(key)===-1){
          invalidParams.push(key);
        }
      });
      if (params['max-results'] && params['max-results'] > 50){
        invalidParams.push('max-results cannot exceed 50 - use start-index to page');
      }
      if (params.standard_feed){
        invalidParams = this._verifyStandardFeed(params.standard_feed, invalidParams);
      }
      return invalidParams.length ? invalidParams : false; 
    },
    _verifyStandardFeed : function(standard_feed, invalidParams){
      if (this._validStandardFeeds.indexOf(standard_feed)===-1){
        invalidParams.push('Invalid standard feed: standard_feed must be one of '+this._validStandardFeeds.toString());
      }
      return invalidParams;
    },
    query : function(params, cb){
      var invalidParams = this._verifyParams(params);
      if (invalidParams){
        invalidParams = invalidParams.toString();
        throw new Error('Request uses invalid params '+invalidParams);
      } else {
        var url = this._getUrlFromParams(params); 
        this._registerCallback(url, cb);
        this._appendQueryScript(url);
      }
    }

  };
})();
