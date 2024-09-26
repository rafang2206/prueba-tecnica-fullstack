import { Router } from "express";
import { BuyRoutes } from "./buys/buys.routes";
import { UserRoutes } from "./users/users.routes";
import { WalletRoutes } from "./wallets/wallets.routes";

export class AppRoutes {

  static get routes() {

    const routes = Router();

    routes.use('/users', UserRoutes.routes);

    routes.use('/buys', BuyRoutes.routes)

    routes.use('/wallets', WalletRoutes.routes)


    return routes;
  }
}