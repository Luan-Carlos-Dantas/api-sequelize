const app = require("./src/app.js");

const PORT = 8000;

app.listen(PORT, ()=>{
  console.log("Conectando em: http://localhost:8000");
});