import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Typography from './Typography';

const Container = styled.footer`
  display: block;
  
  @media(min-width: 1024px) {
    display: flex;
    flex-direction: row;
    box-shadow: none;
  }
`;

const FooterToolbar = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const LegalDescription = styled(Typography)`
  margin-top: 24px;

  span {
    display: block;
  }

  @media (min-width: 1024px) {
    display: flex;
    max-width: 840px;
    justify-content: center;
    margin: 0 auto;

    span {
      margin: 0 24px;
    }
  }
`;

const Logo = styled.div`
  &&& {
    margin: 0 auto;

    @media(min-width: 1024px) {
      margin: 0;
    }
  }
`;

const Footer = ({ links }) => (
  <>
    <Container>
      <Logo>
        <Image
          width={100}
          height={100}
          src={logo}
          alt="Yak"
        />
      </Logo>
      <FooterToolbar>
        {links}
      </FooterToolbar>
    </Container>
    <LegalDescription variant="body2" tag="div">
      <span>© 2021 YAK. All right reserved.</span>
      <span>Privacy Policy</span>
    </LegalDescription>
  </>
);

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node),
};

Footer.defaultProps = {
  links: null,
};

export default Footer;
