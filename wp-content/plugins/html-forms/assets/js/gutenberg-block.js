(()=>{const{__:e}=window.wp.i18n,{registerBlockType:t}=window.wp.blocks,{SelectControl:o}=window.wp.components,{useBlockProps:l}=window.wp.blockEditor,s=window.html_forms;t("html-forms/form",{title:e("HTML Forms: Form"),description:e("Block showing a HTML Forms form"),category:"widgets",attributes:{slug:{type:"string"}},supports:{html:!1,customClassName:!1},icon:window.wp.element.createElement("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"256.000000pt",height:"256.000000pt",viewBox:"0 0 256.000000 256.000000",preserveAspectRatio:"xMidYMid meet"},window.wp.element.createElement("g",{transform:"translate(0.000000,256.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},window.wp.element.createElement("path",{d:"M0 1280 l0 -1280 1280 0 1280 0 0 1280 0 1280 -1280 0 -1280 0 0 -1280z m2031 593 c8 -8 9 -34 4 -78 -6 -56 -9 -65 -23 -60 -43 16 -98 15 -132 -2 -50 -26 -72 -72 -78 -159 l-5 -74 92 0 91 0 0 -70 0 -70 -90 0 -90 0 0 -345 0 -345 -90 0 -90 0 0 345 0 345 -55 0 -55 0 0 70 0 70 55 0 55 0 0 38 c0 63 20 153 45 202 54 105 141 152 273 147 45 -2 87 -8 93 -14z m-1291 -288 l0 -235 230 0 230 0 0 235 0 235 90 0 90 0 0 -575 0 -575 -90 0 -90 0 0 260 0 260 -230 0 -230 0 0 -260 0 -260 -90 0 -90 0 0 575 0 575 90 0 90 0 0 -235z"}))),apiVersion:3,edit(t){const n=s.map((e=>({label:e.title,value:e.slug})));!t.attributes.slug&&n.length>0&&t.setAttributes({slug:n[0].value});const r=l({style:{backgroundColor:"#f8f9f9",padding:"14px"}});return window.wp.element.createElement("div",r,window.wp.element.createElement(o,{label:e("HTML Forms form"),value:t.attributes.slug,options:n,onChange:e=>{t.setAttributes({slug:e})}}))},save:()=>null})})();