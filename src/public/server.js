const http = require("http");
const fs = require("fs");
const path = require("path");

const matchesPerYear = path.join(__dirname,"/output/matchesPerYear.json");
const bestEconomyPlayers = path.join(__dirname,"/output/bestEconomyPlayers.json");
const extraRunIn2016 = path.join(__dirname,"/output/extraRunIn2016.json");
const mostMatchAward = path.join(__dirname,"/output/mostMatchAward.json");
const top10EconomiBowler = path.join(__dirname,"/output/top10EconomiBowler.json");
const tossAndMachesWinner = path.join(__dirname,"/output/tossAndMachesWinner.json");
const dismissalPlayer = path.join(__dirname,"/output/dismissalPlayer.json");
const matchesWonPerYear = path.join(__dirname,"/output/matchesWonPerYear.json");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/matchesPerYear.json":
      fs.readFile(matchesPerYear, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*' });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/bestEconomyPlayers.json":
      fs.readFile(bestEconomyPlayers, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/extraRunIn2016.json":
      fs.readFile(extraRunIn2016, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/mostMatchAward.json":
      fs.readFile(mostMatchAward, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/top10EconomiBowler.json":
      fs.readFile(top10EconomiBowler, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/tossAndMachesWinner.json":
      fs.readFile(tossAndMachesWinner, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/dismissalPlayer.json":
      fs.readFile(dismissalPlayer, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/matchesWonPerYear.json":
      fs.readFile(matchesWonPerYear, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json", "Access-Control-Allow-Origin": '*'  });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/json" });
          res.end(data);
        }
      });
      break;
    case "/index.js":
      fs.readFile(path.join(__dirname,"/index.js"), "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "application/javascript" });
          res.end(data);
        }
      });
      break;
    case "/index.html":
      console.log(path.join(__dirname,"index.html"))
      fs.readFile(path.join(__dirname,"index.html"), "utf-8", (err, data) => {
        if (err) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end("File not found");
        } else {
          res.writeHead(200, { "content-type": "text/html" });
          res.end(data);
        }
      });
      break;
    default:
      res.end("Invalid address");
  }
});

const port = process.env.PORT || 8000
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server created success...");
  }
});
