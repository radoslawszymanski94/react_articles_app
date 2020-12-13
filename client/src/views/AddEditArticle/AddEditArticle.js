import React from "react";
import Heading from "../../components/Heading/Heading";
import Form from "../../components/Form/Form";

const AddEditArticle = ({ location }) => {
  const { pathname } = location;
  const title = pathname === "/create" ? "Create" : "Edit";
  return (
    <>
      <Heading>{`${title} an article`}</Heading>
      <Form pathname={pathname} />
    </>
  );
};

export default AddEditArticle;
