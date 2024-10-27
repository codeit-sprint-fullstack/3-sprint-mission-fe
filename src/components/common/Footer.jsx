import styled from "styled-components";
import facebookLogo from "../../../public/images/home/ic_facebook.png";
import twitterLogo from "../../../public/images/home/ic_twitter.png";
import youtubeLogo from "../../../public/images/home/ic_youtube.png";
import instagramLogo from "../../../public/images/home/ic_instagram.png";

const FooterComponent = styled.footer`
  background-color: ${(props) => props.theme.color.subBlack};
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 152rem;
  margin: 3.2rem 20rem 0 20rem;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  .copyright {
    font-weight: 400;
    line-height: 1.909rem;
    color: ${(props) => props.theme.color.mainGrey};
  }
  ${(props) => props.theme.media.medium} {
    width: 100%;
    margin: 3.2rem 2.4rem 0 2.4rem;
  }
  ${(props) => props.theme.media.small} {
    width: 100%;
    margin: 3.2rem 1.6rem 0 1.6rem;
    .copyright {
      margin-bottom: 2.4rem;
    }
  }
`;

const LinksContainer = styled.div`
  width: 15.9rem;
  display: flex;
  color: ${(props) => props.theme.color.anotherIvory};
  gap: 3rem;
`;

const SocialMediaLinkContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  img {
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <FooterContainer>
        <div className="copyright">@codeit-2024</div>
        <LinksContainer>
          <a target="_blank" href="/Privacy-Policy">
            Privacy Policy
          </a>
          <a target="_blank" href="/FAQ">
            FAQ
          </a>
        </LinksContainer>
        <SocialMediaLinkContainer>
          <a target="_blank" href="https://www.facebook.com/">
            <img src={facebookLogo} />
          </a>
          <a target="_blank" href="https://www.x.com/">
            <img src={twitterLogo} />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <img src={youtubeLogo} />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <img src={instagramLogo} />
          </a>
        </SocialMediaLinkContainer>
      </FooterContainer>
    </FooterComponent>
  );
}

export default Footer;
