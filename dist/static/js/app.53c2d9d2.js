(function(t){function e(e){for(var n,s,c=e[0],l=e[1],r=e[2],u=0,g=[];u<c.length;u++)s=c[u],o[s]&&g.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(g.length)g.shift()();return a.push.apply(a,r||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"02b1":function(t,e,i){},"0eb1":function(t,e,i){},"0fc8":function(t,e,i){},"18ea":function(t,e,i){"use strict";var n=i("0fc8"),o=i.n(n);o.a},"19eb":function(t,e,i){},"1dc7":function(t,e,i){},"253b":function(t,e,i){},"4ee2":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("1cc4");var n=i("94da"),o=(i("1979"),i("b705")),a=(i("8867"),i("4b6e")),s=(i("cadf"),i("551c"),i("f751"),i("097d"),i("9f45"),i("2b0e")),c=i("c0f9"),l=i.n(c),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},d=[],u=i("2877"),g={},p=Object(u["a"])(g,r,d,!1,null,null,null),h=p.exports,f=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"page"}},[t.showJoinPop?i("join-pop",{on:{handleClosePop:t.handleClosePop}}):t._e(),i("download-bar",{on:{handleShowPop:t.handleShowPop}}),""!=t.info?i("div",{staticClass:"home"},[i("div",{staticClass:"background-image-block"},[i("div",{staticClass:"bg",style:"background-image: url("+t.info.icon+")"})]),i("div",{attrs:{id:"main"}},[i("div",{staticClass:"header-block"},[i("img",{staticClass:"avatar",attrs:{src:t.info.icon}}),i("button",{staticClass:"subscript-btn",on:{click:t.handleShowPop}},[t._v("订阅")])]),i("div",{staticClass:"info-block"},[i("h1",{staticClass:"title"},[t._v(t._s(t.info.name))]),i("p",{staticClass:"desc"},[t._v(t._s(t.info.description))])]),i("robot-info-block",{staticClass:"robot-info-block",attrs:{robots:t.info.robots},on:{handleShowPop:t.handleShowPop}}),i("div",{staticClass:"owner-info-block"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.info.owner.avatar,expression:"info.owner.avatar"}],staticClass:"avatar"}),i("span",{staticClass:"name"},[t._v(t._s(t.info.owner.name))]),i("span",{staticClass:"label"},[t._v("创建")])]),i("div",{staticClass:"divide-line"}),i("div",{staticClass:"topic-list"},[i("h2",[t._v("主题动态")]),t._l(t.list,function(e,n){return i("card-item",{key:n,staticClass:"card-item",attrs:{id:n,item:e,list:t.list,index:n},on:{handleShowPop:t.handleShowPop}})})],2)],1),i("div",{staticClass:"fill"}),i("button",{staticClass:"open-btn",on:{click:t.handleShowPop}},[t._v("App 内打开")])]):t._e(),t.showLoading?i("loading"):t._e()],1)},A=[],v=(i("4917"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{touchmove:function(t){t.preventDefault()},click:function(e){return e.stopPropagation(),t.prevent(e)}}},[i("div",{staticClass:"content",on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}},[i("div",{staticClass:"background",on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}}),i("van-loading",{staticClass:"loading",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}})],1)])}),b=[],C={data:function(){return{}},methods:{prevent:function(){console.log("prevent")}}},w=C,k=(i("f5e6"),Object(u["a"])(w,v,b,!1,null,"286bb38e",null)),P=k.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-block",on:{click:function(e){return t.navToDetail(t.item.id)}}},[t.showTimeBlock?n("div",{staticClass:"time-block",on:{click:function(t){t.stopPropagation()}}},[n("span",[t._v(t._s(t.item.created_at))]),n("img",{staticClass:"img-more",attrs:{src:i("69f5")},on:{click:t.handleShowPop}})]):t._e(),n("div",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.item.text.replace(/\n/g,"<br>"))}}),t.item.video&&""!=t.item.video?n("div",{staticClass:"video-block",on:{click:function(t){t.stopPropagation()}}},[n("video",{attrs:{controls:"controls",poster:t.item.video_thumb_img,"x-webkit-airplay":"true","x5-video-player-fullscreen":"true",playsinline:"true","webkit-playsinline":"","x5-video-player-typ":"h5"}},[n("source",{attrs:{type:"application/x-mpegURL",src:t.item.video}})])]):t._e(),t.item.images.length>1?n("div",{staticClass:"images-block",on:{click:function(t){t.stopPropagation()}}},t._l(t.item.images,function(e,i){return n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"it"}],key:i,class:{"image-type-1":2!=t.item.images.length&&1!=t.item.images.length&&i>=t.item.images.length%3,"image-type-2":t.item.images.length%3==2&&i<t.item.images.length%3,"image-type-3":t.item.images.length%3===1&&i<t.item.images.length%3},style:{height:t.item.images.length%3===1&&i<t.item.images.length%3?t.imageWidth/2+"px":"auto",marginBottom:t.item.images.length>3&&i<t.item.images.length-3?"0.05rem":"0"},on:{click:function(e){return t.handlePreviewImage(t.item.images,i)}}})}),0):t._e(),1==t.item.images.length?n("div",{staticClass:"images-block",on:{click:function(t){t.stopPropagation()}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.images[0],expression:"item.images[0]"}],staticClass:"single-image",on:{click:function(e){return t.handlePreviewImage(t.item.images,0)}}})]):t._e(),t.item.url&&""!=t.item.url?n("a",{staticClass:"website-block",attrs:{href:t.item.url},on:{click:function(t){t.stopPropagation()}}},[n("img",{staticClass:"avatar",attrs:{src:t.item.url_cover}}),n("div",{staticClass:"info"},[n("h3",{staticClass:"title"},[t._v(t._s(t.item.url_title))]),""!=t.item.url_desc?n("p",{staticClass:"desc"},[t._v(t._s(t.item.url_desc))]):t._e()])]):t._e(),n("div",{staticClass:"tools-block",style:t.isDetailPage?"padding:0 0.08rem 0.13rem":"",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"zan-btn tools-btn",on:{click:t.handleShowPop}},[n("img",{staticClass:"img-finger",attrs:{src:i("699f")}}),t.item.zanCount>0?n("span",{staticClass:"count"},[t._v(t._s(t.item.zanCount))]):t._e()]),n("div",{staticClass:"comment-btn tools-btn",on:{click:t.handleShowPop}},[n("img",{staticClass:"img-message",attrs:{src:i("eda7")}}),t.item.commentsCount>0?n("span",{staticClass:"count"},[t._v(t._s(t.item.commentsCount))]):t._e()]),n("div",{staticClass:"share-btn tools-btn",on:{click:t.handleShowPop}},[n("img",{staticClass:"img-share",attrs:{src:i("75e1")}})])]),t.list&&t.index!=t.list.length-1&&t.list.length>0?n("div",{staticClass:"divide-line"}):t._e()])},S=[],I=(i("c5f6"),i("0574"),i("2d30")),x=(i("a481"),{data:function(){return{imageWidth:0}},created:function(){this.imageWidth=document.body.clientWidth,console.log(this.imageWidth);var t=/<a-link href="(.*?)">(.*?)<\/a-link>/gi;this.item.text=this.item.text.replace(t,"<a href='$1' style='color:#4891E1'>$2</a>")},methods:{handlePreviewImage:function(t,e){Object(I["a"])({images:t,startPosition:e})},handleShowPop:function(){this.$emit("handleShowPop")},navToDetail:function(t){this.$router.push({name:"cardDetail",query:{id:t}})}},filters:{backgroundAddThumb:function(t){return t.indexOf("cdn.sync163.com")>=0?"background-image: url("+t+"/thumb)":"background-image: url("+t+")"},addThumb:function(t){return t.indexOf("cdn.sync163.com")>=0?t+"/thumb":t}},props:{id:{type:Number,default:1},item:Object,index:Number,list:Array,showTimeBlock:{type:Boolean,default:!0},isDetailPage:{type:Boolean,default:!1}}}),L=x,T=(i("6224"),Object(u["a"])(L,y,S,!1,null,"29103879",null)),O=T.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"download-bar"},[n("img",{staticClass:"img-logo",attrs:{src:i("cf05")}}),t._m(0),n("button",{staticClass:"dl-btn",on:{click:t.handleShowPop}},[t._v("立即下载")])])])},E=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info-block"},[t._v("\n      快知App"),i("br"),i("span",{staticClass:"desc"},[t._v("让信息获取更高效")])])}],_={data:function(){return{top:0,lastScroll:0,showAnimate:!1}},mounted:function(){},methods:{handleShowPop:function(){this.$emit("handleShowPop")},handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>this.lastScroll?this.top=-.6:this.top=0,this.lastScroll=t}}},R=_,Q=(i("a771"),Object(u["a"])(R,B,E,!1,null,"72fcc8d0",null)),j=Q.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"owner-block",on:{click:t.handleShowPop}},[n("div",{staticClass:"avatar-block"},t._l(t.robots,function(e,i){return n("img",{key:i,class:{"avatar-type-1":1==t.robots.length,"avatar-type-2":t.robots.length>1&&t.robots.length<5,"avatar-type-3":t.robots.length>=5&&t.robots.length<10,avatar:!0},attrs:{src:e.icon}})}),0),n("div",{staticClass:"desc-block"},[n("p",{staticClass:"label"},[t._v("来自机器人")]),n("p",{staticClass:"value"},[t._l(t.robots,function(e,i){return[n("span",{key:i},[t._v("【"+t._s(e.name)+"】")])]})],2)]),n("img",{staticClass:"img-right-arrow",attrs:{src:i("6b3a")}})])},D=[],M={data:function(){return{}},methods:{handleShowPop:function(){this.$emit("handleShowPop")}},props:["robots"]},q=M,W=(i("8154"),Object(u["a"])(q,z,D,!1,null,"12e18c75",null)),K=W.exports,U=i("ab6b"),J=i.n(U),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"cover",on:{click:function(e){return e.stopPropagation(),t.handleClosePop(e)}}}),n("div",{staticClass:"main-block",on:{click:function(t){t.stopPropagation()}}},[n("img",{staticClass:"img-logo",attrs:{src:i("cf05")}}),t._m(0),n("a",{staticClass:"j-button"},[t._v("开启快知")])])])},Z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"desc-text"},[t._v("\n      上快知，一站式订阅信息"),i("br"),t._v("\n      定向提醒快人所知\n    ")])}],N={data:function(){return{}},methods:{handleClosePop:function(){this.$emit("handleClosePop")}}},X=N,Y=(i("18ea"),Object(u["a"])(X,V,Z,!1,null,"4f1596e0",null)),G=Y.exports,F={data:function(){return{topicId:0,imageWidth:0,scrollLoading:!1,showLoading:!1,showJoinPop:!1,info:"",currentPage:1,list:[],loading:!1}},components:{CardItem:O,Loading:P,DownloadBar:j,RobotInfoBlock:K,InfiniteLoading:J.a,JoinPop:G},created:function(){var t=this;console.log("token",sessionStorage.getItem("token")),this.showLoading=!0,this.checkWxBrowser()?(0==this.$global.topicId&&(this.$global.topicId=this.$route.query.id),this.checkCode()):(this.topicId=this.$route.query.id,this.$nextTick(function(){t.getDetail(),t.getList()}))},methods:{checkCode:function(){var t=this;if(console.log("进来了"),console.log("$global.code.length",this.$global.code.length),0!=this.$global.code.length||this.$route.query.code)if(0==this.$global.code.length&&(this.$global.code=this.$route.query.code),sessionStorage.getItem("token"))this.topicId=this.$global.topicId,console.log("登陆成功"),this.$nextTick(function(){t.getDetail(),t.getList()});else{var e={code:this.$route.query.code};this.$utils.login(e).then(function(e){sessionStorage.setItem("token",e.data.token),t.topicId=t.$global.topicId,console.log("登陆成功"),t.$nextTick(function(){t.getDetail(),t.getList()})})}else if(0==this.$global.code.length){var i=window.location.href;console.log("url",i),this.$utils.getCode(i),this.showLoading=!1}},handleShowPop:function(){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr")>-1?this.$toast("暂无Android版本"):t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(this.$router.push({path:"/openTips",query:{page:"TopicListViewController",id:this.topicId}}),window.location=window.location)},handleClosePop:function(){this.showJoinPop=!1},onInfinite:function(t){this.getList().then(function(e){e.data.list.length>0?t.loaded():t.complete()}).catch(function(e){t.complete()})},getDetail:function(){var t=this,e={topic_id:this.topicId};this.$utils.axiosRequest("POST","api/topic/info","",e,function(e){t.info=e.data.info,t.$nextTick(function(){t.showLoading=!1})},function(e){t.showLoading=!1})},getList:function(){var t=this;return new Promise(function(e,i){var n={topic_id:t.topicId,page:t.currentPage};t.$utils.axiosRequest("POST","api/topic/cards","",n,function(i){i.data.list.length>0&&(i.data.list.length>5&&i.data.list.splice(i.data.list.length-6,5),0==t.list.length?(t.list=i.data.list,++t.currentPage):(t.list=t.list.concat(i.data.list),++t.currentPage)),e(i)},function(t){i(t)})})},checkWxBrowser:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}}},H=F,$=(i("fd9a"),Object(u["a"])(H,m,A,!1,null,"330f97fd",null)),tt=$.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showJoinPop?i("join-pop",{on:{handleClosePop:t.handleClosePop}}):t._e(),i("download-bar",{on:{handleShowPop:t.handleShowPop}}),""!=t.info?i("div",{staticClass:"page"},[i("div",{staticClass:"header-block"},[i("div",{staticClass:"robot-contain"},[i("div",{staticClass:"info-block"},[i("img",{staticClass:"avatar",attrs:{src:t.info.topic.icon}}),i("div",{staticClass:"middle"},[i("h1",{staticClass:"title"},[t._v(t._s(t.info.topic.name))]),i("p",{staticClass:"time"},[t._v(t._s(t.info.created_at))])]),i("button",{staticClass:"subscript-btn",on:{click:t.handleShowPop}},[t._v("订阅")])]),i("card-item",{staticClass:"card-item",attrs:{item:t.info,index:0,showTimeBlock:!1,isDetailPage:!0},on:{handleShowPop:t.handleShowPop}})],1),i("robot-info-block",{staticClass:"robot-info-block",attrs:{robots:t.info.fromRobots},on:{handleShowPop:t.handleShowPop}})],1),t.info.commentsCount>0?i("div",{staticClass:"comment-block"},[i("div",{staticClass:"title-block"},[t._v("\n        评论"+t._s(t.info.commentsCount>0?"·"+t.info.commentsCount:"")+"\n      ")]),i("div",{staticClass:"divide-line"}),t._l(t.list,function(e,n){return i("comment-item",{key:n,staticClass:"comment-item",attrs:{item:e},on:{handleShowPop:t.handleShowPop}})}),t.showMoreBtn?[i("div",{staticClass:"divide-line"}),i("div",{staticClass:"show-more"},[t._v("\n          查看更多评论\n        ")])]:t._e()],2):t._e()]):t._e(),i("button",{staticClass:"open-btn",on:{click:t.handleShowPop}},[t._v("App 内打开")]),t.showLoading?i("loading"):t._e()],1)},it=[],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item.sender_avatar?n("div",{staticClass:"card-item"},[n("img",{staticClass:"avatar",attrs:{src:t.item.sender_avatar}}),n("div",{staticClass:"right-container"},[n("div",{staticClass:"info-block"},[n("p",{staticClass:"name"},[t._v(t._s(t.item.sender_name))]),n("p",{staticClass:"time"},[t._v(t._s(t.item.created_at))]),n("button",{staticClass:"zan-button",on:{click:t.handleShowPop}},[n("img",{staticClass:"img-zan",attrs:{src:i("699f")}}),n("span",{staticClass:"count"},[t._v(t._s(t.item.like_count))])])]),n("div",{staticClass:"content-block"},[t._v("\n      "+t._s(t.item.content)+"\n    ")]),t.item.comments&&t.item.comments.length>0?n("div",{staticClass:"reply-block"},[t._l(t.item.comments,function(e,o){return[n("p",{key:e.id,staticClass:"reply-item"},[n("span",{staticClass:"name"},[t._v(t._s(e.sender_name))]),t._v(" : \n          "),e.replyer_name?n("span",{staticClass:"reply"},[t._v("\n            回复 \n            "),n("span",{staticClass:"name"},[t._v(t._s(e.replyer_name)+" ")])]):t._e(),n("span",{staticClass:"content-text"},[t._v(t._s(e.content))]),""!=e.image?[n("img",{staticClass:"img-pic",attrs:{src:i("617f")},on:{click:t.handleShowPop}}),n("span",{staticClass:"show-pic-text",on:{click:t.handleShowPop}},[t._v("查看图片")])]:t._e()],2),t.item.comments&&o!=t.item.comments.length-1?n("div",{key:o,staticClass:"fill-block"}):t._e()]}),t.item.comments.length>5?n("p",{staticClass:"show-more",on:{click:t.handleShowPop}},[t._v("查看所有评论")]):t._e()],2):t._e(),n("div",{staticClass:"divide-line"})])]):t._e()},ot=[],at={data:function(){return{}},methods:{handleShowPop:function(){this.$emit("handleShowPop")}},props:{item:{type:Object,default:{}}}},st=at,ct=(i("b6f7"),Object(u["a"])(st,nt,ot,!1,null,"534eeabf",null)),lt=ct.exports,rt={data:function(){return{id:0,info:"",list:[],currentPage:1,showJoinPop:!1,showLoading:!1,showMoreBtn:!1}},components:{CardItem:O,RobotInfoBlock:K,CommentItem:lt,DownloadBar:j,Loading:P,InfiniteLoading:J.a,JoinPop:G},created:function(){var t=this;this.checkWxBrowser()?(this.$global.cardId=this.$route.query.id,this.checkCode()):(this.id=this.$route.query.id,this.showLoading=!0,this.$nextTick(function(){t.getInfo(),t.getList()}))},methods:{checkCode:function(){var t=this;if(0!=this.$global.code.length||this.$route.query.code)if(this.$global.code=this.$route.query.code,sessionStorage.getItem("token"))this.id=this.$global.cardId,console.log("登陆成功"),this.$nextTick(function(){t.getInfo(),t.getList()});else{var e={code:this.$route.query.code};this.$utils.login(e).then(function(e){sessionStorage.setItem("token",e.data.token),t.id=t.$global.cardId,console.log("登陆成功"),t.$nextTick(function(){t.getInfo(),t.getList()})})}else if(0==this.$global.code.length){var i=window.location.href;this.$utils.getCode(i),this.showLoading=!1}},checkWxBrowser:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},handleShowPop:function(){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr")>-1?this.$toast("暂无Android版本"):t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(this.$router.push({path:"/openTips",query:{page:"FeedDetailViewController",id:this.id}}),window.location=window.location)},handleClosePop:function(){this.showJoinPop=!1},onInfinite:function(t){this.getList().then(function(e){e.data.list.length>0?t.loaded():t.complete()}).catch(function(){t.complete()})},getInfo:function(){var t=this,e={card_id:this.id};this.$utils.axiosRequest("POST","api/feed/card/info","",e,function(e){t.info=e.data.info,t.$nextTick(function(){t.showLoading=!1})},function(e){t.showLoading=!1})},getList:function(){var t=this;return new Promise(function(e,i){var n={page:t.currentPage,type:0,target_id:t.id};t.$utils.axiosRequest("POST","api/comment/list","",n,function(i){i.data.list.length>5&&(t.showMoreBtn=!0),i.data.list=i.data.list.slice(0,5),t.list.length<=0?t.list=i.data.list:t.list=t.list.concat(i.data.list),i.data.list.length>0&&++t.currentPage,e(i)},function(t){i(t)})})}}},dt=rt,ut=(i("ad2d"),Object(u["a"])(dt,et,it,!1,null,"6d98a43d",null)),gt=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showOpenTips?n("img",{staticClass:"img-tips",attrs:{src:i("90eb")}}):t._e()])},ht=[],ft=i("5118"),mt={data:function(){return{showOpenTips:!1,id:0,page:""}},created:function(){var t=this;this.id=this.$route.query.id,this.page=this.$route.query.page,this.$nextTick(function(){if("wx"==t.checkBrowser())t.showOpenTips=!0;else if("safari"==t.checkBrowser()){var e=window.location.href.replace("kz.sync163.com","kuaizhi.app");window.location.href=e,Object(ft["setTimeout"])(function(){console.log("是safari浏览器尝试跳转失败，跳appstore"),window.location.href="https://apps.apple.com/cn/app/%E7%A5%9E%E9%83%BD%E5%A4%9C%E8%A1%8C%E5%BD%95/id1420331309"},3e3)}})},methods:{checkBrowser:function(){console.log("进来了");var t=navigator.userAgent.toLowerCase(),e=-1!=t.indexOf("chrome"),i=-1!=t.indexOf("safari");return"micromessenger"==t.match(/MicroMessenger/i)?"wx":!e&&i?"safari":void 0}}},At=mt,vt=(i("5a46"),Object(u["a"])(At,pt,ht,!1,null,"2e46d738",null)),bt=vt.exports;s["a"].use(f["a"]);var Ct,wt,kt=new f["a"]({mode:"history",base:"/webpage",routes:[{path:"/",name:"home",component:tt},{path:"/cardDetail",name:"cardDetail",component:gt},{path:"/openTips",name:"openTips",component:bt}]}),Pt=i("2427"),yt=i.n(Pt),St="http://dev.kz.sync163.com/webpage/",It="",xt="",Lt="",Tt={hostUrl:St,userInfo:It,code:xt,type:Lt},Ot=Tt,Bt=Object(u["a"])(Ot,Ct,wt,!1,null,null,null),Et=Bt.exports,_t=i("7618"),Rt=i("00ca"),Qt=i.n(Rt);function jt(t,e,i,o,a,c){s["a"].prototype.$ajax({method:t,url:e,headers:{"Access-Control-Allow-Origin":"*",from:"h5"},dataType:"jsonp",data:o,params:i}).then(function(t){0===t.data.errno?a(t):(c(t),Object(n["a"])(t.data.errmsg))}).catch(function(t){if(console.log(t),401==t.response.status);"function"==typeof c&&c(t)})}function zt(t){var e;e=t?encodeURIComponent(t):encodeURIComponent("http://dev.kz.sync163.com/webpage/");var i="wxbcc23d04c3aa4a7c",n="code",o="snsapi_userinfo",a=11,s="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(i,"&redirect_uri=").concat(e,"&response_type=").concat(n,"&scope=").concat(o,"&state=").concat(a,"#wechat_redirect");window.location.href=s}function Dt(t){return new Promise(function(e,i){jt("POST","gzh/login","",t,function(t){console.log(t),s["a"].prototype.$global.userInfo=t.data.userinfo,e(t)},function(t){console.log(t),i()})})}function Mt(t,e,i,n,o,a){console.log(Object(_t["a"])(t)),Qt.a.chooseWXPay({timestamp:t,nonceStr:e,package:i,signType:n,paySign:o,success:function(t){"function"==typeof a&&a(t)}})}function qt(t,e){jt("POST","gzh/jssdk/config","",e,function(e){console.log(e),Qt.a.config({debug:!1,appId:e.data.payload.config.appId,timestamp:e.data.payload.config.timestamp,nonceStr:e.data.payload.config.nonceStr,signature:e.data.payload.config.signature,jsApiList:e.data.payload.config.jsApiList}),Qt.a.ready(function(){"function"==typeof t&&t()})},function(t){})}s["a"].use(n["a"]);var Wt={axiosRequest:jt,getCode:zt,payRequest:Mt,login:Dt,wxConfig:qt},Kt=i("aae9"),Ut=i.n(Kt);i("3623"),i("4ee2"),i("aede");l.a.polyfill(),yt.a.defaults.baseURL="http://dev.kz.sync163.com",yt.a.defaults.headers.common["token"]="asdfasdfasdf",s["a"].use(a["a"]),s["a"].use(o["a"]),s["a"].use(n["a"]);s["a"].use(Ut.a,{filter:{progressive:function(t,e){var i="cdn.sync163.com";t.src.indexOf(i)>=0&&(t.src=t.src+"/thumb")}}}),s["a"].prototype.$utils=Wt,s["a"].prototype.$ajax=yt.a,s["a"].prototype.$global=Et,s["a"].config.productionTip=!1,new s["a"]({router:kt,render:function(t){return t(h)}}).$mount("#app")},"5a46":function(t,e,i){"use strict";var n=i("19eb"),o=i.n(n);o.a},"5bc1":function(t,e,i){},"617f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADIklEQVRIS7WVzWtUVxjGn+fMRCN+lAZNiHXmlrabUiiVQqkuqqBk7rQLUWzpopTWr1Qtc1XQlaILVw1C7vUriUkUqgs/CIWCuRO7KPQvaDtdSGvaO1FqXQgS20gmc59y5kNEIiHO+K7OOfec8zvv+973fYgXbMwGxS4JQ4BWNZfF20baRtePbgFYBXAQwANAlEBjAAiVMUhaOGnnsR0TMJU5VN2P2n6SFNQBYSuAcbpBMYbwXeiltzTTA9ePbgDYYD0QwfOjXnpbUwG90XkQX1QAIofzufT2RgEfX1Hi6ics23syQXGItRzYEA7nvcYArh8dBXAE4IXQS+9w/eIgoO0VDwAO2cVGPHCDqADhLQCToecsc/3oHIAdNQAGQ8/Z2Qgg40+4RLxfwMW853ybCaIBCjtrOcC5fM7Z1Qjg6bOuH/UD2FX3YCD0nO6mAnqjPhDdVQDZH+bSX9UB608XlrSWXn4l5sySBBdMTSUSxR/3tj+czwMyQfEMpd31OuibTpjDLTPxbkCfgngTtlRrJlveZAHSiEku6ru+t/3ubLBs8PeKskodC1uT46VHMz2A9tRCpF8A0wloBcGCiDHEuCVqkuJyQG+LyBLoAPAvwWOjudQJ2K4A4MNTxQ/isnoBrK6C+RDSPRCv1XMAAQWUsT9/wPlhttetP6bkoraJzyUdB9BJ4vLU/fRnC9vuZBjPjICVArtkgPEy9R7ETbTtq1oH+KmltcX9vnvlf3PFuevs3XZTmr4CaR2JSxIzgEplmHU3vNTv9fOZ3miArP2mEPrDfc7jJM8J6fl5sVnQNgbEa6t7zUehl7r+5LlsUDwp6evnroOuE3+kTKLlVxBL4+lS59jBN+49GwAN571X593s3GDiIBR/A5pDYS7V80wAxAvhvvSXc4Xm6e8b+++/lHw0eQfEzTDnvDsrIONHsQFGRj3HKtC8zfX/GoW4cWlsll09kJp6nGQ/ukZws83BbwBelzRMJh4QsanLZFUirTxadVRt3QooK+tSbHVzDYF3JJ4l9Y8FSOwgZXvbTWaDP99XbE5XdbmpdtskzZ6KmL9I+x+zT3tFDYEp9gAAAABJRU5ErkJggg=="},6224:function(t,e,i){"use strict";var n=i("1dc7"),o=i.n(n);o.a},"699f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAADlUlEQVRYR8WXTWhdRRTH/2fe64txIaYKKgpCRLNIY/PenNubIrgoKhWpm2KJiF1US3Whqwp+LJTSjeJSqviB6EIp1SJalGJV3DSkd+a+xEa0RpKFCArGlyhofLx7/zIhKTGNJO/BfZ3NhblnzvnNOWfOnBG0MdI0vTnP8y9F5EOSL6nqb20sX1dU2lHgnHsTwCPLa6azLNsZx/FcOzrWym4awDl3C4DvAGwhmYlICcARVX2+WwDvANgP4EcAHwE4DOBTVb2vcIDJycmBZrP5bdg1yf3GmNtJHib5SRRF9xcO4Jx7D8CDAL6fmZnZ1t/f/z6AB0TkFWvtE4UCJEmyTUQmARgRGbXWHnfOjQPYAeApVX25UADv/Qck9wI4b63dLiJ0zv0C4DoA+1T1RGEASZJURcQDEBHZa609OTs7e8Xc3NxfYa5cLsfDw8PnigT4WET2AKhba23Y/cTExG2tVutCMNrT03P90NDQr4UA1Ov1KMuyEOuw+z3W2lPBkHPuHgCnSS6q6pUBqhAA7/1nJHcDOKeq8YoR7/1Bkq8D+EFVB1bmSZqxsbGrK5VKnzGmL8uypW+e530i0hfksiz7Oo7jsdXA61bCNE135nl+NgiKyG5r7elVAEdJPgfgj+WitGLgqgCxgTdI8kgURS+syIn33pG8geSpKIoOhR9pmj6W5/mrwYCq3rpaqff+XZIPb8LtLQDzItIg2QgpAyCcohzAgLU2VFQEgH9IVkTkbWvtgTUA36jq9tXGnHPPiMhNAILi+aDcGLNkJM/zRrlcbjSbzcbIyEjw0MVBUtI0/YnkjQAeUtVQ3NoH2MTO1xWZmpqqLC4u/gmgYoy5u1arnekqwPj4uJZKpQQAe3t7rx0cHPy9qwDe+0MkXwMwo6rhal8abedApyFwzr0B4FEAJ1R13+UASAFUATytqi92FWB6erpnYWEhJOAWY8xdtVrti64CJEmyQ0RCWWepVNparVbnuwrgnHscwLH1CltXkjBJkrdE5ADJ41EUjf7nLmi3EnZyCrz3EyRDRb2kgyrcA8sNTEjAMoBdqvpVVz3gvd9FMmR9uIS2qupC1wCcc+ERc0ZE7hSRs9baO9aGcKMQ/AzgaCdxF5FrSIZWfjD0IiTvjaLo83YBOrG9dk0G4ElVDcfwkiHOuamQIMaYk7Va7dkgkabpaJ7nF7uWDin+FpF6q9U6Fsex+z8dm36cdgix4bLLDvAv/r2AQHFaxzYAAAAASUVORK5CYII="},"69f5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACyUlEQVRYR+2WP2gTcRTH3ztTTZRg7WAXsZZksYHY3u+iiwgdXGKLfynioC6tQ3HQzuKJc3Wpg+2iDiLFv7RmcQiIFDH3u0ogTgmouNShIkGJNvl95UINbZpLAodQ8G46eO977/0+7/t+HNMmf3iT90d+g14n5BP0CXol4FXve9An6JWAV73vwf+L4MLCQigUCh1SSoWZOavr+qd2CeRyua5SqXTQyQ8Gg+9isdhyu1rbtnsAxDVNK3Z2dr7t7e0t/dXWPCilvAhgkoi6VoMgosdENGoYxne3YrOzs1ui0ehNpdQEEW1dzfutadpkPp+/NjIyUnHTWpa1k4hmiOgMUe3PapmZJ4QQ9xxdtUHbts8CeAhgw9Iw8+u5ublB0zRVo0JSylsArjSKMfNtIcTVRjHTNLXh4eE0gCP1cWYGM5/Tdf0RO4lDQ0POKPe4nZSZTwkhntXHLcvaS0QFIgq4aMtEFDEM43N9XEp5EsDTJjb4Mj8/38NSyv0APjTzCzNPCSEu1+fYtn1eKXW/mVbTtAu6rj+oz8lkMlPMPN6ibh/btn1AKfW+haFnDMMYa0BhFMB0iyJjQgjHZ+sey7Ic3WiLw/VzOp0OhsPhr0QUbjLiS0KIDY0sLi72VyqVxWZFAOiJRGJDjpRyDMDdJtpisVjcXV0KKeV1AKaL0T8CiBmG8bNR3LKsl0SUdCmUMgzjmItuOzPnAOxzqWsKIW5UG3SuikgkcgeAM8baJjNznpmP67ru6tFsNrtrZWXlCYDBtYWYOd3R0XE6Ho9/c6Nk23YfgBcAomtynA2eLhQK484Vte5acUZWLpeTmqbtIKLs0tLS82Qy+auFP6vhTCZzlJkPO+8A3iQSiVft6FKp1Lbu7u4TRBRXSv0IBAKpgYGB2k74PwvtUGx6C3j9wL/W+yP2Stgn6BP0SsCr3vegT9ArAa9634NeCf4BEdwHKEoKWw8AAAAASUVORK5CYII="},"6b3a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACLElEQVRIS62V2W7TUBCG/znOBik37H0CiLI7J4uEAmqsIBTK8qjslVApIEBkcRwFCPAG7CDRlihK4kEj+QrixI46d7bH3+czc3yG4BPdbvf8ZDKZ1Ov1X345Qe7ToiTbtjeJaI+ZD2OxWDOXy60t8RNsMfMjIkoQkZNIJJrpdPpnkC/+N2ehQJJs274K4A6AYwAG8/m8Wa1Wf4SV+AoE1Ov1mkR015MMk8mklUqlQkmWCkTiOI7luu49AMcBvAFgaa2/B13JSoGA+v1+g5nve5K3SinLNM1vQSSBBF5PtgCIJAngXTQatfL5/NdVksACr1xXmPkBM28AGM1mM6tWq31ZJgkl8CSXXdd9CGCDiN7HYrFGNpv1lYQWeD2pM7NIThDRh3g83shkMp8XrWQtgYAGg8Gl2Wy2Q0Qi+cjMDa31p8A/2qrmjUajk+Px+DmADIAxgOta66dHIuh0OqcMw9gFUPDgt7XWj4+kRLZtnyaiXWbOA/ijlLplmqbIFkaoHggcwBMAOYG7rnuzUqnItW8EFjiOc8Z1XYFliejQMIwbhULhv5qv1YPhcHh2Op0KXBoq8O1isfhs1UaQ5ytX0G63z0UiEYGniehgPp9vVyoV2T2BYqlAxqZSag9ACsABEbVKpdKLQGQvadnA2QQg8IsA9gG0tNYvw8B9SyQzGYA08AKA38zcKpfLr8LClwnkaJazZqqUumaa5ut14EubLONSKbVfKpXa68Llvb9C6MoZ6kiMjQAAAABJRU5ErkJggg=="},"75e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADX0lEQVRYR+1XTWgVVxT+zkwmSVdKraIUKgpFSkOeb+4ZIyFWEFf6Flpa2kXtJgYNVAiImyAShIBKiBQXVUgL6safheLGhaUtSItk7rxBm7gIKF34E5oQpFB8BuceuS9jkPhenPdiFMS7ebyZM+f77nfPOfccwltetJj4WuuLADYAKDDz35WwygS01h8BOAxgB4CVALISeywie4IgOFvJudZ6EsAyAA8bGxs7Wltb7861o2KxuNwYcwPA2nrUIKJTSqm9VQh8DeAcAAfAXcdxNvm+/+BFW9Ja/wTAOngCoBfAn47jJFnIENFTz/Nut7S0TFezj6LoBxE5kb4fmZ6e3tze3j713N4SeGhlJ6IflVI9WYBrtQnDsJ+I7OZARDcaGhq25nK5/8v/tdbG/orI7iAIfq7VeVZ7rfUQgM6UxK9NTU3brXKWgNiHItIZBMEvWR1Ws4vjeKkxZqeIbAbQCuATAEssBADvhe8GmXn/ayNQLBbZGLMPgA28DzJsZIqZly2YwOjo6IelUumIlVdEbLSXFxHdEpE/RGRMRCY9zzNJklglbCysIaIHSqmPF0QgjuN2Y8wlEVmR4k4R0aCInGPmO3NViKKoV0T6U4L9SqmDdRMIw/ArIjqTyv0UwIDrukfz+fyjSvJHUdQjIsfTd9eam5sLdQdhGIbbiOgKAJeIJgB8q5T6bZ5a0CUip2ZO5uU0rCkL4jj+NEmSYQBLAdxzXXdTPp//Zx7w70TkdFoNKxaizAT6+vqcQqEQAvAB/JckyRdtbW03q4EPDw9/6TjOeQANthQD6GBmW/hmV00xEIbhrvTcrZbfKKUuzJdumS6jrIVoZGSksVQqjQFYDeB3Zt7yqlzPdB1nJZBGvb3fhYjWK6VuvYrAPEfzued5923GZD4CrbWV21a5TLuvBh6G4fdEZINyjJnX1UKg3Fw4jtPt+/7JencfRdExETlgv2dmykwgiqKrIvKZ53kbcrncv2+cQL2AFcpxfQq8J/BOK1DuCQF0MbPt2xZ1aa0HAOy3BY2ZndmuGMAQM3ctKvrMEHTdXkoAxpl51excQETGGDNERH+JiFXltS7XdT0RKYjIztTxSWbuXvBkVCdLOyVt9H1/YqGzYS34tu8YB3AZwCFmtqU98xBaC1BNts8AKtwZP+h03bUAAAAASUVORK5CYII="},8154:function(t,e,i){"use strict";var n=i("0eb1"),o=i.n(n);o.a},"90eb":function(t,e,i){t.exports=i.p+"static/img/tips.1f1c28c9.png"},9975:function(t,e,i){},a771:function(t,e,i){"use strict";var n=i("02b1"),o=i.n(n);o.a},ad2d:function(t,e,i){"use strict";var n=i("f166"),o=i.n(n);o.a},aede:function(t,e,i){},b6f7:function(t,e,i){"use strict";var n=i("5bc1"),o=i.n(n);o.a},cf05:function(t,e,i){t.exports=i.p+"static/img/logo.f071e0ef.png"},eda7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFBUlEQVRYR7VXa4iUZRR+zvfNxRncTRjKiAwnlFibZXf83plZb8RmSaYSihEY9Suj658EcyFyiEAT80d/EiyIIiGKrrtoRZm06Fzez9mlqf6Ea1pGPza0MXdndr7vxNlmttnLOLPr+v5Y2PnOeZ7nvT3nvIQmRzqdDhuGsYmIVjHzCiJaAqClkl5g5gtE9BMzn3Zdty+RSAw1A02NgrLZ7EYi6iGitczcMF7wiIiZuZ+Z98VisWPX4qgLqLVOAHgTQLQ6SwAnDcP42nGclM/nOxcMBi/Lt6tXr95UKpWWmqbZ5bru/QDuqVmdHICnlVLpmYRME5BMJo3NmzfvBvAKAC+A34jokN/vPxKJRK40WjH5ns/nFxaLxZ3M/AKA2wGMAXi5t7f3QDKZdGsxJglgZkNrfZSIHgHgEtHrfr//pUgkUmqGeGpMPp/3FYvFV5l5FwCDmT9QSu0gogkRkwRorY8AeALAJdd1t8fj8W/mQjw1J5PJrDcM4yMAiwC8pZTaWY2ZEKC13gNgH4ArhmFsWLly5en5IK9inDlzZpXrul8BWAigRym1f/zAyh/bttuYeYCIvMy8RSnVN5/kVSyttVzjL5h5jIg6Lcv6eVyA1vpjAFsBHFVKPXojyGtEvA9gB4BPlFLbSAzGNM1fABTL5XK4q6vrzxspIJVKLfZ4PGJSfsdxllE2m91NRK8R0XuWZT1+I8mr2LZtv8vMjzHzi2Tb9jFmfoCZH47FYnJSJw35DmDtHIX1W5a1cWpuNpvdTkQfEtFx0lqfB7DE6/Xe2dHRMc2/tdbiZJ1zFDCglKo66QTE4OBgeGxs7CyAC7IFI0S0IBQKBcLh8OhUIvH/dDpdLTqz0pFIJApSF6YmDQ0NLRgeHh5h5lFZgREACwqFQqC7u3uagFkxNhksDjk6OlokoqII+B3AbX6//4729vYLTWJcV1gmk1liGIZs/R8iQNxJKthWpdSn14XcZLJt21uY+XMA38ot2MvMSQBHlFJP1sOwbfszZm7qNhCRnP6H6mFpraXMPwVgL6VSqRVerzfPzH+bprk0Go1emilRa/0DgEiTk8wrpdpnik2lUq0ej+c8EbU6jtNeteIvAWwAsF8p1TNT4okTJzwtLS1SzRqOQqFwqbu7u1xnIm8AeF6WXym1flxALpeLOY4j1U/q9Lp63UtD5gYBtm13SatG0hC47qpYLJapLccHAUjjcNE0zTXRaPTc9RLW5mez2buI6CSAxQAOKaWE679yLKOyxLIV9xLRr6Zpburs7PxxPkQMDAzcXS6Xj1fas14A25RS0qb9L0D+6e/vbwkEAn3MvA6AuNguy7KkS5rzsG37OWY+ACAA4LtQKLSx1nGnNaWnTp0K+Hy+wwCkMo4opYKzZZfeMpfLbXUcZw8RqUqbfrhUKu1avXq1OO/EuFZbLh5+RSk1qQ7Ytr3McZxiPB6f5JqZTOZWwzC6iOg+Zn4QQLjCchHAs/VMrpGAy0qp8auXy+UWua4rHa4YiAlAOmV5F8jNaa0sce3kzhLRgdbW1neWL19erLeKjQQMW5Z1s23bsh2yj7cAkPstxKEpoH/J08x13dPM3BeLxb6vbb/nKkAeIoMA1giAvPuY+Zl4PD6gtQ66riszh9/vL3R0dPwz27My7RbUAmitpTT7K78NA9hjWdbbM9X3uRBXc661BQeJSPb7aDAY7GlraxMR8z6aeu3OO2sN4L/FYB2D6FmT1QAAAABJRU5ErkJggg=="},f166:function(t,e,i){},f5e6:function(t,e,i){"use strict";var n=i("253b"),o=i.n(n);o.a},fd9a:function(t,e,i){"use strict";var n=i("9975"),o=i.n(n);o.a}});
//# sourceMappingURL=app.53c2d9d2.js.map