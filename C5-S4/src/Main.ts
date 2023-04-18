
import { MiniVan } from "./MiniVan";
import { BatMobile } from "./BatMoblie";
import { TucTuc } from "./TucTuc";





let tuctucPassenger = new TucTuc(4);
let BatMan = new BatMobile(false);
let Passenger = new MiniVan(2, 4);





BatMan.batMobileSpeed();
Passenger.miniVanSpeed();
tuctucPassenger.tuctucSpeed();

console.log(BatMan.batMobileSpeed());
console.log(Passenger.miniVanSpeed());
console.log(tuctucPassenger.tuctucSpeed());
