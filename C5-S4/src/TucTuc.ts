import { Vehical } from "./Vehicle";

export class TucTuc extends Vehical{
    public numberCustomers: number;
    constructor(numberCustomers: number){
        super();
        this.numberCustomers = numberCustomers;
    }
    
    tuctucSpeed(){
        let tuctucSpeed = 130;
        tuctucSpeed -=(this.numberCustomers * 5)
        return tuctucSpeed;
    }
    getSpeed(): number {
        throw new Error("Method not implemented.");
    }
}