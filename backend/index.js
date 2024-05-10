const express = require("express");
const cors = require("cors");
const middleware = require("./middleware");

const app = express();
const PORT = 5000;

app.use(cors());

app.use(middleware.decodeToken);

app.get("/CgpaCalculator", (req, res) => {
  console.log(req.user);
  return res.json({
    sgpa: [
      {
        sem: 1,
      },
      {
        sem: 2,
      },
      {
        sem: 3,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
