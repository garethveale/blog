(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{WXAW:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("Bl7J"),i=a("vrFN");a("p3AD");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title,c=t.allMarkdownRemark.edges,m=[];c.forEach((function(e,t){e.node.frontmatter.tags&&(m=m.concat(e.node.frontmatter.tags))}));return m=m.filter((function(e,t,a){return a.indexOf(e)===t})),r.a.createElement(o.a,{location:a,title:n},r.a.createElement(i.a,{title:"Index"}),r.a.createElement("div",{style:{}},r.a.createElement("h3",null,"Notes by date")),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:"0"}},r.a.createElement("p",{style:{marginBottom:"2em"}},"←",r.a.createElement(l.Link,{style:{boxShadow:"none"},to:"/posts"},"Notes"))),r.a.createElement("ul",null,c.map((function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title;return r.a.createElement("ol",{key:a},r.a.createElement(l.Link,{to:a},n),r.a.createElement("br",null),r.a.createElement("small",null,t.frontmatter.date," • ",t.frontmatter.minread," min read ",r.a.createElement("span",{role:"img","aria-label":"coffee"},"☕")))}))))};var c="233980218"}}]);
//# sourceMappingURL=component---src-pages-posts-by-date-js-8cfb8d2eb13f537e156a.js.map