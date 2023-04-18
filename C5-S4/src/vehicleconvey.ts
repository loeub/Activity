import { Vehicle } from "./Vehicle";

export class VehicleConvey{

    vehicles: Vehicle[]=[];

    addVehicle(vehicle: Vehicle){
        return this.vehicles.push(vehicle);
    }
    
}