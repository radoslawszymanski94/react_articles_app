import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getArticles } from "../../actions/articles";
import Heading from "../../components/Heading/Heading";
import { Statistic, Divider } from "antd";

const StyledWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const articles = useSelector((state) => state.articles);
  return (
    <>
      <Heading>Welcome</Heading>
      <StyledWrapper>
        <p>
          Welcome to Articles app, where you can add, edit and preview articles.
        </p>
        <Divider />
        <p>
          If you want to see all available articles, go to
          <strong> Articles</strong> tab in the side menu. You can also preview,
          edit and delete there.
        </p>
        <p>
          If you want to see some information about me, please go to the
          <strong> Info</strong> tab.
        </p>
        <p>
          To create new article, click
          <strong> Create article</strong> tab.
        </p>
        <Divider />
        <Statistic
          title="Current number of available articles:"
          value={articles.length}
        />
      </StyledWrapper>
    </>
  );
};

export default Home;
