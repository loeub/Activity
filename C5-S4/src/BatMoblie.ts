export class BatMobile {
    isBatmanHere : boolean;
    constructor (isBatmanHere : boolean){
        this.isBatmanHere = isBatmanHere;
    }

    batMobileSpeed(){
        let speed = 0
        if(this.isBatmanHere != true){
            speed = 110
        }
        else{
            speed = 500
        }
        return speed;
    }
}