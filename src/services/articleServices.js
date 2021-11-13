import axiosWithAuth from '../utils/axiosWithAuth';

const articleService = (setArticles) => {
  axiosWithAuth()
    .get("http://localhost:3000/api/articles")
    .then((r) => {
      setArticles(r.data);
    })
    .catch(err => console.log({ err }));
};

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.