webpackJsonp([0],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnesignalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the OnesignalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OnesignalProvider = /** @class */ (function () {
    function OnesignalProvider(http, platform, oneSignal) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.baseApiPath = 'https://onesignal.com/api/v1/notifications';
        this.appID = '31636f90-5d25-4d00-8e4b-b02e566f8a44';
        this.httpHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.playerId = "";
        console.log('Hello OnesignalProvider Provider');
        if (this.platform.is('android')) {
            this.oneSignal.getIds().then(function (id) { _this.playerId = id.userId; });
        }
        this.httpHeader.append('Content-Type', 'application/json; charset=utf-8');
        this.httpHeader.append('Authorization', 'Basic OWM2M2U1MTMtZmE4MC00ZjAxLWIwNTQtZjRiYzIyMzE4NzNm');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.httpHeader });
    }
    OnesignalProvider.prototype.cadastrarNotificacaoLeitura = function (name, href, importancia, minutos) {
        var messageID = "";
        if (this.playerId.length > 0) {
            var channel_id = void 0;
            var prioridade = void 0;
            switch (importancia) {
                case "alta":
                    channel_id = "c15b6927-a27a-4205-ae4d-227d458c2ef6";
                    prioridade = 10;
                    break;
                case "baixa":
                    channel_id = "bc1daa1d-d0ab-42af-9a27-a01e8082b2de";
                    prioridade = 0;
                    break;
                default:
                    channel_id = "b1fdc2c7-37ac-49c5-82a2-fcc5e4395f82";
                    prioridade = 5;
                    break;
            }
            var agora = new Date();
            agora.setMinutes(agora.getMinutes() + minutos);
            var message = {
                app_id: this.appID,
                send_after: agora,
                headings: {
                    "en": "Voce tem link a visualizar"
                },
                contents: { "en": name },
                url: href,
                include_player_ids: [this.playerId],
                android_channel_id: channel_id,
                priority: prioridade
            };
            this.http.post(this.baseApiPath, message, this.options).
                subscribe(function (result) {
                var resp = result.json();
                messageID = resp.id;
            });
        }
        return messageID;
    };
    OnesignalProvider.prototype.removeNotificacao = function (messageID) {
        var done = false;
        if (this.playerId.length > 0) {
            this.http.delete(this.baseApiPath + '/' + messageID + '?app_id=' + this.appID, this.options).subscribe();
            done = true;
        }
        return done;
    };
    OnesignalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_onesignal__["a" /* OneSignal */]])
    ], OnesignalProvider);
    return OnesignalProvider;
}());

//# sourceMappingURL=onesignal.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenomearLinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_links_lista_links__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_onesignal_onesignal__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RenomearLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenomearLinkPage = /** @class */ (function () {
    function RenomearLinkPage(navCtrl, navParams, usuarioProvider, authProvider, toastCtrl, notificador) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.notificador = notificador;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__inserir_link_inserir_link__["b" /* Link */]();
    }
    RenomearLinkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RenomearLinkPage');
    };
    RenomearLinkPage.prototype.renomearLink = function (nomeAtual) {
        if (this.authProvider.autenticado()) {
            var toast_1 = this.toastCtrl.create({
                duration: 3000
            });
            if (this.model.tempo) {
                this.notificador.cadastrarNotificacaoLeitura(this.navParams.get('nomeLink'), this.navParams.get('url'), this.navParams.get('importance'), this.model.tempo);
                toast_1.setMessage(this.navParams.get('nomeLink') + this.navParams.get('url') + this.navParams.get('importance') + this.model.tempo);
            }
            if (this.model.name) {
                this.usuarioProvider.renomearLink(this.authProvider.getEmail(), this.navParams.get('url'), this.navParams.get('nomeLink'), this.model.name).
                    subscribe(function (result) {
                    var response = result.json();
                    toast_1.setMessage("Link modificado com sucesso!");
                }, function (error) {
                    console.log(error);
                });
            }
            if (toast_1.name)
                toast_1.present();
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__lista_links_lista_links__["a" /* ListaLinksPage */]);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__["a" /* LoginUsuarioPage */]);
        }
    };
    RenomearLinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-renomear-link',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\renomear-link\renomear-link.html"*/'<!--\n\n  Generated template for the RenomearLinkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Renomear Link</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="img">\n\n    <img src="assets/imgs/logo.png">\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label stacked>Título</ion-label>\n\n      <ion-input type="text" name="name" placeholder="{{ this.navParams.get(\'nomeLink\') }}" [(ngModel)]="model.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item showWhen="android">\n\n      <ion-label stacked>\n\n        Tempo para notificação\n\n      </ion-label>\n\n      <ion-range min="0" max="120" pin="true" [(ngModel)]="model.tempo" color="secondary">\n\n        <ion-label range-left>Agora</ion-label>\n\n        <ion-label range-right>2 horas</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <div class="botao">\n\n      <button ion-button block (click)="renomearLink(model.name)" id="botao">MODIFICAR</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\renomear-link\renomear-link.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_onesignal_onesignal__["a" /* OnesignalProvider */]])
    ], RenomearLinkPage);
    return RenomearLinkPage;
}());

