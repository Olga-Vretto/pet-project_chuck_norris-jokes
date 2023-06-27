import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: ROUTES.main,
      element: <div>Main</div>,
    },
    {
      path: ROUTES.favorite,
      element: <div>Test</div>,
    },
  ]);
  return routes;
};

export default AppRouter;
