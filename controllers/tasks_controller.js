const TasksModel = require("../models/tasks_model");
const JSAlert = require("js-alert");

//  Handles View All Books request
exports.getTasks = (req, res, next) => {
  res.render("index");
};

//  Handles Add a book [GET REQUEST]
exports.addTask = (req, res, next) => {
  res.render("add_task");
};

// Handles Add a book [POST REQUEST]
exports.postAddTask = (req, res, next) => {
  const taskName = req.body.taskName;
  const taskDesc = req.body.taskDesc;

  TasksModel.create({
    task_name: taskName,
    task_desc: taskDesc,
  })
    .then((data) => {
      console.log(data);
      res.redirect("/view/");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Handles Add a book [POST REQUEST]
exports.viewTasks = (req, res, next) => {
  TasksModel.findAll().then((tasks) => {
    // console.log(tasks);
    res.render("view_tasks", {
      tasks: tasks,
      pageTitle: "View Books",
    });
  });
};

exports.viewTask = (req, res, next) => {
  const id = req.params.id;
  TasksModel.findAll({ where: { task_id: id } })
    .then((product) => {
      res.render("view_task", {
        tasks: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const id = req.params.id;

  TasksModel.findByPk(id)
  .then(product => {
    return product.destroy();
  })
  .then(result => {
    console.log('Deleting Product');
    res.redirect('/view');
  });
};

exports.editTask = (req, res, next) => {
  const id = req.params.id;
  TasksModel.findAll({ where: { task_id: id } }).then((product) => {
    res.render("edit_task", {
      tasks: product,
    });
  });
};

exports.postEditTask = (req, res, next) => {
  const title = req.body.taskName;
  const desc = req.body.taskDesc;
  const id = req.params.id;

  TasksModel.findByPk(id)
    .then(task => {
      task.task_name = title;
      task.task_desc = desc;
      return task.save();
    })
    .then((result) => {
      console.log('Updated Task');
      res.redirect('/view');
    })
    .catch((err) => {
      console.log(err);
    });
};
