import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
