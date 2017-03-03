webpackJsonp([0,5],{816:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(257),r=n(819),a=n(817),s=n(818);n.d(t,"LogsModule",function(){return f});var l=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(){}return e=l([n.i(o.b)({declarations:[a.a,s.a],imports:[i.a,r.a]}),c("design:paramtypes",[])],e)}()},817:function(e,t,n){"use strict";var o=n(0),i=n(256),r=n(37),a=n(547);n.d(t,"a",function(){return f});var s=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=5e3,f=function(){function e(e,t,n,o,i){var r=this;this.route=e,this.envService=t,this.confService=n,this.alerts=o,this.session=i,this.loadingLogs=!1,this.fullLog="",this.log="",this.page=0,this.routeSubscription=this.route.params.subscribe(function(e){r.envName=e.name||r.session.logsEnvironmentName})}return e.prototype.ngAfterViewInit=function(){this.envName&&this.loadLogs()},e.prototype.ngOnDestroy=function(){this.routeSubscription.unsubscribe(),this.dismissError()},Object.defineProperty(e.prototype,"hasMore",{get:function(){return this.fullLog.length!==this.log.length},enumerable:!0,configurable:!0}),e.prototype.loadLogs=function(e){var t=this;if(!this.loadingLogs){if(!(e&&e.hasAllData()||this.confService.user&&this.confService.user.hasAllData()))return void this.showCredentialsDialog();this.dismissError(),this.loadingLogs=!0,this.fullLog=this.log="",this.page=0,this.envService.loadEnvironmentLogs({user:e||this.confService.user,environmentName:this.envName}).then(function(e){t.fullLog=e,t.updateLog(t.page),t.userDialog.hide(),t.loadingLogs=!1,t.session.logsEnvironmentName=t.envName}).catch(function(e){t.errorId=t.alerts.addError("Unable to load "+t.envName+" logs. "+(e.message||e)),t.loadingLogs=!1,t.session.logsEnvironmentName=null})}},e.prototype.dismissError=function(){this.errorId&&(this.alerts.dismiss(this.errorId),this.errorId=null)},e.prototype.showCredentialsDialog=function(){this.userDialog.show()},e.prototype.updateLog=function(e){this.log+=this.fullLog.substr(e*c,c)},e.prototype.nextPage=function(){this.updateLog(++this.page)},s([n.i(o._4)("userDialog"),l("design:type","function"==typeof(t=void 0!==a.a&&a.a)&&t||Object)],e.prototype,"userDialog",void 0),e=s([n.i(o._3)({selector:"ac-logs",template:n(823),styles:[n(821)]}),l("design:paramtypes",["function"==typeof(f=void 0!==i.b&&i.b)&&f||Object,"function"==typeof(d=void 0!==r.b&&r.b)&&d||Object,"function"==typeof(p=void 0!==r.a&&r.a)&&p||Object,"function"==typeof(u=void 0!==r.c&&r.c)&&u||Object,"function"==typeof(g=void 0!==r.d&&r.d)&&g||Object])],e);var t,f,d,p,u,g}()},818:function(e,t,n){"use strict";var o=n(0),i=n(37);n.d(t,"a",function(){return s});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e){this.envService=e,this.disabled=!1,this.reload=new o.Q,this.envNameChange=new o.Q}return Object.defineProperty(e.prototype,"loadingEnv",{get:function(){return this.envService.loadingEnvironments},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"environments",{get:function(){return(this.envService.environments||[]).map(function(e){return e.name})},enumerable:!0,configurable:!0}),e.prototype.loadLogs=function(){this.reload.emit()},e.prototype.onSelectClick=function(){this.environments||this.loadingEnv||this.envService.loadEnvironments()},e.prototype.onChange=function(e){this.envNameChange.emit(e),this.loadLogs()},r([n.i(o.G)(),a("design:type",Boolean)],e.prototype,"disabled",void 0),r([n.i(o.G)("environment-name"),a("design:type",String)],e.prototype,"envName",void 0),r([n.i(o._2)("environment-nameChange"),a("design:type","function"==typeof(t=void 0!==o.Q&&o.Q)&&t||Object)],e.prototype,"envNameChange",void 0),r([n.i(o._2)(),a("design:type","function"==typeof(s=void 0!==o.Q&&o.Q)&&s||Object)],e.prototype,"reload",void 0),e=r([n.i(o._3)({selector:"ac-header",template:n(822),styles:[n(820)]}),a("design:paramtypes",["function"==typeof(l=void 0!==i.b&&i.b)&&l||Object])],e);var t,s,l}()},819:function(e,t,n){"use strict";var o=n(256),i=n(817);n.d(t,"a",function(){return a});var r=[{path:"",component:i.a,pathMatch:"full"},{path:":name",component:i.a}],a=o.a.forChild(r)},820:function(e,t){e.exports="header{padding:.75rem 1.25rem;min-height:70px;background-color:#f1f1f1}"},821:function(e,t){e.exports=":host{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}ac-header{-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.logs{font-size:.875rem;overflow-x:hidden;overflow-y:auto;font-family:monospace;padding:.75rem 1.25rem;text-overflow:ellipsis;white-space:pre-wrap}"},822:function(e,t){e.exports='<header class="d-flex flex-wrap align-items-center form-inline">\n  Environment:&nbsp;\n  <select name="environment"\n    class="mr-auto form-control"\n    (mousedown)="onSelectClick()"\n    [ngModel]="envName"\n    (ngModelChange)="onChange($event)"\n    [disabled]="disabled">\n    <option value="" *ngIf="loadingEnv">Loading...</option>\n    <option [ngValue]="envName" *ngIf="envName && !environments.length">{{envName}}</option>\n    <option *ngFor="let env of environments; trackBy: env" [ngValue]="env">{{env}}</option>\n  </select>\n\n  <button\n    class="btn btn-primary btn-sm"\n    title="Reload environment logs"\n    (click)="loadLogs()"\n    [disabled]="disabled || !envName">\n    <i [acIcon]="\'refresh\'"></i>\n  </button>\n</header>\n'},823:function(e,t){e.exports='<ac-header [(environment-name)]="envName"\n  [disabled]="loadingLogs"\n  (reload)="loadLogs()">\n</ac-header>\n\n<ac-loader class="align-self-center" *ngIf="loadingLogs"></ac-loader>\n\n<div class="logs w-100" *ngIf="!loadingLogs && log">\n  {{log}}<span *ngIf="hasMore">&hellip;</span>\n<a href="#" (click)="$event.preventDefault(); nextPage()" *ngIf="hasMore">Load more</a>\n</div>\n\n<ac-credentials-modal #userDialog\n  header="Enter user credentials"\n  credentials-only="true"\n  action-text="Load logs"\n  (action)="userDialog.hide(); loadLogs($event)">\n</ac-credentials-modal>\n'}});