const TasksModel = require("../models/tasks_model");

exports.getBooks = (req, res, next) => {
  res.render("index");
};

exports.addBook = (req, res, next) => {
  res.render("add_task");
};

exports.postAddBook = (req, res, next) => {
  const taskName = req.body.taskName;
  const taskDesc = req.body.taskDesc;

  const task = new TasksModel(taskName, taskDesc);
  task
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.viewTasks = (req, res, next) => {
  TasksModel.fetchAll().then(([rows,fields]) => {
    console.log(rows);
    res.render("view_tasks", {
      tasks: rows,
      pageTitle: "View Books",
    });
  });
};

exports.viewTask = (req, res, next) => {
  const id = req.params.id;
  TasksModel.findById(id).then(([rows,fields]) => {
    console.log(rows);
    res.render('view_task', {
      tasks : rows
    })
  })
};

exports.editBook = (req, res, next) => {
  res.render("edit_book");
};