//# sourceMappingURL=renomear-link.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPage; });
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RedefinirSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RedefinirSenhaPage = /** @class */ (function () {
    function RedefinirSenhaPage(navCtrl, navParams, usuarioProvider, toastCtrl, dadosUsuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.toastCtrl = toastCtrl;
        this.dadosUsuarioProvider = dadosUsuarioProvider;
        this.model = new User();
    }
    RedefinirSenhaPage.prototype.irParaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__["a" /* LoginUsuarioPage */]);
    };
    RedefinirSenhaPage.prototype.enviarEmail = function () {
        var _this = this;
        this.usuarioProvider.enviarEmail(this.model.email)
            .subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: "Enviamos um email de redefinição para você",
                duration: 5000
            });
            toast.present();
        }, function (error) {
            var toast = _this.toastCtrl.create({
                message: "Email invalido, tente novamente",
                duration: 3000
            });
            toast.present();
        });
        this.model.email = "";
    };
    RedefinirSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-redefinir-senha',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\redefinir-senha\redefinir-senha.html"*/'<!--\n\n  Generated template for the RedefinirSenhaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n\n\n    <div class="img">\n\n      <img id="logo" src="assets/imgs/logo.png">\n\n    </div>\n\n  \n\n    <div>\n\n      <p id="titulo" padding>REDEFINIR SENHA</p>\n\n      <p class="paragrafo">Insira seu email e enviaremos a você um link para redefinir sua senha</p>\n\n    </div>\n\n  \n\n    <ion-list padding>\n\n  \n\n      <ion-item>\n\n        <ion-input type="text" name="email" placeholder="E-mail" [(ngModel)]="model.email"></ion-input>\n\n      </ion-item>\n\n  \n\n    </ion-list>\n\n\n\n    <div class="botao">\n\n      <button ion-button block [disabled]="!model.email" (click)="enviarEmail()" id="botao">Enviar</button>\n\n    </div>\n\n  \n\n    <div class="link" padding>\n\n      <a class="alternativo" (click)="irParaLogin()">Voltar ao login</a>\n\n    </div>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\redefinir-senha\redefinir-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */]])
    ], RedefinirSenhaPage);
    return RedefinirSenhaPage;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=redefinir-senha.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfiguracoesPage');
    };
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\configuracoes\configuracoes.html"*/'<!--\n\n  Generated template for the ConfiguracoesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Configurações</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h4>Essa pagina será as Configurações!</h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_usuario_cadastro_usuario__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, toastCtrl, usuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.usuarioProvider = usuarioProvider;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__cadastro_usuario_cadastro_usuario__["b" /* User */]();
    }
    PerfilPage_1 = PerfilPage;
    PerfilPage.prototype.numeroLinks = function () {
        var _this = this;
        this.usuarioProvider.contadorLinks()
            .subscribe(function (result) {
            _this.links = result._body;
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.numeroGrupos = function () {
        var _this = this;
        this.usuarioProvider.contadorGrupos()
            .subscribe(function (result) {
            _this.grupos = result._body;
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.getNome = function () {
        var _this = this;
        this.usuarioProvider.getNomeUsuario()
            .subscribe(function (result) {
            _this.nome = result._body;
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.mudarSenha = function () {
        var _this = this;
        this.usuarioProvider.mudarSenha(this.model.password, this.model.newpassword).
            subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: "Senha Modificada!",
                duration: 5000
            });
            toast.present();
            _this.model.password = _this.model.newpassword;
            _this.model.newpassword = "";
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.renomearUsuario = function () {
        var _this = this;
        this.usuarioProvider.renomearUsuario(this.model.name).
            subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: "Usuário Renomeado!",
                duration: 5000
            });
            toast.present();
            _this.navCtrl.setRoot(PerfilPage_1);
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.ionViewDidEnter = function () {
        this.getNome();
        this.numeroLinks();
        this.numeroGrupos();
    };
    PerfilPage = PerfilPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-avatar class="profile-picture">\n    <img\n      src="data:image/png;base64,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">\n  </ion-avatar>\n\n  <h4 class="profile-item"> {{nome}}</h4>\n  <h5 class="profile-item2"> Você já salvou {{links}} links.</h5>\n  <h6 class="profile-item2"> Você já criou {{grupos}} grupos.</h6>\n\n\n\n  <div class="profile-info">\n\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Renomear</ion-label>\n        <ion-input type="text" name="name" placeholder="Novo Nome" [(ngModel)]="model.name"></ion-input>\n      </ion-item>\n\n      <div class="botao">\n        <button ion-button block (click)="renomearUsuario()" id="botao">RENOMEAR</button>\n      </div>\n\n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-label stacked>Mudar Senha</ion-label>\n        <ion-input position="floating" type="password" name="newpassword" placeholder="Nova Senha"\n          [(ngModel)]="model.newpassword"></ion-input>\n        <ion-input position="floating" type="password" name="newpassword2" placeholder="Repita Nova Senha"\n          [(ngModel)]="confirmation"></ion-input>\n        <ion-input type="password" name="password" placeholder="Senha Atual" [(ngModel)]="model.password"></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n    <div class="botao">\n      <button ion-button block [disabled]="!model.password || !model.newpassword || model.newpassword != confirmation"\n        (click)="mudarSenha()" id="botao">MUDAR</button>\n    </div>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], PerfilPage);
    return PerfilPage;
    var PerfilPage_1;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 218;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* unused harmony export Intent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var token_key_name = "token";
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http) {
        this.http = http;
        this.baseApiPath = "https://salvalinks.herokuapp.com/";
        this.httpHeader = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.token = "";
        console.log('Hello UsuarioProvider Provider');
        this.httpHeader.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.httpHeader });
        this.links = [];
    }
    UsuarioProvider.prototype.cadastrarUsuario = function (name, email, password) {
        var dados = {
            name: name,
            email: email,
            password: password
        };
        return this.http.post(this.baseApiPath + "users/register", dados, this.options);
    };
    UsuarioProvider.prototype.contadorLinks = function () {
        var url = this.baseApiPath + '/users/numberoflinks';
        return this.http.get(url, this.options);
    };
    UsuarioProvider.prototype.contadorGrupos = function () {
        var url = this.baseApiPath + '/users/numberofgroups';
        return this.http.get(url, this.options);
    };
    UsuarioProvider.prototype.getNomeUsuario = function () {
        var url = this.baseApiPath + '/users/getusername';
        return this.http.get(url, this.options);
    };
    UsuarioProvider.prototype.enviarEmail = function (email) {
        var url = this.baseApiPath + 'redefine?email=' + email;
        return this.http.post(url, this.options);
    };
    UsuarioProvider.prototype.logarUsuario = function (email, password) {
        var url = this.baseApiPath + 'users/login?email=' + email + '&password=' + password;
        return this.http.post(url, this.options);
    };
    UsuarioProvider.prototype.exibirUsuariosCadastrados = function () {
        return this.http.get(this.baseApiPath + "users", this.options);
    };
    UsuarioProvider.prototype.insereLink = function (email, linkName, href, importance) {
        var url = this.baseApiPath + 'links/add?email=' + email;
        var link = {
            name: linkName == null ? "" : linkName,
            href: href,
            importance: importance
        };
        return this.http.post(url, link, this.options);
    };
    UsuarioProvider.prototype.exibirLinksCadastrados = function (email) {
        var url = this.baseApiPath + 'links?email=' + email;
        return this.http.get(url, this.options);
    };
    UsuarioProvider.prototype.renomearLink = function (email, url, nomeAtual, nomeNovo) {
        var url = this.baseApiPath + 'links/rename?newName=' + encodeURIComponent(nomeNovo) + '&url=' + encodeURIComponent(url);
        console.log(url);
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.deletarLink = function (email, href) {
        var url = this.baseApiPath + 'links/remove?url=' + encodeURIComponent(href);
        return this.http.delete(url, this.options);
    };
    UsuarioProvider.prototype.setTokenHeader = function (token) {
        var str = token;
        this.options.headers.delete('Authorization');
        this.options.headers.append('Authorization', 'Bearer ' + str);
        localStorage.setItem(token_key_name, str);
    };
    UsuarioProvider.prototype.getTokenHeader = function () {
        return localStorage.getItem(token_key_name);
    };
    UsuarioProvider.prototype.addLinkExterno = function (titulo, link) {
        this.links[0] = (new Intent(titulo, link));
    };
    UsuarioProvider.prototype.getlinkExterno = function () {
        var item = this.links[0];
        this.links = [];
        return item;
    };
    UsuarioProvider.prototype.temLinkAInserir = function () {
        return this.links.length > 0;
    };
    //GRUPOS
    UsuarioProvider.prototype.grupoGetTodos = function () {
        return this.http.get(this.baseApiPath + "group/getall", this.options);
    };
    UsuarioProvider.prototype.grupoGetAllNames = function () {
        return this.http.get(this.baseApiPath + "group/getnames", this.options);
    };
    UsuarioProvider.prototype.grupoGetLinks = function (nomeDoGrupo) {
        return this.http.get(this.baseApiPath + "group/links?name=" + nomeDoGrupo, this.options);
    };
    UsuarioProvider.prototype.grupoGetPDF = function (nomeDoGrupo) {
        return this.http.get(this.baseApiPath + "group/pdf?name=" + nomeDoGrupo, this.options);
    };
    UsuarioProvider.prototype.grupoCriar = function (nomeDoGrupo) {
        var url = this.baseApiPath + "group/create?name=" + nomeDoGrupo;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.grupoDeletar = function (nomeDoGrupo) {
        var url = this.baseApiPath + "group/delete?name=" + nomeDoGrupo;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.grupoRenomear = function (nomeDoGrupo, nomeNovo) {
        var url = this.baseApiPath + "group/rename?name=" + nomeDoGrupo + "&newName=" + nomeNovo;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.grupoAddLink = function (nomeDoGrupo, linkID) {
        var url = this.baseApiPath + "group/addlink?name=" + nomeDoGrupo + "&id=" + linkID;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.grupoRemoveLink = function (nomeDoGrupo, linkID) {
        var url = this.baseApiPath + "group/removelink?name=" + nomeDoGrupo + "&id=" + linkID;
        return this.http.put(url, "", this.options);
    };
    // PARA PAG DE CONFIG
    UsuarioProvider.prototype.renomearUsuario = function (nomeNovo) {
        var url = this.baseApiPath + "/users/rename?newName=" + nomeNovo;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider.prototype.mudarSenha = function (senhaAtual, novaSenha) {
        var url = this.baseApiPath + "/users/changepassword?oldPassword=" + senhaAtual + "&newPassword=" + novaSenha;
        return this.http.put(url, "", this.options);
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

var Intent = /** @class */ (function () {
    function Intent(titulo, link) {
        this.titulo = titulo;
        this.link = link;
        this.titulo = titulo;
        this.link = link;
    }
    return Intent;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUsuarioPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_cadastro_usuario__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dados_usuario_dados_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redefinir_senha_redefinir_senha__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abas_abas__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginUsuarioPage = /** @class */ (function () {
    function LoginUsuarioPage(navCtrl, navParams, usuarioProvider, authProvider, toastCtrl, dadosUsuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.dadosUsuarioProvider = dadosUsuarioProvider;
        this.model = new User();
    }
    LoginUsuarioPage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.autenticado()) {
            return false;
        }
        else {
            return true;
        }
    };
    LoginUsuarioPage.prototype.loginUsuario = function () {
        var _this = this;
        this.dadosUsuarioProvider.setDados(this.model.email, this.model.password);
        var dados = {
            email: this.model.email,
            password: this.model.password
        };
        this.usuarioProvider.logarUsuario(dados.email, dados.password).subscribe(function (result) {
            _this.usuarioProvider.setTokenHeader(result._body);
            _this.authProvider.autentica(dados.email);
            if (_this.usuarioProvider.temLinkAInserir())
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__inserir_link_inserir_link__["a" /* InserirLinkPage */]);
            else
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__abas_abas__["a" /* AbasPage */]);
        }, function (error) {
            var resp = error.json();
            var toast = _this.toastCtrl.create({
                message: resp.message,
                duration: 3000
            });
            toast.present();
        });
        this.model.email = "";
        this.model.password = "";
    };
    LoginUsuarioPage.prototype.ionViewWillEnter = function () {
    };
    LoginUsuarioPage.prototype.ionViewDidEnter = function () {
    };
    LoginUsuarioPage.prototype.irParaCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */]);
    };
    LoginUsuarioPage.prototype.irParaRedefinir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */]);
    };
    LoginUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-usuario',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\login-usuario\login-usuario.html"*/'<!--\n\n  Generated template for the LoginUsuarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="img">\n\n    <img id="logo" src="assets/imgs/logo.png">\n\n  </div>\n\n\n\n  <div>\n\n    <p id="titulo" padding>LOGIN</p>\n\n  </div>\n\n\n\n  <ion-list padding>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" name="email" placeholder="E-mail" [(ngModel)]="model.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" name="password" placeholder="Senha" [(ngModel)]="model.password"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="botao">\n\n    <button ion-button block [disabled]="!model.email||!model.password" (click)="loginUsuario()"\n\n      id="botao">Entrar</button>\n\n  </div>\n\n\n\n  <div class="link" padding>\n\n    <a class="alternativo" (click)="irParaRedefinir()">Esqueceu a senha?</a>\n\n    <p class="alternativo">Não possui uma conta? <a class="alternativo" (click)="irParaCadastro()">Cadastre-se</a></p>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\login-usuario\login-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */]])
    ], LoginUsuarioPage);
    return LoginUsuarioPage;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=login-usuario.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_usuario_cadastro_usuario_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_usuario_login_usuario_module__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inserir_link_inserir_link_module__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_lista_links_lista_links_module__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_renomear_link_renomear_link_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_configuracoes_configuracoes_module__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_perfil_perfil_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_dados_usuario_dados_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_redefinir_senha_redefinir_senha_module__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_deeplinks_ngx__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_usuario_cadastro_usuario__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_usuario_login_usuario__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_lista_links_lista_links__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_perfil_perfil__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_configuracoes_configuracoes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_redefinir_senha_redefinir_senha__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_renomear_link_renomear_link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_onesignal__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_onesignal_onesignal__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_abas_abas__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_abas_abas_module__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        // DeepLinker
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_login_usuario_login_usuario__["a" /* LoginUsuarioPage */], name: 'LoginUsuario', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */], name: 'CadastroUsuario', segment: 'users/register' },
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_lista_links_lista_links__["a" /* ListaLinksPage */], name: 'ListaLinks', segment: 'list' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_inserir_link_inserir_link__["a" /* InserirLinkPage */], name: 'InserirLink', segment: 'links/add' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_perfil_perfil__["a" /* PerfilPage */], name: 'Perfil', segment: 'perfil' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */], name: 'Configuracoes', segment: 'config' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_redefinir_senha_redefinir_senha__["a" /* RedefinirSenhaPage */], name: 'RedefinirSenha', segment: 'redefine' },
                        { component: __WEBPACK_IMPORTED_MODULE_27__pages_renomear_link_renomear_link__["a" /* RenomearLinkPage */], name: 'RenomearLink', segment: 'links/rename' },
                        { component: __WEBPACK_IMPORTED_MODULE_30__pages_abas_abas__["a" /* AbasPage */], name: 'Principal', segment: 'home' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_usuario_cadastro_usuario_module__["a" /* CadastroUsuarioPageModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_usuario_login_usuario_module__["a" /* LoginUsuarioPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inserir_link_inserir_link_module__["a" /* InserirLinkPageModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_lista_links_lista_links_module__["a" /* ListaLinksPageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_renomear_link_renomear_link_module__["a" /* RenomearLinkPageModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_configuracoes_configuracoes_module__["a" /* ConfiguracoesPageModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_perfil_perfil_module__["a" /* PerfilPageModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_redefinir_senha_redefinir_senha_module__["a" /* RedefinirSenhaPageModule */],
                __WEBPACK_IMPORTED_MODULE_31__pages_abas_abas_module__["a" /* AbasPageModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_deeplinks_ngx__["a" /* Deeplinks */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_29__providers_onesignal_onesignal__["a" /* OnesignalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_usuario_login_usuario__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_configuracoes_configuracoes__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lista_links_lista_links__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_dados_usuario_dados_usuario__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_abas_abas__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, usuarioProvider, dadosUsuarioProvider, authProvider, oneSignal) {
        var _this = this;
        this.usuarioProvider = usuarioProvider;
        this.dadosUsuarioProvider = dadosUsuarioProvider;
        this.authProvider = authProvider;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_usuario_login_usuario__["a" /* LoginUsuarioPage */];
        this.senderId = '457258455793';
        this.oneSignalAppId = '31636f90-5d25-4d00-8e4b-b02e566f8a44';
        var obj = this;
        platform.ready().then(function () {
            var dados = dadosUsuarioProvider.getDados();
            if (platform.is('android')) {
                _this.oneSignal.startInit(_this.oneSignalAppId, _this.senderId);
                _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                _this.oneSignal.handleNotificationReceived().subscribe(function (data) { return _this.onPushReceived(data.payload); });
                _this.oneSignal.handleNotificationOpened().subscribe(function (data) { return _this.onPushOpened(data.notification.payload); });
                _this.oneSignal.endInit();
                window.plugins.intentShim.getIntent(function (intent) {
                    //you should filter on the intents you actually want to receive based on Intent.action
                    console.log('intent received on app launch' + JSON.stringify(intent));
                    var intentExtras = intent.extras;
                    if (intentExtras != null)
                        obj.usuarioProvider.addLinkExterno(intentExtras["android.intent.extra.SUBJECT"], intentExtras["android.intent.extra.TEXT"]);
                }, function () {
                    console.log('Error getting cordova intent');
                });
                window.plugins.intentShim.onIntent(function (intent) {
                    //you should filter on the intents you actually want to receive based on Intent.action
                    console.log('intent received on app launch' + JSON.stringify(intent));
                    var intentExtras = intent.extras;
                    if (intentExtras != null) {
                        obj.usuarioProvider.addLinkExterno(intentExtras["android.intent.extra.SUBJECT"], intentExtras["android.intent.extra.TEXT"]);
                        obj.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_inserir_link_inserir_link__["a" /* InserirLinkPage */]);
                    }
                });
            }
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    platform.exitApp(); //Exit from app
                }
            });
            if (_this.usuarioProvider.getTokenHeader()) {
                var obj_1 = _this.dadosUsuarioProvider.getDados();
                var dados_1 = JSON.parse(obj_1);
                _this.usuarioProvider.logarUsuario(dados_1.email, dados_1.password).subscribe(function (result) {
                    _this.usuarioProvider.setTokenHeader(result._body);
                    _this.authProvider.autentica(dados_1.email);
                    if (_this.usuarioProvider.temLinkAInserir())
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_inserir_link_inserir_link__["a" /* InserirLinkPage */];
                    else
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_13__pages_abas_abas__["a" /* AbasPage */];
                });
            }
        });
        this.pages = {
            inserirLink: __WEBPACK_IMPORTED_MODULE_5__pages_inserir_link_inserir_link__["a" /* InserirLinkPage */],
            perfil: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */],
            configuracoes: __WEBPACK_IMPORTED_MODULE_6__pages_configuracoes_configuracoes__["a" /* ConfiguracoesPage */],
            sair: __WEBPACK_IMPORTED_MODULE_4__pages_login_usuario_login_usuario__["a" /* LoginUsuarioPage */],
            lista: __WEBPACK_IMPORTED_MODULE_8__pages_lista_links_lista_links__["a" /* ListaLinksPage */],
            abas: __WEBPACK_IMPORTED_MODULE_13__pages_abas_abas__["a" /* AbasPage */]
        };
    }
    MyApp.prototype.onPushReceived = function (payload) {
        console.log(payload.body);
    };
    MyApp.prototype.onPushOpened = function (payload) {
        console.log("Abriu link");
    };
    MyApp.prototype.logout = function () {
        this.authProvider.logoff();
        this.nav.setRoot(this.pages.sair);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\app\app.html"*/'<ion-menu [content]="content" side="left">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n            <ion-icon name="add-circle"></ion-icon> {{p.title}}\n\n        </button>-->\n\n      <button menuClose ion-item (click)="nav.push(pages.inserirLink)">\n\n        <ion-icon name="add" color="primary"></ion-icon> Inserir Link\n\n      </button>\n\n      <button menuClose ion-item (click)="nav.setRoot(pages.abas)">\n\n        <ion-icon name="list" color="primary"></ion-icon> Links\n\n      </button>\n\n      <button menuClose ion-item (click)="nav.push(pages.perfil)">\n\n        <ion-icon name="person" color="primary"></ion-icon> Perfil\n\n      </button>\n\n      <!-- <button menuClose ion-item (click)="nav.push(pages.configuracoes)">\n\n        <ion-icon name="settings" color="primary"></ion-icon> Configurações\n\n      </button> -->\n\n      <button menuClose ion-item (click)="logout()">\n\n        <ion-icon name="log-out" color="danger"></ion-icon> Sair\n\n      </button>\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\app\app.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */], __WEBPACK_IMPORTED_MODULE_12__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_usuario_cadastro_usuario__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_usuario_login_usuario__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.abrirTelaDeCadastro = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__cadastro_usuario_cadastro_usuario__["a" /* CadastroUsuarioPage */]);
    };
    HomePage.prototype.abrirTelaDeLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_usuario_login_usuario__["a" /* LoginUsuarioPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\home\home.html"*/'<ion-content padding>\n\n \n\n  <h1 text-center margin-bottom>SalvaLinks</h1>\n\n \n\n  <button ion-button block (click)="abrirTelaDeCadastro()">Criar conta</button>\n\n  <button ion-button block (click)="abrirTelaDeLogin()">Login</button>\n\n  \n\n  \n\n  \n\n  \n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_usuario__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroUsuarioPageModule = /** @class */ (function () {
    function CadastroUsuarioPageModule() {
    }
    CadastroUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_usuario__["a" /* CadastroUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_usuario__["a" /* CadastroUsuarioPage */]),
            ],
        })
    ], CadastroUsuarioPageModule);
    return CadastroUsuarioPageModule;
}());

