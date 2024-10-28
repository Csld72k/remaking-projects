const express = require("express");

const app = express();

// route params
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`
    Hello, world! 
    Message ID: ${id}
    User: ${user}`)
})

// query params
app.get("/users", (request, response) => {
  const { page, limit } = request.query

  response.send(`Page: ${page}. Limit: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

