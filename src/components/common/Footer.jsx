import styled from "styled-components";

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
  margin: 0 20rem;
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .copyright {
    font-weight: 400;
    line-height: 1.909rem;
    color: ${(props) => props.theme.color.mainGrey};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.footerLink};
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
          <a>Privacy Policy</a>
          <a>FAQ</a>
        </LinksContainer>
        <SocialMediaLinkContainer>
          <a target="_blank" href="https://www.facebook.com/">
            <img src="../public/images/home/ic_facebook.png" />
          </a>
          <a target="_blank" href="https://www.x.com/">
            <img src="../public/images/home/ic_twitter.png" />
          </a>
          <a target="_blank" href="https://www.youtube.com/">
            <img src="../public/images/home/ic_youtube.png" />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <img src="../public/images/home/ic_instagram.png" />
          </a>
        </SocialMediaLinkContainer>
      </FooterContainer>
    </FooterComponent>
  );
}

export default Footer;
