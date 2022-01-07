import { Container } from 'inversify';
import type { AuthenticationService} from '../services/AuthService';
import BaseAuthenticationService from '../services/AuthService';
import HomePageStore from '../stores/HomePageStore'
import CatalogStore from '../stores/CatalogStore'
import LoginStore from '../stores/LoginStore'
import ownTypes from './ownTypes';
import CatalogService from '../services/CatalogService';
import ProductStore from '../stores/ProductStore';
import BasketStore from '../stores/BasketStore';

export const container = new Container();
container.bind<AuthenticationService>(ownTypes.authenticationService).to(BaseAuthenticationService).inSingletonScope();
container.bind<HomePageStore>(ownTypes.homePageStore).to(HomePageStore).inTransientScope();
container.bind<CatalogService>(ownTypes.catalogService).to(CatalogService).inTransientScope();
container.bind<CatalogStore>(ownTypes.catalogStore).to(CatalogStore).inTransientScope();
container.bind<ProductStore>(ownTypes.productStore).to(ProductStore).inTransientScope();
container.bind<LoginStore>(ownTypes.loginStore).to(LoginStore).inSingletonScope();
container.bind<BasketStore>(ownTypes.basketStore).to(BasketStore).inSingletonScope();
