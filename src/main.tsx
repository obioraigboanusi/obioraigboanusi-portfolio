import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout.tsx';
import AppRoutes from './components/AppRoutes.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </BrowserRouter>,
);