//# sourceMappingURL=cadastro-usuario.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_usuario__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginUsuarioPageModule = /** @class */ (function () {
    function LoginUsuarioPageModule() {
    }
    LoginUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_usuario__["a" /* LoginUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_usuario__["a" /* LoginUsuarioPage */]),
            ],
        })
    ], LoginUsuarioPageModule);
    return LoginUsuarioPageModule;
}());

//# sourceMappingURL=login-usuario.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirLinkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inserir_link__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InserirLinkPageModule = /** @class */ (function () {
    function InserirLinkPageModule() {
    }
    InserirLinkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inserir_link__["a" /* InserirLinkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inserir_link__["a" /* InserirLinkPage */]),
            ],
        })
    ], InserirLinkPageModule);
    return InserirLinkPageModule;
}());

//# sourceMappingURL=inserir-link.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLinksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_links__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaLinksPageModule = /** @class */ (function () {
    function ListaLinksPageModule() {
    }
    ListaLinksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_links__["a" /* ListaLinksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_links__["a" /* ListaLinksPage */]),
            ],
        })
    ], ListaLinksPageModule);
    return ListaLinksPageModule;
}());

//# sourceMappingURL=lista-links.module.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenomearLinkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__renomear_link__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RenomearLinkPageModule = /** @class */ (function () {
    function RenomearLinkPageModule() {
    }
    RenomearLinkPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__renomear_link__["a" /* RenomearLinkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__renomear_link__["a" /* RenomearLinkPage */]),
            ],
        })
    ], RenomearLinkPageModule);
    return RenomearLinkPageModule;
}());

