"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniVan = void 0;
var Vehicle_1 = require("./Vehicle");
var MiniVan = /** @class */ (function (_super) {
    __extends(MiniVan, _super);
    function MiniVan(numberCustomers, numberLggage, plateID, weight) {
        var _this = _super.call(this, plateID, weight) || this;
        _this.numberCustomers = numberCustomers;
        _this.numberLggage = numberLggage;
        return _this;
    }
    MiniVan.prototype.miniVanSpeed = function () {
        var miniSpeed = 130;
        miniSpeed -= ((this.numberCustomers * 10) + (this.numberLggage * 5));
        return miniSpeed;
    };
    MiniVan.prototype.getSpeed = function () {
        // TODO document why this method 'getSpeed' is empty
        return;
    };
    return MiniVan;
}(Vehicle_1.Vehicle));
exports.MiniVan = MiniVan;
