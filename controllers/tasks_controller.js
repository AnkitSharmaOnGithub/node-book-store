exports.getBooks = (req, res, next) => {
  res.render("index");
};

exports.addBook = (req, res, next) => {
  res.render('add_task');
};

exports.postAddBook = (req,res,next) => {
  console.log(req.body);
}

exports.getBook = (req, res, next) => {
  res.render('view_book');
};

exports.editBook = (req, res, next) => {
  res.render('edit_book');
};