//# sourceMappingURL=renomear-link.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__perfil__["a" /* PerfilPage */]),
            ],
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());

//# sourceMappingURL=perfil.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedefinirSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RedefinirSenhaPageModule = /** @class */ (function () {
    function RedefinirSenhaPageModule() {
    }
    RedefinirSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__redefinir_senha__["a" /* RedefinirSenhaPage */]),
            ],
        })
    ], RedefinirSenhaPageModule);
    return RedefinirSenhaPageModule;
}());

//# sourceMappingURL=redefinir-senha.module.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuario_usuario__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(usuarioProvider) {
        this.usuarioProvider = usuarioProvider;
        this.logado = false;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.autenticado = function () {
        return this.logado && this.usuarioProvider.getTokenHeader();
    };
    AuthProvider.prototype.autentica = function (email) {
        this.email = email;
        this.logado = true;
    };
    AuthProvider.prototype.logoff = function () {
        this.email = "";
        this.logado = false;
        this.usuarioProvider.setTokenHeader("");
    };
    AuthProvider.prototype.getEmail = function () {
        return this.logado ? this.email : "";
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__usuario_usuario__["a" /* UsuarioProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InserirLinkPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_onesignal_onesignal__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abas_abas__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the InserirLinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InserirLinkPage = /** @class */ (function () {
    function InserirLinkPage(navCtrl, navParams, usuarioProvider, authProvider, toastCtrl, notificador) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.notificador = notificador;
        this.model = new Link();
        this.model.tempo = 0;
        this.model.importance = "normal";
    }
    InserirLinkPage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.autenticado()) {
            return true;
        }
        else {
            return false;
        }
    };
    InserirLinkPage.prototype.ionViewWillEnter = function () {
        if (this.usuarioProvider.temLinkAInserir()) {
            var link = this.usuarioProvider.getlinkExterno();
            this.model.name = link.titulo;
            this.model.href = link.link;
        }
    };
    InserirLinkPage.prototype.inserirLink = function () {
        var _this = this;
        if (this.authProvider.autenticado()) {
            this.usuarioProvider.insereLink(this.authProvider.getEmail(), this.model.name, this.model.href, this.model.importance).
                subscribe(function (result) {
                var response = result.json();
                _this.notificador.cadastrarNotificacaoLeitura(response.name, response.href, response.importance, _this.model.tempo);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__abas_abas__["a" /* AbasPage */]);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__["a" /* LoginUsuarioPage */]);
        }
    };
    InserirLinkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InserirLinkPage');
    };
    InserirLinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inserir-link',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\inserir-link\inserir-link.html"*/'<!--\n\n  Generated template for the InserirLinkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Adicionar Link</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div class="img">\n\n    <img src="assets/imgs/logo.png">\n\n  </div>\n\n\n\n  <div></div>\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n\n\n      <ion-label stacked>Link*</ion-label>\n\n      <ion-input type="http" name="href" placeholder="Link a ser adicionado" [(ngModel)]="model.href" required>\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Título</ion-label>\n\n      <ion-input type="text" name="name" placeholder="Título do link (opcional)" [(ngModel)]="model.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Relevância</ion-label>\n\n      <ion-select [(ngModel)]="model.importance">\n\n        <ion-option value="alta">Alta</ion-option>\n\n        <ion-option value="normal">Normal</ion-option>\n\n        <ion-option value="baixa">Baixa</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item showWhen="android">\n\n      <ion-label stacked>\n\n        Tempo para notificação\n\n      </ion-label>\n\n      <ion-range min="0" max="120" pin="true" [(ngModel)]="model.tempo" color="secondary">\n\n        <ion-label range-left>Agora</ion-label>\n\n        <ion-label range-right>2 horas</ion-label>\n\n      </ion-range>\n\n    </ion-item>\n\n\n\n    <div class="botao">\n\n      <button ion-button block (click)="inserirLink()" id="botao">ADICIONAR</button>\n\n    </div>\n\n\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\inserir-link\inserir-link.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_onesignal_onesignal__["a" /* OnesignalProvider */]])
    ], InserirLinkPage);
    return InserirLinkPage;
}());

