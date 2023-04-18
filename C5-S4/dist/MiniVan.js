"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniVan = void 0;
var MiniVan = /** @class */ (function () {
    function MiniVan(numberCustomers, numberLggage) {
        this.numberCustomers = numberCustomers;
        this.numberLggage = numberLggage;
    }
    MiniVan.prototype.miniVanSpeed = function () {
        var miniSpeed = 130;
        miniSpeed -= ((this.numberCustomers * 10) + (this.numberLggage * 5));
        return miniSpeed;
    };
    return MiniVan;
}());
exports.MiniVan = MiniVan;
