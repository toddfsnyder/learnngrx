(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\phillycc\learnrx\src\main.ts */"zUnb");


/***/ }),

/***/ "1GHo":
/*!***********************************************!*\
  !*** ./src/app/effects/state/learn.action.ts ***!
  \***********************************************/
/*! exports provided: callLearnEffect, handleLeanSuccess, handleLeanError, setFilterId, filterData, filterDataSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callLearnEffect", function() { return callLearnEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLeanSuccess", function() { return handleLeanSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleLeanError", function() { return handleLeanError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilterId", function() { return setFilterId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterData", function() { return filterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterDataSuccess", function() { return filterDataSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Actions for calling Effects
const callLearnEffect = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('callLearnEffect');
const handleLeanSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('handleLeanSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const handleLeanError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('handleLeanError', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Actions for Filtering Data
const setFilterId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('setFilterId', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const filterData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('filterData');
const filterDataSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('filterDataSuccess', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "3U2g":
/*!********************************************!*\
  !*** ./src/app/basic/model/basic-model.ts ***!
  \********************************************/
/*! exports provided: initialBasicState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialBasicState", function() { return initialBasicState; });
const initialBasicState = {
    count: 1,
    test: "Init Data",
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CXch":
/*!*************************************************************!*\
  !*** ./src/app/compoentsactions/state/components.action.ts ***!
  \*************************************************************/
/*! exports provided: addAction, subAction, resetAction, learnActionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAction", function() { return addAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subAction", function() { return subAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAction", function() { return resetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnActionProps", function() { return learnActionProps; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Working with Actions
const addAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addAction');
const subAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('subAction');
const resetAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('resetAction');
// Action that passes
const learnActionProps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('learnActionProps', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "DQsD":
/*!**************************************************************************!*\
  !*** ./src/app/compoentsactions/components/actions/actions.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_components_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/components.action */ "CXch");
