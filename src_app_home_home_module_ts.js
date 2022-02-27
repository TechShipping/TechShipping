"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3812:
/*!*****************************************************!*\
  !*** ./src/app/directives/hide-header.directive.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HideHeaderDirective": () => (/* binding */ HideHeaderDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 8099);



let HideHeaderDirective = class HideHeaderDirective {
    constructor(renderer, domCtrl) {
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
    }
    ngOnInit() {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
        });
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    onContentScroll($event) {
        if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
            });
        }
        else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
            });
        }
        this.lastY = $event.detail.scrollTop;
    }
};
HideHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.DomController }
];
HideHeaderDirective.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onContentScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionScroll', ['$event'],] }]
};
HideHeaderDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appHideHeader]',
    })
], HideHeaderDirective);



/***/ }),

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 1382);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 7464);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _home_mconcoba_Documentos_Ionic_TechShipping_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
        this.produtos = [
            {
                img: 'assets/images/audifonos.jpg',
                titulo: 'Cloud Stinger™',
                subtitulo: 'Comodidada ligera. Sonido potente.',
            },
            {
                img: 'assets/images/luz.jpg',
                titulo: 'Fury DDR4 RGB',
                subtitulo: 'Unleash your style. Unsleash your FURY.',
            },
            {
                img: 'assets/images/audifonoswhite.jpg',
                titulo: 'HyperX Cluoud Mix',
                subtitulo: 'Game and go.',
            },
            {
                img: 'assets/images/audifonos_hx.jpg',
                titulo: 'HyperX Cloud Alpha',
                subtitulo: 'More Chambers for Less Distrirtion',
            },
        ];
        this.datos = [
            {
                tipo: 'AUDIO',
                prod: ['Earbuds', 'Quadcast'],
            },
            {
                tipo: 'AURICULARES',
                prod: [
                    'Cloud Revolver',
                    'Cloud Series',
                    'Cloud Stinger',
                    'Cloud Alpha S',
                    'Cloud Alpha',
                    'CloudX Stinger',
                    'CloudX Chat',
                    'Cloud Stinger (inalámbricos)',
                    'Cloud Orbit',
                    'Cloud Flight S',
                ],
            },
            {
                tipo: 'ALIMENTACIÓN',
                prod: [
                    'ChargePlay Duo',
                    'ChargePlay Duo (Xbox)',
                    'ChargePlay Quad',
                    'ChargePlay Clutch',
                    'ChargePlay Clutch para dispositivos móviles',
                ],
            },
            {
                tipo: 'ABOUT HP',
                prod: [
                    'Acerca de nosotros',
                    'Notas de prensa',
                    'Privacidad',
                    'Opciones de cookies y publicidad',
                    'Contacte con HP',
                ],
            },
            {
                tipo: 'SOPORTE',
                prod: [
                    'Donde Comprar',
                    'Declaración de garantía limitada',
                    'Contacto con el centro de asistencia técnico',
                ],
            },
            {
                tipo: 'TECLADOS',
                prod: [
                    'Alloy Core RGB',
                    'Alloy FPS Pro',
                    'Alloy FPS RGB',
                    'Alloy Origins Core',
                    'Alloy Origins',
                    'Alloy Elite',
                    'Alloy Origins 60',
                    'Alloy Elite 2',
                    'Acesorios Teclado',
                ],
            },
            {
                tipo: 'RATONES',
                prod: ['Pulsefire FPS Pro', 'Pulsefire Surge', 'Pulsefire Core'],
            },
            {
                tipo: 'ALFOMBRILLAS DE RATÓN',
                prod: ['FURY Ultra', 'FURY S', 'FURY S Speed edition'],
            },
        ];
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _home_mconcoba_Documentos_Ionic_TechShipping_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/hide-header.directive */ 3812);




