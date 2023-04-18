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
        if (this.numberCustomers >= 1) {
            miniSpeed -= 10;
        }
        else if (this.numberLggage >= 1) {
            miniSpeed -= 5;
        }
        return miniSpeed;
    };
    return MiniVan;
}());
exports.MiniVan = MiniVan;
