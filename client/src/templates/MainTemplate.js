import React from "react";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer";
import { theme } from "../theme/mainTheme";
import { ThemeProvider } from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledLayoutBackground = styled.div`
  padding: 24px;
  min-height: 360px;
`;

const StyledContent = styled(Content)`
  margin: 0 16px;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledLayout>
        <Nav />
        <Layout className="site-layout">
          <StyledContent>
            <StyledLayoutBackground className="site-layout-background">
              {children}
            </StyledLayoutBackground>
          </StyledContent>
          <Footer />
        </Layout>
      </StyledLayout>
    </ThemeProvider>
  );
};

export default MainTemplate;
