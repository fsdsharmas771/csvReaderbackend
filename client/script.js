fetch('http://localhost:3000/')
.then((res) => res.json())
.then((gfg_articles) => console.log(gfg_articles));