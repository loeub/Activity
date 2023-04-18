"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatMobile = void 0;
var BatMobile = /** @class */ (function () {
    function BatMobile(isBatmanHere) {
        this.isBatmanHere = isBatmanHere;
    }
    BatMobile.prototype.batMobileSpeed = function () {
        var speed = 0;
        if (this.isBatmanHere != true) {
            speed = 110;
        }
        else {
            speed = 500;
        }
        return speed;
    };
    return BatMobile;
}());
exports.BatMobile = BatMobile;
