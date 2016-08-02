(function() {
	
	var main = function($) { 
		
		var self = $.ffExtension = new function(){};
		
		$.extend(self, {
			jordanImages : [
				'https://raw.githubusercontent.com/suuuzi/jordanExtension/master/img/images.jpg',
				'https://raw.githubusercontent.com/suuuzi/jordanExtension/master/img/images.png',
				'https://raw.githubusercontent.com/suuuzi/jordanExtension/master/img/20160802_124942.jpg',
				'https://raw.githubusercontent.com/suuuzi/jordanExtension/master/img/jordan.png'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						if(h > 0 && w > 0)
						{
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							$(item).load(function(){
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		$(function(){
			self.handleImages(self.jordanImages, 3000);
		});
	};

	function loadJS(src, callback) {
		var s = document.createElement('script');
		s.src = src;
		s.async = true;
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	}
	
	main(jQuery);
	
 })();
