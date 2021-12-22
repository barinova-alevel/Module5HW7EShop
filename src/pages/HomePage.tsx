import { observer } from 'mobx-react'
import React, { Suspense } from 'react'
import { Container, Spinner, Tab, Tabs } from 'react-bootstrap'
import { useInjection } from '../ioc/ioc.react'
import ownTypes from '../ioc/ownTypes'
import HomePageStore, { TabsType } from '../stores/HomePageStore'
import { useTranslation } from 'react-i18next';
import Catalog from '../containers/Catalog'

const Login = React.lazy(() => import('../containers/Login'))

const HomePage = observer(() => {
  const store = useInjection<HomePageStore>(ownTypes.homePageStore);
  const { t } = useTranslation(['homePage']);
  
  return (
    <Suspense fallback={<Spinner animation="border" />}>
    <Container className="pt-4 pb-4">
        <Tabs
          activeKey={store.currentTab}
          onSelect={(ev)=> {store.changeTab(ev)}}
          className="mb-3"
        >
          <Tab eventKey={TabsType[TabsType.Catalog]} title={t('tabs.catalog')}>
            {store.currentTab === `${TabsType[TabsType.Catalog]}` && <Catalog />}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Basket]} title={t('tabs.basket')}>
            {/* {store.currentTab === `${TabsType[TabsType.Users]}` && <Users />} */}
          </Tab>
          <Tab eventKey={TabsType[TabsType.Login]} title={t('tabs.login')}>
            {store.currentTab === `${TabsType[TabsType.Login]}` && <Login />}
          </Tab>
        </Tabs>
      </Container>
      </Suspense>
  )
});

export default HomePage;
