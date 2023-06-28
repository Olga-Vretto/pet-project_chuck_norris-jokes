import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute/AppRoute';
import  AppLayout  from './AppLayout/AppLayout';

import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