var Link = /** @class */ (function () {
    function Link() {
        this.importance = "alta" || "normal" || "baixa";
    }
    return Link;
}());

//# sourceMappingURL=inserir-link.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroUsuarioPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_usuario_login_usuario__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroUsuarioPage = /** @class */ (function () {
    function CadastroUsuarioPage(navCtrl, navParams, usuarioProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.toastCtrl = toastCtrl;
        this.listaUsuarios = new Array();
        this.model = new User();
    }
    CadastroUsuarioPage.prototype.cadastrarUsuario = function () {
        var _this = this;
        this.usuarioProvider.cadastrarUsuario(this.model.name, this.model.email, this.model.password).
            subscribe(function (result) {
            result.json();
            _this.irParaLogin();
            var toast = _this.toastCtrl.create({
                message: "Confirme seu endereço de email",
                duration: 5000
            });
            toast.present();
        }, function (error) {
            var resp = error.json();
            var toast = _this.toastCtrl.create({
                message: resp.message,
                duration: 3000
            });
            toast.present();
        });
        this.model.name = "";
        this.model.email = "";
        this.model.password = "";
    };
    CadastroUsuarioPage.prototype.irParaLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_usuario_login_usuario__["a" /* LoginUsuarioPage */]);
    };
    CadastroUsuarioPage.prototype.exibirUsuariosCadastrados = function () {
        var _this = this;
        this.usuarioProvider.exibirUsuariosCadastrados().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            _this.listaUsuarios = objeto_retorno.results;
            console.log(objeto_retorno);
        }, function (error) {
            console.log(error);
        });
    };
    CadastroUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-usuario',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\cadastro-usuario\cadastro-usuario.html"*/'<ion-content padding>\n\n\n\n  <div class="img">\n\n    <img id="logo" src="assets/imgs/logo.png">\n\n  </div>\n\n\n\n  <div>\n\n    <p id="titulo" padding>CRIE UMA CONTA</p>\n\n  </div>\n\n\n\n  <ion-list padding>\n\n    <ion-item>\n\n      <ion-input type="text" name="name" placeholder="Nome" [(ngModel)]="model.name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="text" name="email" placeholder="E-mail" [(ngModel)]="model.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-input type="password" name="password" placeholder="Senha" [(ngModel)]="model.password"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div class="botao">\n\n    <button ion-button block [disabled]="!model.name||!model.email||!model.password" (click)="cadastrarUsuario()"\n\n      id="botao">CADASTRAR</button>\n\n  </div>\n\n\n\n  <div class="link">\n\n    <p class="alternativo">Já possui uma conta?<a class="alternativo" (click)="irParaLogin()"> Login</a></p>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\cadastro-usuario\cadastro-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], CadastroUsuarioPage);
    return CadastroUsuarioPage;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=cadastro-usuario.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_links_lista_links__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AbasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbasPage = /** @class */ (function () {
    function AbasPage(navCtrl, navParams, authProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__lista_links_lista_links__["a" /* ListaLinksPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__inserir_link_inserir_link__["a" /* InserirLinkPage */];
    }
    AbasPage.prototype.ionViewCanEnter = function () {
        if (this.authProvider.autenticado()) {
            return true;
        }
        else {
            return false;
        }
    };
    AbasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbasPage');
    };
    AbasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abas',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\abas\abas.html"*/'<!--\n\n  Generated template for the AbasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Links" tabIcon="link"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Grupos" tabIcon="paper"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\abas\abas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
    ], AbasPage);
    return AbasPage;
}());

