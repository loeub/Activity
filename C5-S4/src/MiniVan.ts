export class MiniVan {
    numberCustomers: number;
    numberLggage : number;

    constructor (numberCustomers: number, numberLggage: number){
        this.numberCustomers = numberCustomers;
        this.numberLggage = numberLggage;
    }

    miniVanSpeed(){
        let miniSpeed = 130;
        if(this.numberCustomers >= 1){
            miniSpeed -= 10;
        }
        else if (this.numberLggage >= 1){
            miniSpeed -= 5;
        }
        return miniSpeed;
    }
}