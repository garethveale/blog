(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{M4XY:function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="["+r+"]",o="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",l="\\d+",i="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",d="[^\\ud800-\\udfff"+r+l+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",x="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",m="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+c+"|"+d+")",b="(?:"+m+"|"+d+")",E="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",g="[\\ufe0e\\ufe0f]?"+E+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",x,s].join("|")+")[\\ufe0e\\ufe0f]?"+E+")*"),y="(?:"+[i,x,s].join("|")+")"+g,j=RegExp("['’]","g"),v=RegExp(o,"g"),O=RegExp([m+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[f,m,"$"].join("|")+")",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[f,m+p,"$"].join("|")+")",m+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",l,y].join("|"),"g"),h=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,A="object"==typeof t&&t&&t.Object===Object&&t,L="object"==typeof self&&self&&self.Object===Object&&self,I=A||L||Function("return this")();var S,z=(S={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==S?void 0:S[e]});var w=Object.prototype.toString,Z=I.Symbol,k=Z?Z.prototype:void 0,R=k?k.toString:void 0;function U(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==w.call(e)}(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function T(e){return null==e?"":U(e)}var C,N=(C=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,u){var a=-1,r=e?e.length:0;for(u&&r&&(n=e[++a]);++a<r;)n=t(n,e[a],a,e);return n}(function(e,t,n){return e=T(e),void 0===(t=n?void 0:t)?function(e){return h.test(e)}(e)?function(e){return e.match(O)||[]}(e):function(e){return e.match(u)||[]}(e):e.match(t)||[]}(function(e){return(e=T(e))&&e.replace(a,z).replace(v,"")}(e).replace(j,"")),C,"")});e.exports=N}).call(this,n("yLpj"))},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));n("91GP");var u=n("q1tI"),a=n.n(u),r=n("Wbzz"),f=(n("M4XY"),n("6Gk8")),o=n("Bl7J"),l=n("vrFN"),i=n("p3AD");t.default=function(e){var t=e.data,n=e.pageContext,u=e.location,c=t.markdownRemark,d=t.site.siteMetadata.title,x=n.previous,s=n.next;return a.a.createElement(o.a,{location:u,title:d,pageWidth:32},a.a.createElement(l.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),a.a.createElement("article",null,a.a.createElement("header",null,a.a.createElement("h2",{style:{marginTop:Object(i.a)(5),marginBottom:0}},c.frontmatter.title),a.a.createElement("p",{style:Object.assign({},Object(i.b)(-.2),{display:"block",marginBottom:Object(i.a)(1)})},c.frontmatter.date," • ☕ ",c.frontmatter.minread," min read")),a.a.createElement("section",{dangerouslySetInnerHTML:{__html:c.html}}),a.a.createElement("hr",{style:{marginBottom:Object(i.a)(1)}}),a.a.createElement("footer",null,a.a.createElement(f.a,{location:u}))),a.a.createElement("nav",null,a.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.a.createElement("li",null,x&&a.a.createElement(r.Link,{to:x.fields.slug,rel:"prev"},"← ",x.frontmatter.title)),a.a.createElement("li",null,s&&a.a.createElement(r.Link,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →")))))};var c="3903196003"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b256c70cb6ddde48edbb.js.map