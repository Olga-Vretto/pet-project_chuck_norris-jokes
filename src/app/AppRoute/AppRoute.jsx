import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Button from '../components/Button/Button';
import Quote from '../components/Quote/Quote';

const AppRoute = () => {
  const routes = useRoutes([
    { path: ROUTES.undefined, element: <Navigate to='/' /> },
    {
      path: ROUTES.main,
      element: (
        <div>
          <Button>Chuck</Button>
          <Quote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime dolorum, corrupti nam assumenda sequi numquam molestias ipsa dicta minus ducimus illo incidunt id eaque aliquid quisquam dolore beatae alias eum?</Quote>
        </div>
      ),
    },
    { path: ROUTES.favorite, element: <div>Test</div> },
  ]);
  return routes;
};
export default AppRoute;
