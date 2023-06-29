import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Main from '../../pages/main/main';

const AppRoute = () => {
  const routes = useRoutes([
    { path: ROUTES.undefined, element: <Navigate to='/' /> },
    { path: ROUTES.main, element: <Main /> },
    { path: ROUTES.favorite, element: <div>Test</div> },
  ]);
  return routes;
};
export default AppRoute;
