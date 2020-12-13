import { Route, BrowserRouter, Switch } from "react-router-dom";
import { routes } from "../../routes";
import Article from "../Article/Article.js";
import ArticlesList from "../ArticlesList/ArticlesList.js";
import AddEditArticle from "../AddEditArticle/AddEditArticle.js";
import Home from "../Home/Home.js";
import MainTemplate from "../../templates/MainTemplate";
import "antd/dist/antd.css";

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.articles} component={ArticlesList} />
          <Route exact path={routes.article} component={Article} />
          <Route path={routes.create} component={AddEditArticle} />
          <Route path={routes.edit} component={AddEditArticle} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
