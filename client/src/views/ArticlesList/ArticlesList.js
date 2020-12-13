import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import { deleteArticle, getArticles } from "../../actions/articles";
import Table from "../../components/Table/Table";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import { Popconfirm, message, Typography } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Paragraph } = Typography;

const StyledActionButton = styled(Button)`
  margin-right: 5px;
  border: 1px solid #000;
`;

const ArticlesList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector((state) =>
    state.articles.filter((article) => article !== undefined)
  );
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const handleArticleView = (recordId) => {
    history.push(`/articles/${recordId}`);
  };

  const handleDeleteArticle = (recordId) => {
    dispatch(deleteArticle(recordId))
      .then(() => dispatch(getArticles()))
      .then(() => message.success("Article deleted successfully."));
  };

  const columns = [
    {
      title: "Article title",
      dataIndex: "title",
    },
    {
      title: "Text",
      dataIndex: "text",
      render: (text) => <Paragraph ellipsis={{ rows: 2 }}>{text}</Paragraph>,
    },
    {
      title: "Author",
      dataIndex: "author",
    },
    {
      title: "Created",
      dataIndex: "createdAt",
      render: (time) => (
        <span>{moment(time).format("MMMM Do YYYY, h:mm:ss")}</span>
      ),
    },
    {
      title: "Actions",
      dataIndex: "",
      width: 150,
      render: (record) => {
        return (
          <div>
            <StyledActionButton
              title={"View"}
              shape={"circle"}
              icon={<SearchOutlined />}
              onClick={() => handleArticleView(record._id)}
              success="true"
            />
            <StyledActionButton
              title={"Edit"}
              shape={"circle"}
              icon={<EditOutlined />}
              onClick={() => history.push(`/articles/edit/${record._id}`)}
            />
            <Popconfirm
              placement="top"
              title={"Do you want to remove this article?"}
              onConfirm={() => handleDeleteArticle(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <StyledActionButton
                type={"primary"}
                shape={"circle"}
                icon={<DeleteOutlined />}
                danger
              />
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Heading>Articles</Heading>
      <Table columns={columns} numberOfItems={3} articles={articles} />
    </>
  );
};

export default ArticlesList;
