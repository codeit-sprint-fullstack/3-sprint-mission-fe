import {
  Container,
  Flex,
  Grid,
  Section,
  Link,
  Text,
  IconButton,
} from '@radix-ui/themes';
import { css } from '@emotion/react';

type linkItem = {
  label: string;
  href: string;
  imgSrc?: string;
};

const SNSLinkList: linkItem[] = [
  {
    label: 'Facebook',
    href: '#',
    imgSrc: '',
  },
  {
    label: 'Instagram',
    href: '#',
    imgSrc: '',
  },
  {
    label: 'Twitter',
    href: '#',
    imgSrc: '',
  },
  {
    label: 'Youtube',
    href: '#',
    imgSrc: '',
  },
];

const footerLinks: linkItem[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'FAQ', href: '#' },
];

function Footer() {
  return (
    <Section
      height="160px"
      p="0"
      style={{ backgroundColor: 'var(--gray-12)' }}
      asChild
    >
      <footer>
        <Container maxWidth="1920px" pt="6" px={{ initial: '4', sm: '5' }}>
          <Grid
            css={[
              css`@container style(--is-xl: true){ justify-items: center;}`,
            ]}
            columns={{ initial: '2', sm: '3' }}
            maxHeight="1520px"
            align="center"
            gapY="5"
          >
            <Flex css={{ '@container style(--is-sm: false)': { order: 3 } }}>
              <Text trim="both" style={{ color: 'var(--gray-7)' }}>
                ©codeit - 2024
              </Text>
            </Flex>

            <Flex gap="6" justify={{ initial: 'start', sm: 'center' }}>
              {footerLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  underline="none"
                  style={{ color: 'var(--gray-6)' }}
                  trim="both"
                >
                  {label}
                </Link>
              ))}
            </Flex>

            <Flex gap="3" justify="end">
              {SNSLinkList.map(({ label, href }) => (
                <Link key={label} href={href} underline="none">
                  <IconButton
                    size="1"
                    color="gray"
                    aria-label={label}
                    radius="full"
                  />
                </Link>
              ))}
            </Flex>
          </Grid>
        </Container>
      </footer>
    </Section>
  );
}

export default Footer;
