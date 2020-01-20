import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import KbService from "../services/KbService";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import DvrIcon from "@material-ui/icons/Dvr";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import Button from "@material-ui/core/Button";
import NuevoArticulo from "./NuevoArticulo";
import Article from "./Article";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

export default class BaseConocimiento extends Component {
  state = {
    articles: [],
    nro: 1,
    category: "all",
    search: ""
  };
  async componentDidMount() {
    const kbservice = new KbService();

    const articles = await kbservice.renderArticles(1, this.state.category);
    this.setState({
      articles
    });
  } //.

  filterCategory = async category => {
    const kbservice = new KbService();

    const articles = await kbservice.renderArticles(1, category);
    if (articles.length > 0) {
      this.setState({
        articles,
        category: category
      });
    }
  };

  searchItems = async () => {
    const kbservice = new KbService();
    const search = document.getElementById("txtSearch").value;
    console.log(search);
    const articles = await kbservice.searchArticle(1, "all", search);
    console.log(articles)
    this.setState({
      articles,
      category: "all",
      search: search
    });
  };

  nextItems = async () => {
    if (this.state.articles.length >= 5) {
      const kbservice = new KbService();
      const articles = await kbservice.renderArticles(
        this.state.nro + 1,
        this.state.category
      );
      this.setState({
        articles,
        nro: this.state.nro + 1
      });
    }
  };

  beforeItems = async () => {
    if (this.state.nro > 1) {
      const kbservice = new KbService();
      const articles = await kbservice.renderArticles(
        this.state.nro - 1,
        this.state.category
      );
      console.log(this.state.nro--);
      this.setState({
        articles,
        nro: this.state.nro - 1
      });
    }
  };

  render() {
    return <this.baseconocimiento />;
  } //

  baseconocimiento = () => {
    const match = useRouteMatch();
    const history = useHistory();

    return (
      <Switch>
        {/* Lista Base conocimiento */}
        <Route exact path={match.path}>
          <Row className="mt-3">
            <Col>
              <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-1 pb-1 mb-1 border-bottom">
                <h3>Base de Conocomiento</h3>
                <Paper>
                  <SearchIcon elevation={3} />
                  <InputBase
                    id="txtSearch"
                    style={{ width: "inherit" }}
                    placeholder="Buscar.."
                    inputProps={{ "aria-label": "search" }}
                  />
                  <Button
                    onClick={() => {
                      this.searchItems();
                    }}
                    variant="contained"
                    color="default"
                  >
                    Buscar
                  </Button>
                </Paper>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 h-75">
            <Col md={2} className="p-0">
              <List
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Tipo de articulos
                  </ListSubheader>
                }
                component="nav"
                aria-label="main mailbox folders"
              >
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    this.filterCategory("all");
                  }}
                >
                  <ListItemIcon>
                    {/* icono */}
                    <AllInboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Todos" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    this.filterCategory("Marketing");
                  }}
                >
                  <ListItemIcon>
                    {/* icono */}
                    <RecordVoiceOverIcon />
                  </ListItemIcon>
                  <ListItemText primary="Marketing" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    this.filterCategory("Partners");
                  }}
                >
                  <ListItemIcon>
                    {/* icono */}
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Partners" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    this.filterCategory("Presentaciones");
                  }}
                >
                  <ListItemIcon>
                    {/* icono */}
                    <DvrIcon />
                  </ListItemIcon>
                  <ListItemText primary="Presentaciones" />
                </ListItem>
              </List>
            </Col>
            <Col>
              <TableContainer className="h-100" component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableCell>Titulo</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>Autor</TableCell>
                    <TableCell></TableCell>
                  </TableHead>
                  <this.articles />
                </Table>
              </TableContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={this.beforeItems}
              >
                Anterior
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.nextItems}
              >
                Siguiente
              </Button>
            </Col>
          </Row>
          <Row>
            <div className="mt-3 ml-auto">
              <span
                onClick={() => {
                  history.push(`${match.url}/newkb`);
                }}
              >
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
              </span>
            </div>
          </Row>
        </Route>

        {/* Nuevo articulo */}
        <Route path={`${match.url}/newkb`}>
          <NuevoArticulo
            userName={this.props.userName}
            token={this.props.token}
          />
          {console.log(this.props.userName)}
        </Route>

        {/* Articulo individual */}
        <Route path={`${match.url}/:_id`}>
          <this.article />
        </Route>
      </Switch>
    );
  };

  //Articulo indivual
  article = () => {
    let { _id } = useParams();
    return <Article _id={_id} />;
  };

  //Lista de articulos
  articles = () => {
    const history = useHistory();
    const match = useRouteMatch();
    if (this.state.articles.length) {
      return (
        <TableBody>
          {this.state.articles.map(articles => (
            <TableRow key={articles._id}>
              <TableCell>{articles.title}</TableCell>
              <TableCell>{articles.description}</TableCell>
              <TableCell>{articles.category}</TableCell>

              <TableCell>{articles.author}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-100"
                  onClick={() => {
                    history.push(`${match.url}/${articles._id}`);
                  }}
                >
                  Ver
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      );
    } else {
      return <div>Loading...</div>;
    }
  }; //.
}
