import { Router } from "express";
import { VehicleService } from "../services/vehicle.service";
import { VehiclesController } from "../controller/vehicles.controller";



export class VehicleRoutes {


    static get routes(): Router {

        const router = Router();
        const vehicleController = new VehiclesController(new VehicleService());

        router.post('/', vehicleController.createVehicle);
        router.get('/', vehicleController.findAllVehicles);
        router.get('/:id', vehicleController.getVehicleById);
        router.put('/:id', vehicleController.updateVehicle);
        router.delete('/:id', vehicleController.deleteVehicle);


        return router;
    };


};