/* harmony import */ var _state_components_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/components.selectors */ "JTw8");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class ActionsComponent {
    constructor(store) {
        this.store = store;
        this.countValue = 25;
    }
    ngOnInit() {
        this.countData$ = this.store.select(_state_components_selectors__WEBPACK_IMPORTED_MODULE_2__["getCount_component"]);
    }
    addToCount() {
        this.store.dispatch(Object(_state_components_action__WEBPACK_IMPORTED_MODULE_1__["addAction"])());
    }
    subFromCount() {
        this.store.dispatch(Object(_state_components_action__WEBPACK_IMPORTED_MODULE_1__["subAction"])());
    }
    resetCount() {
        this.store.dispatch(Object(_state_components_action__WEBPACK_IMPORTED_MODULE_1__["resetAction"])());
    }
    setCount() {
        this.store.dispatch(Object(_state_components_action__WEBPACK_IMPORTED_MODULE_1__["learnActionProps"])({ payload: this.countValue }));
    }
}
ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
ActionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionsComponent, selectors: [["app-actions"]], decls: 19, vars: 4, consts: [[1, "itemMargin"], [1, "field"], ["type", "text", 3, "ngModel", "ngModelChange"], [1, "field", 3, "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Count from Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter in a Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.countValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionsComponent_Template_button_click_11_listener() { return ctx.addToCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionsComponent_Template_button_click_13_listener() { return ctx.subFromCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Substract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionsComponent_Template_button_click_15_listener() { return ctx.resetCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionsComponent_Template_button_click_17_listener() { return ctx.setCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Set Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.countData$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.countValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvZW50c2FjdGlvbnMvY29tcG9uZW50cy9hY3Rpb25zL2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-actions',
                templateUrl: './actions.component.html',
                styleUrls: ['./actions.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "HYDm":
/*!***************************************************************!*\
  !*** ./src/app/effects/components/effect/effect.component.ts ***!
  \***************************************************************/
/*! exports provided: EffectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectComponent", function() { return EffectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_learn_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/learn.action */ "1GHo");
/* harmony import */ var _state_learn_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/learn.selectors */ "T15Q");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function EffectComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.itemsPurchased);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.itemsPending);
} }
function EffectComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Customer Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Customer City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Items Pending:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Items Purchased:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedCustomer_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedCustomer_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedCustomer_r4.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedCustomer_r4.itemsPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedCustomer_r4.itemsPurchased);
} }
class EffectComponent {
    constructor(store) {
        this.store = store;
        this.idValue = 0;
    }
    ngOnInit() {
        this.testData$ = this.store.select(_state_learn_selectors__WEBPACK_IMPORTED_MODULE_2__["getTest_learn"]);
        this.customers$ = this.store.select(_state_learn_selectors__WEBPACK_IMPORTED_MODULE_2__["getCustomers_learn"]);
        this.selectedCustomer$ = this.store.select(_state_learn_selectors__WEBPACK_IMPORTED_MODULE_2__["getSelectedCustomer_learn"]);
    }
    loadData() {
        this.store.dispatch(Object(_state_learn_action__WEBPACK_IMPORTED_MODULE_1__["callLearnEffect"])());
    }
    filterData() {
        this.store.dispatch(Object(_state_learn_action__WEBPACK_IMPORTED_MODULE_1__["setFilterId"])({ payload: this.idValue }));
        this.store.dispatch(Object(_state_learn_action__WEBPACK_IMPORTED_MODULE_1__["filterData"])());
    }
}
EffectComponent.ɵfac = function EffectComponent_Factory(t) { return new (t || EffectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
EffectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EffectComponent, selectors: [["app-effect"]], decls: 31, vars: 10, consts: [[1, "itemMargin"], [3, "click"], ["cellspacing", "2", "cellpadding", "2"], [4, "ngFor", "ngForOf"], [1, "field"], ["type", "text", 3, "ngModel", "ngModelChange"], [4, "ngIf"]], template: function EffectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EffectComponent_Template_button_click_5_listener() { return ctx.loadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Run");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EffectComponent_tr_18_Template, 9, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter in a ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EffectComponent_Template_input_ngModelChange_23_listener($event) { return ctx.idValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EffectComponent_Template_button_click_24_listener() { return ctx.filterData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Selected Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, EffectComponent_div_29_Template, 21, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.testData$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 6, ctx.customers$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.idValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 8, ctx.selectedCustomer$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VmZmVjdHMvY29tcG9uZW50cy9lZmZlY3QvZWZmZWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-effect',
                templateUrl: './effect.component.html',
                styleUrls: ['./effect.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "J+Tg":
/*!**************************************************!*\
  !*** ./src/app/effects/services/demo-service.ts ***!
  \**************************************************/
/*! exports provided: baseDemoService, demoService, stubDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseDemoService", function() { return baseDemoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoService", function() { return demoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stubDemoService", function() { return stubDemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class baseDemoService {
}
baseDemoService.ɵfac = function baseDemoService_Factory(t) { return new (t || baseDemoService)(); };
baseDemoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: baseDemoService, factory: baseDemoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](baseDemoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
class demoService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "http://localhost:3000";
    }
    getCustomers() {
        let uri = `${this.API_URL}/customers`;
        return this.httpClient.get(uri);
    }
    getCustomer(id) {
        let uri = `${this.API_URL}/customers?id={id}`;
        return this.httpClient.get(uri);
    }
}
demoService.ɵfac = function demoService_Factory(t) { return new (t || demoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
demoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: demoService, factory: demoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](demoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
class stubDemoService {
    getCustomers() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    }
    getCustomer(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    }
}
stubDemoService.ɵfac = function stubDemoService_Factory(t) { return new (t || stubDemoService)(); };
stubDemoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: stubDemoService, factory: stubDemoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](stubDemoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "JTw8":
/*!****************************************************************!*\
  !*** ./src/app/compoentsactions/state/components.selectors.ts ***!
  \****************************************************************/
/*! exports provided: selectComponentContext, getCount_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectComponentContext", function() { return selectComponentContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCount_component", function() { return getCount_component; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectComponentContext = (state) => state.componentContext;
const getCount_component = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectComponentContext, state => state.count);


/***/ }),

/***/ "SInE":
/*!*********************************************!*\
  !*** ./src/app/shared/state/effects-map.ts ***!
  \*********************************************/
/*! exports provided: effectsMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effectsMap", function() { return effectsMap; });
/* harmony import */ var src_app_effects_state_learn_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/effects/state/learn.effects */ "k1dj");

const effectsMap = [
    src_app_effects_state_learn_effects__WEBPACK_IMPORTED_MODULE_0__["learnEffects"]
    //logoutUserEffects
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'learnrx';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["role", "main", 1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn NGRX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 82px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  \n  @media screen and (max-width: 767px) {\n\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T15Q":
/*!**************************************************!*\
  !*** ./src/app/effects/state/learn.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectLearnContext, getTest_learn, getCustomers_learn, getSelectedCustomer_learn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLearnContext", function() { return selectLearnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTest_learn", function() { return getTest_learn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomers_learn", function() { return getCustomers_learn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedCustomer_learn", function() { return getSelectedCustomer_learn; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectLearnContext = (state) => state.learnContext;
const getTest_learn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLearnContext, state => state.test);
const getCustomers_learn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLearnContext, state => state.customers);
const getSelectedCustomer_learn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLearnContext, state => state.selectedCustomer);


/***/ }),

/***/ "V8cQ":
/*!************************************************!*\
  !*** ./src/app/basic/state/basic.selectors.ts ***!
  \************************************************/
/*! exports provided: selectLearnContext, getTest, getCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLearnContext", function() { return selectLearnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTest", function() { return getTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCount", function() { return getCount; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectLearnContext = (state) => state.basicContext;
const getTest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLearnContext, state => state.test);
const getCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectLearnContext, state => state.count);


/***/ }),

