(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{5353:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(28550)}])},28550:function(e,t,r){"use strict";let n;r.r(t),r.d(t,{default:function(){return u}});var o=r(85893),i=r(83454),a=r(1864),l=r.n(a),s=r(12918),c=r.n(s);let f=e=>{let{statusCode:t}=e;return(0,o.jsx)(c(),{statusCode:null!=t?t:400,title:"Something went wrong on the client"})};f.getInitialProps=e=>{var t,r;let{res:o,err:a}=e,s=o?o.statusCode:a?a.statusCode:404;return null==n||n.error("Unexpected Error","An error occurred ".concat(null!=s?s:"on client side"),(t={LoggerName:l().basename("/index.js")},r=a instanceof f?a:void 0,{env:i.env.ENV,level:3,Severity:"ERROR",timestamp:new Date().toISOString(),StackTrace:r instanceof Error?r.stack:null==r?void 0:r.toString(),message:r instanceof Error?r.message:"Unexpected error",full_message:r instanceof Error?r.message:"Unexpected error",...t})),{statusCode:s}};var u=f},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",o=0,i=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else if(47===r)break;else r=47;if(47===r){if(i===l-1||1===a);else if(i!==l-1&&2===a){if(n.length<2||2!==o||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",o=0):o=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),i=l,a=0;continue}}else if(2===n.length||1===n.length){n="",o=0,i=l,a=0;continue}}t&&(n.length>0?n+="/..":n="..",o=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),o=l-i-1;i=l,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n,o="",i=!1,a=arguments.length-1;a>=-1&&!i;a--)a>=0?n=arguments[a]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(o=n+"/"+o,i=47===n.charCodeAt(0));return(o=r(o,!i),i)?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&o&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var o=arguments[r];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var i=e.length,a=i-o,l=1;l<r.length&&47===r.charCodeAt(l);++l);for(var s=r.length-l,c=a<s?a:s,f=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(l+u))return r.slice(l+u+1);if(0===u)return r.slice(l+u)}else a>c&&(47===e.charCodeAt(o+u)?f=u:0===u&&(f=0));break}var h=e.charCodeAt(o+u);if(h!==r.charCodeAt(l+u))break;47===h&&(f=u)}var g="";for(u=o+f+1;u<=i;++u)(u===i||47===e.charCodeAt(u))&&(0===g.length?g+="..":g+="/..");return g.length>0?g+r.slice(l+f):(l+=f,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return -1===o?n?"/":".":n&&1===o?"//":e.slice(0,o)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,o=0,i=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var l=r.length-1,s=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){o=n+1;break}}else -1===s&&(a=!1,s=n+1),l>=0&&(c===r.charCodeAt(l)?-1==--l&&(i=n):(l=-1,i=s))}return o===i?i=s:-1===i&&(i=e.length),e.slice(o,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){o=n+1;break}}else -1===i&&(a=!1,i=n+1);return -1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var r=-1,n=0,o=-1,i=!0,a=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47===s){if(!i){n=l+1;break}continue}-1===o&&(i=!1,o=l+1),46===s?-1===r?r=l:1!==a&&(a=1):-1!==r&&(a=-1)}return -1===r||-1===o||0===a||1===a&&r===o-1&&r===n+1?"":e.slice(r,o)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var o=e.charCodeAt(0),i=47===o;i?(n.root="/",r=1):r=0;for(var a=-1,l=0,s=-1,c=!0,f=e.length-1,u=0;f>=r;--f){if(47===(o=e.charCodeAt(f))){if(!c){l=f+1;break}continue}-1===s&&(c=!1,s=f+1),46===o?-1===a?a=f:1!==u&&(u=1):-1!==a&&(u=-1)}return -1===a||-1===s||0===u||1===u&&a===s-1&&a===l+1?-1!==s&&(0===l&&i?n.base=n.name=e.slice(1,s):n.base=n.name=e.slice(l,s)):(0===l&&i?(n.name=e.slice(1,a),n.base=e.slice(1,s)):(n.name=e.slice(l,a),n.base=e.slice(l,s)),n.ext=e.slice(a,s)),l>0?n.dir=e.slice(0,l-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(114);e.exports=o}()},12918:function(e,t,r){e.exports=r(43499)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=5353)}),_N_E=e.O()}]);