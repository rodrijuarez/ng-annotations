!function(e){function t(r){if(n[r])return n[r].exports;var module=n[r]={exports:{},id:r,loaded:!1};return e[r].call(module.exports,module,module.exports,t),module.loaded=!0,module.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t={};t.controller=e(6),t.component=e(4),t.service=e(12),t.animation=e(3),t.config=e(5),t.directive=e(7),t.factory=e(8),t.filter=e(9),t.provider=e(10),t.run=e(11),t.constant=e(16),t.value=e(17),t.inject=e(2),t.autobind=e(14),t.attach=e(13),t.conceal=e(15),exports["default"]=window.ngAnnotations=t,module.exports=exports["default"]},function(module,exports){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),n=function(){function n(){e(this,n)}return t(n,null,[{key:"extractParameters",value:function(e){var t=e.toString().replace(this.regexStripComment,""),n=t.match(this.regexArgs);return n&&n[1].length>0?n[1].split(","):[]}},{key:"getUUID",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx":arguments[0];return e.replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})}},{key:"arrayUnique",value:function(){for(var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=[e[0]],n=1;n<e.length;n++)e[n-1]!==e[n]&&t.push(e[n]);return t}},{key:"getIdentifier",value:function(e){return void 0===this.identifiers[e]&&(this.identifiers[e]=window.Symbol?Symbol(e):this.getUUID()),this.identifiers[e]}},{key:"addDeclareMethod",value:function(e){Object.defineProperty(e,"autodeclare",{configurable:!0,enumerable:!1,value:function(e){var t,n=this.$name?[this.$name,this.$component]:[this.$component];return"string"==typeof e&&(e=angular.module(e)),(t=e)[this.$type].apply(t,n)}})}},{key:"applyTransformations",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=arguments.length<=2||void 0===arguments[2]?[]:arguments[2],r=this.getIdentifier("$transform"),o=e.prototype[r]||[];o.forEach(function(r){return r(t,e,n)})}},{key:"getFinalComponent",value:function(e,t){var n=this.getIdentifier("$private"),r=e.prototype[n]||[];if(0===r.length)return t;r.push("constructor");var o=Object.getOwnPropertyNames(e.prototype),a=Object.getOwnPropertyNames(t),i=this.arrayUnique(o.concat(a)),l=i.filter(function(e){return!~r.indexOf(e)}),u={};return l.forEach(function(e){t[e]instanceof Function?(u[e]=function(){return t[e].apply(t,arguments)},Object.defineProperties(u[e],{call:{value:function(){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];var a=arguments.length<=0||void 0===arguments[0]?t:arguments[0];return t[e].apply(a,r)},writable:!1,enumerable:!1},apply:{value:function(){var n=arguments.length<=0||void 0===arguments[0]?t:arguments[0],r=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return t[e].apply(n,r)},writable:!1,enumerable:!1}})):Object.defineProperty(u,e,{get:function(){return t[e]},set:function(n){return t[e]=n},enumerable:!1})}),u}},{key:"defineComponent",value:function(e,t,n,r){if(!~this.angularComponents.indexOf(n))throw Error("the given type must be a valid angular component");Object.defineProperties(e,{$name:{value:void 0!==t?t:e.name,enumerable:!0,configurable:!0},$type:{value:n,enumerable:!0,writable:!1},$component:{value:r,enumerable:!0,configurable:!0}}),e.$component instanceof Object&&Object.defineProperty(e.$component,"$inject",{get:function(){return e.$inject||[]},set:function(t){return e.$inject=t}})}},{key:"regexArgs",value:/^function\s*[^\(]*\(\s*([^\)]*)\)/m,enumerable:!0},{key:"regexStripComment",value:/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,enumerable:!0},{key:"angularComponents",value:["config","run","value","constant","animation","controller","directive","factory","provider","service","filter"],enumerable:!0},{key:"identifiers",value:{},enumerable:!0}]),n}();exports["default"]=n,module.exports=exports["default"]},function(module,exports){"use strict";function e(e){if(!(e instanceof Array)){e=[e];for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];n.length>0&&(e=e.concat(n))}return e.forEach(function(t,n){t instanceof Object&&"$name"in t&&(e[n]=t.$name)}),function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];r.length>0&&(t=r[1].value),Object.defineProperty(t,"$inject",{value:e,enumerable:!0,configurable:!0})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=e,module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));return a["default"].applyTransformations(t,i,n),a["default"].getFinalComponent(t,i)};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(n)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"animation",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=a(e),n=t.selector,i=t.directive;return function(e){var t=r(e,n);i.controller=t.$name;var a=o(n,i);Object.defineProperties(e,{$composite:{value:{controller:t,directive:a},enumerable:!0,configurable:!0},$type:{value:"component",enumerable:!0,writable:!1},autodeclare:{configurable:!0,enumerable:!1,value:function(e){var t=this.$composite,n=t.controller,r=t.directive;n.autodeclare(e),r.autodeclare(e)}}})}}function r(e,t){var n=Object.defineProperties({},{$inject:{get:function(){return e.$inject},configurable:!0,enumerable:!0}}),r=t+"-component-"+u["default"].getUUID(),o=function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];var o=new(i.apply(e,[null].concat(n)));return o.$ioProps||(o.$ioProps={}),u["default"].applyTransformations(e,o,n),u["default"].getFinalComponent(e,o)};if(!(e.$inject instanceof Array)||0===e.$inject.length){var a=u["default"].extractParameters(e);a.length>0&&(0,f["default"])(a)(o)}return u["default"].addDeclareMethod(n),u["default"].defineComponent(n,r,"controller",o),n}function o(e,t){var n={};return u["default"].addDeclareMethod(n),u["default"].defineComponent(n,e,"directive",function(){return t}),n}function a(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t={selector:null,directive:{restrict:"E",scope:{},controllerAs:null,controller:null,transclude:!1}},n={compile:function(){},prelink:function(){},postlink:function(){}};if("string"!=typeof e.selector||!e.selector.length)throw Error("@component: the selector option is mandatory and should be a string, "+typeof e.selector+" given");if(t.selector=t.directive.controllerAs=e.selector,"object"==typeof e.ioProps&&e.ioProps)for(var r=Object.keys(e.ioProps),o=0,a=r.length;a>o;o++){var i=r[o];t.directive.scope[i]="="+e.ioProps[i]}return"string"==typeof e.alias&&e.alias.length>0&&(t.directive.controllerAs=e.alias),"string"==typeof e.type&&e.type.length>0&&(t.directive.restrict=e.type),"template"in e&&(t.directive.template=e.template),"templateUrl"in e&&(t.directive.templateUrl=e.templateUrl),"transclude"in e&&(t.directive.transclude=!!e.transclude),"object"==typeof e.lifecycle&&e.lifecycle&&("compile"in e.lifecycle&&"function"==typeof e.lifecycle.compile&&(n.compile=e.lifecycle.compile),"prelink"in e.lifecycle&&"function"==typeof e.lifecycle.prelink&&(n.prelink=e.lifecycle.prelink),"postlink"in e.lifecycle&&"function"==typeof e.lifecycle.postlink&&(n.postlink=e.lifecycle.postlink)),t.directive.compile=function(){for(var t,r=arguments.length,o=Array(r),a=0;r>a;a++)o[a]=arguments[a];return(t=n.compile).apply.apply(t,[this].concat(o)),{pre:function(t,r,o,a,i){var l={};a.$ioProps&&"object"==typeof a.$ioProps?l=a.$ioProps:a.$ioProps=l;var u=Object.keys(e.ioProps||[]);u.forEach(function(e){Object.defineProperty(l,e,{get:function(){return t[e]},set:function(n){t[e]=n}})}),Object.defineProperty(l,"length",{get:function(){return u.length},enumerable:!0}),n.prelink.apply(this,[t,r,o,a,i])},post:function(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];n.postlink.apply(this,t)}}},t}Object.defineProperty(exports,"__esModule",{value:!0});var i=Function.prototype.bind;exports["default"]=n;var l=e(1),u=t(l),c=e(2),f=t(c);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){return function(e){var t=function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];var i=new(r.apply(e,[null].concat(n)));return a["default"].applyTransformations(e,i,n),i};if(!(e.$inject instanceof Array)||0===e.$inject.length){var n=a["default"].extractParameters(e);n.length>0&&(0,l["default"])(n)(t)}a["default"].addDeclareMethod(e),a["default"].defineComponent(e,null,"config",t)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));return a["default"].applyTransformations(t,i,n),a["default"].getFinalComponent(t,i)};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(n)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"controller",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));return a["default"].applyTransformations(t,i,n),i};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(n)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"directive",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));a["default"].applyTransformations(t,i,n);var l=a["default"].getFinalComponent(t,i);return l.$expose instanceof Function?l.$expose():l};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(n)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"factory",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?{name:"",stateful:!1}:arguments[0];return function(t){var n="",o=!1;e instanceof Object?(n=e.name||t.name,o=!!e.stateful):n=e||t.name;var i=function(){function e(){return u.$filter.apply(u,arguments)}for(var n=arguments.length,i=Array(n),l=0;n>l;l++)i[l]=arguments[l];var u=new(r.apply(t,[null].concat(i)));if(!(u.$filter instanceof Function))throw Error('an annotated "filter" must implement the "$filter" method');return a["default"].applyTransformations(t,u,i),u.$stateful===!0&&(console.warn("the $stateful property is deprecated and will be removed in the next versions, use the @filter parameter instead"),console.warn("https://github.com/PillowPillow/ng-annotations#d_filter"),e.$stateful=!0),o&&(e.$stateful=o),e};if(!(t.$inject instanceof Array)||0===t.$inject.length){var u=a["default"].extractParameters(t);u.length>0&&(0,l["default"])(u)(i)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,n,"filter",i)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));return a["default"].applyTransformations(t,i,n),a["default"].getFinalComponent(t,i)};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(n)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"provider",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){return function(e){var t=function(){for(var t=arguments.length,n=Array(t),o=0;t>o;o++)n[o]=arguments[o];var i=new(r.apply(e,[null].concat(n)));return a["default"].applyTransformations(e,i,n),i};if(!(e.$inject instanceof Array)||0===e.$inject.length){var n=a["default"].extractParameters(e);n.length>0&&(0,l["default"])(n)(t)}a["default"].addDeclareMethod(e),a["default"].defineComponent(e,null,"run",t)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return function(t){e=e||t.name;var n=function(){for(var e=arguments.length,n=Array(e),o=0;e>o;o++)n[o]=arguments[o];var i=new(r.apply(t,[null].concat(n)));return a["default"].applyTransformations(t,i,n),a["default"].getFinalComponent(t,i)};if(!(t.$inject instanceof Array)||0===t.$inject.length){var o=a["default"].extractParameters(t);o.length>0&&(0,l["default"])(o)(t)}a["default"].addDeclareMethod(t),a["default"].defineComponent(t,e,"service",n)}}Object.defineProperty(exports,"__esModule",{value:!0});var r=Function.prototype.bind;exports["default"]=n;var o=e(1),a=t(o),i=e(2),l=t(i);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(){var e=arguments.length<=0||void 0===arguments[0]?"this":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1];if("string"!=typeof e&&!(e instanceof Object&&"$name"in e))throw Error("the source param of @attach must be a string or an annotated component, "+typeof e+" given");if("string"!=typeof t)throw Error("the path param of @attach must be a string, "+typeof t+" given");return function(n,a,i){if(i instanceof Object&&(void 0!==i.set||void 0!==i.get))throw Error("@attach decorator cannot be applied to an accessor");if(void 0===a)throw Error("@attach decorator can only be applied to methods or attributes");i.configurable=!0,e instanceof Object&&(e=e.$name);var u=l["default"].getIdentifier("$transform");void 0!==n[u]&&n[u]instanceof Array||(n[u]=[]);var c=t.split("."),f=c.pop();"this"===e?(delete i.initializer,delete i.value,o(e,c,f,i)):n[u].push(r(e,c,f,a))}}function r(e,t,n,r){return function(a,i,l){var u=i.$inject||[],c=u.indexOf(e);if(!~c)throw Error("unable to attach the property "+n+", the component "+e+" isn't loaded");var f=Object.getOwnPropertyDescriptor(a,r),d=f.configurable,s=f.enumerable,p={configurable:d,enumerable:s};o(e,t,n,p,l[c]),delete a[r],Object.defineProperty(a,r,p)}}function o(e,t,n,r){var o=arguments.length<=4||void 0===arguments[4]?void 0:arguments[4];r.get=function(){if(void 0===o&&(o=this),!n)return o;var e=a(o,t);return e[n]instanceof Function?e[n].bind(e):e[n]},r.set=function(e){if(void 0===o&&(o=this),!n)return o;var r=a(o,t);r[n]=e}}function a(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];if(t.length>0)for(var n=0;n<t.length;n++){if(!(e instanceof Object))throw Error("unable to acces to the given property, invalid path");if(e=e[t[n]],!e)throw Error("unable to acces to the given property")}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var i=e(1),l=t(i);module.exports=exports["default"]},function(module,exports){"use strict";function e(e,t,n){var r=n.value;if("function"!=typeof r)throw Error("@autobind decorator can only be applied to methods not: "+typeof r);return{configurable:!0,get:function(){var e=r.bind(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=e,module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t,n){if(void 0===t)throw Error("@isolate decorator can only be applied to methods or attributes");void 0!==n&&(n.writable=!0);var r=o["default"].getIdentifier("$private");void 0!==e[r]&&e[r]instanceof Array||(e[r]=[]),e[r].push(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),o=t(r);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var n={};return o["default"].addDeclareMethod(n),o["default"].defineComponent(n,e,"constant",t),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),o=t(r);module.exports=exports["default"]},function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var n={};return o["default"].addDeclareMethod(n),o["default"].defineComponent(n,e,"value",t),n}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=n;var r=e(1),o=t(r);module.exports=exports["default"]}]);
//# sourceMappingURL=ng-annotations.js.map