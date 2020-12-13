import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import {
  createArticle,
  getArticle,
  clearArticle,
} from "../../actions/articles";
import FileBase from "react-file-base64";
import { updateArticle } from "../../api";
import { fadeIn } from "../../animations/index";
import { getArticleId } from "../../utils/index";
import ValidationInfo from "./ValidationInfo/ValidationInfo";
import * as Yup from "yup";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;

  .inputLabel {
    margin-top: 10px;
  }

  input:not([type="file"]),
  textarea {
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.grey300};
    border-radius: 5px;
  }

  textarea {
    margin-top: 0;
  }

  .submitBtn {
    width: 20%;
    margin: 20px auto;
    padding: 7px 20px;
    border: none;
    background-color: ${({ theme }) => theme.orange};
    color: white;
    cursor: pointer;
  }

  .validationInfo {
    color: red;
  }
`;

const Form = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const article = useSelector((state) => state.article);
  useEffect(() => {
    if (!(pathname === "/create")) {
      dispatch(getArticle(getArticleId(location, 3)));
    } else {
      dispatch(clearArticle());
    }
  }, [dispatch, location]);

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(100, "Article title must contain less than 100 characters")
      .required("Required"),
    text: Yup.string()
      .max(2000, "Article text must contain less than 2000 characters")
      .required("Required"),
    author: Yup.string()
      .max(50, "Article author must contain less than 50 characters")
      .required("Required"),
  });
  const pathChecker = (inputName) => {
    const inputValue = pathname !== "/create" ? inputName : "";
    return inputValue;
  };
  const {
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: pathChecker(article.title),
      text: pathChecker(article.text),
      author: pathChecker(article.author),
      mainImage: pathChecker(article.mainImage),
    },
    validationSchema,
    onSubmit: (values, { resetForm, setFieldValue }) => {
      if (pathname === "/create") {
        dispatch(createArticle(values));
      } else {
        dispatch(updateArticle(getArticleId(location, 3), values));
      }
      setFieldValue("mainImage", "");
      resetForm({});
    },
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="title" className="inputLabel">
        Title
      </label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Article title"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.title}
      />
      {errors.title && touched.title ? (
        <ValidationInfo animation={fadeIn}>{errors.title}</ValidationInfo>
      ) : null}
      <label htmlFor="text" className="inputLabel">
        Text
      </label>
      <textarea
        id="text"
        name="text"
        placeholder="Article text"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.text}
      />
      {errors.text && touched.text ? (
        <ValidationInfo animation={fadeIn}>{errors.text}</ValidationInfo>
      ) : null}
      <label htmlFor="author" className="inputLabel">
        Author
      </label>
      <input
        id="author"
        name="author"
        type="text"
        placeholder="Article author"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.author}
      />
      {errors.author && touched.author ? (
        <ValidationInfo animation={fadeIn}>{errors.author}</ValidationInfo>
      ) : null}
      <label htmlFor="mainImage">Image</label>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setFieldValue("mainImage", base64)}
      />
      <button type="submit" className="submitBtn">
        Submit
      </button>
    </StyledForm>
  );
};

export default Form;
