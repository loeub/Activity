
import { MiniVan } from "./MiniVan";
import { BatMobile } from "./BatMoblie";






let BatMan = new BatMobile(false);
let Passenger = new MiniVan(2, 4);





BatMan.batMobileSpeed();
Passenger.miniVanSpeed();

console.log(Passenger.miniVanSpeed());
