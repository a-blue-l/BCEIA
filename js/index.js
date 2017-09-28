;(function(){
	$(function(){
		var jump,jump1,adddome;
		;(function(){
			// 创新产品部分切割图片电流走向
			var imgdots = 30;	
			var imgIndex = 0;		
			var imgIndex1 = 0;
			var widthpx = $('.electrictop').width();
			var heightpx = $('.electrictop').height();
			var imgSrc = 'images/electric1.png';
			var dotWidth = widthpx / imgdots;	
			var dotHeight = heightpx;	
			//设置小div进行图片切割.
			adddome = function(){
				imgIndex = 0;	
				imgIndex1 = 0;	
				var divBox = '';
				for (var i = 0;i < imgdots;i ++) {
					divBox += '<div class="dotbox" style="width:'+dotWidth+'px;height:'+dotHeight+'px;float:left;display:inline;background-image:url('+imgSrc+');background-repeat:no-repeat;background-size:'+widthpx+'px '+heightpx+'px;background-position:'+(-i*dotWidth)+'px '+0+'px"></div>';
				}
				$(".electrictop").append(divBox);
				$(".electricbott").append(divBox);
				$(".dotbox").css({opacity:0});
			}
			Jump = function(){
				$(".electrictop .dotbox:eq("+imgIndex+")").animate({opacity:1},50,function(){
					$(".electrictop .dotbox:eq("+imgIndex+")").animate({opacity:0.5},50,function(){
					    if(imgIndex<imgdots-1){
					        imgIndex++;
					        Jump();
					    }else{
					        imgIndex=0;	
					        $(".electrictop .dotbox").css({opacity:0});
					        Jump();
					    }
					});
				});
			}
			Jump1 = function(){
				$(".electricbott .dotbox:eq("+imgIndex1+")").animate({opacity:1},50,function(){
					$(".electricbott .dotbox:eq("+imgIndex1+")").animate({opacity:0.5},50,function(){
					    if(imgIndex1<imgdots-1){
					        imgIndex1++;
					        Jump1();
					    }else{
					        imgIndex1=0;	
					        $(".electricbott .dotbox").css({opacity:0});
					        Jump1();
					    }
					});
				});
			}
		})()
		;(function(){
			// 电流碰撞场景

		})()
		// 转换文字
		var number = 0;
		var sectionT;
		function textJump(){
			$('.textShowimg').hide();
			$('.textShowimg').eq(number).show();
			number += 1;
			if (number > 3) {
				number = 4;
				clearInterval(sectionT);
			}
		}
		$('#fullpageId').fullpage({
			//Navigation
			menu: '#menu',
			lockAnchors: false,//是否锚点起作用
			anchors:['firstPage', 'secondPage','threePage', 'fourPage', 'fivePage', 'sixPage'],//锚点
			navigation: false,//导航点是否显示
			navigationPosition: 'right',//导航点位置
			navigationTooltips: ['firstSlide', 'secondSlide', 'threeSlide', 'fourSlide', 'fiveSlide', 'sixSlide'],
			showActiveTooltip: true,

			//Scrolling
			css3: true,
			scrollingSpeed: 300,
			scrollBar: false,//是否使用滚动条
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,//循环滚动  最后一个滑动是否跳动到第一个
			loopTop: false,//循环滚动  第一个滑动是否跳动到最后一个
			dragAndMove: false,
			normalScrollElements: '#element1, .element2, #krpanoSWFObject>div>div',//可以避免自动滚动，，如果页面中有滑动内容
			touchSensitivity: 15,//屏幕触控灵敏度

			//Accessibility
			animateAnchor: true,//链接到指定页面
			recordHistory: false,//是否将滚动加入到浏览器history   手机返回键设置

			//Design
			controlArrows: true,
			verticalCentered: true,
			// sectionsColor : ['#fff', 'red', 'blue', 'yellow'],//背景颜色
			// paddingTop: '3em',//顶部距离
			// paddingBottom: '10px',//底部距离
			fixedElements: '#header, .footer',

			//Custom selectors
			sectionSelector: '.section',
			slideSelector: '.slide',

			lazyLoading: true,//懒加载

			//events
			onLeave: function(index, nextIndex, direction){
				//console.log(index);//从该页码进入当前页
				//console.log(nextIndex);//当前页数字标识
				//console.log(direction);//通过什么方式进入，上/下
				switch (index) {
					case 1:
						number = 0
						$('.textShow').removeClass('active');
						clearInterval(sectionT);
						break;
					case 2:
						$('.section2 .sectContent').removeClass('activeTwo');
					 	break;
					case 3:
						$('.electrictop,.electricbott').empty();
						$('.section3 .sectContent').removeClass('activeThree');
					 	break;
					case 4:
						$('.section4 .sectContent').removeClass('activeFour');
					 	break;
					case 5:
						$('.section5 .sectContent').removeClass('activeFive');
					 	break;
					default:
						console.log(22);
						break;
				}
			},
			afterLoad: function(anchorLink, index){
				//console.log(anchorLink);//当前页锚点
				//console.log(index);//当前页数字标识
				switch (index) {
					case 1: 
						$('.textShow').addClass('active');
						textJump();
						sectionT = setInterval(textJump,2500);
						break;
					case 2:
						$('.section2 .sectContent').addClass('activeTwo');
						break;
					case 3:
						$('.section3 .sectContent').addClass('activeThree');
						adddome();
						var timeOne = setTimeout(function(){
							Jump();
							clearTimeout(timeOne);
						},1000)
						var timeTwo = setTimeout(function(){
							Jump1();
							clearTimeout(timeTwo);
						},2000)
						break;
					case 4:
						$('.section4 .sectContent').addClass('activeFour');
						break;
					case 5:
						$('.section5 .sectContent').addClass('activeFive');
						break;
					default:
						console.log(2);
						break;
				}
			},
			afterRender: function(){},//页面结构生成后触发的,初始化其他插件等
			afterResize: function(){},//浏览器窗口大小后触发
		});
		$('.shareBtn').click(function(){
			$('.shareBg').show();
		})
		$('.shareBg').on('touchstart',function(e){
			$('.shareBg').hide();
			return false;
		})
		// 控制音乐
		$('.musiclogo').on('touchstart',function(){
			var audio = document.getElementById('audio');
			if (audio !== null) {
				if (audio.paused) {
					$('.musiclogo').addClass('musicact');
					audio.play();
				} else {
					$('.musiclogo').removeClass('musicact');
					audio.pause()
				}
			}
		})
	})
})(jQuery)

