$(document).ready(function(){$("#container").fullpage({menu:!1,anchors:[],lockAnchors:!1,navigation:!0,navigationPosition:"right",navigationTooltips:["firstSlide","secondSlide"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!0,scrollingSpeed:500,autoScrolling:!0,fitToSection:!0,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!1,touchSensitivity:15,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!1,verticalCentered:!1,resize:!1,sectionsColor:!1,paddingTop:!1,paddingBottom:"10px",fixedElements:"#header, .footer",responsiveWidth:0,responsiveHeight:0,sectionSelector:".section",slideSelector:".slide",onLeave:function(e,o,t){$(".section").eq(e-1).removeClass("animated")},afterLoad:function(e,o){$(".section").eq(o-1).addClass("animated")},afterRender:function(){},afterResize:function(){},afterSlideLoad:function(e,o,t,n){},onSlideLeave:function(e,o,t,n,i){}}),function(){var e=document.querySelector("#btn"),o=document.querySelector("#cube_shape"),t="";e.onclick=function(e,o){var t,n=e,i=!0;return function(){if(1==i&&(n.apply(),i=!1),t)return!1;t=setTimeout(function(){clearTimeout(t),t=null,i=!0},o||500)}}(function(){"ring"===(t=o.getAttribute("class"))?o.setAttribute("class","cube"):o.setAttribute("class","ring")},2e3)}()});