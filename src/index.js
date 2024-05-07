const express = require("express")
const useGraphql = require ("./graphql/index")


const createApp =async() => {
  const app = express()
  
  app.get("/", (req, res) => {
  res.send("Hola")
  })
  await useGraphql(app)
  return app
} 
(async()=> {
  const port = 4000
  const app = await createApp()
  app.listen(port,()=> {
  console.log( `mi port ${port}`);
})
})()

