_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"2etz":function(n,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/[slug]",function(){return l("uU/V")}])},WBZH:function(n,e,l){"use strict";l.d(e,"a",(function(){return i}));var r=l("q1tI"),t=l.n(r),u=l("wEEd"),a=t.a.createElement;function i(n){var e=n.children,l=Object(u.b)({opacity:1,from:{opacity:0}});return a(u.a.div,{style:l},a("div",{style:{padding:34,marginTop:21,marginBottom:21,backgroundColor:"white",borderRadius:8}},e))}},"uU/V":function(n,e,l){"use strict";l.r(e),l.d(e,"default",(function(){return V}));var r=l("h4VS"),t=l("q1tI"),u=l.n(t),a=l("7z3o"),i=l("1Yj4"),o=l("YFqc"),c=l.n(o),d=l("nOHt"),s=(l("dtb4"),u.a.createElement);function p(n){var e=n.brand;return s(c.a,{href:{pathname:"/products",query:{brand:e.url}}},s("a",null,e.name))}var g=u.a.createElement;function f(n){var e=n.category;return g(c.a,{href:{pathname:"/products",query:{category:e.url}}},g("a",null,e.name))}var b=l("ryPj"),m=l("6x3k"),h=l("CO9l"),v=l("81W9"),y=l("ok1R"),w=l("rhny"),j=l("7JLP"),E=(l("YVaq"),l("WBZH")),_=l("lVsH"),O=u.a.createElement;function q(n){var e,l=n.product;v.a.server,null===l||void 0===l||null===(e=l.image)||void 0===e||e.publicUrl;return O(t.Fragment,null,O(y.a,null,O(w.a,{xs:12,lg:6,style:{display:"flex",justifyContent:"center",alignItems:"center"}},O(j.a,{product:l})),O(w.a,{lg:6,style:{display:"flex",justifyContent:"center",alignItems:"center"}},O("div",null,O("h1",null,l.name),O("h5",{style:{textDecoration:l.sale?"line-through":"",color:l.sale?"var(--secondary)":"default",fontSize:l.sale?15:"default",float:l.sale?"right":"default"}},Object(m.a)(l.price)),l.sale?O("h5",null,Object(m.a)(l.price-l.sale)):null,O("p",null,l.description),O("button",{onClick:function(){Object(h.f)({product:l})}},"Th\xeam v\xe0o gi\u1ecf h\xe0ng")))),O(_.a,null),O(E.a,null,O(y.a,null,O(w.a,null,O("p",null,l.guide)),O(w.a,null,l.file?O("img",{src:v.a.server+l.file.publicUrl}):null),O(w.a,{lg:12},l.brand?O(t.Fragment,null,O("h5",null,"Th\u01b0\u01a1ng Hi\u1ec7u"),O(p,{brand:l.brand})," "):null,l.category?O(t.Fragment,null,O("h5",null,"Danh M\u1ee5c"),O(f,{category:l.category})," "):null,l.attributeGroups?O(t.Fragment,null,O("h5",null,"Thu\u1ed9c T\xednh"),O(b.a,{attributeGroups:l.attributeGroups})):null))))}var P=l("VX74"),T=l("pRrB"),U=u.a.createElement;function k(){var n=Object(r.a)(["\n  query($url: String) {\n    allProducts(first: 1, where: { url: $url }) {\n      id\n      image {\n        publicUrl\n      }\n      name\n      price\n      sale\n      images {\n        file {\n          publicUrl\n        }\n      }\n      brand {\n        name\n        url\n      }\n      category {\n        name\n        url\n      }\n      description\n      file {\n        publicUrl\n      }\n      guide\n      attributeGroups {\n        id\n        name\n        attributes {\n          id\n          name\n          url\n        }\n      }\n    }\n  }\n"]);return k=function(){return n},n}var x=Object(P.gql)(k());function V(){var n,e=Object(d.useRouter)().query.slug,l=Object(P.useQuery)(x,{variables:{url:e}}),r=l.data,t=l.error,u=l.loading;if(t)return U("i",null,t);if(u)return U(T.a,null);var o=(null===r||void 0===r?void 0:null===(n=r.allProducts)||void 0===n?void 0:n.length)?r.allProducts[0]:null;return o?U(i.a,null,U(q,{product:o}),U("h4",null,"S\u1ea3n Ph\u1ea9m Li\xean Quan"),U(_.a,null),U(a.a,{category:o.category.url,except:e,more:!1})):null}}},[["2etz",1,2,6,5,0,3,4,7,8,9,11]]]);