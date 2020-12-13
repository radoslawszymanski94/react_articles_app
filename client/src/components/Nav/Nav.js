import React, { useState } from "react";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import { motion } from "framer-motion";
import { fadeIn } from "../../animations";
import {
  HomeOutlined,
  BookOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import logoMin from "../../images/logo-min.png";

const { Sider } = Layout;

const StyledLogo = styled(motion.div)`
  padding: 2rem 0rem;

  img {
    display: block;
    margin: 0 auto;
  }
`;

const Nav = () => {
  const [onCollapse, setOnCollapse] = useState(true);
  const location = useLocation();
  const handleCollapse = () => {
    setOnCollapse(!onCollapse);
  };
  return (
    <Sider
      collapsible
      collapsed={onCollapse}
      onCollapse={handleCollapse}
      className="sidebar"
    >
      <StyledLogo
        className="logo"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <img src={logoMin} alt="Logo" />
      </StyledLogo>
      <Menu
        theme="dark"
        mode="inline"
        className="menu"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/" icon={<HomeOutlined />}>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/articles" icon={<BookOutlined />}>
          <NavLink to={routes.articles}>Articles</NavLink>
        </Menu.Item>
        <Menu.Item key="/create" icon={<PlusCircleOutlined />}>
          <NavLink to={routes.create}>Create article</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Nav;
