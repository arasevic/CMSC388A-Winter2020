(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),o=a(152),s=a(150);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}),r.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(147);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(154),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,l=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(146),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(153),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-98ae1a99ce4de954dac7.js.map