/***/ "XEaR":
/*!**********************************************!*\
  !*** ./src/app/basic/state/basic.reducer.ts ***!
  \**********************************************/
/*! exports provided: basicReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicReducer", function() { return basicReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_basic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/basic-model */ "3U2g");
/* harmony import */ var _basic_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.action */ "yVmY");



const _basicReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_model_basic_model__WEBPACK_IMPORTED_MODULE_1__["initialBasicState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_basic_action__WEBPACK_IMPORTED_MODULE_2__["basicAction"], state => (Object.assign(Object.assign({}, state), { test: "Updated via Simple Action" }))));
function basicReducer(state, action) {
    return _basicReducer(state, action);
}


/***/ }),

/***/ "Yi4g":
/*!*********************************************!*\
  !*** ./src/app/shared/state/reducer-map.ts ***!
  \*********************************************/
/*! exports provided: reducersMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducersMap", function() { return reducersMap; });
/* harmony import */ var src_app_basic_state_basic_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/basic/state/basic.reducer */ "XEaR");
/* harmony import */ var src_app_compoentsactions_state_components_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/compoentsactions/state/components.reducer */ "y44w");
/* harmony import */ var src_app_effects_state_learn_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/effects/state/learn.reducer */ "wFdE");



const reducersMap = {
    basicContext: src_app_basic_state_basic_reducer__WEBPACK_IMPORTED_MODULE_0__["basicReducer"],
    componentContext: src_app_compoentsactions_state_components_reducer__WEBPACK_IMPORTED_MODULE_1__["componentReducer"],
    learnContext: src_app_effects_state_learn_reducer__WEBPACK_IMPORTED_MODULE_2__["learnReducer"]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _basic_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic/components/basic/basic.component */ "zHcP");
