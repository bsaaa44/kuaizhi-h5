(function(t){function e(e){for(var i,s,c=e[0],l=e[1],r=e[2],u=0,p=[];u<c.length;u++)s=c[u],o[s]&&p.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,r||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fc8":function(t,e,n){},1720:function(t,e,n){"use strict";var i=n("b152"),o=n.n(i);o.a},"18ea":function(t,e,n){"use strict";var i=n("0fc8"),o=n.n(i);o.a},"1e89":function(t,e,n){},"253b":function(t,e,n){},"2abad":function(t,e,n){},"35d9":function(t,e,n){"use strict";var i=n("1e89"),o=n.n(i);o.a},"3d90":function(t,e,n){},4464:function(t,e,n){},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("1cc4");var i=n("94da"),o=(n("1979"),n("b705")),a=(n("8867"),n("4b6e")),s=(n("cadf"),n("551c"),n("f751"),n("097d"),n("9f45"),n("2b0e")),c=n("c0f9"),l=n.n(c),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],u=n("2877"),p={},g=Object(u["a"])(p,r,d,!1,null,null,null),h=g.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showJoinPop?n("join-pop",{on:{handleClosePop:t.handleClosePop}}):t._e(),n("download-bar",{on:{handleShowPop:t.handleShowPop}}),""!=t.info?n("div",{staticClass:"home"},[n("div",{staticClass:"background-image-block"},[n("div",{staticClass:"bg",style:"background-image: url("+t.info.icon+")"})]),n("div",{attrs:{id:"main"}},[n("div",{staticClass:"header-block"},[n("img",{staticClass:"avatar",attrs:{src:t.info.icon}}),n("button",{staticClass:"subscript-btn",on:{click:t.handleShowPop}},[t._v("订阅")])]),n("div",{staticClass:"info-block"},[n("h1",{staticClass:"title"},[t._v(t._s(t.info.name))]),n("p",{staticClass:"desc"},[t._v(t._s(t.info.description))])]),n("robot-info-block",{staticClass:"robot-info-block",attrs:{robots:t.info.robots},on:{handleShowPop:t.handleShowPop}}),n("div",{staticClass:"owner-info-block"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.info.owner.avatar,expression:"info.owner.avatar"}],staticClass:"avatar"}),n("span",{staticClass:"name"},[t._v(t._s(t.info.owner.name))]),n("span",{staticClass:"label"},[t._v("创建")])]),n("div",{staticClass:"divide-line"}),n("div",{staticClass:"topic-list"},[n("h2",[t._v("主题动态")]),t._l(t.list,function(e,i){return n("card-item",{key:i,staticClass:"card-item",attrs:{id:i,item:e,list:t.list,index:i},on:{handleShowPop:t.handleShowPop}})})],2)],1),n("button",{staticClass:"open-btn",on:{click:t.handleShowPop}},[t._v("App 内打开")])]):t._e(),t.showLoading?n("loading"):t._e()],1)},A=[],v=(n("4917"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",on:{touchmove:function(t){t.preventDefault()},click:function(e){return e.stopPropagation(),t.prevent(e)}}},[n("div",{staticClass:"content",on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}},[n("div",{staticClass:"background",on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}}),n("van-loading",{staticClass:"loading",attrs:{color:"white"},on:{click:function(e){return e.stopPropagation(),t.prevent(e)}}})],1)])}),b=[],C={data:function(){return{}},methods:{prevent:function(){console.log("prevent")}}},w=C,k=(n("f5e6"),Object(u["a"])(w,v,b,!1,null,"286bb38e",null)),P=k.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-block",on:{click:function(e){return t.navToDetail(t.item.id)}}},[t.showTimeBlock?i("div",{staticClass:"time-block",on:{click:function(t){t.stopPropagation()}}},[i("span",[t._v(t._s(t.item.created_at))]),i("img",{staticClass:"img-more",attrs:{src:n("69f5")},on:{click:t.handleShowPop}})]):t._e(),i("div",{staticClass:"content",domProps:{innerHTML:t._s(t.item.text.replace(/\n/g,"<br>"))}}),t.item.video&&""!=t.item.video?i("div",{staticClass:"video-block",on:{click:function(t){t.stopPropagation()}}},[i("video",{attrs:{controls:"controls",poster:t.item.video_thumb_img,"x-webkit-airplay":"true","x5-video-player-fullscreen":"true",playsinline:"true","webkit-playsinline":"","x5-video-player-typ":"h5"}},[i("source",{attrs:{type:"application/x-mpegURL",src:t.item.video}})])]):t._e(),t.item.images.length>1?i("div",{staticClass:"images-block",on:{click:function(t){t.stopPropagation()}}},t._l(t.item.images,function(e,n){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"it"}],key:n,class:{"image-type-1":2!=t.item.images.length&&1!=t.item.images.length&&n>=t.item.images.length%3,"image-type-2":t.item.images.length%3==2&&n<t.item.images.length%3,"image-type-3":t.item.images.length%3===1&&n<t.item.images.length%3},style:{height:t.item.images.length%3===1&&n<t.item.images.length%3?t.imageWidth/2+"px":"auto",marginBottom:t.item.images.length>3&&n<t.item.images.length-3?"0.05rem":"0"},on:{click:function(e){return t.handlePreviewImage(t.item.images,n)}}})}),0):t._e(),1==t.item.images.length?i("div",{staticClass:"images-block",on:{click:function(t){t.stopPropagation()}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.item.images[0],expression:"item.images[0]"}],staticClass:"single-image",on:{click:function(e){return t.handlePreviewImage(t.item.images,0)}}})]):t._e(),t.item.url&&""!=t.item.url?i("a",{staticClass:"website-block",attrs:{href:t.item.url},on:{click:function(t){t.stopPropagation()}}},[i("img",{staticClass:"avatar",attrs:{src:t.item.url_cover}}),i("div",{staticClass:"info"},[i("h3",{staticClass:"title"},[t._v(t._s(t.item.url_title))]),""!=t.item.url_desc?i("p",{staticClass:"desc"},[t._v(t._s(t.item.url_desc))]):t._e()])]):t._e(),i("div",{staticClass:"tools-block",style:t.isDetailPage?"padding:0 0.08rem":"",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"zan-btn tools-btn",on:{click:t.handleShowPop}},[i("img",{staticClass:"img-finger",attrs:{src:n("699f")}}),t.item.zanCount>0?i("span",{staticClass:"count"},[t._v(t._s(t.item.zanCount))]):t._e()]),i("div",{staticClass:"comment-btn tools-btn",on:{click:t.handleShowPop}},[i("img",{staticClass:"img-message",attrs:{src:n("eda7")}}),t.item.commentsCount>0?i("span",{staticClass:"count"},[t._v(t._s(t.item.commentsCount))]):t._e()]),i("div",{staticClass:"share-btn tools-btn",on:{click:t.handleShowPop}},[i("img",{staticClass:"img-share",attrs:{src:n("75e1")}})])]),t.list&&t.index!=t.list.length-1&&t.list.length>0?i("div",{staticClass:"divide-line"}):t._e()])},S=[],I=(n("c5f6"),n("0574"),n("2d30")),x=(n("a481"),{data:function(){return{imageWidth:0}},created:function(){this.imageWidth=document.body.clientWidth,console.log(this.imageWidth);var t=/<a-link href="(.*?)">(.*?)<\/a-link>/gi;this.item.text=this.item.text.replace(t,"<a href='$1' style='color:#4891E1'>$2</a>")},methods:{handlePreviewImage:function(t,e){Object(I["a"])({images:t,startPosition:e})},handleShowPop:function(){this.$emit("handleShowPop")},navToDetail:function(t){this.$router.push({name:"cardDetail",query:{id:t}})}},filters:{backgroundAddThumb:function(t){return t.indexOf("cdn.sync163.com")>=0?"background-image: url("+t+"/thumb)":"background-image: url("+t+")"},addThumb:function(t){return t.indexOf("cdn.sync163.com")>=0?t+"/thumb":t}},props:{id:{type:Number,default:1},item:Object,index:Number,list:Array,showTimeBlock:{type:Boolean,default:!0},isDetailPage:{type:Boolean,default:!1}}}),L=x,T=(n("a1c9"),Object(u["a"])(L,y,S,!1,null,"1e08ad9a",null)),O=T.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"download-bar"},[i("img",{staticClass:"img-logo",attrs:{src:n("cf05")}}),t._m(0),i("button",{staticClass:"dl-btn",on:{click:t.handleShowPop}},[t._v("立即下载")])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-block"},[t._v("\n      快知App"),n("br"),n("span",{staticClass:"desc"},[t._v("让信息获取更高效")])])}],R={data:function(){return{top:0,lastScroll:0,showAnimate:!1}},mounted:function(){},methods:{handleShowPop:function(){this.$emit("handleShowPop")},handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>this.lastScroll?this.top=-.6:this.top=0,this.lastScroll=t}}},_=R,Q=(n("ccc5"),Object(u["a"])(_,B,E,!1,null,"97d73c88",null)),j=Q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"owner-block",on:{click:t.handleShowPop}},[i("div",{staticClass:"avatar-block"},t._l(t.robots,function(e,n){return i("img",{key:n,class:{"avatar-type-1":1==t.robots.length,"avatar-type-2":t.robots.length>1&&t.robots.length<5,"avatar-type-3":t.robots.length>=5&&t.robots.length<10,avatar:!0},attrs:{src:e.icon}})}),0),i("div",{staticClass:"desc-block"},[i("p",{staticClass:"label"},[t._v("来自机器人")]),i("p",{staticClass:"value"},[t._l(t.robots,function(e,n){return[i("span",{key:n},[t._v("【"+t._s(e.name)+"】")])]})],2)]),i("img",{staticClass:"img-right-arrow",attrs:{src:n("6b3a")}})])},D=[],M={data:function(){return{}},methods:{handleShowPop:function(){this.$emit("handleShowPop")}},props:["robots"]},W=M,q=(n("35d9"),Object(u["a"])(W,z,D,!1,null,"729c4c26",null)),J=q.exports,K=n("ab6b"),U=n.n(K),V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"cover",on:{click:function(e){return e.stopPropagation(),t.handleClosePop(e)}}}),i("div",{staticClass:"main-block",on:{click:function(t){t.stopPropagation()}}},[i("img",{staticClass:"img-logo",attrs:{src:n("cf05")}}),t._m(0),i("a",{staticClass:"j-button"},[t._v("开启快知")])])])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"desc-text"},[t._v("\n      上快知，一站式订阅信息"),n("br"),t._v("\n      定向提醒快人所知\n    ")])}],N={data:function(){return{}},methods:{handleClosePop:function(){this.$emit("handleClosePop")}}},Y=N,X=(n("18ea"),Object(u["a"])(Y,V,Z,!1,null,"4f1596e0",null)),G=X.exports,F={data:function(){return{topicId:0,imageWidth:0,scrollLoading:!1,showLoading:!1,showJoinPop:!1,info:"",currentPage:1,list:[],loading:!1}},components:{CardItem:O,Loading:P,DownloadBar:j,RobotInfoBlock:J,InfiniteLoading:U.a,JoinPop:G},created:function(){var t=this;console.log("token",sessionStorage.getItem("token")),this.showLoading=!0,this.checkWxBrowser()?(this.$global.topicId=this.$route.query.id,this.checkCode()):(this.topicId=this.$route.query.id,this.$nextTick(function(){t.getDetail(),t.getList()}))},methods:{checkCode:function(){var t=this;if(0!=this.$global.code.length||this.$route.query.code)if(this.$global.code=this.$route.query.code,sessionStorage.getItem("token"))this.topicId=this.$global.topicId,console.log("登陆成功"),this.$nextTick(function(){t.getDetail(),t.getList()});else{var e={code:this.$route.query.code};this.$utils.login(e).then(function(e){sessionStorage.setItem("token",e.data.token),t.topicId=t.$global.topicId,console.log("登陆成功"),t.$nextTick(function(){t.getDetail(),t.getList()})})}else if(0==this.$global.code.length){var n=window.location.href;console.log("url",n),this.$utils.getCode(n),this.showLoading=!1}},handleShowPop:function(){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr")>-1?Toast("暂无Android版本"):t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(this.$router.push({path:"/openTips",query:{page:"topicPage",id:this.topicId}}),window.location=window.location)},handleClosePop:function(){this.showJoinPop=!1},onInfinite:function(t){this.getList().then(function(e){e.data.list.length>0?t.loaded():t.complete()}).catch(function(e){t.complete()})},getDetail:function(){var t=this,e={topic_id:this.topicId};this.$utils.axiosRequest("POST","api/topic/info","",e,function(e){t.info=e.data.info,t.$nextTick(function(){t.showLoading=!1})},function(e){t.showLoading=!1})},getList:function(){var t=this;return new Promise(function(e,n){var i={topic_id:t.topicId,page:t.currentPage};t.$utils.axiosRequest("POST","api/topic/cards","",i,function(n){n.data.list.length>0&&(n.data.list.splice(n.data.list.length-6,5),0==t.list.length?(t.list=n.data.list,++t.currentPage):(t.list=t.list.concat(n.data.list),++t.currentPage)),e(n)},function(t){n(t)})})},checkWxBrowser:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}}},H=F,$=(n("97f6"),Object(u["a"])(H,m,A,!1,null,"a9af6d26",null)),tt=$.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showJoinPop?n("join-pop",{on:{handleClosePop:t.handleClosePop}}):t._e(),n("download-bar",{on:{handleShowPop:t.handleShowPop}}),""!=t.info?n("div",{staticClass:"page"},[n("div",{staticClass:"header-block"},[n("div",{staticClass:"robot-contain"},[n("div",{staticClass:"info-block"},[n("img",{staticClass:"avatar",attrs:{src:t.info.topic.icon}}),n("div",{staticClass:"middle"},[n("h1",{staticClass:"title"},[t._v(t._s(t.info.topic.name))]),n("p",{staticClass:"time"},[t._v(t._s(t.info.created_at))])]),n("button",{staticClass:"subscript-btn",on:{click:t.handleShowPop}},[t._v("订阅")])]),n("card-item",{staticClass:"card-item",attrs:{item:t.info,index:0,showTimeBlock:!1,isDetailPage:!0},on:{handleShowPop:t.handleShowPop}})],1),n("robot-info-block",{staticClass:"robot-info-block",attrs:{robots:t.info.fromRobots},on:{handleShowPop:t.handleShowPop}})],1),t.info.commentsCount>0?n("div",{staticClass:"comment-block"},[n("div",{staticClass:"title-block"},[t._v("\n        评论"+t._s(t.info.commentsCount>0?"·"+t.info.commentsCount:"")+"\n      ")]),n("div",{staticClass:"divide-line"}),t._l(t.list,function(e,i){return n("comment-item",{key:i,staticClass:"comment-item",attrs:{item:e},on:{handleShowPop:t.handleShowPop}})}),t.showMoreBtn?[n("div",{staticClass:"divide-line"}),n("div",{staticClass:"show-more"},[t._v("\n          查看更多评论\n        ")])]:t._e()],2):t._e()]):t._e(),n("button",{staticClass:"open-btn",on:{click:t.handleShowPop}},[t._v("App 内打开")]),t.showLoading?n("loading"):t._e()],1)},nt=[],it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item.sender_avatar?i("div",{staticClass:"card-item"},[i("img",{staticClass:"avatar",attrs:{src:t.item.sender_avatar}}),i("div",{staticClass:"right-container"},[i("div",{staticClass:"info-block"},[i("p",{staticClass:"name"},[t._v(t._s(t.item.sender_name))]),i("p",{staticClass:"time"},[t._v(t._s(t.item.created_at))]),i("button",{staticClass:"zan-button",on:{click:t.handleShowPop}},[i("img",{staticClass:"img-zan",attrs:{src:n("699f")}}),i("span",{staticClass:"count"},[t._v(t._s(t.item.like_count))])])]),i("div",{staticClass:"content-block"},[t._v("\n      "+t._s(t.item.content)+"\n    ")]),t.item.comments&&t.item.comments.length>0?i("div",{staticClass:"reply-block"},[t._l(t.item.comments,function(e,o){return[i("p",{key:e.id,staticClass:"reply-item"},[i("span",{staticClass:"name"},[t._v(t._s(e.sender_name))]),t._v(" : \n          "),e.replyer_name?i("span",{staticClass:"reply"},[t._v("\n            回复 \n            "),i("span",{staticClass:"name"},[t._v(t._s(e.replyer_name)+" ")])]):t._e(),i("span",{staticClass:"content-text"},[t._v(t._s(e.content))]),""!=e.image?[i("img",{staticClass:"img-pic",attrs:{src:n("617f")},on:{click:t.handleShowPop}}),i("span",{staticClass:"show-pic-text",on:{click:t.handleShowPop}},[t._v("查看图片")])]:t._e()],2),t.item.comments&&o!=t.item.comments.length-1?i("div",{key:o,staticClass:"fill-block"}):t._e()]}),t.item.comments.length>5?i("p",{staticClass:"show-more",on:{click:t.handleShowPop}},[t._v("查看所有评论")]):t._e()],2):t._e(),i("div",{staticClass:"divide-line"})])]):t._e()},ot=[],at={data:function(){return{}},methods:{handleShowPop:function(){this.$emit("handleShowPop")}},props:{item:{type:Object,default:{}}}},st=at,ct=(n("b6f7"),Object(u["a"])(st,it,ot,!1,null,"534eeabf",null)),lt=ct.exports,rt={data:function(){return{id:0,info:"",list:[],currentPage:1,showJoinPop:!1,showLoading:!1,showMoreBtn:!1}},components:{CardItem:O,RobotInfoBlock:J,CommentItem:lt,DownloadBar:j,Loading:P,InfiniteLoading:U.a,JoinPop:G},created:function(){var t=this;this.checkWxBrowser()?(this.$global.cardId=this.$route.query.id,this.checkCode()):(this.id=this.$route.query.id,this.showLoading=!0,this.$nextTick(function(){t.getInfo(),t.getList()}))},methods:{checkCode:function(){var t=this;if(0!=this.$global.code.length||this.$route.query.code)if(this.$global.code=this.$route.query.code,sessionStorage.getItem("token"))this.id=this.$global.cardId,console.log("登陆成功"),this.$nextTick(function(){t.getInfo(),t.getList()});else{var e={code:this.$route.query.code};this.$utils.login(e).then(function(e){sessionStorage.setItem("token",e.data.token),t.id=t.$global.cardId,console.log("登陆成功"),t.$nextTick(function(){t.getInfo(),t.getList()})})}else if(0==this.$global.code.length){var n=window.location.href;this.$utils.getCode(n),this.showLoading=!1}},checkWxBrowser:function(){var t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)},handleShowPop:function(){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Adr")>-1?Toast("暂无Android版本"):t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(this.$router.push({path:"/openTips",query:{page:"topicPage",id:this.id}}),window.location=window.location)},handleClosePop:function(){this.showJoinPop=!1},onInfinite:function(t){this.getList().then(function(e){e.data.list.length>0?t.loaded():t.complete()}).catch(function(){t.complete()})},getInfo:function(){var t=this,e={card_id:this.id};this.$utils.axiosRequest("POST","api/feed/card/info","",e,function(e){t.info=e.data.info,t.$nextTick(function(){t.showLoading=!1})},function(e){t.showLoading=!1})},getList:function(){var t=this;return new Promise(function(e,n){var i={page:t.currentPage,type:0,target_id:t.id};t.$utils.axiosRequest("POST","api/comment/list","",i,function(n){n.data.list.length>5&&(t.showMoreBtn=!0),n.data.list=n.data.list.slice(0,5),t.list.length<=0?t.list=n.data.list:t.list=t.list.concat(n.data.list),n.data.list.length>0&&++t.currentPage,e(n)},function(t){n(t)})})}}},dt=rt,ut=(n("1720"),Object(u["a"])(dt,et,nt,!1,null,"f7cba200",null)),pt=ut.exports,gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.showOpenTips?i("img",{staticClass:"img-tips",attrs:{src:n("90eb")}}):t._e()])},ht=[],ft=n("5118"),mt={data:function(){return{showOpenTips:!1}},created:function(){"wx"==this.checkBrowser()?this.showOpenTips=!0:"safari"==this.checkBrowser()&&(console.log("是safari浏览器尝试跳转"),window.location.href='kuaizhi://TopicListViewController?id="8EnYR9xbJbMve"',Object(ft["setTimeout"])(function(){console.log("是safari浏览器尝试跳转失败，跳appstore"),window.location.href="https://apps.apple.com/cn/app/%E7%A5%9E%E9%83%BD%E5%A4%9C%E8%A1%8C%E5%BD%95/id1420331309"},1e3))},methods:{checkBrowser:function(){console.log("进来了");var t=navigator.userAgent.toLowerCase(),e=-1!=t.indexOf("chrome"),n=-1!=t.indexOf("safari");return"micromessenger"==t.match(/MicroMessenger/i)?"wx":!e&&n?"safari":void 0}}},At=mt,vt=(n("ede7"),Object(u["a"])(At,gt,ht,!1,null,"ff610fd4",null)),bt=vt.exports;s["a"].use(f["a"]);var Ct,wt,kt=new f["a"]({mode:"history",base:"/webpage",routes:[{path:"/",name:"home",component:tt},{path:"/cardDetail",name:"cardDetail",component:pt},{path:"/openTips",name:"openTips",component:bt}]}),Pt=n("2427"),yt=n.n(Pt),St="http://dev.kz.sync163.com/webpage/",It="",xt="",Lt="",Tt={hostUrl:St,userInfo:It,code:xt,type:Lt},Ot=Tt,Bt=Object(u["a"])(Ot,Ct,wt,!1,null,null,null),Et=Bt.exports,Rt=n("7618"),_t=n("00ca"),Qt=n.n(_t);function jt(t,e,n,o,a,c){s["a"].prototype.$ajax({method:t,url:e,headers:{"Access-Control-Allow-Origin":"*",from:"h5"},dataType:"jsonp",data:o,params:n}).then(function(t){0===t.data.errno?a(t):(c(t),Object(i["a"])(t.data.errmsg))}).catch(function(t){if(console.log(t),401==t.response.status);"function"==typeof c&&c(t)})}function zt(t){var e;e=t?encodeURIComponent(t):encodeURIComponent("http://dev.kz.sync163.com/webpage/");var n="wxbcc23d04c3aa4a7c",i="code",o="snsapi_userinfo",a=11,s="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(n,"&redirect_uri=").concat(e,"&response_type=").concat(i,"&scope=").concat(o,"&state=").concat(a,"#wechat_redirect");window.location.href=s}function Dt(t){return new Promise(function(e,n){jt("POST","gzh/login","",t,function(t){console.log(t),s["a"].prototype.$global.userInfo=t.data.userinfo,e(t)},function(t){console.log(t),n()})})}function Mt(t,e,n,i,o,a){console.log(Object(Rt["a"])(t)),Qt.a.chooseWXPay({timestamp:t,nonceStr:e,package:n,signType:i,paySign:o,success:function(t){"function"==typeof a&&a(t)}})}function Wt(t,e){jt("POST","gzh/jssdk/config","",e,function(e){console.log(e),Qt.a.config({debug:!1,appId:e.data.payload.config.appId,timestamp:e.data.payload.config.timestamp,nonceStr:e.data.payload.config.nonceStr,signature:e.data.payload.config.signature,jsApiList:e.data.payload.config.jsApiList}),Qt.a.ready(function(){"function"==typeof t&&t()})},function(t){})}s["a"].use(i["a"]);var qt={axiosRequest:jt,getCode:zt,payRequest:Mt,login:Dt,wxConfig:Wt},Jt=n("aae9"),Kt=n.n(Jt);n("3623"),n("4ee2"),n("aede");l.a.polyfill(),yt.a.defaults.baseURL="http://dev.kz.sync163.com",yt.a.defaults.headers.common["token"]="asdfasdfasdf",s["a"].use(a["a"]),s["a"].use(o["a"]),s["a"].use(i["a"]);s["a"].use(Kt.a,{filter:{progressive:function(t,e){var n="cdn.sync163.com";t.src.indexOf(n)>=0&&(t.src=t.src+"/thumb")}}}),s["a"].prototype.$utils=qt,s["a"].prototype.$ajax=yt.a,s["a"].prototype.$global=Et,s["a"].config.productionTip=!1,new s["a"]({router:kt,render:function(t){return t(h)}}).$mount("#app")},"5bc1":function(t,e,n){},"617f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADIklEQVRIS7WVzWtUVxjGn+fMRCN+lAZNiHXmlrabUiiVQqkuqqBk7rQLUWzpopTWr1Qtc1XQlaILVw1C7vUriUkUqgs/CIWCuRO7KPQvaDtdSGvaO1FqXQgS20gmc59y5kNEIiHO+K7OOfec8zvv+973fYgXbMwGxS4JQ4BWNZfF20baRtePbgFYBXAQwANAlEBjAAiVMUhaOGnnsR0TMJU5VN2P2n6SFNQBYSuAcbpBMYbwXeiltzTTA9ePbgDYYD0QwfOjXnpbUwG90XkQX1QAIofzufT2RgEfX1Hi6ics23syQXGItRzYEA7nvcYArh8dBXAE4IXQS+9w/eIgoO0VDwAO2cVGPHCDqADhLQCToecsc/3oHIAdNQAGQ8/Z2Qgg40+4RLxfwMW853ybCaIBCjtrOcC5fM7Z1Qjg6bOuH/UD2FX3YCD0nO6mAnqjPhDdVQDZH+bSX9UB608XlrSWXn4l5sySBBdMTSUSxR/3tj+czwMyQfEMpd31OuibTpjDLTPxbkCfgngTtlRrJlveZAHSiEku6ru+t/3ubLBs8PeKskodC1uT46VHMz2A9tRCpF8A0wloBcGCiDHEuCVqkuJyQG+LyBLoAPAvwWOjudQJ2K4A4MNTxQ/isnoBrK6C+RDSPRCv1XMAAQWUsT9/wPlhttetP6bkoraJzyUdB9BJ4vLU/fRnC9vuZBjPjICVArtkgPEy9R7ETbTtq1oH+KmltcX9vnvlf3PFuevs3XZTmr4CaR2JSxIzgEplmHU3vNTv9fOZ3miArP2mEPrDfc7jJM8J6fl5sVnQNgbEa6t7zUehl7r+5LlsUDwp6evnroOuE3+kTKLlVxBL4+lS59jBN+49GwAN571X593s3GDiIBR/A5pDYS7V80wAxAvhvvSXc4Xm6e8b+++/lHw0eQfEzTDnvDsrIONHsQFGRj3HKtC8zfX/GoW4cWlsll09kJp6nGQ/ukZws83BbwBelzRMJh4QsanLZFUirTxadVRt3QooK+tSbHVzDYF3JJ4l9Y8FSOwgZXvbTWaDP99XbE5XdbmpdtskzZ6KmL9I+x+zT3tFDYEp9gAAAABJRU5ErkJggg=="},"699f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAADlUlEQVRYR8WXTWhdRRTH/2fe64txIaYKKgpCRLNIY/PenNubIrgoKhWpm2KJiF1US3Whqwp+LJTSjeJSqviB6EIp1SJalGJV3DSkd+a+xEa0RpKFCArGlyhofLx7/zIhKTGNJO/BfZ3NhblnzvnNOWfOnBG0MdI0vTnP8y9F5EOSL6nqb20sX1dU2lHgnHsTwCPLa6azLNsZx/FcOzrWym4awDl3C4DvAGwhmYlICcARVX2+WwDvANgP4EcAHwE4DOBTVb2vcIDJycmBZrP5bdg1yf3GmNtJHib5SRRF9xcO4Jx7D8CDAL6fmZnZ1t/f/z6AB0TkFWvtE4UCJEmyTUQmARgRGbXWHnfOjQPYAeApVX25UADv/Qck9wI4b63dLiJ0zv0C4DoA+1T1RGEASZJURcQDEBHZa609OTs7e8Xc3NxfYa5cLsfDw8PnigT4WET2AKhba23Y/cTExG2tVutCMNrT03P90NDQr4UA1Ov1KMuyEOuw+z3W2lPBkHPuHgCnSS6q6pUBqhAA7/1nJHcDOKeq8YoR7/1Bkq8D+EFVB1bmSZqxsbGrK5VKnzGmL8uypW+e530i0hfksiz7Oo7jsdXA61bCNE135nl+NgiKyG5r7elVAEdJPgfgj+WitGLgqgCxgTdI8kgURS+syIn33pG8geSpKIoOhR9pmj6W5/mrwYCq3rpaqff+XZIPb8LtLQDzItIg2QgpAyCcohzAgLU2VFQEgH9IVkTkbWvtgTUA36jq9tXGnHPPiMhNAILi+aDcGLNkJM/zRrlcbjSbzcbIyEjw0MVBUtI0/YnkjQAeUtVQ3NoH2MTO1xWZmpqqLC4u/gmgYoy5u1arnekqwPj4uJZKpQQAe3t7rx0cHPy9qwDe+0MkXwMwo6rhal8abedApyFwzr0B4FEAJ1R13+UASAFUATytqi92FWB6erpnYWEhJOAWY8xdtVrti64CJEmyQ0RCWWepVNparVbnuwrgnHscwLH1CltXkjBJkrdE5ADJ41EUjf7nLmi3EnZyCrz3EyRDRb2kgyrcA8sNTEjAMoBdqvpVVz3gvd9FMmR9uIS2qupC1wCcc+ERc0ZE7hSRs9baO9aGcKMQ/AzgaCdxF5FrSIZWfjD0IiTvjaLo83YBOrG9dk0G4ElVDcfwkiHOuamQIMaYk7Va7dkgkabpaJ7nF7uWDin+FpF6q9U6Fsex+z8dm36cdgix4bLLDvAv/r2AQHFaxzYAAAAASUVORK5CYII="},"69f5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACyUlEQVRYR+2WP2gTcRTH3ztTTZRg7WAXsZZksYHY3u+iiwgdXGKLfynioC6tQ3HQzuKJc3Wpg+2iDiLFv7RmcQiIFDH3u0ogTgmouNShIkGJNvl95UINbZpLAodQ8G46eO977/0+7/t+HNMmf3iT90d+g14n5BP0CXol4FXve9An6JWAV73vwf+L4MLCQigUCh1SSoWZOavr+qd2CeRyua5SqXTQyQ8Gg+9isdhyu1rbtnsAxDVNK3Z2dr7t7e0t/dXWPCilvAhgkoi6VoMgosdENGoYxne3YrOzs1ui0ehNpdQEEW1dzfutadpkPp+/NjIyUnHTWpa1k4hmiOgMUe3PapmZJ4QQ9xxdtUHbts8CeAhgw9Iw8+u5ublB0zRVo0JSylsArjSKMfNtIcTVRjHTNLXh4eE0gCP1cWYGM5/Tdf0RO4lDQ0POKPe4nZSZTwkhntXHLcvaS0QFIgq4aMtEFDEM43N9XEp5EsDTJjb4Mj8/38NSyv0APjTzCzNPCSEu1+fYtn1eKXW/mVbTtAu6rj+oz8lkMlPMPN6ibh/btn1AKfW+haFnDMMYa0BhFMB0iyJjQgjHZ+sey7Ic3WiLw/VzOp0OhsPhr0QUbjLiS0KIDY0sLi72VyqVxWZFAOiJRGJDjpRyDMDdJtpisVjcXV0KKeV1AKaL0T8CiBmG8bNR3LKsl0SUdCmUMgzjmItuOzPnAOxzqWsKIW5UG3SuikgkcgeAM8baJjNznpmP67ru6tFsNrtrZWXlCYDBtYWYOd3R0XE6Ho9/c6Nk23YfgBcAomtynA2eLhQK484Vte5acUZWLpeTmqbtIKLs0tLS82Qy+auFP6vhTCZzlJkPO+8A3iQSiVft6FKp1Lbu7u4TRBRXSv0IBAKpgYGB2k74PwvtUGx6C3j9wL/W+yP2Stgn6BP0SsCr3vegT9ArAa9634NeCf4BEdwHKEoKWw8AAAAASUVORK5CYII="},"6b3a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACLElEQVRIS62V2W7TUBCG/znOBik37H0CiLI7J4uEAmqsIBTK8qjslVApIEBkcRwFCPAG7CDRlihK4kEj+QrixI46d7bH3+czc3yG4BPdbvf8ZDKZ1Ov1X345Qe7ToiTbtjeJaI+ZD2OxWDOXy60t8RNsMfMjIkoQkZNIJJrpdPpnkC/+N2ehQJJs274K4A6AYwAG8/m8Wa1Wf4SV+AoE1Ov1mkR015MMk8mklUqlQkmWCkTiOI7luu49AMcBvAFgaa2/B13JSoGA+v1+g5nve5K3SinLNM1vQSSBBF5PtgCIJAngXTQatfL5/NdVksACr1xXmPkBM28AGM1mM6tWq31ZJgkl8CSXXdd9CGCDiN7HYrFGNpv1lYQWeD2pM7NIThDRh3g83shkMp8XrWQtgYAGg8Gl2Wy2Q0Qi+cjMDa31p8A/2qrmjUajk+Px+DmADIAxgOta66dHIuh0OqcMw9gFUPDgt7XWj4+kRLZtnyaiXWbOA/ijlLplmqbIFkaoHggcwBMAOYG7rnuzUqnItW8EFjiOc8Z1XYFliejQMIwbhULhv5qv1YPhcHh2Op0KXBoq8O1isfhs1UaQ5ytX0G63z0UiEYGniehgPp9vVyoV2T2BYqlAxqZSag9ACsABEbVKpdKLQGQvadnA2QQg8IsA9gG0tNYvw8B9SyQzGYA08AKA38zcKpfLr8LClwnkaJazZqqUumaa5ut14EubLONSKbVfKpXa68Llvb9C6MoZ6kiMjQAAAABJRU5ErkJggg=="},"75e1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADX0lEQVRYR+1XTWgVVxT+zkwmSVdKraIUKgpFSkOeb+4ZIyFWEFf6Flpa2kXtJgYNVAiImyAShIBKiBQXVUgL6safheLGhaUtSItk7rxBm7gIKF34E5oQpFB8BuceuS9jkPhenPdiFMS7ebyZM+f77nfPOfccwltetJj4WuuLADYAKDDz35WwygS01h8BOAxgB4CVALISeywie4IgOFvJudZ6EsAyAA8bGxs7Wltb7861o2KxuNwYcwPA2nrUIKJTSqm9VQh8DeAcAAfAXcdxNvm+/+BFW9Ja/wTAOngCoBfAn47jJFnIENFTz/Nut7S0TFezj6LoBxE5kb4fmZ6e3tze3j713N4SeGhlJ6IflVI9WYBrtQnDsJ+I7OZARDcaGhq25nK5/8v/tdbG/orI7iAIfq7VeVZ7rfUQgM6UxK9NTU3brXKWgNiHItIZBMEvWR1Ws4vjeKkxZqeIbAbQCuATAEssBADvhe8GmXn/ayNQLBbZGLMPgA28DzJsZIqZly2YwOjo6IelUumIlVdEbLSXFxHdEpE/RGRMRCY9zzNJklglbCysIaIHSqmPF0QgjuN2Y8wlEVmR4k4R0aCInGPmO3NViKKoV0T6U4L9SqmDdRMIw/ArIjqTyv0UwIDrukfz+fyjSvJHUdQjIsfTd9eam5sLdQdhGIbbiOgKAJeIJgB8q5T6bZ5a0CUip2ZO5uU0rCkL4jj+NEmSYQBLAdxzXXdTPp//Zx7w70TkdFoNKxaizAT6+vqcQqEQAvAB/JckyRdtbW03q4EPDw9/6TjOeQANthQD6GBmW/hmV00xEIbhrvTcrZbfKKUuzJdumS6jrIVoZGSksVQqjQFYDeB3Zt7yqlzPdB1nJZBGvb3fhYjWK6VuvYrAPEfzued5923GZD4CrbWV21a5TLuvBh6G4fdEZINyjJnX1UKg3Fw4jtPt+/7JencfRdExETlgv2dmykwgiqKrIvKZ53kbcrncv2+cQL2AFcpxfQq8J/BOK1DuCQF0MbPt2xZ1aa0HAOy3BY2ZndmuGMAQM3ctKvrMEHTdXkoAxpl51excQETGGDNERH+JiFXltS7XdT0RKYjIztTxSWbuXvBkVCdLOyVt9H1/YqGzYS34tu8YB3AZwCFmtqU98xBaC1BNts8AKtwZP+h03bUAAAAASUVORK5CYII="},7997:function(t,e,n){},"90eb":function(t,e,n){t.exports=n.p+"static/img/tips.1f1c28c9.png"},"97f6":function(t,e,n){"use strict";var i=n("7997"),o=n.n(i);o.a},a1c9:function(t,e,n){"use strict";var i=n("3d90"),o=n.n(i);o.a},aede:function(t,e,n){},b152:function(t,e,n){},b6f7:function(t,e,n){"use strict";var i=n("5bc1"),o=n.n(i);o.a},ccc5:function(t,e,n){"use strict";var i=n("2abad"),o=n.n(i);o.a},cf05:function(t,e,n){t.exports=n.p+"static/img/logo.f071e0ef.png"},eda7:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFBUlEQVRYR7VXa4iUZRR+zvfNxRncTRjKiAwnlFibZXf83plZb8RmSaYSihEY9Suj658EcyFyiEAT80d/EiyIIiGKrrtoRZm06Fzez9mlqf6Ea1pGPza0MXdndr7vxNlmttnLOLPr+v5Y2PnOeZ7nvT3nvIQmRzqdDhuGsYmIVjHzCiJaAqClkl5g5gtE9BMzn3Zdty+RSAw1A02NgrLZ7EYi6iGitczcMF7wiIiZuZ+Z98VisWPX4qgLqLVOAHgTQLQ6SwAnDcP42nGclM/nOxcMBi/Lt6tXr95UKpWWmqbZ5bru/QDuqVmdHICnlVLpmYRME5BMJo3NmzfvBvAKAC+A34jokN/vPxKJRK40WjH5ns/nFxaLxZ3M/AKA2wGMAXi5t7f3QDKZdGsxJglgZkNrfZSIHgHgEtHrfr//pUgkUmqGeGpMPp/3FYvFV5l5FwCDmT9QSu0gogkRkwRorY8AeALAJdd1t8fj8W/mQjw1J5PJrDcM4yMAiwC8pZTaWY2ZEKC13gNgH4ArhmFsWLly5en5IK9inDlzZpXrul8BWAigRym1f/zAyh/bttuYeYCIvMy8RSnVN5/kVSyttVzjL5h5jIg6Lcv6eVyA1vpjAFsBHFVKPXojyGtEvA9gB4BPlFLbSAzGNM1fABTL5XK4q6vrzxspIJVKLfZ4PGJSfsdxllE2m91NRK8R0XuWZT1+I8mr2LZtv8vMjzHzi2Tb9jFmfoCZH47FYnJSJw35DmDtHIX1W5a1cWpuNpvdTkQfEtFx0lqfB7DE6/Xe2dHRMc2/tdbiZJ1zFDCglKo66QTE4OBgeGxs7CyAC7IFI0S0IBQKBcLh8OhUIvH/dDpdLTqz0pFIJApSF6YmDQ0NLRgeHh5h5lFZgREACwqFQqC7u3uagFkxNhksDjk6OlokoqII+B3AbX6//4729vYLTWJcV1gmk1liGIZs/R8iQNxJKthWpdSn14XcZLJt21uY+XMA38ot2MvMSQBHlFJP1sOwbfszZm7qNhCRnP6H6mFpraXMPwVgL6VSqRVerzfPzH+bprk0Go1emilRa/0DgEiTk8wrpdpnik2lUq0ej+c8EbU6jtNeteIvAWwAsF8p1TNT4okTJzwtLS1SzRqOQqFwqbu7u1xnIm8AeF6WXym1flxALpeLOY4j1U/q9Lp63UtD5gYBtm13SatG0hC47qpYLJapLccHAUjjcNE0zTXRaPTc9RLW5mez2buI6CSAxQAOKaWE679yLKOyxLIV9xLRr6Zpburs7PxxPkQMDAzcXS6Xj1fas14A25RS0qb9L0D+6e/vbwkEAn3MvA6AuNguy7KkS5rzsG37OWY+ACAA4LtQKLSx1nGnNaWnTp0K+Hy+wwCkMo4opYKzZZfeMpfLbXUcZw8RqUqbfrhUKu1avXq1OO/EuFZbLh5+RSk1qQ7Ytr3McZxiPB6f5JqZTOZWwzC6iOg+Zn4QQLjCchHAs/VMrpGAy0qp8auXy+UWua4rHa4YiAlAOmV5F8jNaa0sce3kzhLRgdbW1neWL19erLeKjQQMW5Z1s23bsh2yj7cAkPstxKEpoH/J08x13dPM3BeLxb6vbb/nKkAeIoMA1giAvPuY+Zl4PD6gtQ66riszh9/vL3R0dPwz27My7RbUAmitpTT7K78NA9hjWdbbM9X3uRBXc661BQeJSPb7aDAY7GlraxMR8z6aeu3OO2sN4L/FYB2D6FmT1QAAAABJRU5ErkJggg=="},ede7:function(t,e,n){"use strict";var i=n("4464"),o=n.n(i);o.a},f5e6:function(t,e,n){"use strict";var i=n("253b"),o=n.n(i);o.a}});
//# sourceMappingURL=app.7d000c88.js.map