//# sourceMappingURL=abas.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaLinksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inserir_link_inserir_link__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renomear_link_renomear_link__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ListaLinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListaLinksPage = /** @class */ (function () {
    function ListaLinksPage(navCtrl, navParams, usuarioProvider, authProvider, toastCtrl, dadosUsuarioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioProvider = usuarioProvider;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.dadosUsuarioProvider = dadosUsuarioProvider;
        this.listaLinks = new Array();
        this.mudarGrupo = false;
        this.linkAEditar = "";
        this.model = new __WEBPACK_IMPORTED_MODULE_4__login_usuario_login_usuario__["b" /* User */]();
        this.link = new __WEBPACK_IMPORTED_MODULE_5__inserir_link_inserir_link__["b" /* Link */]();
    }
    ListaLinksPage.prototype.exibirLinksCadastrados = function () {
        var _this = this;
        this.usuarioProvider.exibirLinksCadastrados(this.authProvider.getEmail()).subscribe(function (result) {
            _this.listaLinks = result.json();
        }, function (error) {
            var resp = error.json();
            var toast = _this.toastCtrl.create({
                message: resp.message,
                duration: 3000
            });
            toast.present();
        });
    };
    ListaLinksPage.prototype.redirectInserirLink = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inserir_link_inserir_link__["a" /* InserirLinkPage */]);
    };
    ListaLinksPage.prototype.redirectRenomearLink = function (linkName, href) {
        this.link.name = linkName;
        console.log("=> " + this.link);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__renomear_link_renomear_link__["a" /* RenomearLinkPage */], {
            url: href,
            nomeLink: linkName,
            importance: this.link.importance
        });
    };
    ListaLinksPage.prototype.deletarLink = function (tituloLink) {
        var _this = this;
        this.usuarioProvider.deletarLink(this.authProvider.getEmail(), tituloLink).subscribe(function (result) {
            var respOK = result.json();
            _this.exibirLinksCadastrados();
            console.log(respOK);
        }, function (error) {
            var resp = error.json();
            var toast = _this.toastCtrl.create({
                message: resp.message,
                duration: 3000
            });
            toast.present();
        });
    };
    ListaLinksPage.prototype.alternarParaEdicao = function (idLink) {
        this.mudarGrupo = !this.mudarGrupo;
        if (this.mudarGrupo)
            this.linkAEditar = idLink;
        else
            this.linkAEditar = "";
    };
    ListaLinksPage.prototype.adicionarGrupo = function (linkParaAdicionar, grupo) {
        var _this = this;
        this.usuarioProvider.grupoAddLink(grupo, linkParaAdicionar.id).subscribe(function (result) {
            _this.exibirLinksCadastrados();
        });
    };
    ListaLinksPage.prototype.redirectPaginaLink = function (href) {
        console.log(href);
        window.open(href, '_system');
    };
    ListaLinksPage.prototype.ionViewDidEnter = function () {
        this.exibirLinksCadastrados();
    };
    ListaLinksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lista-links',template:/*ion-inline-start:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\lista-links\lista-links.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Lista de Links</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button full (click)="redirectInserirLink()">Inserir Novo Link</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button full (click)="exibirLinksCadastrados()">Sincronizar</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row nowrap>\n\n    <ion-col>\n\n      <ion-item lines="none" text-center>\n\n        <ion-label color="primary"> <strong>LINK</strong> </ion-label>\n\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item-sliding lines="none" text-center *ngFor="let link of listaLinks">\n\n          <ion-item text-center (click)="redirectPaginaLink(link.href)">\n\n            {{ link.name }}\n\n            <ion-icon name="arrow-dropleft" item-right></ion-icon>\n\n          </ion-item>\n\n          <ion-item-options>\n\n            <button ion-button icon-only light (click)="redirectRenomearLink(link.name,link.href)">\n\n              <ion-icon name="create"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only light (click)="deletarLink(link.href)">\n\n              <ion-icon name="trash"></ion-icon>\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n\n\n    <ion-col showWhen="core">\n\n      <ion-item lines="none" text-center>\n\n        <ion-label color="primary"> <strong>GRUPO</strong> </ion-label>\n\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item-sliding lines="none" text-center *ngFor="let link of listaLinks">\n\n          <ion-item text-center>\n\n            {{ link.group != "none" ? link.group.toUpperCase() : "NENHUM" }}\n\n            <ion-icon name="arrow-dropleft" item-right></ion-icon>\n\n          </ion-item>\n\n          <ion-item-options>\n\n            <button ion-button icon-only light (click)="redirectRenomearLink(link.name,link.href)">\n\n              <ion-icon name="create"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only light (click)="adicionarGrupo(link,\'LAZER\')">\n\n              <ion-icon name="trash"></ion-icon>\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n\n\n    <ion-col showWhen="core">\n\n      <ion-item lines="none" text-center>\n\n        <ion-label color="primary"> <strong>CLASSIFICAÇÃO</strong> </ion-label>\n\n      </ion-item>\n\n      <ion-list>\n\n        <ion-item-sliding lines="none" text-center *ngFor="let link of listaLinks">\n\n          <ion-item text-center>\n\n            {{ link.importance.toUpperCase() }}\n\n            <ion-icon name="arrow-dropleft" item-right></ion-icon>\n\n          </ion-item>\n\n          <ion-item-options>\n\n            <button ion-button icon-only light (click)="redirectRenomearLink(link.name,link.href)">\n\n              <ion-icon name="create"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only light (click)="deletarLink(link.href)">\n\n              <ion-icon name="trash"></ion-icon>\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Aislan\front-salvalinks\salvaLinks\src\pages\lista-links\lista-links.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_dados_usuario_dados_usuario__["a" /* DadosUsuarioProvider */]])
    ], ListaLinksPage);
    return ListaLinksPage;
}());