/* harmony import */ var _effects_components_effect_effect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/components/effect/effect.component */ "HYDm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _compoentsactions_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compoentsactions/components/actions/actions.component */ "DQsD");
/* harmony import */ var _shared_state_reducer_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/state/reducer-map */ "Yi4g");
/* harmony import */ var _effects_services_demo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./effects/services/demo-service */ "J+Tg");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _shared_state_effects_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/state/effects-map */ "SInE");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _effects_services_demo_service__WEBPACK_IMPORTED_MODULE_12__["baseDemoService"], useClass: _effects_services_demo_service__WEBPACK_IMPORTED_MODULE_12__["demoService"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            //StoreModule.forRoot({ basicContext: basicReducer }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_shared_state_reducer_map__WEBPACK_IMPORTED_MODULE_11__["reducersMap"]),
            // Instrumentation must be imported after importing StoreModule (config is optional)
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: false,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot(_shared_state_effects_map__WEBPACK_IMPORTED_MODULE_14__["effectsMap"])
            // EffectsModule.forFeature(frameworkEffectsMap ),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _basic_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasicComponent"],
        _effects_components_effect_effect_component__WEBPACK_IMPORTED_MODULE_7__["EffectComponent"],
        _compoentsactions_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_10__["ActionsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _basic_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_6__["BasicComponent"],
                    _effects_components_effect_effect_component__WEBPACK_IMPORTED_MODULE_7__["EffectComponent"],
                    _compoentsactions_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_10__["ActionsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    //StoreModule.forRoot({ basicContext: basicReducer }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_shared_state_reducer_map__WEBPACK_IMPORTED_MODULE_11__["reducersMap"]),
                    // Instrumentation must be imported after importing StoreModule (config is optional)
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                        logOnly: false,
                    }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot(_shared_state_effects_map__WEBPACK_IMPORTED_MODULE_14__["effectsMap"])
                    // EffectsModule.forFeature(frameworkEffectsMap ),
                ],
                providers: [
                    { provide: _effects_services_demo_service__WEBPACK_IMPORTED_MODULE_12__["baseDemoService"], useClass: _effects_services_demo_service__WEBPACK_IMPORTED_MODULE_12__["demoService"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dF79":
/*!**********************************************!*\
  !*** ./src/app/effects/model/learn-model.ts ***!
  \**********************************************/
/*! exports provided: initialLearnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLearnState", function() { return initialLearnState; });
/* harmony import */ var src_app_shared_model_customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/model/customer */ "qKy+");

const initialLearnState = {
    count: 1,
    test: "Init Data",
    customers: [],
    filterId: 0,
    selectedCustomer: new src_app_shared_model_customer__WEBPACK_IMPORTED_MODULE_0__["Customer"]()
};


/***/ }),

/***/ "k1dj":
/*!************************************************!*\
  !*** ./src/app/effects/state/learn.effects.ts ***!
  \************************************************/
/*! exports provided: learnEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnEffects", function() { return learnEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _learn_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn.action */ "1GHo");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/demo-service */ "J+Tg");








class learnEffects {
    constructor(actions$, dataService) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.loadCustomers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_learn_action__WEBPACK_IMPORTED_MODULE_4__["callLearnEffect"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(() => this.dataService.getCustomers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => Object(_learn_action__WEBPACK_IMPORTED_MODULE_4__["handleLeanSuccess"])({ payload: data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(Object(_learn_action__WEBPACK_IMPORTED_MODULE_4__["handleLeanError"])({
            error: 'Unable to login user'
        })))))));
    }
}
learnEffects.ɵfac = function learnEffects_Factory(t) { return new (t || learnEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_demo_service__WEBPACK_IMPORTED_MODULE_5__["baseDemoService"])); };
learnEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: learnEffects, factory: learnEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](learnEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_demo_service__WEBPACK_IMPORTED_MODULE_5__["baseDemoService"] }]; }, null); })();


/***/ }),

/***/ "qKy+":
/*!******************************************!*\
  !*** ./src/app/shared/model/customer.ts ***!
  \******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
class Customer {
}


/***/ }),

/***/ "td1m":
/*!***********************************************************!*\
  !*** ./src/app/compoentsactions/model/component-model.ts ***!
  \***********************************************************/
/*! exports provided: initialComponentState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialComponentState", function() { return initialComponentState; });
const initialComponentState = {
    count: 1,
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _basic_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/components/basic/basic.component */ "zHcP");
/* harmony import */ var _compoentsactions_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compoentsactions/components/actions/actions.component */ "DQsD");
/* harmony import */ var _effects_components_effect_effect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./effects/components/effect/effect.component */ "HYDm");







