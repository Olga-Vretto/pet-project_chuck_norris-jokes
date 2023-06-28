import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

 const AppRoute = () => {
  const routes = useRoutes([
    { path: ROUTES.undefined, element: <Navigate to='/' /> },
    { path: ROUTES.main, element: <div>Main</div> },
    { path: ROUTES.favorite, element: <div>Test</div> },
  ]);
  return routes;
};
 export default AppRoute;
