// api-routes are for our data, this is going to help determine what data the user sees
// and data the user is able to post to our server to store.
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

module.exports = function (app) {
  app.get("/api/tables", function (req, res) {
    res.json(tableData);
  });
  app.get("/api/waitList", function (req, res) {
    res.json(waitListData);
  });
  app.post("/api/tables", function (req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", function (req, res) {
    tableData.length = 0;
    waitListData.length = 0;
    res.json({ ok: true });
  });
};