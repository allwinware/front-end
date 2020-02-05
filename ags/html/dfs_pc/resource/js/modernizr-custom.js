/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-display_runin-displaytable-ellipsis-flexbox-flexboxlegacy-flexboxtweener-flexwrap-focuswithin-fontface-generatedcontent-hairline-hidden-hovermq-hsla-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-placeholder-preserve3d-regions-rgba-shapes-siblinggeneral-subpixelfont-supports-target-textalignlast-textshadow-userselect-variablefonts-willchange-wrapflow-domprefixes-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses !*/
!function(e,t,n){function i(e,t){return typeof e===t}function r(){var e,t,n,r,o,s,a;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=i(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),T.push((r?"":"no-")+a.join("-"))}}function o(e){var t=z.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?z.className.baseVal=t:z.className=t)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=d(_?"svg":"body"),e.fake=!0),e}function u(e,n,i,r){var o,s,a,u,c="modernizr",f=d("div"),p=l();if(parseInt(i,10))for(;i--;)a=d("div"),a.id=r?r[i]:c+(i+1),f.appendChild(a);return o=d("style"),o.type="text/css",o.id="s"+c,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=z.style.overflow,z.style.overflow="hidden",z.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),z.style.overflow=u,z.offsetHeight):f.parentNode.removeChild(f),!!s}function c(e,t){return!!~(""+e).indexOf(t)}function f(t,n,i){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)i&&(r=r.getPropertyValue(i));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[i];return r}function p(e,t){return e-1===t||e===t||e+1===t}function h(e,t){if("object"==typeof e)for(var n in e)I(e,n)&&h(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),r=Modernizr[i[0]];if(2==i.length&&(r=r[i[1]]),"undefined"!=typeof r)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),o([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function m(t,i){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(a(t[r]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+a(t[r])+":"+i+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return n}function g(e,t,r,o){function a(){u&&(delete H.style,delete H.modElem)}if(o=i(o,"undefined")?!1:o,!i(r,"undefined")){var l=m(e,r);if(!i(l,"undefined"))return l}for(var u,f,p,h,g,b=["modernizr","tspan","samp"];!H.style&&b.length;)u=!0,H.modElem=d(b.shift()),H.style=H.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],g=H.style[h],c(h,"-")&&(h=s(h)),H.style[h]!==n){if(o||i(r,"undefined"))return a(),"pfx"==t?h:!0;try{H.style[h]=r}catch(v){}if(H.style[h]!=g)return a(),"pfx"==t?h:!0}return a(),!1}function b(e,t){return function(){return e.apply(t,arguments)}}function v(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],i(r,"function")?b(r,n||t):r);return!1}function y(e,t,n,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?g(a,t,r,o):(a=(e+" "+R.join(s+" ")+s).split(" "),v(a,t,n))}function x(e,t,i){return y(e,n,n,t,i)}var T=[],w=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var k=e.CSS;Modernizr.addTest("cssescape",k?"function"==typeof k.escape:!1),Modernizr.addTest("focuswithin",function(){try{t.querySelector(":focus-within")}catch(e){return!1}return!0});var S=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=S;var z=t.documentElement;Modernizr.addTest("cssall","all"in z.style),Modernizr.addTest("willchange","willChange"in z.style);var _="svg"===z.nodeName.toLowerCase(),j="Moz O ms Webkit",R=C._config.usePrefixes?j.toLowerCase().split(" "):[];C._domPrefixes=R,Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}});var B="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",B||P);var q=function(e,t){var n=!1,i=d("div"),r=i.style;if(e in r){var o=R.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+R[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n};C.prefixedCSSValue=q,Modernizr.addTest("bgpositionshorthand",function(){var e=d("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=d("a");return n.style.cssText=e+S.join(t+e),!!n.style.length}),Modernizr.addTest("cubicbezierrange",function(){var e=d("a");return e.style.cssText=S.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="",r=0,o=S.length-1;o>r;r++)e=0===r?"to ":"",i+=t+S[r]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(i+=t+"-webkit-"+n);var s=d("a"),a=s.style;return a.cssText=i,(""+a.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("hidden","hidden"in d("a")),Modernizr.addTest("placeholder","placeholder"in d("input")&&"placeholder"in d("textarea")),Modernizr.addTest("opacity",function(){var e=d("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("multiplebgs",function(){var e=d("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=d("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=d("a"),i=n.style;return i.cssText=e+S.join(t+";"+e).slice(0,-e.length),-1!==i.position.indexOf(t)}),Modernizr.addTest("cssremunit",function(){var e=d("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=d("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,i=e.CSS,r=!1;return i&&i.supports&&i.supports("(transform-style: preserve-3d)")?!0:(t=d("a"),n=d("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),z.appendChild(t),r=n.getBoundingClientRect(),z.removeChild(t),r=r.width&&r.width<4)});var E=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=E,Modernizr.addTest("mediaqueries",E("only all"));var L=C.testStyles=u;Modernizr.addTest("checked",function(){return L("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=d("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),L("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]})},2);var W=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();W?Modernizr.addTest("fontface",!1):L('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),r=i.sheet||i.styleSheet,o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),L('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}),Modernizr.addTest("cssinvalid",function(){return L("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=d("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),L("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),Modernizr.addTest("hairline",function(){return L("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight})}),L("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;Modernizr.addTest("nthchild",n)},5),L("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+S.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("siblinggeneral",function(){return L("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),L("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return L("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=d("input");return e.appendChild(t),t.clientWidth>10})});var M={elem:d("modernizr")};Modernizr._q.push(function(){delete M.elem}),Modernizr.addTest("csschunit",function(){var e,t=M.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}catch(n){e=!1}return e}),Modernizr.addTest("cssexunit",function(){var e,t=M.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e}),Modernizr.addTest("hsla",function(){var e=d("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",c(e.backgroundColor,"rgba")||c(e.backgroundColor,"hsla")});var A=C._config.usePrefixes?j.split(" "):[];C._cssomPrefixes=A;var N=function(t){var i,r=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in o)return"@"+t;for(var s=0;r>s;s++){var a=S[s],d=a.toUpperCase()+"_"+i;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=N,L("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),i=parseInt(f(t,null,"height"),10);Modernizr.addTest("cssvhunit",p(i,n))}),L("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.max(o,s),10),d=parseInt(f(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",p(a,d)||p(a,d-r))},3),L("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],i=e.childNodes[0],r=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=i.clientWidth/100,s=i.clientHeight/100,a=parseInt(50*Math.min(o,s),10),d=parseInt(f(t,null,"width"),10);Modernizr.addTest("cssvminunit",p(a,d)||p(a,d-r))},3),L("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),i=parseInt(f(t,null,"width"),10);Modernizr.addTest("cssvwunit",p(i,n))});var I;!function(){var e={}.hasOwnProperty;I=i(e,"undefined")||i(e.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){C.addTest=h}),Modernizr.addTest("hovermq",E("(hover)"));var H={style:M.elem.style};Modernizr._q.unshift(function(){delete H.style});var O=C.testProp=function(e,t,i){return g([e],n,t,i)};Modernizr.addTest("textshadow",O("textShadow","1px 1px")),C.testAllProps=y;var V=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=s(e)),t?y(e,t,n):y(e,"pfx"))};C.prefixedCSS=function(e){var t=V(e);return t&&a(t)};Modernizr.addTest("backgroundblendmode",V("backgroundBlendMode","text")),Modernizr.addTest("wrapflow",function(){var e=V("wrapFlow");if(!e||_)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),i=d("div"),r=d("div"),o=d("span");r.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",i.appendChild(r),i.appendChild(o),z.appendChild(i);var s=o.offsetLeft;return z.removeChild(i),r=o=i=n,150==s}),Modernizr.addTest("objectfit",!!V("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(_)return!1;var e=V("flowFrom"),t=V("flowInto"),i=!1;if(!e||!t)return i;var r=d("iframe"),o=d("div"),s=d("div"),a=d("div"),l="modernizr_flow_for_regions_check";s.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",a.style.cssText="width: 50px; height: 50px; padding: 42px;",a.style[e]=l,o.appendChild(s),o.appendChild(a),z.appendChild(o);var u,c,f=s.getBoundingClientRect();return s.style[t]=l,u=s.getBoundingClientRect(),c=parseInt(u.left-f.left,10),z.removeChild(o),42==c?i=!0:(z.appendChild(r),f=r.getBoundingClientRect(),r.style[t]=l,u=r.getBoundingClientRect(),f.height>0&&f.height!==u.height&&0===u.height&&(i=!0)),s=a=o=r=n,i}),C.testAllProps=x,Modernizr.addTest("cssanimations",x("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("appearance",x("appearance")),Modernizr.addTest("ellipsis",x("textOverflow","ellipsis")),Modernizr.addTest("backdropfilter",x("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return x("backgroundClip","text")}),Modernizr.addTest("bgpositionxy",function(){return x("backgroundPositionX","3px",!0)&&x("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",x("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",x("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",x("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",x("backgroundSize","cover")),Modernizr.addTest("borderimage",x("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",x("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",x("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",x("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=x("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],i=0;i<n.length;i++)e=n[i].toLowerCase(),t=x("column"+n[i]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||x(n[i])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",x("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",x("grid-template-rows","none",!0)),Modernizr.addTest("displayrunin",x("display","run-in"),{aliases:["display-runin"]}),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return x("filter","blur(2px)");var e=d("a");return e.style.cssText=S.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",x("flexAlign","end",!0)),Modernizr.addTest("flexwrap",x("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function r(){try{var e=d("div"),n=d("span"),i=e.style,r=0,o=0,s=!1,a=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,a),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",r=n.offsetHeight,o=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+S.join("hyphens:auto; "),s=n.offsetHeight!=r||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),s}catch(l){return!1}}function o(e,n){try{var i=d("div"),r=d("span"),o=i.style,s=0,a=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(r),t.body.insertBefore(i,c),r.innerHTML="mm",s=r.offsetHeight,r.innerHTML="m"+e+"m",l=r.offsetHeight>s,n?(r.innerHTML="m<br />m",s=r.offsetWidth,r.innerHTML="m"+e+"m",u=r.offsetWidth>s):u=!0,l===!0&&u===!0&&(a=!0),t.body.removeChild(i),i.removeChild(r),a}catch(f){return!1}}function s(n){try{var i,r=d("input"),o=d("div"),s="lebowski",a=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=s+n+s,t.body.insertBefore(o,l),t.body.insertBefore(r,o),r.setSelectionRange?(r.focus(),r.setSelectionRange(0,0)):r.createTextRange&&(i=r.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select());try{e.find?a=e.find(s+s):(i=e.self.document.body.createTextRange(),a=i.findText(s+s))}catch(u){a=!1}return t.body.removeChild(o),t.body.removeChild(r),a}catch(u){return!1}}return t.body||t.getElementsByTagName("body")[0]?(h("csshyphens",function(){if(!x("hyphens","auto",!0))return!1;try{return r()}catch(e){return!1}}),h("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}catch(e){return!1}}),void h("softhyphensfind",function(){try{return s("&#173;")&&s("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),Modernizr.addTest("cssmask",x("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",x("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",x("boxReflect","above",!0)),Modernizr.addTest("cssresize",x("resize","both",!0)),Modernizr.addTest("shapes",x("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",x("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!x("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return x("translate","45px",!0)}),Modernizr.addTest("csstransitions",x("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",x("userSelect","none",!0)),Modernizr.addTest("variablefonts",x("fontVariationSettings")),r(),o(T),delete C.addTest,delete C.addAsyncTest;for(var U=0;U<Modernizr._q.length;U++)Modernizr._q[U]();e.Modernizr=Modernizr}(window,document);