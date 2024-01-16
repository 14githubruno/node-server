const fsPromises = require("fs").promises;

const serveTheFiles = async (path, type, res) => {
  try {
    const file = await fsPromises.readFile(path);
    res.writeHead(path.includes("404") ? 404 : 200, {
      "content-type": type,
    });
    res.write(file);
    res.end();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = serveTheFiles;
