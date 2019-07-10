const express = require("express");
const app = express();
const port = 3000;
const myLogger = (req, res, next) => {
  req.myLogger = "LOGGED";
  next();
};
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);
app.get("/", (req, res) => {
  const responseText = `
    Hello World!<br />
    <small>${req.myLogger}</small><br />
    <small>Requested at: ${req.requestTime}</small>
    `;
  res.send(responseText);
});
app.listen(port, () => console.log(`Example app listening on port ${port}`));
