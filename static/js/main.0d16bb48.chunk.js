(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var A=a(1),n=a.n(A),c=a(31),r=a.n(c),s=(a(62),a(23)),i=a(11),o=a.n(i),u=a(22),l=a(20),h=a(3),j=a(4),p=a(18),b=a(6),d=a(5),v=(a(64),a(21)),O=a.n(v),m=a(9),f=(a(44),a(83),a(0)),x=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var A;return Object(h.a)(this,a),(A=t.call(this,e)).state={textChanged:""},A.handleChange=A.handleChange.bind(Object(p.a)(A)),A.handleSubmit=A.handleSubmit.bind(Object(p.a)(A)),A}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState({textChanged:e.target.value})}},{key:"handleSubmit",value:function(){for(var e=this.state.textChanged,t="",a=0;a<e.length;a++)" "!==e[a]?t+=e[a]:t+="%20";this.props.handleSearch(t)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"input",children:[Object(f.jsx)("input",{className:"input-search",placeholder:"Search Movies",name:"textChanged",type:"text",onChange:this.handleChange}),Object(f.jsx)(m.b,{to:"/Project/search",children:Object(f.jsx)("button",{style:{cursor:"pointer"},className:"btn",onClick:this.handleSubmit,children:"Search"})})]})}}]),a}(A.Component),g=(a(90),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var A;return Object(h.a)(this,a),(A=t.call(this,e)).state={isImp:!1},A}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"Navbar",children:[Object(f.jsxs)("div",{className:"logo-img",children:[Object(f.jsxs)(m.b,{to:"/",children:["  ",Object(f.jsx)("img",{className:"logo",src:"https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",alt:"netflex"})]}),Object(f.jsx)("img",{className:"logo menu",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAA9lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJZEqTAAAAUXRSTlMAAQQGCAkNEBITFBkaGxwdISImKzI5PD1ESE1SU1piY2RnaW1zgYKEhYiPk5aYmZqbnJ+nqq+ws7S/wcXJy8zS09XW19nb3N/h6O7v8Pr8/f4sxFOIAAAEEklEQVQYGe3BiVoMDBQA0DsT2VMqor+kxVLZhaSEym7c93+Z/yXu+Ob6zjkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBPGcz9t/nwERPq4eZ/c4MYn/ntr8mE+7o9H+Mx/zZp4e181Bve/5008fv+MIpd3E8a2b8YpS5/SFr5cDkKnX+fNPP+fNR5lrTzLMrcThq6HUWGJ0lDJ8OosZK0tBI1DpKWDqLE9aSp61HhbtLUalR4kjT1JCrsJ03tR4WPSVMfo8JZ0tRZVPicNPUpKrxLmnoXFZ4nTT2PCveSpu5FhdmkqdkocZi0dBg1VpOWVqPG1JekoS9TUWQ5aWg5qgxeJu28HESZ6eOkmePpKHTtLGnl7FqUunKYNHJ4JYqd20na2DkX9RYPkhYOFmMsBjdffE8m3PcXNwcxNsOFtQe7j5lQuw/WFoYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8FYPpC0yo6UGM19X1V6e/kon16/TV+tUYl1tvRsnEG725FeMws5c0sTcT5e78SNr4cSeKbfxJGvmzEaXWk2bWo9DSKGlmtBRlLn1L2vl2Kao8TRp6GkVujJKGRjeixm7S0m6UmPqZtPRzKiosJU0tRYWtpKmtqPA6aWovKhwlTR1FhdOkqdOocJo0dRoVjpKmjqLC66SpvaiwlTS1FRWWkqaWosLUz6Sln1NRYjdpaTdq3BglDY1uRJGnSUNPo8qlb0k73y5FmaVR0sxoKQqtJ82sR6mNP0kjfzai2J0fSRs/7kS5mb2kib2ZGIdbb0bJxBu9uRXjcnX91emvZGL9On21fjXGazB9gQk1PQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCvGC6sPdh9zITafbC2MIyxGdx88T2ZcN9f3BzEWCweJC0cLEa9cztJGzvnotiVo6SRoytR6tpZ0srZtSg0fZw0czwdZQYvk3ZeDqLKctLQchSZ+pI09GUqaqwmLa1GjcOkpcMoMZs0NRsV7iVN3YsKz5OmnkeFd0lT76LC56SpT1HhLGnqLCp8TJr6GBX2k6b2o8KTpKknUeFu0tRqVLieNHU9ShwkLR1EjZWkpZWoMTxJGjoZRpHbSUO3o8yzpJ1nUef8+6SZ9+ej0OUPSSsfLkepi/tJI/sXo9jw/u+kid/3h1Fv/m3Swtv5GI/57a/JhPu6PR/jM5hb3nz4iAn1cHN5bhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+S/wFrOzIMZL7n1wAAAABJRU5ErkJggg==",onClick:function(){return e.setState({isImp:!e.state.isImp})}})]}),Object(f.jsxs)("nav",{className:"navbar-container",style:!0===this.state.isImp?{display:"flex"}:{},children:[Object(f.jsx)(m.b,{className:"NavLink",exact:!0,to:"/Project",children:"Home"}),Object(f.jsx)(m.b,{className:"NavLink",exact:!0,to:"/Project/tvshows",children:"TvShows"}),Object(f.jsx)(m.b,{className:"NavLink",exact:!0,to:"/Project/movies",children:"Movies"}),Object(f.jsx)(m.b,{className:"NavLink",exact:!0,to:"/Project/new",children:"Hindi Movies"})]}),Object(f.jsx)("div",{className:"search-input",children:Object(f.jsx)(x,{handleSearch:this.props.handleSearch,data:this.props.searched})})]})}}]),a}(A.Component)),k=a(8),S=a(113),y=(a(91),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.poster_path,a=e.title;return Object(f.jsx)(S.a,{className:"Card",children:Object(f.jsx)("img",{className:"img",src:"https://image.tmdb.org/t/p/w500"+t,alt:a})})}}]),a}(A.Component)),w=(a(27),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.movies.map((function(e){return Object(f.jsx)(m.b,{exact:!0,to:"/Project/".concat(e.title),children:Object(f.jsx)(y,{movie:e},e.title)})}));return Object(f.jsx)("div",{className:"home",children:e})}}]),a}(A.Component)),P=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getTvShows()}},{key:"render",value:function(){var e=this.props.tv.map((function(e){return Object(f.jsxs)(m.b,{to:"/Project/".concat(e.name),children:[" ",Object(f.jsx)(y,{movie:e},e.id)," "]})}));return Object(f.jsx)("div",{className:"home",children:e})}}]),a}(A.Component),M=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getMovies()}},{key:"render",value:function(){var e=this,t=this.props.movie.map((function(t){return Object(f.jsx)(m.b,{to:"/Project/".concat(t.title),children:Object(f.jsx)(y,{onClick:function(){return e.props.value=!1},movie:t},t.title)})}));return Object(f.jsx)("div",{className:"home",children:t})}}]),a}(A.Component),N=(a(92),a(55)),C=(a(98),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.popularMovies.map((function(e){return Object(f.jsx)("div",{style:{width:"10c0%"},children:Object(f.jsx)("img",{style:{width:"100%"},src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path," "),alt:e.title})})}));return Object(f.jsx)(N.Carousel,{className:"header",autoPlay:!0,infiniteLoop:!0,useKeyboardArrows:!0,showThumbs:!1,showIndicators:!0,showStatus:!1,transitionTime:".5s",children:e})}}]),a}(A.Component)),T=a(114),R=(a(99),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var A;return Object(h.a)(this,a),(A=t.call(this,e)).state={video:[{name:"name"}]},A}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,A;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.value(),t=this.props.popularMovies.id,e.next=4,O.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=3aae812026f46e299a173c37b8baf674&language=en-US"));case 4:a=e.sent,A=a.data,console.log(A.results),this.setState({video:Object(u.a)(A.results)});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.popularMovies,t=e.backdrop_path,a=e.name,A=e.title,n=e.overview,c=e.release_date,r=e.vote_average;return Object(f.jsxs)(S.a,{className:"view",children:[0===this.state.video.length?Object(f.jsx)("img",{width:"100%",src:"https://image.tmdb.org/t/p/original".concat(t),alt:A}):Object(f.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/".concat(this.state.video[0].key),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(f.jsxs)(T.a,{style:{padding:"2%",textAlign:"justify"},children:[null!=a?Object(f.jsx)("h1",{children:a}):Object(f.jsx)("h1",{children:A}),Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{style:{fontWeight:"bold"},children:" Overview:"}),Object(f.jsx)("p",{children:n})]}),Object(f.jsxs)("p",{children:["Release Date : ",Object(f.jsx)("span",{style:{fontWeight:"bold"},children:c})]}),Object(f.jsxs)("p",{children:["ImDb Rating: ",Object(f.jsx)("span",{style:{vote_average:r}>5?{fontWeight:"bold",color:"red"}:{fontWeight:"bold",color:"green"},children:r})]})]})]})}}]),a}(A.Component)),J=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.popularMovies,t=e.backdrop_path,a=e.original_title,A=e.overview,n=e.release_date,c=e.vote_average;return Object(f.jsxs)(S.a,{children:[Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t),alt:a}),Object(f.jsxs)(T.a,{children:[Object(f.jsx)("h1",{children:a}),Object(f.jsxs)("span",{children:[Object(f.jsx)("span",{children:"Overview:"}),Object(f.jsx)("p",{children:A})]}),Object(f.jsxs)("p",{children:["Release Date : ",n]}),Object(f.jsxs)("p",{children:["ImDb Rating: ",Object(f.jsx)("span",{children:c})," "]})]})]})}}]),a}(A.Component),L=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.searched.map((function(e){return Object(f.jsx)(m.b,{exact:!0,to:"/Project/".concat(e.title),children:Object(f.jsx)(y,{movie:e},e.title)})}));return Object(f.jsx)("div",{className:"home",children:0===this.props.searched.length?Object(f.jsx)("h1",{className:"notFound",style:{fontWeight:"400"},children:"Search not found"}):e})}}]),a}(A.Component),q=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getPopular()}},{key:"render",value:function(){var e=this.props.movie.map((function(e){return Object(f.jsx)(m.b,{exact:!0,to:"/Project/".concat(e.title),children:Object(f.jsx)(y,{movie:e},e.title)})}));return Object(f.jsx)("div",{className:"home",children:e})}}]),a}(A.Component),I=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(e){var A;return Object(h.a)(this,a),(A=t.call(this,e)).handleState=function(){A.setState({isActive:!0})},A.state={popularMovies:[],tvshows:[],newlyAdded:[0],searched:[],popular:[],isActive:!1},A.getTvShows=A.getTvShows.bind(Object(p.a)(A)),A.getMovies=A.getMovies.bind(Object(p.a)(A)),A.getPopular=A.getPopular.bind(Object(p.a)(A)),A.handleSearch=A.handleSearch.bind(Object(p.a)(A)),A}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat("3aae812026f46e299a173c37b8baf674","&language=en-US&page=1"));case 2:t=e.sent,a=t.data,this.setState({popularMovies:Object(u.a)(a.results)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getTvShows",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/tv/popular?api_key=3aae812026f46e299a173c37b8baf674&region=IN&language=te&page=2");case 2:t=e.sent,a=t.data,this.setState({tvshows:Object(u.a)(a.results)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3aae812026f46e299a173c37b8baf674&language=en-US&page=1");case 2:t=e.sent,a=t.data,this.setState({newlyAdded:Object(u.a)(a.results)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPopular",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/discover/movie?api_key=3aae812026f46e299a173c37b8baf674&region=IN&language=hi-IN&release_date.gte=2017-08-01&with_release_type=3|2&with_original_language=hi");case 2:t=e.sent,a=t.data,this.setState({popular:Object(u.a)(a.results)});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSearch",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,A;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/search/movie?api_key=3aae812026f46e299a173c37b8baf674&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:a=e.sent,A=a.data,this.setState({searched:Object(u.a)(A.results)});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.popularMovies.map((function(t){return Object(f.jsx)(k.a,{exact:!0,path:"/Project/".concat(t.title),render:function(a){return Object(f.jsx)(R,{popularMovies:t,value:e.handleState})}})})),a=this.state.tvshows.map((function(t){return Object(f.jsx)(k.a,{exact:!0,path:"/Project/".concat(t.name),render:function(a){return Object(f.jsx)(R,{popularMovies:t,value:e.handleState})}})})),A=this.state.newlyAdded.map((function(t){return Object(f.jsx)(k.a,{exact:!0,path:"/Project/".concat(t.title),render:function(a){return Object(f.jsx)(J,{popularMovies:t,value:e.handleState})}})})),n=this.state.searched.map((function(t){return Object(f.jsx)(k.a,{exact:!0,path:"/Project/".concat(t.title),render:function(a){return Object(f.jsx)(R,{popularMovies:t,value:e.handleState})}})})),c=this.state.popular.map((function(t){return Object(f.jsx)(k.a,{exact:!0,path:"/Project/".concat(t.title),render:function(a){return Object(f.jsx)(R,{popularMovies:t,value:e.handleState})}})}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{handleSearch:this.handleSearch,searched:this.state.searched}),!0===this.state.isActive?"":Object(f.jsx)(C,{popularMovies:this.state.popularMovies}),Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{strict:!0,exact:!0,path:"/Project/tvshows",render:function(t){return Object(f.jsx)(P,Object(s.a)({getTvShows:e.getTvShows,tv:e.state.tvshows},t))}}),Object(f.jsx)(k.a,{strict:!0,exact:!0,path:"/Project/movies",render:function(t){return Object(f.jsx)(M,Object(s.a)({getMovies:e.getMovies,movie:e.state.newlyAdded},t))}}),Object(f.jsx)(k.a,{strict:!0,exact:!0,path:"/Project/new",render:function(t){return Object(f.jsx)(q,Object(s.a)({getPopular:e.getPopular,movie:e.state.popular},t))}}),Object(f.jsx)(k.a,{strict:!0,exact:!0,path:"/",render:function(t){return Object(f.jsx)(w,Object(s.a)({value:e.handleState,movies:e.state.popularMovies},t))}}),Object(f.jsx)(k.a,{exact:!0,path:"/Project/",render:function(t){return Object(f.jsx)(w,Object(s.a)({movies:e.state.popularMovies},t))}}),Object(f.jsx)(k.a,{strict:!0,exact:!0,path:"/Project/search",render:function(t){return Object(f.jsx)(L,Object(s.a)({searched:e.state.searched},t))}}),t,a,A,n,c]})]})}}]),a}(A.Component),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,A=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),A(e),n(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(m.a,{children:Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(I,{})})}),document.getElementById("root")),Z()},27:function(e,t,a){},44:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},83:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.0d16bb48.chunk.js.map