import styled from 'styled-components';
import FaceBook_LOGO_IMAGE from '../../assets/images/social/facebook-logo.svg';
import Twitter_LOGO_IMAGE from '../../assets/images/social/twitter-logo.svg';
import Youtube_LOGO_IMAGE from '../../assets/images/social/youtube-logo.svg';
import Instargram_LOGO_IMAGE from '../../assets/images/social/instagram-logo.svg';

const Footer = () => {
  return (
    <FooterS>
      <FooterContainer>
        <p>©codeit - 2024</p>
        <FooterInfo>
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </FooterInfo>
        <FooterSocial>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={FaceBook_LOGO_IMAGE} alt="facebook-logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter_LOGO_IMAGE} alt="twitter-logo" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube_LOGO_IMAGE} alt="youtube-logo" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instargram_LOGO_IMAGE} alt="instagram-logo" />
          </a>
        </FooterSocial>
      </FooterContainer>
      <MobileFooterContainer>
        <div className="mobile-footer-content">
          <div className="mobile-footer-info">
            <a href="privacy.html">Privacy Policy</a>
            <a href="faq.html">FAQ</a>
          </div>
          <div className="mobile-footer-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FaceBook_LOGO_IMAGE} alt="facebook-logo" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter_LOGO_IMAGE} alt="twitter-logo" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Youtube_LOGO_IMAGE} alt="youtube-logo" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instargram_LOGO_IMAGE} alt="instagram-logo" />
            </a>
          </div>
        </div>
        <p>©codeit - 2024</p>
      </MobileFooterContainer>
    </FooterS>
  );
};

export default Footer;

const FooterS = styled.footer`
  width: 100%;
  background-color: var(--footer-bg-color);
  color: white;
  min-height: 16rem;
  padding: 3.2rem 20rem;
  font-size: 1.6rem;

  @media (min-width: 744px) and (max-width: 1199px) {
    padding: 3.2rem 2.4rem;
  }

  @media (max-width: 743px) {
    padding: 3.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--footer-font-color);
  }

  @media (max-width: 743px) {
    display: none;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
`;

const MobileFooterContainer = styled.div`
  display: none;

  @media (max-width: 743px) {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .mobile-footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-footer-info {
      display: flex;
      gap: 2rem;
    }

    .mobile-footer-social {
      display: flex;
      gap: 1rem;
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    p {
      color: var(--mobile-footer-font-color);
    }
  }
`;
