import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import 'antd/dist/antd.css';

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: "Quicksand", sans-serif;
    }

    .ant-menu {
        &.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
            background-color: ${({ theme }) => theme.orange}
        }
    }  

    .ant-layout-sider {
        &.ant-layout-sider {
            background: ${({ theme }) => theme.darkBlue};
        }
    }

    .ant-layout-sider-children {
        .ant-menu {
            background: ${({ theme }) => theme.darkBlue};
        }
    }
`;

export default GlobalStyle;
