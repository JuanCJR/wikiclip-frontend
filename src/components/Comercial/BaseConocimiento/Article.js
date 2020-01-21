import React, { Component } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import KbService from "../services/KbService";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Link from "@material-ui/core/Link";
import routes from "../routes/routes";
export default class Article extends Component {
  state = {
    article: {},
    attachment: ""
  };

  goBackButton = () => {
    const history = useHistory();
    return (
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          history.goBack();
        }}
      >
        Volver
      </Button>
    );
  };

  async componentDidMount() {
    const kbservice = new KbService();
    let article = await kbservice.renderArticle(this.props._id);
    console.log(article);
    let dataArray = article.attachment.split("/");
    let attachment = dataArray[dataArray.length - 1];
    this.setState({
      article,
      attachment
    });
  } //.
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-2 mb-3 border-bottom">
              <h2>{this.state.article.title}</h2>
            </div>
            <Card style={{ height: "27rem" }}>
              {/* <Card.Header className="d-flex justify-content-between border-bottom pt-1 pb-2 mb-3"></Card.Header> */}
              <Card.Subtitle className="d-flex justify-content-between border-bottom pt-1 pb-2 mb-3 mt-2 ml-1">
                Descripcion: {this.state.article.description}
                <br></br>
                <br></br>
                Categoria: {this.state.article.category}
                <br></br>
                <br></br>
                Fecha: {this.state.article.createdAt}
              </Card.Subtitle>
              <Card.Body>
                <Card.Text>{this.state.article.content}</Card.Text>
              </Card.Body>
              <Card.Footer>Autor: {this.state.article.author}</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={10}>
            <AttachFileIcon />
            <span
              className="customLink"
              onClick={async () => {
                let downloadRoute = await routes.filter(
                  r => (r.Name === "getArticles")
                );
                let dataArray = this.state.article.attachment.split("/");
                const attachment = dataArray[dataArray.length - 1];
                const userName = dataArray[dataArray.length - 2];
                let data = new FormData();
                data.append("attachment", attachment);
                data.append("userName", userName);
                downloadRoute = downloadRoute[0];
                const link = document.createElement("a");
                link.href = `${downloadRoute.Route}/${userName}/${attachment}`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {this.state.attachment}
            </span>
          </Col>
          <Col>
            <this.goBackButton />
          </Col>
        </Row>
      </Container>
    );
  } //.
} //fin
