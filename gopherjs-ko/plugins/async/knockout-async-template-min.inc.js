!function(e){"function"==typeof define&&define.amd?define(["knockout","jquery"],e):e(ko,jQuery)}(function(e,t){function n(e){return e&&e.replace(/\/?$/,"/")}var r=new e.nativeTemplateEngine,a={};r.defaultPath="templates",r.defaultSuffix=".tmpl.html",e.templateSources.requireTemplate=function(t){this.key=t,this.template=e.observable(" "),this.requested=!1,this.retrieved=!1},e.templateSources.requireTemplate.prototype.text=function(e){return!this.requested&&this.key&&(t.get(n(r.defaultPath)+this.key+r.defaultSuffix,function(e){this.retrieved=!0,this.template(e)}.bind(this),"html"),this.requested=!0),this.key||this.template(""),0===arguments.length?this.template():void 0},r.makeTemplateSource=function(t,n){var r;return"string"==typeof t?(r=(n||document).getElementById(t),r&&"script"===r.tagName.toLowerCase()?new e.templateSources.domElement(r):(t in a||(a[t]=new e.templateSources.requireTemplate(t)),a[t])):!t||1!==t.nodeType&&8!==t.nodeType?void 0:new e.templateSources.anonymousTemplate(t)},r.renderTemplate=function(t,n,a,i){var o,u=a&&a.afterRender,l=a&&a.templateProperty&&n.$module&&n.$module[a.templateProperty];return u&&(u=a.afterRender=a.afterRender.original||a.afterRender),o=!l||"function"!=typeof l&&"string"!=typeof l?r.makeTemplateSource(t,i):{text:function(){return"function"==typeof l?l.call(n.$module):l}},"function"==typeof u&&o instanceof e.templateSources.requireTemplate&&!o.retrieved&&(a.afterRender=function(){o.retrieved&&u.apply(this,arguments)},a.afterRender.original=u),r.renderTemplateSource(o,n,a,i)},e.externalTemplateEngine=r,e.setTemplateEngine(r)});