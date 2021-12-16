const express = require('express')
const app = express()
const port = 3000

app.get('/recommendations', (req, res) => {
  res.send({
    result: {
      movies: [
        {
          movieName: "Harry Poter",
          movieImageURL: "www.google.com"
        },
        {
          movieName: "Harry Poter2",
          movieImageURL: "www.facebook.com"
        },
        {
          movieName: "Harry Poter3",
          movieImageURL: "www.amazon.com"
        },
      ],
    },
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})