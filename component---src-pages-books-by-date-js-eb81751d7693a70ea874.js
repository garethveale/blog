(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cNPg:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("Bl7J"),i=a("vrFN");a("p3AD");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title,c=t.allMarkdownRemark.edges,m=[];c.forEach((function(e,t){e.node.frontmatter.tags&&(m=m.concat(e.node.frontmatter.tags))}));return m=m.filter((function(e,t,a){return a.indexOf(e)===t})),r.a.createElement(l.a,{location:a,title:n},r.a.createElement(i.a,{title:"Index"}),r.a.createElement("div",{style:{}},r.a.createElement("h3",null,"Books")),r.a.createElement("p",null,r.a.createElement(o.Link,{style:{boxShadow:"none"},to:"/books"},"> Sort by rating")),r.a.createElement("p",null,r.a.createElement(o.Link,{style:{boxShadow:"none"},to:"/genre/fiction"},"→ Fiction")),r.a.createElement("p",null,"This page shares notes i've taken from some of the more recent books i've read. Similar to Derek Sivers i've given each a rating out of 10 on how likely I am to recommend it to others."),r.a.createElement("p",null,"Below the notes are sorted by their ratings in descending order. You may sort by date read, or by genre above."),r.a.createElement("ul",null,c.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title;return r.a.createElement("ol",{key:a},r.a.createElement(o.Link,{to:a},n),r.a.createElement("br",null),r.a.createElement("small",null,t.frontmatter.date," • ",t.frontmatter.minread," min read ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"☕")," • Rating: ",t.frontmatter.rating,"/10"))}))))};var c="2111832420"}}]);
//# sourceMappingURL=component---src-pages-books-by-date-js-eb81751d7693a70ea874.js.map