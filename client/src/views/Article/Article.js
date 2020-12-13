import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { clearArticle, getArticle } from "../../actions/articles";
import { getArticleId } from "../../utils/index";
import { Spin } from "antd";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledArticleImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

const StyledSpin = styled(Spin)`
  display: block;
  margin: 0 auto;
`;

const StyledBackButton = styled(Button)`
  display: block;
`;

const StyledArticleText = styled.p`
  margin: 30px 0 40px 0;
`;

const Article = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const article = useSelector((state) => state.article);
  useEffect(() => {
    dispatch(getArticle(getArticleId(location, 2)));
    return () => {
      dispatch(clearArticle());
    };
  }, [dispatch]);
  const handleBackClick = () => {
    history.push("/articles");
  };
  return (
    <>
      {article.length !== 0 ? (
        <StyledWrapper>
          <Heading>{article.title}</Heading>
          <h4>Author: {article.author}</h4>
          <StyledArticleImage src={article.mainImage} alt="Main article" />
          <StyledArticleText>{article.text}</StyledArticleText>
          <StyledBackButton
            title={"Back"}
            type={"primary"}
            onClick={() => handleBackClick()}
          >
            Back
          </StyledBackButton>
        </StyledWrapper>
      ) : (
        <StyledSpin />
      )}
    </>
  );
};

export default Article;
