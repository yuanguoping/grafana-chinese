(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{EZhu:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("ZFWI"),c=n("kDLi"),i=Object(r.forwardRef)((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.FormLabel,{className:"width-8"},e.label),o.a.createElement(c.Input,{className:"gf-form-input max-width-22",type:"password",onChange:function(t){return e.onChange(t.target.value)},value:e.value}))}));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return w}));var w=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=m(this,(e=y(t)).call.apply(e,[this].concat(o)))).state={oldPassword:"",newPassword:"",confirmNew:""},n.onOldPasswordChange=function(e){n.setState({oldPassword:e})},n.onNewPasswordChange=function(e){n.setState({newPassword:e})},n.onConfirmPasswordChange=function(e){n.setState({confirmNew:e})},n.onSubmitChangePassword=function(e){e.preventDefault(),n.props.onChangePassword(l({},n.state))},n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword,r=e.confirmNew,u=this.props.isSaving,s=a.b.ldapEnabled,l=a.b.authProxyEnabled;return s||l?o.a.createElement("p",null,"You cannot change password when ldap or auth proxy authentication is enabled."):o.a.createElement("form",{name:"userForm",className:"gf-form-group"},o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(i,{label:"旧密码",onChange:this.onOldPasswordChange,value:t})),o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(i,{label:"新密码",onChange:this.onNewPasswordChange,value:n})),o.a.createElement("div",{className:"gf-form max-width-30"},o.a.createElement(i,{label:"确认密码",onChange:this.onConfirmPasswordChange,value:r})),o.a.createElement("div",{className:"gf-form-button-row"},o.a.createElement(c.Button,{variant:"primary",onClick:this.onSubmitChangePassword,disabled:u},"更改密码"),o.a.createElement(c.LinkButton,{variant:"transparent",href:"".concat(a.b.appSubUrl,"/profile")},"取消")))}}])&&b(n.prototype,r),u&&b(n,u),t}(r.PureComponent)},PEdC:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"ChangePasswordPage",(function(){return w}));var r=n("q1tI"),o=n.n(r),a=n("0cfB"),c=n("/MKj"),i=n("lzJ5"),u=n("V9sw"),s=n("ZGyg"),l=n("EZhu");function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return p(this,t),m(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.navModel;return o.a.createElement(s.a,{navModel:e},o.a.createElement(u.a,null,(function(e,t){var n=e.changePassword;return o.a.createElement(s.a.Contents,null,o.a.createElement("h3",{className:"page-sub-heading"},"更改您的密码"),o.a.createElement(l.a,{onChangePassword:n,isSaving:t.changePassword}))})))}}])&&b(n.prototype,r),a&&b(n,a),t}(r.PureComponent);t.default=Object(a.hot)(e)(Object(c.connect)((function(e){return{navModel:Object(i.a)(e.navIndex,"change-password")}}),{})(w))}.call(this,n("3UD+")(e))}}]);
//# sourceMappingURL=54.fc25e2ef18cf58c0ed79.js.map