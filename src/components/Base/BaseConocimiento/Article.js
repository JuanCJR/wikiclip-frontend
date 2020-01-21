import React, { Component } from "react";
import {
  useHistory
} from "react-router-dom";
import KbService from "../services/KbService";
import { Button, Container, Row, Col, Card } from "react-bootstrap";


export default class Article extends Component {
  state = {
    article: {},
    attachment: ""
  };

  goBackButton = () => {
    const history = useHistory();
    return (
      <Button
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
              <Card.Title className="d-flex justify-content-between border-bottom pt-1 pb-2 mb-3">
                {this.state.article.description}
              </Card.Title>
              <Card.Subtitle className="d-flex justify-content-between border-bottom pt-1 pb-2 mb-3">
                Fecha: {this.state.article.createdAt}
              </Card.Subtitle>
              <Card.Body>
                <Card.Text>{this.state.article.content}</Card.Text>
              </Card.Body>
              <Card.Footer>{this.state.article.author}</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={10}>
            <Button
              onClick={async () => {
               
                let dataArray = this.state.article.attachment.split("/");
                const attachment = dataArray[dataArray.length - 1];
                const userName = dataArray[dataArray.length - 2];
                let data = new FormData();
                data.append("attachment", attachment);
                data.append("userName", userName);
               
               const link = document.createElement('a');
               link.href = `https://192.168.0.54:8081/api/articles/${userName}/${attachment}`
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);

                
                // const response = await axios.post(
                //   "https://localhost:8081/api/articles/attachment",
                //   data,
                //   { responseType: "stream" }
                // );
                // response.data.pipe(writer);
              }}
            >
              Adjunto
            </Button>
          </Col>
          <Col>
            <this.goBackButton />
          </Col>
        </Row>
      </Container>
    );
  } //.
} //fin
