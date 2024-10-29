import { Box, Container, Grid, Heading } from '@radix-ui/themes';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagination from '../components/Pagination';

export default function Root() {
  return (
    <main>
      <Header />
      <Container>
        <Box>
          <Heading>베스트 상품</Heading>
          <Grid
            columns={{ initial: '1', sm: '2', md: '4' }}
            gap="3"
            width="auto"
            rows="repeat(1, 1fr)"
            overflow={'hidden'}
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Grid>
        </Box>
        <Box>
          <Heading>판매 중인 상품</Heading>
          <Grid
            columns={{ initial: '2', sm: '3', md: '5' }}
            gap="3"
            width="auto"
            rows="repeat(1, 1fr)"
            overflow={'hidden'}
          >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Grid>
          <Pagination />
        </Box>
      </Container>
      <Footer />
    </main>
  );
}
