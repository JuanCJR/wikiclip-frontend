import routes from "../routes/routes";
import axios from "axios";

class KbService {
  async renderArticles(nro, category) {
    let data = new FormData();
    data.append("nro", nro);
    data.append("category", category);
    let route = await routes.filter(r => r.Name === "getArticles");
    let articles = await axios.post(route[0].Route, data);

    return articles.data;
  } //

  async renderArticle(_id) {
    let route = await routes.filter(r => r.Name === "getArticle");
    console.log(routes);
    let article = await axios.get(route[0].Route + "/" + _id);
    return article.data;
  }

  async searchArticle(nro, category, search) {
    let data = new FormData();
    data.append("nro", nro);
    data.append("category", category);
    data.append("search", search);
    let route = await routes.filter(r => r.Name === "getArticles");
    let articles = await axios.post(route[0].Route, data);
    return articles.data;
  }

  async newArticle(data) {
    let route = await routes.filter(r => r.Name === "newArticle");
    const article = await axios.post(route[0].Route, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return article;
  }
}

export default KbService;
