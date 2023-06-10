import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

function Footer({ socialLinks }) {
  return (
    <FooterWrapper>
      <div className="container py-3 text-center">                       
            {socialLinks.map(link => (
              <a className="mx-2" key={link.id} href={link.url}>
                {link.icon}
              </a>
              
            ))}
              <p className="mt-3">
              copyright &copy; Gadget BD 2023 all rights
              reserved
            </p>
          </div>
    </FooterWrapper>
  );
}
const mapStatesToProps = ({ products }) => {
  return { socialLinks: products.socialLinks };
};

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

export default connect(mapStatesToProps, null)(Footer);
