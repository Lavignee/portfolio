parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ah0K":[function(require,module,exports) {

},{}],"FVVV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("react")),t=require("gsap");function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function n(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function a(e){return u(e)||c(e)||i(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function c(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return f(e)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}require("./textSlider.scss");var l=function(r){var n=r.text,o=r.type;return(0,e.useEffect)(function(){var e=t.gsap.set(".text-content-frame",{x:function(e){return 100*e+"%"}}),r=t.gsap.to(".left-content",{duration:70,ease:"none",x:"+=500%",modifiers:{x:t.gsap.utils.unitize(function(e){return parseFloat(e)%500})},repeat:-1}),n=t.gsap.to(".right-content",{duration:130,ease:"none",x:"+=300%",modifiers:{x:t.gsap.utils.unitize(function(e){return parseFloat(e)%300})},repeat:-1});return function(){e.kill(),r.kill(),n.kill()}},[]),e.default.createElement("div",{className:"text-slider-frame ".concat(o)},e.default.createElement("div",{className:"rotate-frame"},function(t,r){var n,i=[],c=[];n="left"===o?5:3;for(var u=0;u<n;u++)i=[].concat(a(i),[e.default.createElement("div",{key:u,className:"text-content-frame".concat("left"===r?" left-content":" right-content")},e.default.createElement("div",{className:"content"},t))]);for(var f=0;f<11;f++)c=[].concat(a(c),[e.default.createElement("div",{key:f,className:"text-slider".concat(f%2==0?"":" second-line")},i)]);return c}(n,o)))},s=l;exports.default=s;
},{"react":"HdMw","gsap":"f8Z0","./textSlider.scss":"Ah0K"}],"Cn1F":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./textSlider"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./textSlider":"FVVV"}],"aZel":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("react")),t=require("react-redux"),r=require("../../modules/commonValue"),a=u(require("swiper")),n=require("swiper/react"),i=require("gsap"),o=require("gsap/ScrollTrigger");require("./footprintDetail.scss"),require("swiper/swiper.scss"),require("swiper/components/navigation/navigation.scss"),require("swiper/components/pagination/pagination.scss"),require("swiper/components/effect-fade/effect-fade.scss");var l=c(require("../../components/textSlider"));function c(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=a?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function d(e,t){return g(e)||y(e,t)||m(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function y(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return r}}function g(e){if(Array.isArray(e))return e}a.default.use([a.Navigation,a.Pagination,a.EffectFade]),i.gsap.registerPlugin(o.ScrollTrigger);var v=[{id:3,keyword:"# Career",title:"젠나인소프트시스템 (SI 파견 회사)",date:"2021.05 ~ 재직중",summary:["프론트 개발"],text:""},{id:2,keyword:"# Career",title:"볼트러스트 (상주 프리랜서)",date:"2019.12 ~ 2020.04",summary:["퍼블리싱","프론트 개발"],text:""},{id:1,keyword:"# Career",title:"크리에이티브코드 (설립 멤버)",date:"2016.07 ~ 2019.10",summary:["웹 서비스 기획","UX기획","디자인 검수","퍼블리싱","프론트 개발","회사 운영 및 인사 관리."],text:""}],E=[{id:8,keyword:"# Project",title:"삼성SDS 차세대 Knox Portal 개발(현장관리자)",date:"2021.05.26 ~ 2021.12.31",summary:["React 개발","Storybook 개발","공통 컴포넌트 및 모듈 개발","개발팀 현장관리자 (PL)"],text:"삼성의 전 직원이 사용하는 기존 Knox Portal을 React를 사용하여 새롭게 개발하는 프로젝트입니다. Material-UI를 지향하는 Knox 전용 공통 컴포넌트들과 해당 컴포넌트로 이루어진 일부 모듈들을 개발하였습니다. 기존의 삼성SDS의 Knox Portal 팀은 React 및 컴포넌트 형식의 디자인/개발 경험이 전혀 없었기 때문에 현장관리자로서 UX와 개발 방향을 짚어드리며 작업하였습니다."},{id:7,keyword:"# Project",title:"개인 포트폴리오 개발",date:"2020.10 ~ 2021.04 (476시간)",summary:["React 개발","반응형 사이트","Parcel 사용","GSAP로 동적효과 구현","Video to canvas 구현","다양한 애니메이션 구현"],text:"React 개발 경험이 많지 않아 좀 더 익숙해질 겸 지루하지 않고, 다양한 표현방식을 가진 포트폴리오를 만들고 싶었습니다. 일부 이미지 파일과 SVG 아이콘 등을 제외하고 구성 및 UX 기획부터 디자인, 개발까지 모두 직접 하였습니다. 최초 기획에는 다국어 번역, 메일 발송 기능과 FHD 이상의 화면에서 추가 애니메이션 등도 포함되었지만, 이미 육아와 가사를 병행하다 보니 애초 완성보다 많이 지체되어 우선 마무리(추후 계속 개발 예정)하게 되었습니다. 개발 기간 자체는 꽤 길지만 매번 작업 시 작성한 개발 시간은 476시간으로 주 40시간 근로제 기준으로 59.5일 (약 두달 보름)입니다."},{id:6,keyword:"# Project",title:"커스터디 서비스 기획 및 개발",date:"2019.12 ~ 2020.04",summary:["React 개발","반응형 사이트","Material-UI 사용","기간별 자산 변동량 Chart 개발","보유 자산 비율 Chart 개발","사이트 번역 및 개발","이메일 폼 퍼블리싱 작업"],text:"Online과 Offline의 분리가 명확하고 다양한 권한 관리와 보안정책이 도입된 암호화폐 관리 서비스입니다. 프로젝트 초기에는 디자이너 없이 Material-UI 기능과 디자인을 그대로 사용하여 개발되었으나, 제가 계약된 당시에는 디자이너가 와서 디자인을 적용해야 했습니다. 기존에 작성된 코드는 이미 대부분 Material-UI에서 제공되는 컴포넌트들로 구성되어 있었기 때문에 해당 컴포넌트들에서 디자인 요소를 제거한 뒤 새로 스타일을 입히거나 오버라이드 하여 작업하였습니다."},{id:5,keyword:"# Project",title:"암호화폐 웹 레그/전산관리 솔루션 기획 및 개발",date:"2019.06 ~ 2019.10",summary:["해당 기간에 동일 서비스 3개 개발","Bootstrap 기반 반응형 레이아웃","JQuery로 개발","회원 조직도 출력 및 검색 기능 개발","기간 지정 달력 기능 도입","세밀하고 다양한 계산식 개발"],text:"클라이언트의 요청으로 회원 및 보유 암호화폐를 관리하는 웹 사이트를 개발하였습니다. 회원 간의 조직도를 웹상에서 표현하기 위해 OrgChart 기능을 도입하였고 조직도가 상당한 분량의 데이터를 표현해야 하므로 Zoom In/Out 기능과 Drag 기능을 추가로 개발했습니다."},{id:4,keyword:"# Project",title:"회사 소개 홈페이지 및 데모 웹 지갑 기획",date:"2019.06 ~ 2019.10",summary:["사이트 구조 및 UX 기획","사이트 내부 컨텐츠 기획"],text:"설립되고 몇 년이나 흘렀지만 회사를 소개하는 웹 사이트가 없었습니다. 대표와 상의하여 다양한 문구를 직접 작성하고 메인화면부터 페이지 구성, 자잘한 동적 효과 등을 기획하였습니다. 당시 솔루션 개발을 동시에 하고 있었으므로 개발 자체는 직접 하지 않았습니다."},{id:3,keyword:"# Project",title:"암호화폐 웹 소개/웹 판매 사이트 기획 및 개발",date:"2019.03 ~ 2019.06",summary:["웹 소개 사이트 2개 / 웹 판매 사이트 2개","Bootstrap 기반 반응형 레이아웃","JQuery로 개발","GSAP로 동적효과 구현","타이머 및 프로그레스 바 기능 도입"],text:"클라이언트의 요청으로 ICO(Initial Coin Offering), IEO(Initial Exchange Offering) 기능의 웹 사이트를 개발하였습니다. 매끄러운 Parallax 효과를 위해 GSAP를 사용하였고 작은 기기에서도 테이블 형태의 정보를 쉽게 편하게 확인하기 위해 이중 스크롤 레이아웃으로 개발한 특이점이 있습니다."},{id:2,keyword:"# Project",title:"암호화폐 웹 거래소/지갑 기획 및 개발",date:"2017 ~ 2019.03",summary:["웹 거래소 9개 / 웹 지갑 6개","Bootstrap 기반 반응형 레이아웃","JQuery로 개발","Google reCaptcha 기능 도입","암호화폐 시간/기간별 시세 Chart 개발","사이트 번역 및 개발","웹 QR Code Generator 개발","웹 QR Code Scanner 개발","세밀하고 다양한 계산식 개발"],text:"오픈소스 기반의 암호화폐 웹 지갑과 거래소 소스를 지속적으로 개선하여 다양한 기업에 판매하였습니다. 처음에는 프랑스어 주석만 가득하고 기본 거래 기능만 있던 소스를 CodeIgniter로 옮겨와서 Front 단과 Back 단으로 구분하여 개선했습니다. 이후 차트와 새로운 코인 연동, 성능 개선 등을 반복하고, 고객 요청에 따라 다양한 추가 기능을 개발하다 보니 해당 기능들을 옵션 형태로 넣고 빼며 최종적으로는 테마 형태로 디자인들을 추가하여 다양한 솔루션형태로 판매하였습니다. 또한, 사용자들이 소수점 단위의 구입, 구축, 전송 등의 다양한 계산을 해야 하므로 프론트에서 입력값에 따른 계산식을 개발하여 입력값에 즉시 출력되는 입력 제한 또는 계산 결과, 가이드 멘트 등을 개발했습니다. 당시 모든 타 거래소는 PC와 휴대기기 버전을 따로 개발했으나 완전 반응형으로 작업해온 특이점이 있습니다."},{id:1,keyword:"# Subcontract",title:"각종 기업의 소개/운영 사이트 개발",date:"2016.02 ~ 2017.12",summary:["쇼핑몰 웹 사이트 (일반기업 솔루션 기반)","이사센터 웹 사이트 (Back개발자에게 퍼블리싱 파일 제공)","소규모 소개 웹 사이트 2개 (Wordpress 기반)","일식 요리학원 웹 사이트 (XEboard, Gnuboard 기반)","쇼핑몰 웹 사이트 (Firstmall 기반)","종이액자기업 웹 사이트 (Wordpress 기반)","쇼핑몰 웹 사이트. (Gnuboard 기반)","제약, 바이오 화학분야 기업 소개 웹 사이트 (Wordpress 기반)","플라스마 기술 기업 소개 웹 사이트. (Wordpress 기반)","흥신소 소개 웹 사이트 (Wordpress 기반)"],text:"독학으로 퍼블리싱을 공부하며 지인들과 함께 팀을 꾸려 다양한 외주작업을 했습니다. Back 개발자가 따로 없었으므로 WordPress, Gnuboard 등 다양한 프레임워크를 통해 업무를 진행하였습니다."}],x=function(t){var r=t.isActive,a=t.idx,n=t.keyword,i=t.title,o=t.date,l=t.summary,c=t.text,s=[];return l.forEach(function(t,r){return s.push(e.default.createElement("span",{key:t+r},t))}),e.default.createElement("div",{key:a,className:"content-frame".concat(r?" active":"")},e.default.createElement("ul",{className:"content"},e.default.createElement("li",{className:"keyword"},n),e.default.createElement("li",{className:"title"},i),e.default.createElement("li",{className:"date"},o),e.default.createElement("li",{className:"summarys division"},e.default.createElement("div",{className:"line"}),s),c&&e.default.createElement("p",null,c)))},b=function(a){var c=a.onHover,s=a.onLeave,u=(0,t.useDispatch)(),f=d((0,t.useSelector)(function(e){return[e.CommonValue.currentGsapState]},t.shallowEqual),1)[0],m=function(t,r){return e.default.createElement(n.Swiper,{spaceBetween:50,slidesPerView:1,effect:"fade",resizeObserver:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0,el:".swiper-pagination"}},t.map(function(t,r){return e.default.createElement(n.SwiperSlide,{key:r},function(a){var n=a.isActive;return e.default.createElement(x,{isActive:n,idx:r,keyword:t.keyword,title:t.title,date:t.date,summary:t.summary,text:t.text})})}),e.default.createElement("div",{className:"swiper-pagination ".concat(r,"-pagination"),onMouseEnter:function(){return c(" pagination-cursor")},onMouseLeave:function(){return s()}}),e.default.createElement("div",{className:"swiper-button-next",onMouseEnter:function(){return c(" bl-cursor","past")},onMouseLeave:function(){return s()}}),e.default.createElement("div",{className:"swiper-button-prev",onMouseEnter:function(){return c(" bl-cursor","recent")},onMouseLeave:function(){return s()}}))};return(0,e.useEffect)(function(){var e;return e=!1,u((0,r.changeGsapState)(e)),function(e){u((0,r.makeSmoothScroll)(e))}(!0),function(){o.ScrollTrigger.getAll().forEach(function(e){e.kill()}),s()}},[]),(0,e.useEffect)(function(){f&&o.ScrollTrigger.matchMedia({"(min-width: 985px)":function(){i.gsap.to(".mobile-division",{opacity:0})},"(max-width: 984px)":function(){i.gsap.fromTo(".text-slider-left-area",{opacity:1},{opacity:0,scrollTrigger:{id:"text-slider-left",trigger:".text-slider-left-area",start:"top+=30% center",end:"bottom-=30% center",scrub:!0}}),i.gsap.fromTo(".text-slider-right-area",{opacity:0},{opacity:1,scrollTrigger:{id:"text-slider-right",trigger:".text-slider-right-area",start:"top+=50% center",end:"bottom-=30% center",scrub:!0}}),i.gsap.fromTo(".mobile-division",{opacity:1},{opacity:0,scrollTrigger:{id:"mobile-division",trigger:".text-slider-left-area",start:"top+=30% center",end:"bottom-=30% center",scrub:!0}})}})},[f]),e.default.createElement("div",{className:"footprint-detail"},e.default.createElement("div",{className:"container fluid pl-pr-none"},e.default.createElement("div",{className:"text-slider-left-area"},e.default.createElement(l.default,{text:"career",type:"left"})),e.default.createElement("div",{className:"text-slider-right-area"},e.default.createElement(l.default,{text:"project&subcontract",type:"right"})),e.default.createElement("div",{className:"row"},e.default.createElement("div",{className:"col-12 off-l-none col-l-5 career-frame"},m(v,"left")),e.default.createElement("div",{className:"mobile-division"},"Project",e.default.createElement("br",null),"&Subcontract",e.default.createElement("span",null)),e.default.createElement("div",{className:"col-1 pl-pr-none division-frame"},e.default.createElement("div",{className:"division-line"}),e.default.createElement("div",{className:"point-frame"},e.default.createElement("div",{className:"left-area"},e.default.createElement("div",{className:"left-text"},"Career")),e.default.createElement("div",{className:"right-area"},e.default.createElement("div",{className:"right-text"},"Project&Subcontract")))),e.default.createElement("div",{className:"col-12 col-l-6 project-frame"},m(E,"right")))))},w=b;exports.default=w;
},{"react":"HdMw","react-redux":"sYSi","../../modules/commonValue":"SG6f","swiper":"MGWF","swiper/react":"s8gF","gsap":"f8Z0","gsap/ScrollTrigger":"rpvU","./footprintDetail.scss":"Ah0K","swiper/swiper.scss":"Ah0K","swiper/components/navigation/navigation.scss":"Ah0K","swiper/components/pagination/pagination.scss":"Ah0K","swiper/components/effect-fade/effect-fade.scss":"Ah0K","../../components/textSlider":"Cn1F"}],"TxuW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return e.default}});var e=t(require("./footprintDetail"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./footprintDetail":"aZel"}]},{},[], null)