import { Vehicle } from "./Vehicle";

export class MiniVan extends Vehicle {
    numberCustomers: number;
    numberLggage : number;

    constructor (numberCustomers: number, numberLggage: number, plateID: string, weight: number){
        super(plateID, weight);
        this.numberCustomers = numberCustomers;
        this.numberLggage = numberLggage;
    }

    miniVanSpeed(){
        let miniSpeed = 130;
        miniSpeed -= ((this.numberCustomers * 10) + (this.numberLggage * 5))
        return miniSpeed;
    }
    getSpeed():number {
      // TODO document why this method 'getSpeed' is empty
        return
    }
}