import { CategoryCarousel } from '../../components/CategoryCarousel';
import { Banner, Container, Content } from './styles';

export default function Home() {
  return (
    <main>
      <Banner>
        <h1>Bem-vindo(a)!</h1>
      </Banner>
      <Container>
        <Content>
         <CategoryCarousel />
          <div>Carrousel de produtos</div>
        </Content>
      </Container>
    </main>
  );
}
