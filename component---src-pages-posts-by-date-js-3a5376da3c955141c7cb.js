(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WXAW:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("Bl7J"),i=(a("6Gk8"),a("vrFN"));a("p3AD");t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.title,c=t.allMarkdownRemark.edges,s=[];c.forEach((function(e,t){e.node.frontmatter.tags&&(s=s.concat(e.node.frontmatter.tags))}));return s=s.filter((function(e,t,a){return a.indexOf(e)===t})),l.a.createElement(o.a,{location:a,title:n},l.a.createElement(i.a,{title:"All posts"}),l.a.createElement("div",{style:{}},l.a.createElement("h3",null,"Notes by date")),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0,marginBottom:"3em"}},l.a.createElement("p",{style:{margin:"0"}},"→",l.a.createElement(r.Link,{style:{boxShadow:"none"},to:"/posts"},"Notes by category"))),l.a.createElement("ul",null,c.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug,n=t.fields.slug;return l.a.createElement("li",{key:n},l.a.createElement(r.Link,{to:n},a),l.a.createElement("br",null),l.a.createElement("small",null,t.frontmatter.date," • ",l.a.createElement("span",{role:"img","aria-label":"coffee"},"☕")," ",t.frontmatter.minread," min read"))}))))};var c="2841477397"}}]);
//# sourceMappingURL=component---src-pages-posts-by-date-js-3a5376da3c955141c7cb.js.map