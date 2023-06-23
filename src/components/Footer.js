import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaDolly, FaRedo, FaDollarSign } from "react-icons/fa";


function Footer({ socialLinks }) {
  const services = [
    {
      id: 1,
      icon: <FaDolly />,
      title: "free shipping",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    },
    {
      id: 2,
      icon: <FaRedo />,
      title: "30 days return policy",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    },
    {
      id: 3,
      icon: <FaDollarSign />,
      title: "secured payment",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cumque!"
    }
  ];
  return (
    <FooterWrapper>

      <div className="pt-2">
      <div className="container">
        <div className="row">
          {services.map(service => (
            <div
              key={service.id}
              className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
            >
              <div className="service-icon">{service.icon}</div>
              <div className="mt-3 text-capitalize">{service.title}</div>
              <div className="mt-3">{service.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
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
