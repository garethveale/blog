(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/8Fb":function(e,t,n){var a=n("XKFU"),r=n("UExd")(!0);a(a.S,"Object",{entries:function(e){return r(e)}})},L9e7:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),n("Z2Ku"),n("L9s1");var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("Bl7J"),i=n("vrFN");n("p3AD");t.default=function(e){var t=e.data,n=e.location,a={},c=t.site.siteMetadata.title,m=t.allMarkdownRemark.edges,s=[];m.forEach((function(e,t){e.node.frontmatter.tags&&(s=s.concat(e.node.frontmatter.tags))}));s=s.filter((function(e,t,n){return n.indexOf(e)===t}));return s.forEach((function(e){a[e]=function(e,t){var n=[];return e.forEach((function(e,a){e.node.frontmatter.tags.includes(t)&&n.push(e)})),n}(m,e)})),r.a.createElement(o.a,{location:n,title:c},r.a.createElement(i.a,{title:"Index"}),r.a.createElement("div",{style:{}},r.a.createElement("h3",null,"Notes")),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("p",{style:{marginBottom:"0em"}},"→",r.a.createElement(l.Link,{style:{},to:"/posts-by-date"},"Notes by date"))),r.a.createElement("div",{style:{}},r.a.createElement("h3",null,"Topics")),r.a.createElement("p",{style:{marginBottom:"0em"}},"→",r.a.createElement(l.Link,{style:{},to:"/tags/programming"},"programming")),r.a.createElement("p",{style:{marginBottom:"0em"}},"→",r.a.createElement(l.Link,{style:{},to:"/tags/technology"},"technology")),r.a.createElement("p",{style:{marginBottom:"0em"}},"→",r.a.createElement(l.Link,{style:{},to:"/tags/reading"},"reading")),r.a.createElement("ul",null,Object.entries(a).map((function(e){var t=e[0],n=e[1],a=t.slice(0,1).toUpperCase()+t.slice(1,t.length),o=n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,a=t.fields.slug;return r.a.createElement("ol",{key:a},r.a.createElement(l.Link,{to:a},n),r.a.createElement("br",null),r.a.createElement("small",null,t.frontmatter.date," • ",t.frontmatter.minread," min read ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"☕")," "))}));return r.a.createElement("div",null,r.a.createElement("h3",{style:{}},a),o)}))))};var c="536927432"},UExd:function(e,t,n){var a=n("nh4g"),r=n("DVgA"),l=n("aCFj"),o=n("UqcF").f;e.exports=function(e){return function(t){for(var n,i=l(t),c=r(i),m=c.length,s=0,u=[];m>s;)n=c[s++],a&&!o.call(i,n)||u.push(e?[n,i[n]]:i[n]);return u}}}}]);
//# sourceMappingURL=component---src-pages-posts-js-446875d8d51abb07eb31.js.map