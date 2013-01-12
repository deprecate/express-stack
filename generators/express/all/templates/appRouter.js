
module.exports = function(app) {
  /* Required Route Files */

  /* Default route serves client */
  app.get("*", function(req, res) {
    res.render('index.html')
  });
};
