let ip = "";
const port = process.env.REACT_APP_BACKEND_PORT;
let routes = [];

if (process.env.NODE_ENV === "development") {
  ip = process.env.REACT_APP_BACKEND_DEV;

  routes = [
    {
      Name: "Signin",
      Route: "https://" + ip + ":" + port + "/api/auth/signin"
    },
    {
      Name: "getArticles",
      Route: `https://${ip}:${port}/api/articles`
    },
    {
      Name: "getArticle",
      Route: `https://${ip}:${port}/api/articles/article`
    }
  ];
} else {
  routes = [
    {
      Name: "Signin",
      Route: "/api/auth/signin"
    },
    {
      Name: "getArticles",
      Route: `/api/articles`
    },
    {
      Name: "getArticle",
      Route: `/api/articles/article`
    }
  ];
}

export default routes;
