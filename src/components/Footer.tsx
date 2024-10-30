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
import InstagramLogo from '../assets/image/footer/instagram-logo.svg';
import YoutubeLogo from '../assets/image/footer/youtube-logo.svg';
import FacebookLogo from '../assets/image/footer/facebook-logo.svg';
import TwitterLogo from '../assets/image/footer/twitter-logo.svg';

type linkItem = {
  label: string;
  href: string;
  imgSrc?: string;
};

const SNSLinkList: linkItem[] = [
  {
    label: 'Facebook',
    href: '#',
    imgSrc: FacebookLogo,
  },
  {
    label: 'Instagram',
    href: '#',
    imgSrc: InstagramLogo,
  },
  {
    label: 'Twitter',
    href: '#',
    imgSrc: TwitterLogo,
  },
  {
    label: 'Youtube',
    href: '#',
    imgSrc: YoutubeLogo,
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
              {SNSLinkList.map(({ label, href, imgSrc }) => (
                <Link key={label} href={href} underline="none">
                  <IconButton
                    size="1"
                    aria-label={label}
                    radius="full"
                    variant="ghost"
                  >
                    <img src={imgSrc} alt={label} />
                  </IconButton>
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
