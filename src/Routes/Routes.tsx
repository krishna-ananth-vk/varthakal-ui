import { Route, Switch, useLocation } from 'react-router-dom';
import AppContainer from '../AppContainer';
import { Suspense } from 'react';
import { PAGE_ROUTES } from '../utils/constants';
import NewsPage from '../Pages/NewsPage';
import PageLoadingAnimation from '../Components/PageLoadingAnimation/PageLoadingAnimation';


const Routes = () => {
    const location = useLocation();
    return (
        <div>
             <Route exact path={PAGE_ROUTES.ROOT} component={PageLoadingAnimation} />
            {location.pathname !== PAGE_ROUTES.ROOT && (
            <Switch>
                <AppContainer>
                    <Suspense
                        fallback={(
                            <PageLoadingAnimation />
                        )}
                    >
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