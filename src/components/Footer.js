import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";


function Footer({ socialLinks }) {
 
  return (
    <div className="text-light bg-dark">    
     
      <div className="container py-1 text-center ">                       
            {socialLinks.map(link => (
              <a className="mx-2 text-white fs-4 " key={link.id} href={link.url}>
                {link.icon}
              </a>
              
            ))}
              <p className="mt-3">
              copyright &copy; Gadget BD 2023 all rights
              reserved
            </p>
          </div>
    </div>
  );
}
const mapStatesToProps = ({ products }) => {
  return { socialLinks: products.socialLinks };
};

const FooterWrapper = styled.footer`
 
`;

export default connect(mapStatesToProps, null)(Footer);
