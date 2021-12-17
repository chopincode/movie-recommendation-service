const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

//TODO: Use Axios to send the HTTP request to catalog service to obtain the movies
app.get('/recommendations', (req, res) => {
  res.send({result: {
      movies: [
        {
          movieName: "Harry Potter",
          movieImageURL: "www.google.com"
        },
        {
          movieName: "Harry Potter2",
          movieImageURL: "www.facebook.com"
        },
        {
          movieName: "Harry Potter3",
          movieImageURL: "www.amazon.com"
        },
      ],
    },
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
