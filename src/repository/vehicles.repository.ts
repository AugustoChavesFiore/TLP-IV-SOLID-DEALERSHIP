import { IVehicle, IVehicleRepository } from "../interface/vehicle.interface";



export class VehicleRepository implements IVehicleRepository {
    constructor(
        private vehicleRepository: IVehicleRepository = vehicleRepository
    ) { };

    async create(vehicle: IVehicle): Promise<IVehicle> {
        return this.vehicleRepository.create(vehicle);
    };

    async findById(id: string): Promise<IVehicle | null> {
        return this.vehicleRepository.findById(id);

    };

    async update(id: string, vehicle: IVehicle): Promise<IVehicle | null> {
        return this.vehicleRepository.update(id, vehicle);
    };

    async delete(id: string): Promise<void> {
        return this.vehicleRepository.delete(id);
    };
}