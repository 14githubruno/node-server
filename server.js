const http = require("http");
const path = require("path");
const serveTheFiles = require("./response");

const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
  let url = req.url;
  let ext = path.extname(url);
  let basename = path.basename(url);

  let typeOfContent;
  if (ext === ".css") {
    typeOfContent = "text/css";
  } else if (ext === ".jpg") {
    typeOfContent = "image/jpg";
  } else if (ext === ".js") {
    typeOfContent = "text/javascript";
  } else {
    typeOfContent = "text/html";
  }

  let filePath;
  if (typeOfContent === "text/html") {
    if (url !== "/" && url !== "/index" && url !== "/index.html") {
      filePath = path.join(__dirname, "frontend", "html", "404.html");
    } else {
      filePath = path.join(__dirname, "frontend", "html", basename);
    }
  } else if (typeOfContent === "text/css") {
    filePath = path.join(__dirname, "frontend", "css", basename);
  } else if (typeOfContent === "text/javascript") {
    filePath = path.join(__dirname, "frontend", "js", basename);
  } else {
    filePath = path.join(__dirname, "frontend", "images", basename);
  }

  serveTheFiles(filePath, typeOfContent, res);
});

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
