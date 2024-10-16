import { IClientRepository, IClient } from "../interface/client.interface";


export class ClientRepository implements IClientRepository {
    constructor(
        private clientRepository: IClientRepository = clientRepository
    ) { };

    async create(client: IClient): Promise<IClient> {
        return this.clientRepository.create(client);
    };

    async findById(id: string): Promise<IClient | null> {
        return this.clientRepository.findById(id);

    };

    async update(id: string, client: IClient): Promise<IClient | null> {
        return this.clientRepository.update(id, client);
    };

    async delete(id: string): Promise<void> {
        return this.clientRepository.delete(id);
    };
};