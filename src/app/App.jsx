import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRoute/AppRouter';
import AppLayout from './AppLayout/AppLayout';

import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
