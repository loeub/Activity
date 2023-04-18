"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TucTuc = void 0;
var TucTuc = /** @class */ (function () {
    function TucTuc(numberCustomers) {
        this.numberCustomers = numberCustomers;
    }
    TucTuc.prototype.tuctucSpeed = function () {
        var tuctucSpeed = 130;
        tuctucSpeed -= (this.numberCustomers * 5);
        return tuctucSpeed;
    };
    return TucTuc;
}());
exports.TucTuc = TucTuc;
