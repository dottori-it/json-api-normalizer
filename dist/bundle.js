module.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function a(t){return(0,l.default)(t)?t:[t]}function i(t){var e={};return a(t).forEach(function(t){e[t.type]=e[t.type]||{},e[t.type][t.id]=e[t.type][t.id]||{},e[t.type][t.id].attributes=t.attributes,t.relationships&&a(t.relationships).forEach(function(n){var r=[],i=void 0;a(n).forEach(function(t){(0,h.default)(t).forEach(function(e){r.push(t[e].data.id),i=t[e].data.type})}),e[t.type][t.id].relationships={},e[t.type][t.id].relationships[i]=(0,c.default)(r,",")})}),e}function o(t){return t.replace(/\?.*$/,"")}function u(t,e){var n={};return n.meta={},n.meta[e]={},n.meta[e].data={},t.data&&!function(){var r={};a(t.data).forEach(function(t){r[t.type]=r[t.type]||[],r[t.type].push(t.id)}),(0,h.default)(r).forEach(function(t){return r[t]=(0,c.default)(r[t],",")}),n.meta[e].data=r,t.links&&(n.meta[e].links=t.links)}(),n}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={},a=n.filterEndpoint;return"undefined"==typeof a&&(a=!0),t.data&&(0,v.default)(r,i(t.data)),t.included&&(0,v.default)(r,i(t.included)),e&&(0,v.default)(r,u(t,a?o(e):e)),r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var f=n(2),l=r(f),s=n(3),c=r(s),p=n(4),h=r(p),y=n(5),v=r(y)},function(t,e){t.exports=require("lodash/isArray")},function(t,e){t.exports=require("lodash/join")},function(t,e){t.exports=require("lodash/keys")},function(t,e){t.exports=require("lodash/merge")}]);