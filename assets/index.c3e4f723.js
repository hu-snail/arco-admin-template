var w=Object.defineProperty,x=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var O=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&O(e,r,t[r]);if(u)for(var r of u(t))C.call(t,r)&&O(e,r,t[r]);return e},l=(e,t)=>x(e,I(t));import{R as v,r as j,I as y,j as c,_ as h}from"./index.440264d9.js";function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(n){h(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function N(e,t){var r=j.exports.useContext(y),n=r.prefixCls,o=e.spin,s=e.className,a=m(m({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(s?s+" ":"").concat(n,"-icon ").concat(n,"-icon-message")});return o&&(a.className="".concat(a.className," ").concat(n,"-icon-loading")),delete a.spin,delete a.isIcon,c("svg",l(i({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},a),{children:c("path",{d:"M15 20h18m-18 9h9M7 41h17.63C33.67 41 41 33.67 41 24.63V24c0-9.389-7.611-17-17-17S7 14.611 7 24v17Z"})}))}var p=v.forwardRef(N);p.defaultProps={isIcon:!0};p.displayName="IconMessage";var _=p;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(n){h(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function S(e,t){var r=j.exports.useContext(y),n=r.prefixCls,o=e.spin,s=e.className,a=g(g({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(s?s+" ":"").concat(n,"-icon ").concat(n,"-icon-star")});return o&&(a.className="".concat(a.className," ").concat(n,"-icon-loading")),delete a.spin,delete a.isIcon,c("svg",l(i({fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48"},a),{children:c("path",{d:"M22.552 6.908a.5.5 0 0 1 .896 0l5.02 10.17a.5.5 0 0 0 .376.274l11.224 1.631a.5.5 0 0 1 .277.853l-8.122 7.916a.5.5 0 0 0-.143.443l1.917 11.178a.5.5 0 0 1-.726.527l-10.038-5.278a.5.5 0 0 0-.466 0L12.73 39.9a.5.5 0 0 1-.726-.527l1.918-11.178a.5.5 0 0 0-.144-.443l-8.122-7.916a.5.5 0 0 1 .278-.853l11.223-1.63a.5.5 0 0 0 .376-.274l5.02-10.17Z"})}))}var f=v.forwardRef(S);f.defaultProps={isIcon:!0};f.displayName="IconStar";var k=f;export{k as I,_ as a};