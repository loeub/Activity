"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiniVan_1 = require("./MiniVan");
var BatMoblie_1 = require("./BatMoblie");
var BatMan = new BatMoblie_1.BatMobile(false);
var Passenger = new MiniVan_1.MiniVan(2, 4);
BatMan.batMobileSpeed();
Passenger.miniVanSpeed();
console.log(Passenger.miniVanSpeed());