//# sourceMappingURL=lista-links.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosUsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the DadosUsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var dados_key_name = "dados";
var lista_key_name = "lista";
var DadosUsuarioProvider = /** @class */ (function () {
    function DadosUsuarioProvider() {
        this.dados = {
            email: "",
            password: ""
        };
    }
    DadosUsuarioProvider.prototype.getDados = function () {
        return localStorage.getItem(dados_key_name);
    };
    DadosUsuarioProvider.prototype.setDados = function (email, password) {
        var dados = {
            email: "",
            password: ""
        };
        dados.email = email;
        dados.password = password;
        localStorage.setItem(dados_key_name, JSON.stringify(dados));
    };
    DadosUsuarioProvider.prototype.getLinks = function () {
        return localStorage.getItem(lista_key_name);
    };
    DadosUsuarioProvider.prototype.setLinks = function (links) {
        var lista = {
            links: ""
        };
        lista.links = links;
        localStorage.setItem(lista_key_name, JSON.stringify(lista));
    };
    DadosUsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DadosUsuarioProvider);
    return DadosUsuarioProvider;
}());

//# sourceMappingURL=dados-usuario.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abas__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbasPageModule = /** @class */ (function () {
    function AbasPageModule() {
    }
    AbasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__abas__["a" /* AbasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__abas__["a" /* AbasPage */]),
            ],
        })
    ], AbasPageModule);
    return AbasPageModule;
}());

//# sourceMappingURL=abas.module.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map