const routes = [
    { path: 'basic', component: _basic_components_basic_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"] },
    { path: 'actions', component: _compoentsactions_components_actions_actions_component__WEBPACK_IMPORTED_MODULE_3__["ActionsComponent"] },
    { path: 'learn', component: _effects_components_effect_effect_component__WEBPACK_IMPORTED_MODULE_4__["EffectComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wFdE":
/*!************************************************!*\
  !*** ./src/app/effects/state/learn.reducer.ts ***!
  \************************************************/
/*! exports provided: learnReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "learnReducer", function() { return learnReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_learn_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/learn-model */ "dF79");
/* harmony import */ var _learn_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learn.action */ "1GHo");



const _learnReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_model_learn_model__WEBPACK_IMPORTED_MODULE_1__["initialLearnState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_learn_action__WEBPACK_IMPORTED_MODULE_2__["handleLeanSuccess"], (state, { payload }) => (Object.assign(Object.assign({}, state), { customers: payload }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_learn_action__WEBPACK_IMPORTED_MODULE_2__["handleLeanError"], (state, { error }) => (Object.assign(Object.assign({}, state), { test: error }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_learn_action__WEBPACK_IMPORTED_MODULE_2__["setFilterId"], (state, { payload }) => (Object.assign(Object.assign({}, state), { filterId: payload }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_learn_action__WEBPACK_IMPORTED_MODULE_2__["filterDataSuccess"], (state, { payload }) => (Object.assign(Object.assign({}, state), { selectedCustomer: payload }))));
function learnReducer(state, action) {
    return _learnReducer(state, action);
}


/***/ }),

/***/ "y44w":
/*!**************************************************************!*\
  !*** ./src/app/compoentsactions/state/components.reducer.ts ***!
  \**************************************************************/
/*! exports provided: componentReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentReducer", function() { return componentReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_component_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/component-model */ "td1m");
/* harmony import */ var _components_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.action */ "CXch");



const _componentReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_model_component_model__WEBPACK_IMPORTED_MODULE_1__["initialComponentState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_components_action__WEBPACK_IMPORTED_MODULE_2__["addAction"], state => (Object.assign(Object.assign({}, state), { count: state.count + 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_components_action__WEBPACK_IMPORTED_MODULE_2__["subAction"], state => (Object.assign(Object.assign({}, state), { count: state.count - 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_components_action__WEBPACK_IMPORTED_MODULE_2__["resetAction"], state => (Object.assign(Object.assign({}, state), { count: 0 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_components_action__WEBPACK_IMPORTED_MODULE_2__["learnActionProps"], (state, { payload }) => (Object.assign(Object.assign({}, state), { count: payload }))));
function componentReducer(state, action) {
    return _componentReducer(state, action);
}


/***/ }),

/***/ "yVmY":
/*!*********************************************!*\
  !*** ./src/app/basic/state/basic.action.ts ***!
  \*********************************************/
/*! exports provided: basicAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicAction", function() { return basicAction; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Simple Demo Action
const basicAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('basicAction');


/***/ }),

/***/ "zHcP":
/*!***********************************************************!*\
  !*** ./src/app/basic/components/basic/basic.component.ts ***!
  \***********************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_basic_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/basic.selectors */ "V8cQ");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class BasicComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.testData$ = this.store.select(_state_basic_selectors__WEBPACK_IMPORTED_MODULE_1__["getTest"]);
        this.countData$ = this.store.select(_state_basic_selectors__WEBPACK_IMPORTED_MODULE_1__["getCount"]);
    }
    loadData() {
        //this.store.dispatch(learnSimpleAction());
        // this.store.dispatch(learnSimpleActionProps({ payload: "Using Actions to Change the store" }));
        //this.store.dispatch(callLearnEffect());
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], decls: 12, vars: 6, consts: [[1, "itemMargin"], [1, "field"]], template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data from Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Count from Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.testData$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.countData$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2NvbXBvbmVudHMvYmFzaWMvYmFzaWMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map