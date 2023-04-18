export abstract class Vehical {
    constructor(
        private plateID: string, 
        private weight: number
    ){
        this.plateID = plateID;
        this.weight = weight;
    }
}