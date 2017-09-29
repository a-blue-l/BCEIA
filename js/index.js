;(function(){
	$(function(){
		var jump,jump1,adddome;
		var sec2jump,sec2jump1,sec2add;
		var falgtwo = false;
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
			var secimgdots = 20;	
			var secimgIndex = 0;		
			var secimgIndex1 = 0;
			var secwidthpx = $('.leftele').width();
			var secheightpx = $('.leftele').height();
			var secimgSrc = 'images/electricsec01.png';
			var secdotWidth = (secwidthpx-0.2) / secimgdots;	
			var secdotHeight = secheightpx;	
			//设置小div进行图片切割.
			sec2add = function(){
				secimgIndex = 0;	
				secimgIndex1 = 0;	
				var divBox = '';
				for (var i = 0;i < secimgdots;i ++) {
					divBox += '<div class="dotboxsec" style="width:'+secdotWidth+'px;height:'+secdotHeight+'px;float:left;display:inline;background-image:url('+secimgSrc+');background-repeat:no-repeat;background-size:'+secwidthpx+'px '+secheightpx+'px;background-position:'+(-i*secdotWidth)+'px '+0+'px"></div>';
				}
				$(".leftele").append(divBox);
				$(".rightele").append(divBox);
				$(".dotboxsec").css({opacity:0});
			}
			sec2jump = function(){
				$(".leftele .dotboxsec:eq("+secimgIndex+")").animate({opacity:1},50,function(){
					$(".leftele .dotboxsec:eq("+secimgIndex+")").animate({opacity:0.5},50,function(){
					    if(secimgIndex<secimgdots-1){
					        secimgIndex++;
					        sec2jump();
					    }else{
					    	$('#pano').addClass('panoactive');
					        $('.leftele').empty();
					    }
					});
				});
			}
			sec2jump1 = function(){
				$(".rightele .dotboxsec:eq("+secimgIndex1+")").animate({opacity:1},50,function(){
					$(".rightele .dotboxsec:eq("+secimgIndex1+")").animate({opacity:0.5},50,function(){
					    if(secimgIndex1<secimgdots-1){
					        secimgIndex1++;
					        sec2jump1();
					    }else{
					        $('.rightele').empty();
					    }
					});
				});
			}
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
				// console.log(direction);//通过什么方式进入，上/下
				switch (index) {
					case 1:
						number = 0
						$('.textShow').removeClass('active');
						clearInterval(sectionT);
						break;
					case 2:
						if(!falgtwo && direction == 'down'){
							return false;
						}
						$('.section2 .sectContent').removeClass('activeTwo');
						$('.figersuo').hide();
						falgtwo = false;
						break;
					case 3:
						$('.section3 .sectContent').removeClass('activeThree');
						$('#pano').removeClass('panoactive');
						$('.leftele').empty();
						$('.rightele').empty();
					 	break;
					case 4:
						$('.electrictop,.electricbott').empty();
						$('.section4 .sectContent').removeClass('activeFour');
					 	break;
					case 5:
						$('.section5 .sectContent').removeClass('activeFive');
					 	break;
					case 6:
						$('.section6 .sectContent').removeClass('activeSix');
					 	break;
					default:
						console.log('********');
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
						$('.figerborder').show();
						break;
					case 3:
						$('.section3 .sectContent').addClass('activeThree');
						sec2add();
						var secTime = setTimeout(function(){
							sec2jump();
							sec2jump1();
							clearTimeout(secTime);
						},2500)
						break;
					case 4:
						$('.section4 .sectContent').addClass('activeFour');
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
					case 5:
						$('.section5 .sectContent').addClass('activeFive');
						break;
					case 6:
						$('.section6 .sectContent').addClass('activeSix');
						break;
					default:
						console.log('**'+22);
						break;
				}
			},
			afterRender: function(){},//页面结构生成后触发的,初始化其他插件等
			afterResize: function(){},//浏览器窗口大小后触发
		});
		$('.figerimg').on('click',function(){
			$('.figerborder').hide();
			$('.figersuo').show();
			var Ttwodown = setTimeout(function(){
				falgtwo = true;
				$.fn.fullpage.moveSectionDown();
				clearTimeout(Ttwodown);
			},1500)
		})
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
					$('.musiclogo').addClass('musicact').find('img').attr('src','images/musiclogo.png');
					audio.play();
				} else {
					$('.musiclogo').removeClass('musicact').find('img').attr('src','images/musiclogono.png');
					audio.pause()
				}
			}
		})
		// 移除长按事件
		$(document).bind('contextmenu', function(e) {
		  e.preventDefault();
		})
		var loadingT = setTimeout(function(){
			clearTimeout(loadingT);
			$('.loading').remove();
		},0)
	})
})(jQuery)

