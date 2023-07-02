import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Main from '../../pages/main/main';
import Favorite from '../../pages/favorite/favorite';

const AppRoute = () => {
  const routes = useRoutes([
    { path: ROUTES.undefined, element: <Navigate to='/' /> },
    { path: ROUTES.main, element: <Main /> },
    { path: ROUTES.favorite, element: <Favorite /> },
  ]);
  return routes;
};
export default AppRoute;
