import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
