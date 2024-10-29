import { Container, Grid, Heading, Section } from '@radix-ui/themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';
import ItemCard from '../components/ItemCard';

export default function Root() {
  return (
    <main>
      <Header />
      <Container>
        <Section>
          <Heading>베스트 상품</Heading>
          <Grid
            columns={{ initial: '1', sm: '2', md: '4' }}
            gap="3"
            width="auto"
            rows="repeat(1, 1fr)"
            overflow={'hidden'}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <ItemCard key={i} />
            ))}
          </Grid>
        </Section>
        <Section>
          <Heading>판매 중인 상품</Heading>
          <Grid
            columns={{ initial: '2', sm: '3', md: '5' }}
            gap="3"
            width="auto"
            rows="repeat(1, 1fr)"
            overflow={'hidden'}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <ItemCard key={i} />
            ))}
          </Grid>
          <Section>
            <Pagination />
          </Section>
        </Section>
      </Container>
      <Footer />
    </main>
  );
}
