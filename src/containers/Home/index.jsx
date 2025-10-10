import { useEffect } from 'react';
import { CategoryCarousel, OffersCarousel } from '../../components';
import { Banner, Container } from './styles';

export function Home() {
  useEffect(() => {
    sessionStorage.setItem(
      'fromPage',
      window.location.pathname + window.location.search,
    );
  }, []);

  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <div>
          <CategoryCarousel />
          <OffersCarousel />
        </div>
      </Container>
    </main>
  );
}
