"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleConvey = void 0;
var VehicleConvey = /** @class */ (function () {
    function VehicleConvey() {
        this.vehicles = [];
    }
    VehicleConvey.prototype.addVehicle = function (vehicle) {
        return this.vehicles.push(vehicle);
    };
    return VehicleConvey;
}());
exports.VehicleConvey = VehicleConvey;
