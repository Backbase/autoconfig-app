webpackJsonp([1,6],{821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(256),o=n(826),s=n(823);n.d(t,"SettingsModule",function(){return c});var a=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return e=a([n.i(r.b)({imports:[i.a,o.a],declarations:[s.a]}),l("design:paramtypes",[])],e)}()},823:function(e,t,n){"use strict";var r=n(0),i=n(14),o=n(37),s=n(70),a=n(257);n.d(t,"a",function(){return d});var l=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.configuration=e,this.alerts=t}return e.prototype.ngOnInit=function(){this.userData={user:new s.User(this.configuration.user)}},e.prototype.ngOnDestroy=function(){this.settingsAlertId&&this.alerts.dismiss(this.settingsAlertId)},Object.defineProperty(e.prototype,"configurations",{get:function(){return Object.keys(this.configuration.provisionConfigurations)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"urls",{get:function(){return this.configuration.navigationUrls},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"initialBaseUrl",{get:function(){return this.configuration.baseUrl},enumerable:!0,configurable:!0}),e.prototype.saveBaseURL=function(e){this.configuration.baseUrl=e,this.baseUrlForm.reset(),this.settingsAlertId=this.alerts.addSuccess("Base API URL was saved.")},e.prototype.saveUser=function(){this.configuration.user=this.userData.user,this.settingsAlertId=this.alerts.addSuccess("User credentials was saved."),this.userForm.reset({user:this.configuration.user})},e.prototype.deleteConfiguration=function(e){this.configuration.deleteProvisionConfiguration(e),this.settingsAlertId=this.alerts.addSuccess('Provisioning configuration "'+e+'" was deleted.')},e.prototype.addURL=function(e){this.configuration.addNavigationUrl(e.urlName,e.navigationUrl),this.settingsAlertId=this.alerts.addSuccess('Navigation URL "'+e.urlName+'" was added.'),this.urlForm.reset()},e.prototype.deleteURL=function(e){this.configuration.deleteNavigationUrl(e),this.settingsAlertId=this.alerts.addSuccess('Navigation URL "'+e+'" was deleted.')},l([n.i(r.c)("userForm"),c("design:type","function"==typeof(t=void 0!==a.a&&a.a)&&t||Object)],e.prototype,"userForm",void 0),l([n.i(r.c)("urlForm"),c("design:type","function"==typeof(d=void 0!==i.a&&i.a)&&d||Object)],e.prototype,"urlForm",void 0),l([n.i(r.c)("baseUrlForm"),c("design:type","function"==typeof(u=void 0!==i.a&&i.a)&&u||Object)],e.prototype,"baseUrlForm",void 0),e=l([n.i(r.d)({selector:"ac-settings",template:n(832),styles:[n(829)]}),c("design:paramtypes",["function"==typeof(f=void 0!==o.a&&o.a)&&f||Object,"function"==typeof(m=void 0!==o.c&&o.c)&&m||Object])],e);var t,d,u,f,m}()},826:function(e,t,n){"use strict";var r=n(0),i=n(255),o=n(823);n.d(t,"a",function(){return c});var s=this&&this.__decorate||function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=[{path:"",component:o.a,pathMatch:"full"}],c=function(){function e(){}return e=s([n.i(r.b)({imports:[i.a.forChild(l)],exports:[i.a],providers:[]}),a("design:paramtypes",[])],e)}()},829:function(e,t){e.exports=":host{display:block;width:100%;height:100%;overflow-x:hidden;overflow-y:auto}.settings-container{max-width:540px}.url-name-input{max-width:150px}.url-input{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.list-group-item{overflow:hidden}"},832:function(e,t){e.exports='<div class="container mt-4 mb-4 settings-container">\n\n  <div class="row">\n    <div class="col-12 mb-3">\n      <h4>User credentials</h4>\n    </div>\n    <div class="col-12 mb-3">\n      <ac-user-form #userForm [data]="userData"></ac-user-form>\n    </div>\n    <div class="col-12">\n      <button class="btn btn-primary float-right"\n        [disabled]="!userForm.isValid || userForm.isPristine"\n        (click)="saveUser()">\n        Save\n      </button>\n    </div>\n  </div>\n\n  <hr class="m-5">\n  <div class="row">\n    <div class="col-12 mb-3">\n      <h4>Navigation URLs</h4>\n    </div>\n    <div class="col-12">\n      <form class="form-inline w-100 flex-nowrap"\n        #urlForm="ngForm"\n        (ngSubmit)="addURL(urlForm.value)">\n        <input type="text"\n          class="form-control mr-2 url-name-input"\n          placeholder="Name"\n          required\n          name="urlName"\n          ngModel>\n        <input type="text"\n          class="form-control mr-2 url-input"\n          placeholder="URL"\n          required\n          name="navigationUrl"\n          ngModel>\n        <button class="btn btn-primary" type="submit" [disabled]="urlForm.invalid">Add</button>\n      </form>\n      <small class="form-text text-muted mb-3">Inside URL input you can use &#123;environmentName&#125; placeholder, which will be replaced with actual environment name.<br>For example <code>https://google.com/#q=&#123;environmentName&#125;</code></small>\n\n      <div class="list-group">\n        <div class="list-group-item justify-content-between"\n          *ngFor="let url of urls; trackBy: url?.name">\n          <div class="w-100 d-flex justify-content-between">\n            {{url.name}}\n            <button type="button" class="close" title="Delete navigation URL"\n              (click)="deleteURL(url.name)">\n              <span>&times;</span>\n            </button>\n          </div>\n          <small class="text-muted">{{url.value}}</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr class="m-5">\n  <div class="row">\n    <div class="col-12 mb-3">\n      <h4>Provisioning configurations</h4>\n    </div>\n    <div class="col-12">\n      <div class="text-muted" *ngIf="!configurations.length">No saved configurations</div>\n      <div class="list-group">\n        <div class="list-group-item justify-content-between"\n          *ngFor="let conf of configurations; trackBy: conf">\n          {{conf}}\n          <button type="button" class="close" title="Delete configuration"\n            (click)="deleteConfiguration(conf)">\n            <span>&times;</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr class="m-5">\n  <div class="row">\n    <div class="col-12 mb-3">\n      <h4>Base API URL</h4>\n    </div>\n    <div class="col-12">\n      <form class="form-inline w-100 flex-nowrap"\n        #baseUrlForm="ngForm"\n        (ngSubmit)="saveBaseURL(baseUrlForm.value.baseUrl)"\n        [ngClass]="{\n          \'has-success\': baseUrlForm.valid && !baseUrlForm.pristine,\n          \'has-danger\': !baseUrlForm.valid && !baseUrlForm.pristine && baseUrlForm.touched\n        }">\n        <input type="text"\n          class="form-control mr-2 url-input"\n          placeholder="Base URL"\n          name="baseUrl"\n          [ngModel]="initialBaseUrl"\n          required\n          pattern="(http|https)?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)"\n          #baseUrl="ngModel"\n          [ngClass]="{\n            \'form-control-success\': baseUrlForm.valid && !baseUrlForm.pristine,\n            \'form-control-danger\': !baseUrlForm.valid && !baseUrlForm.pristine && baseUrlForm.touched\n          }">\n        <button class="btn btn-primary" type="submit"\n          [disabled]="baseUrlForm.invalid || baseUrlForm.pristine">\n          Save\n        </button>\n      </form>\n      <div class="form-control-feedback text-danger"\n        [hidden]="baseUrlForm.valid || baseUrlForm.pristine || !baseUrlForm.touched || !baseUrl.errors.required">\n        URL is required\n      </div>\n      <div class="form-control-feedback text-danger"\n        [hidden]="baseUrlForm.valid || baseUrlForm.pristine || !baseUrlForm.touched || !baseUrl.errors.pattern">\n        URL format is incorrect\n      </div>\n    </div>\n  </div>\n\n</div>\n\n'}});