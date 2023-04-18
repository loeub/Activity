export class MiniVan {
    numberCustomers: number;
    numberLggage : number;
    numberLuggage: number;

    constructor (numberCustomers: number, numberLggage: number){
        this.numberCustomers = numberCustomers;
        this.numberLggage = numberLggage;
    }

    miniVanSpeed(){
        let miniSpeed = 130;
        miniSpeed -= ((this.numberCustomers * 10) + (this.numberLggage * 5))
        return miniSpeed;
    }
    getSpeed():number { 
        
    }
}