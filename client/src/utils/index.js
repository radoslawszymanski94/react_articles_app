export const getArticleId = (location, arrayPosition) => {
  const path = location.pathname.split("/");
  const articleId = path[arrayPosition];
  return articleId;
};
