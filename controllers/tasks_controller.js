exports.getBooks = (req, res, next) => {
  res.render("index");
};

exports.addBooks = (req, res, next) => {
  res.render('add_task');
};
