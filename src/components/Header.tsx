import { Section, Container, Button, Flex, Link, Text } from '@radix-ui/themes';
import { css } from '@emotion/react';
import headerLogo from '../assets/header-logo.png';

type HeaderItem = {
  label: string;
  href: string;
  type: 'img' | 'link' | 'button';
  src?: string;
};

const headerItems: HeaderItem[] = [
  { label: '판다마켓', href: '#', type: 'img', src: headerLogo },
  { label: '자유게시판', href: '#', type: 'link' },
  { label: '중고마켓', href: '#', type: 'link' },
  { label: '로그인', href: '#', type: 'button' },
];

function Header(): React.ReactNode {
  return (
    <Section
      p="0"
      style={{
        borderBottom: 'inset 1px #DFDFDF',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
      }}
    >
      <Container maxWidth="1920px">
        <Flex
          maxWidth="1520px"
          height="68px"
          align="center"
          asChild
          p="0"
          m="auto"
        >
          <ul style={{ listStyle: 'none' }}>
            {headerItems.map(({ label, href, type, src }) => (
              <li
                css={css`&:has(button) { flex-grow: 1; text-align: right} padding: 20px 15px`}
                key={label}
              >
                <Link href={href} underline="none">
                  {type === 'img' && <img width="153" src={src} alt="logo" />}
                  {type === 'link' && (
                    <Text
                      size="4"
                      trim="both"
                      weight="bold"
                      style={{ color: 'var(--gray-9)' }}
                    >
                      {label}
                    </Text>
                  )}
                  {type === 'button' && (
                    <Button size="3">
                      <Text>{label}</Text>
                    </Button>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
      </Container>
    </Section>
  );
}

export default Header;
