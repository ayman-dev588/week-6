const express = require('express');
const app = express();
const port = 3000;

const {articles} = require('./articles.json');

app.get('/', (req, res) => {
  res.send('✌️✌️');  
});

app.get('/articles', (req, res) => {
  res.json(articles);
});


//Filter by Bias
app.get('/articles/bias/:bias', (req, res) => {
  const article = articles.filter((article) => article.bias === req.params.bias);
  if(!article){
    return res.status(404).send(`No content found`);
  }
  res.json(article);
});

//Filter by ID
app.get('/articles/:id', (req, res) => {
  const articleId = parseInt(req.params.id)
  const article = articles.find((article) => article.id === articleId)

  if(!article){
    return res.status(404).send(`No content found of ${articleId}`)
  }
  res.json(article)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});