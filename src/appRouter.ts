
import { Request, Response, Router } from 'express';
import { ClientRoutes } from './routes/clients.routes';
import { VehicleRoutes } from './routes/vehicle.routes';


export class AppRouter {
     static get routes(): Router {
          const router = Router();

          router.get('/', (req: Request, res: Response) => {
               res.send('Hello from Server whit Typescript and POO');
          });
          router.use('/client', ClientRoutes.routes);
          router.use('/vehicle', VehicleRoutes.routes);

          return router;
     };

};