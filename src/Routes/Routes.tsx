import { Route, Switch } from 'react-router-dom';
import AppContainer from '../AppContainer';
import { Suspense } from 'react';
import { PAGE_ROUTES } from '../utils/constants';
import NewsPage from '../Pages/NewsPage';
import PageLoadingAnimation from '../Components/PageLoadingAnimation/PageLoadingAnimation';


const Routes = () => {
    return (
        <div>
             <Route exact path={PAGE_ROUTES.ROOT} component={PageLoadingAnimation} />
            {location.pathname !== PAGE_ROUTES.ROOT && (
            <Switch>
                <AppContainer>
                    <Suspense>
                        <Route 
                        path={PAGE_ROUTES.NEWS}
                        component={NewsPage}
                        />
                    </Suspense>
                </AppContainer>
            </Switch>
            )}
        </div>
    )
}

export default Routes;