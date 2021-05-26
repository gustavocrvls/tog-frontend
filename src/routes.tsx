import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Home } from './pages/Home';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route path="/" component={Home} />
      </Container>
    </BrowserRouter>
  );
}
