(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),i=t.n(l),c=(t(82),t(15)),o=t(20),s=t(53),m=t(6),d=t(104),u=t(120),p=t(121),g=t(122),E=t(123),h=t(41),b=t(3),f=t(54),v=t(32),y=t(5);v.b.add(f.a);var x=Object(d.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(s.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}});function N(){var e=x(),a=(Object(u.a)(),r.a.useState(!1)),t=Object(o.a)(a,2),n=t[0];t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,null),r.a.createElement(g.a,{position:"fixed",className:Object(m.a)(e.appBar,Object(c.a)({},e.appBarShift,n))},r.a.createElement(E.a,null,r.a.createElement("div",{className:"iconAlign"},r.a.createElement(h.a,{variant:"h6",noWrap:!0},r.a.createElement("div",{className:"iconAlignL"},r.a.createElement("a",{href:"malito:megs.seeley@gmail.com",target:"blank",className:"black"},r.a.createElement(b.a,{icon:y.d}))," ",r.a.createElement("a",{href:"https://twitter.com/MegsSeeley",target:"blank",className:"black"}," ",r.a.createElement(b.a,{icon:["fab","twitter"]}))),r.a.createElement("div",{className:"iconAlignR"},r.a.createElement("a",{href:"https://scholar.google.com/citations?user=KQ15ZSsAAAAJ&hl=en",target:"blank",className:"black"},r.a.createElement(b.a,{icon:y.q}))," ",r.a.createElement("a",{href:"https://github.com/MegsSeeley",target:"blank",className:"black"},r.a.createElement(b.a,{icon:["fab","github"]}))))))))}t(91);var w=t(56),k=t.n(w),S=t(124);var O=function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement("br",null),r.a.createElement("div",{className:"padded-text"},r.a.createElement("h1",null,r.a.createElement("br",null),r.a.createElement("div",{className:"center-text black-text"},"Megs Seeley"),r.a.createElement("br",null)),r.a.createElement("img",{src:k.a,alt:"headshot",className:"main-image"}),r.a.createElement("center",null,r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(S.a,{variant:"contained",color:"primary"},r.a.createElement("a",{href:"https://megsseeley.github.io/Seeley_CV.html",target:"blank",className:"black"},r.a.createElement("b",null," CV "))))))};var j=function(){return r.a.createElement("div",{className:"white-background-div"},r.a.createElement("div",{className:"white-background-text"},"I am a first-year PhD student interested in building the capacity of policy and decision-makers by developing methodologies that provide data-driven solutions to environmental issues and by creating tools that enhance the accessibility of remotely-sensed data for decision- and policy-makers."))},T=t(130),A=t(125),W=t(126),C=t(128),L=t(127),P=t(23),M=t.n(P),I=t(132),B=t(129),R=t(63),U=t(31),D=t(71),F=t(64),H=t(72),V=function(e){var a=e.image,t={backgroundImage:"url(".concat(a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 60%",borderWidth:"thick"};return r.a.createElement("div",{className:"slide",style:t})},G=function(e){return r.a.createElement("div",{className:"backArrow",onClick:e.goToPrevSlide},r.a.createElement(b.a,{icon:y.a,style:{fontSize:"large"}}))},z=function(e){return r.a.createElement("div",{className:"nextArrow",onClick:e.goToNextSlide},r.a.createElement(b.a,{icon:y.b,style:{fontSize:"large"}}))},q=t(65),J=t.n(q),Q=t(66),Y=t.n(Q),K=t(67),X=t.n(K),Z=t(68),$=t.n(Z),_=t(69),ee=t.n(_),ae=function(e){function a(e){var t;return Object(R.a)(this,a),(t=Object(D.a)(this,Object(F.a)(a).call(this,e))).goToPrevSlide=function(){0!==t.state.currentIndex&&t.setState(function(e){return{currentIndex:e.currentIndex-1,translateValue:e.translateValue+t.slideWidth()}})},t.goToNextSlide=function(){if(t.state.currentIndex===t.state.images.length-1)return t.setState({currentIndex:0,translateValue:0});t.setState(function(e){return{currentIndex:e.currentIndex+1,translateValue:e.translateValue+-t.slideWidth()}})},t.slideWidth=function(){return document.querySelector(".slide").clientWidth},t.state={images:[ee.a,$.a,J.a,Y.a,X.a],text:["l","o","l","o","asd"],currentIndex:0,translateValue:0},t}return Object(H.a)(a,e),Object(U.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider-wrapper",style:{transform:"translateX(".concat(this.state.translateValue,"px)"),transition:"transform ease-out 0.45s"}},this.state.images.map(function(e,a){return r.a.createElement(V,{key:a,image:e})})),r.a.createElement(G,{goToPrevSlide:this.goToPrevSlide}),r.a.createElement(z,{goToNextSlide:this.goToNextSlide}))}}]),a}(n.Component),te=Object(d.a)(function(e){return{card:{minWidth:280,minHeight:284},head:{textAlign:"center",backgroundColor:"#9ccc65",height:100},media:{height:5,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",height:"100%",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});function ne(){var e=te(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"NASA DEVELOP"}),r.a.createElement(C.a,{className:"padding-bottom"},r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.e}),r.a.createElement(b.a,{icon:y.n}),r.a.createElement(b.a,{icon:y.f})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Geoinformatics Fellow and",r.a.createElement("br",null),"Assistant Center Lead")),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},"View Projects",r.a.createElement(B.a,{className:Object(m.a)(e.expand,Object(c.a)({},e.expandOpen,n)),onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"Show more"},r.a.createElement(M.a,null))))),r.a.createElement(I.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(ae,null))))}var re=Object(d.a)({card:{minWidth:280,height:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function le(){var e=re();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Yosemite National Park Service"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.s}),"   ",r.a.createElement(b.a,{icon:y.r})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Physical Science Technician"),r.a.createElement("center",null,r.a.createElement("a",{href:"https://www.nps.gov/yose/learn/nature/aqmonitoring.htm",target:"blank"},r.a.createElement(S.a,{size:"small",color:"secondary"},"Yosemite Air Quality Website"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}var ie=Object(d.a)({card:{minWidth:280,height:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function ce(){var e=ie();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Sierra Nevada Research Institute"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.o}),r.a.createElement(b.a,{icon:y.o}),r.a.createElement(b.a,{icon:y.o})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Research Experience for Undergraduates"),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"body2",color:"secondary",component:"p",className:"center-text"},"Short and long-term responses of nitrogen-fixing microbial organisms to fire")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}var oe=Object(d.a)(function(e){return{card:{minWidth:280,minHeight:284},head:{textAlign:"center",backgroundColor:"#9ccc65",height:100},media:{height:5,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",height:"100%",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});function se(){var e=oe(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Williams Paleoecology Lab"}),r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.i})," ",r.a.createElement(b.a,{icon:y.h})),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Student Researcher"),r.a.createElement("a",{href:"https://onlinelibrary.wiley.com/doi/10.1111/jbi.13491",target:"blank"},r.a.createElement(h.a,{variant:"body2",color:"secondary",component:"p",className:"center-text"},"Assessing the environmental and dispersal controls on Fagus grandifolia distributions in the Great Lakes region"))),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},"Abstract",r.a.createElement(B.a,{className:Object(m.a)(e.expand,Object(c.a)({},e.expandOpen,n)),onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"Show more"},r.a.createElement(M.a,null))))),r.a.createElement(I.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"small-text"},r.a.createElement("b",null,"Aim: "),"This paper assesses the relative importance of environmental filtering and dispersal limitations as controls on the western range limit of ",r.a.createElement("i",null,"Fagus grandifolia"),", a common mesic late\u2010successional tree species in the eastern United States. We also test for differences in species\u2013environment relationships between range\u2010edge populations of ",r.a.createElement("i",null,"F. grandifolia")," in eastern Wisconsin and core populations in Michigan. Because environmental conditions between the states differ moderately, while in Michigan dispersal presumably no longer limits ",r.a.createElement("i",null,"F. grandifolia")," distributions, ",r.a.createElement("i",null,"F. grandifolia")," offers a classic case study for biogeographers, foresters, and palaeoecologists interested in understanding processes governing species range limits.",r.a.createElement("br",null),r.a.createElement("b",null,"Methods: "),"This study combines historical datasets of ",r.a.createElement("i",null,"F. grandifolia")," from the Public Land Survey, environmental covariates from soil maps and historical climate data, three spatial scenarios of dispersal limitation, and five species distribution models (SDMs). We test dispersal limitation and environmental filtering hypotheses by assessing SDM transferability between core and edge populations, measuring the importance of dispersal and environmental predictors, and using a residual autocovariate model to test for spatial processes not represented by these predictors.",r.a.createElement("br",null),r.a.createElement("b",null,"Results: "),r.a.createElement("i",null,"F. grandifolia")," presence was best predicted by total snowfall in Michigan and by dispersal, summer precipitation, and potential evapotranspiration (PET) in Wisconsin. Following the addition of dispersal as a predictor, most Wisconsin models improved and spatial autocorrelation effects largely disappeared. Transferability between core and edge populations was moderate to low.",r.a.createElement("br",null),r.a.createElement("b",null,"Main conclusions: "),"Both environmental and dispersal limitations appear to govern the western range limit of ",r.a.createElement("i",null,"F. grandifolia"),". Species\u2013environment relationships differ between range\u2010edge and core populations, suggesting either stronger environmental filtering at the range edge or fine\u2010scale, spatially varying interactions between environmental factors governing moisture availability in core populations. Although lakes, like Lake Michigan, both moderate regional climates and act as dispersal barriers, these effects can be disentangled through the joint analysis of SDMs and historic observational datasets."))))}var me=Object(d.a)(function(e){return{card:{minWidth:280,minHeight:284},head:{textAlign:"center",backgroundColor:"#9ccc65",height:100},media:{height:5,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",height:"100%",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});function de(){var e=me(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Marin-Spiotta Biogeography Lab"}),r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.j})," ",r.a.createElement(b.a,{icon:y.o})),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Student Researcher"),r.a.createElement("a",{href:"https://onlinelibrary.wiley.com/doi/10.1111/jbi.13491",target:"blank"},r.a.createElement(h.a,{variant:"body2",color:"secondary",component:"p",className:"center-text"},"A Meta-analysis of land change effects on tropical soil microbiome: Emerging patterns and knowledge gaps"))),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},"Abstract",r.a.createElement(B.a,{className:Object(m.a)(e.expand,Object(c.a)({},e.expandOpen,n)),onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"Show more"},r.a.createElement(M.a,null))))),r.a.createElement(I.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"small-text"},"Modifications in vegetation due to land use conversions (LUC) between primary forests, pasture, cropping systems, tree plantations, and secondary forests drive shifts in soil microbial communities. These microbial community alterations affect carbon sequestration, nutrient cycling, aboveground biomass, and numerous other soil processes. Despite their importance, little is known about soil microbial organisms\u2019 response to LUC, especially in tropical regions where LUC rates are greatest. This project identifies current trends and uncertainties in tropical soil microbiology by comparing 56 published studies on LUC in tropical regions. This review indicates that microbial biomass and functional groups shifted in response to LUC, supporting demonstrated trends in changing soil carbon stocks due to LUC. Microbial biomass was greatest in primary forests when compared to secondary forests and in all forests when compared to both cropping systems and tree plantations. No trend existed when comparing pasture systems and forests, likely due to variations in pasture fertilizer use. Cropping system soils had greater gram positive and less gram negative bacteria than forest soils, potentially resulting in greater respiration of older carbon stocks in agricultural soils. Bacteria dominated primary forests while fungal populations were greatest in secondary forests. To characterize changes in microbial communities resulting from land use change, research must reflect the biophysical variation across the tropics. A chi-squared test revealed that the literature sites represented mean annual temperature variation across the tropics (p-value=0.66)."))))}var ue=Object(d.a)(function(e){return{card:{minWidth:280,minHeight:284},head:{textAlign:"center",backgroundColor:"#9ccc65",height:100},media:{height:5,paddingTop:"56.25%"},expandOpen:{transform:"rotate(180deg)"}}});function pe(){var e=ue();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Management Plans"}),r.a.createElement(C.a,{className:"padding-bottom"},r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.i}),r.a.createElement(b.a,{icon:y.m}),r.a.createElement(b.a,{icon:y.p})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"The Nature Conservancy Baraboo Hills, Wisconsin",r.a.createElement("br",null),"Ice Age Trail - Cross Plains Unit, Wisconsin"))))}var ge=Object(d.a)({card:{minWidth:280,height:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function Ee(){var e=ge();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Synthetic Aperature Radar Tutorial"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.n})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Sentinel-1 Web Tutorial"),r.a.createElement("center",null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondary",component:"p",className:"center-text"},r.a.createElement("a",{href:"https://megsseeley.github.io/tutorials/sarTutorial.html",target:"blank"},"VIEW TUTORIAL"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}var he=function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement(h.a,{variant:"h3",className:"white-background-text padded-text"},"Project Archive"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{container:!0,spacing:3,className:"padding-2"},r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ne,null)),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(de,null))),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(se,null))),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(Ee,null))),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(le,null))),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(pe,null))),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(h.a,{variant:"h3",className:"white-background-text"},r.a.createElement(ce,null)))),r.a.createElement("div",{className:"padded-text"}))};var be=function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement(h.a,{variant:"h3",className:"white-background-text padded-text"},"Education"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"white-background-manu"},r.a.createElement("div",{className:"white-background-text"},"PhD Geography | Arizona State University",r.a.createElement(h.a,{variant:"body2",color:"secondary",component:"p",className:"center-text"},"Coadvisors: Greg Asner & Billie L Turner II"),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.g})),r.a.createElement("br",null),"BS Forest Science & Botany | University of Wisconsin-Madison")),r.a.createElement("div",{className:"padded-text"}))};var fe=function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement(h.a,{variant:"h3",className:"white-background-text padded-text"},"Manuscripts"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"white-background-manu"},r.a.createElement("div",{className:"hanging-indent"},r.a.createElement("a",{href:"https://doi.org/10.1111/jbi.13491",target:"blank",className:"black"},"Seeley, M., Goring, S., & Williams, J. W. (2019). Assessing the environmental and dispersal controls on Fagus grandifolia distributions in the Great Lakes region. Journal of biogeography, 46(2), 405-419. doi:10.1111/jbi.13491"))),r.a.createElement("div",{className:"padded-text"}))},ve=Object(d.a)(function(e){return{card:{mimWidth:280,Width:"100%",minHeight:284},head:{textAlign:"center",backgroundColor:"#9ccc65",height:100},media:{height:5,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",height:"100%",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});function ye(){var e=ve(),a=r.a.useState(!1),t=Object(o.a)(a,2),n=t[0],l=t[1];return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Geography PhD Student"}),r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.e}),r.a.createElement(b.a,{icon:y.n}),r.a.createElement(b.a,{icon:y.f})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"My disseration addresses the resilience of socio-environmental systems to drought.")),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},"Lab Pages",r.a.createElement(B.a,{className:Object(m.a)(e.expand,Object(c.a)({},e.expandOpen,n)),onClick:function(){l(!n)},"aria-expanded":n,"aria-label":"Show more"},r.a.createElement(M.a,null))))),r.a.createElement(I.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(C.a,null,r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"small-text"},r.a.createElement("center",null,r.a.createElement("a",{href:"http://asnerlab.org/",target:"blank"},r.a.createElement("b",null,"Asner Lab")),r.a.createElement("br",null),r.a.createElement(b.a,{icon:y.n})," ",r.a.createElement(b.a,{icon:y.n})," ",r.a.createElement(b.a,{icon:y.n}),r.a.createElement("br",null),r.a.createElement("a",{href:"https://sites.google.com/a/asu.edu/turner/doctoral-advisees",target:"blank"},r.a.createElement("b",null,"Turner Lab")))))))}var xe=Object(d.a)({card:{minWidth:280,minHeight:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function Ne(){var e=xe();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Imaging Spectroscopy in Conservation Decision-Making"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.l}),"   ",r.a.createElement(b.a,{icon:y.p})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Details Pending"))))}var we=Object(d.a)({card:{minWidth:280,minHeight:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function ke(){var e=we();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"'Ohi'a Genetic Diversity and Water Stress Tolerance in Hawai'i"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.c})," ",r.a.createElement(b.a,{icon:y.r})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Details Pending"))))}var Se=Object(d.a)({card:{minWidth:280,minHeight:284},head:{height:100,textAlign:"center",backgroundColor:"#9ccc65"}});function Oe(){var e=Se();return r.a.createElement(A.a,{className:e.card},r.a.createElement(W.a,null,r.a.createElement(L.a,{className:e.head,title:"Ridge to Reef in Hawai'i"}),r.a.createElement(C.a,null,r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"primary",component:"p",className:"center-text"},r.a.createElement(b.a,{icon:y.k})," ",r.a.createElement(b.a,{icon:y.r})),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",color:"secondaryText",component:"p",className:"center-text"},"Asner Lab collaborative"))))}var je=function(){return r.a.createElement("div",{className:"main-background"},r.a.createElement(h.a,{variant:"h3",className:"white-background-text padded-text"},"Current Projects"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T.a,{container:!0,spacing:3,className:"padding-2"},r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ye,null)),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(Ne,null)),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ke,null)),r.a.createElement(T.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(Oe,null))),r.a.createElement("div",{className:"padded-text"}))};var Te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement("div",{id:"home"},r.a.createElement(O,null)),r.a.createElement("div",{id:"about"},r.a.createElement(j,null)),r.a.createElement("div",{id:"currentWork"},r.a.createElement(je,null)),r.a.createElement("div",{id:"manuscripts"},r.a.createElement(fe,null)),r.a.createElement("div",{id:"current-work"},r.a.createElement(be,null)),r.a.createElement("div",{id:"past-work"},r.a.createElement(he,null)))},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function We(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ce=t(70),Le=t(131),Pe=Object(Ce.a)({palette:{primary:{main:"#9ccc65"},secondary:{main:"#5d7a3c"}}});i.a.render(r.a.createElement(Le.a,{theme:Pe},r.a.createElement(Te,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/home",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/home","/service-worker.js");Ae?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):We(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):We(a,e)})}}()},56:function(e,a,t){e.exports=t.p+"static/media/megs-cartoon.ea32a194.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/haq2.bdaec308.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/lOntario2.3e1148a9.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/tempe2.1a057c5f.jpg"},68:function(e,a,t){e.exports=t.p+"static/media/usvi3.f6d836fa.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/ohio2.63fcdbea.jpg"},77:function(e,a,t){e.exports=t(102)},82:function(e,a,t){},91:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.6553a0a1.chunk.js.map