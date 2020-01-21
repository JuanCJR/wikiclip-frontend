import routes from '../routes/routes';
import axios from 'axios';

class KbService {
    async renderArticles(){
        let route = await routes.filter(r=>r.Name ==="getArticles");
        let articles = await axios.get(route[0].Route);
       
        return articles.data;
    }//

    async renderArticle(_id){
        let route = await routes.filter(r=>r.Name ==="getArticles");
        let article = await axios.get(route[0].Route+"/"+_id);
        return article.data;
    } 
}

export default KbService;