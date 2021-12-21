import { Container } from 'inversify';
//import type { AuthenticationService} from '../services/AuthenticationService';
//import LocalStorageAuthenticationService from '../services/AuthenticationService';

//import HomePageStore from '../stores/HomePageStore'

//import CatalogStore from '../stores/CatalogStore'
//import LoginStore from '../stores/LoginStore'
import ownTypes from './ownTypes';
//import CatalogService from '../services/CatalogService';
//import ProductStore from '../stores/ProductStore';

export const container = new Container();
//container.bind<AuthenticationService>(ownTypes.authenticationService).to(LocalStorageAuthenticationService).inSingletonScope();
//container.bind<HomePageStore>(ownTypes.homePageStore).to(HomePageStore).inTransientScope();
//container.bind<CatalogService>(ownTypes.catalogService).to(CatalogService).inTransientScope();
//container.bind<CatalogStore>(ownTypes.catalogStore).to(CatalogStore).inTransientScope();
//container.bind<ProductStore>(ownTypes.productStore).to(ProductStore).inTransientScope();
//container.bind<LoginStore>(ownTypes.loginStore).to(LoginStore).inTransientScope(); 