let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective],
        exports: [_directives_hide_header_directive__WEBPACK_IMPORTED_MODULE_0__.HideHeaderDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    })
], SharedModule);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header #header class=\"mainNav\">\n    <div style=\"display: flex; margin: auto; justify-content: center\">\n      <figure class=\"logoHyperX\">\n        <a href=\"#\">\n          <img href=\"#\" class=\"logo\" src=\"assets/images/logoHx.png\" alt=\"Logo HyperX\"/>\n        </a>\n      </figure>\n      <nav class=\"navBar\">\n        <ul>\n          <a href=\"#\"><li>Audio</li></a>\n          <a href=\"#\"><li>Teclados</li></a>\n          <a href=\"#\"><li>Memoria</li></a>\n          <a href=\"#\"><li>Ratones</li></a>\n          <a href=\"#\"><li>Móvil</li></a>\n          <a href=\"#\"><li>Alimentación</li></a>\n        </ul>\n      </nav>\n      <nav class=\"secundaryNavBar\">\n        <ul>\n          <a href=\"#\"><li>Soporte</li></a>\n          <a href=\"#\"><li>WE'RE ALL GAMERS</li></a>\n        </ul>\n      </nav>\n    </div>\n</ion-header>\n\n\n<ion-content class=\"content\" scrollEvents=\"true\" appHideHeader [header]=\"header\">\n  <main>\n    <img width=\"100%\" src=\"assets/images/HyperX.gif\" alt=\"\">\n      <!-- <video autoplay loop muted width=\"100%\">\n          <source src=\"assets/images/HyperX.mp4\" type=\"video/mp4\">\n          <source src=\"hyperx.ogg\" type=\"video/ogg\">\n        </video> -->\n  </main>\n  <section class=\"center\">\n    <ion-grid style=\"display: flex; margin: auto; justify-content: center;\">\n      <ion-row>\n        <ion-col size-xl=\"3\" size-md=\"6\" size-xs=\"12\" *ngFor=\"let product of produtos\">\n          <ion-card  >\n            <ion-card-header>\n              <ion-card-title>\n                <a href=\"#\"><img class=\"product\" src={{product.img}} alt=\"Audifonos HyperX\"/></a>\n              </ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <a href=\"#\" style=\"text-decoration: none; color: black;\">\n                <h3>{{product.titulo}}</h3>\n                <h5>{{product.subtitulo}}</h5>\n              </a>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </section>\n\n  <section class=\"foot\" style=\"background-color: black;\">\n      <div class=\"produc-link\">\n        <div class=\"links\">\n          <div class=\"link\" *ngFor=\"let item of datos\">\n            <h3>\n              <a href=\"#\">{{item.tipo}}</a>\n            </h3>\n            <ul>\n              <dl>\n                <dt class=\"item-labels\" slot=\"start\" *ngFor=\"let des of item?.prod\">\n                  <li><a href=\"#\">{{des}}</a></li>\n                </dt>\n              </dl>\n            </ul>\n          </div>\n        </div>\n    </div>\n    <figure class=\"logoFoot\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"center\">\n            <ion-icon class=\"red\" name=\"logo-facebook\" size=\"large\"></ion-icon>\n          </ion-col>\n          <ion-col class=\"center\">\n            <ion-icon class=\"red\" name=\"logo-youtube\" size=\"large\"></ion-icon>\n          </ion-col>\n          <ion-col class=\"center\">\n            <ion-icon class=\"red\" name=\"logo-instagram\" size=\"large\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"center\">\n            <a href=\"#\"><img style=\"width: 50%;\" src=\"assets/images/logoHx.png\" alt=\"Logo HyperX\"></a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </figure>\n  </section>\n\n\n\n    <footer>\n      <div class=\"footer\">\n          <p class=\"pie\">\n                  ©2019 Kingston Technology Europe Ltd y Kingston Digital Europe Ltd, Kingston Court, Brooklands Close,\n                  Sunbury-on-Thames, Middlesex, TW16 7EP, Reino Unido. Tel: +44 (0) 1932 738888 Fax: +44 (0) 1932 785469\n                  Todos los derechos reservados. Todas las marcas comerciales y marcas registradas son propiedad de sus respectivos titulares.\n        </p>\n      </div>\n    </footer>\n</ion-content>\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n* {\n  font-family: \"RBN31\";\n}\n/* Inicia Estilización Del Body */\nbody {\n  background-color: black;\n  padding: 0;\n  margin: 0;\n}\n/* Finaliza Estilización Del Body */\n/* Inicia Estilizado Del Header */\nheader {\n  display: flex;\n  font-family: \"RBN\", cursive;\n}\n.mainNav {\n  width: 100%;\n  /* hacemos que la cabecera ocupe el ancho completo de la página */\n  left: 0;\n  /* Posicionamos la cabecera al lado izquierdo */\n  top: 0;\n  /* Posicionamos la cabecera pegada arriba */\n  position: fixed;\n  /* Hacemos que la cabecera tenga una posición fija */\n  background-color: #141414;\n}\n.logoHyperX {\n  display: flex;\n}\n.logo {\n  width: 155px;\n}\n.navBar {\n  background-color: #2f2f32;\n  display: flex;\n  align-items: center;\n}\n.navBar ul {\n  list-style: none;\n  display: flex;\n  margin: 0px;\n  padding: 0px;\n  position: statica;\n}\n.navBar ul a {\n  text-decoration: none;\n  color: white;\n  padding: 20px 15px;\n  font-size: 16px;\n}\n.navBar ul a:hover {\n  color: grey;\n  cursor: pointer;\n}\n.secundaryNavBar ul a {\n  text-decoration: none;\n  color: #5d5d5d;\n  padding: 20px 15px;\n  font-size: 16px;\n}\n.secundaryNavBar ul a:hover {\n  color: white;\n}\n.secundaryNavBar {\n  display: flex;\n  align-items: center;\n}\n.secundaryNavBar ul {\n  list-style: none;\n  display: flex;\n  padding: 0px;\n  margin: 0px;\n}\n/* Finaliza Estilizado Del Header */\n/* Inicia Estilizado del Main */\n#hero {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n#hero img {\n  width: 100%;\n}\n/* Finaliza Estilizado del Main */\n#seccion {\n  font-family: \"RBN\";\n  color: white;\n  padding: 0;\n  margin: 0;\n}\n.center {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  color: white;\n  font-family: \"RBN\";\n}\n.product {\n  align-content: center;\n  align-items: center;\n  width: 337.5px;\n  height: 220px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 25%);\n  grid-auto-rows: 220px;\n  width: 1349;\n}\n.grid {\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n.art {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n.txt {\n  position: absolute;\n  top: 50%;\n  text-align: left;\n  padding-left: 25px;\n  list-style: none;\n  color: white;\n}\n.foot {\n  background-image: url('footerBack.png');\n  background-repeat: repeat-x;\n  width: 100%;\n  color: white;\n}\n.logoFoot {\n  width: 100%;\n  margin: auto;\n}\n.logoFoot img {\n  padding-top: 20px;\n  padding-left: 0;\n  padding-right: 0;\n  margin: 0;\n}\n.produc-link {\n  padding-left: 100px;\n}\n.links {\n  /* Chrome, Safari, Opera */\n  /* Firefox */\n  column-count: 4;\n  text-align: left;\n  /* height: 1000px;*/\n  padding: 30px;\n}\n.link {\n  list-style: none;\n  width: 170px;\n  font-size: 15px;\n}\n.link h3 a {\n  text-decoration: none;\n  color: white;\n  padding: 0;\n  margin: 0;\n}\n.link h3 a:hover {\n  color: orange;\n}\n.link h3 {\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0;\n}\n.link ul li a {\n  text-decoration: none;\n  color: gray;\n  list-style: none;\n  line-height: 25px;\n}\n.link ul li a:hover {\n  color: white;\n}\n.link ul li {\n  list-style: none;\n}\n.link ul {\n  padding-left: 5px;\n}\n.footer {\n  background-color: #585858;\n}\n.pie {\n  margin: 0 auto;\n  padding: 10px;\n  font-family: proxima-nova, sans-serif;\n  font-size: 75%;\n  text-align: center !important;\n  max-width: 62.5em;\n  line-height: 1.75;\n  color: darkgrey;\n}\n@media screen and (max-width: 1440px) {\n  .grid {\n    grid-template-columns: repeat(4, 25%);\n    grid-auto-rows: 220px;\n  }\n}\n@media screen and (max-width: 1050px) {\n  .grid {\n    grid-template-columns: repeat(3, 33.33%);\n    grid-auto-rows: 220px;\n  }\n\n  .links {\n    /* Chrome, Safari, Opera */\n    /* Firefox */\n    column-count: 3;\n  }\n\n  .navBar {\n    width: 1050px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .grid {\n    grid-template-columns: repeat(2, 50%);\n    grid-auto-rows: 220px;\n  }\n\n  .links {\n    /* Chrome, Safari, Opera */\n    /* Firefox */\n    column-count: 2;\n  }\n}\n@media screen and (max-width: 500px) {\n  .grid {\n    grid-template-columns: repeat(2, 50%);\n    grid-auto-rows: 220px;\n  }\n\n  .links {\n    /* Chrome, Safari, Opera */\n    /* Firefox */\n    column-count: 1;\n  }\n}\n.center {\n  display: flex;\n  margin: auto;\n  justify-content: center;\n}\n.red {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,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O0FBQ0Y7QUFMQTtFQUNFO0lBQ0Usd0NBQUE7SUFDQSxxQkFBQTtFQU9GOztFQUpBO0lBQzJCLDBCQUFBO0lBQ0gsWUFBQTtJQUN0QixlQUFBO0VBU0Y7O0VBTkE7SUFDRSxhQUFBO0VBU0Y7QUFDRjtBQU5BO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLHFCQUFBO0VBUUY7O0VBTEE7SUFDMkIsMEJBQUE7SUFDSCxZQUFBO0lBQ3RCLGVBQUE7RUFVRjtBQUNGO0FBUEE7RUFDRTtJQUNFLHFDQUFBO0lBQ0EscUJBQUE7RUFTRjs7RUFOQTtJQUMyQiwwQkFBQTtJQUNILFlBQUE7SUFDdEIsZUFBQTtFQVdGO0FBQ0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFVRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFVRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBmb250LWZhbWlseTogXCJSQk4zMVwiO1xufVxuLyogSW5pY2lhIEVzdGlsaXphY2nDs24gRGVsIEJvZHkgKi9cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4vKiBGaW5hbGl6YSBFc3RpbGl6YWNpw7NuIERlbCBCb2R5ICovXG5cbi8qIEluaWNpYSBFc3RpbGl6YWRvIERlbCBIZWFkZXIgKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIlJCTlwiLCBjdXJzaXZlO1xufVxuXG4ubWFpbk5hdiB7XG4gIHdpZHRoOiAxMDAlOyAvKiBoYWNlbW9zIHF1ZSBsYSBjYWJlY2VyYSBvY3VwZSBlbCBhbmNobyBjb21wbGV0byBkZSBsYSBww6FnaW5hICovXG4gIGxlZnQ6IDA7IC8qIFBvc2ljaW9uYW1vcyBsYSBjYWJlY2VyYSBhbCBsYWRvIGl6cXVpZXJkbyAqL1xuICB0b3A6IDA7IC8qIFBvc2ljaW9uYW1vcyBsYSBjYWJlY2VyYSBwZWdhZGEgYXJyaWJhICovXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogSGFjZW1vcyBxdWUgbGEgY2FiZWNlcmEgdGVuZ2EgdW5hIHBvc2ljacOzbiBmaWphICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG59XG5cbi5sb2dvSHlwZXJYIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTU1cHg7XG59XG5cbi5uYXZCYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjMyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2QmFyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHN0YXRpY2E7XG59XG5cbi5uYXZCYXIgdWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5hdkJhciB1bCBhOmhvdmVyIHtcbiAgY29sb3I6IGdyZXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlY3VuZGFyeU5hdkJhciB1bCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzVkNWQ1ZDtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zZWN1bmRhcnlOYXZCYXIgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlY3VuZGFyeU5hdkJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWN1bmRhcnlOYXZCYXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLyogRmluYWxpemEgRXN0aWxpemFkbyBEZWwgSGVhZGVyICovXG5cbi8qIEluaWNpYSBFc3RpbGl6YWRvIGRlbCBNYWluICovXG4jaGVybyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNoZXJvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogRmluYWxpemEgRXN0aWxpemFkbyBkZWwgTWFpbiAqL1xuXG4jc2VjY2lvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJCTlwiO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUkJOXCI7XG59XG5cbi5wcm9kdWN0IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzM3LjVweDtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLmdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNSUpO1xuICBncmlkLWF1dG8tcm93czogMjIwcHg7XG4gIHdpZHRoOiAxMzQ5O1xufVxuXG4uZ3JpZCB7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbn1cblxuLmFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50eHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvb3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Zvb3RlckJhY2sucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvRm9vdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dvRm9vdCBpbWcge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9kdWMtbGluayB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG5cbi5saW5rcyB7XG4gIC13ZWJraXQtY29sdW1uLWNvdW50OiA0OyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLW1vei1jb2x1bW4tY291bnQ6IDQ7IC8qIEZpcmVmb3ggKi9cbiAgY29sdW1uLWNvdW50OiA0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAvKiBoZWlnaHQ6IDEwMDBweDsqL1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4ubGluayB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAxNzBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGluayBoMyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpbmsgaDMgYTpob3ZlciB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5saW5rIGgzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGluayB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZ3JheTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG5cbi5saW5rIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saW5rIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpbmsgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODU4NTg7XG59XG5cbi5waWUge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDYyLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAyNSUpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLmdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDMzLjMzJSk7XG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIyMHB4O1xuICB9XG5cbiAgLmxpbmtzIHtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMzsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgLW1vei1jb2x1bW4tY291bnQ6IDM7IC8qIEZpcmVmb3ggKi9cbiAgICBjb2x1bW4tY291bnQ6IDM7XG4gIH1cblxuICAubmF2QmFyIHtcbiAgICB3aWR0aDogMTA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyMjBweDtcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAyOyAvKiBGaXJlZm94ICovXG4gICAgY29sdW1uLWNvdW50OiAyO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyMjBweDtcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAxOyAvKiBGaXJlZm94ICovXG4gICAgY29sdW1uLWNvdW50OiAxO1xuICB9XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map