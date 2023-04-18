import { Vehicle } from "./Vehicle";

export class TucTuc extends Vehicle{
    public numberCustomers: number;
    constructor(numberCustomers: number, plateID: string, weight: number){
        super(plateID, weight);
        this.numberCustomers = numberCustomers;
    }
    
    tuctucSpeed(){
        let tuctucSpeed = 130;
        tuctucSpeed -=(this.numberCustomers * 5)
        return tuctucSpeed;
    }
    getSpeed():number { 
        return 
    }
}