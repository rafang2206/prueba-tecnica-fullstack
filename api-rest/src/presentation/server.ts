import express, { Express } from 'express';
import cors from 'cors';
import { AppRoutes } from './routes';
import { logger } from '../config/logger';
import { CONFIGURATION } from '../config/configuration';

export class Server {

  public readonly app: Express;
  private serverListen?: any;
  constructor(private readonly port: number) {
    this.app = express();
  }

  async start(){
    this.app.use(express.json());
    const permittedDomains = [CONFIGURATION.FRONTEND_URL];

    const corsOptions = {
      origin: function(origin: any, callback: any){
        if(+permittedDomains.indexOf !== -1 ){
          callback(null, true);
        } else {
          callback(new Error('Not permitted'));
        }
      },
      credentials: true
    };

    this.app.use(cors(corsOptions));

    const appRoutes = AppRoutes.routes;

    this.app.use('/api/v1', appRoutes);

    this.serverListen = this.app.listen(this.port, () => {
      logger.info(`Server run in port ${this.port}`)
    })
  }

  public async close(){
    return new Promise((resolve) => {
      if (this.serverListen) {
        this.serverListen?.close(() => {
          logger.info('Test server has been stopped');
          resolve(true);
        })
      } else {
        resolve(true);
      }
    });
  }
}