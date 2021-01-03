const db = require("../util/database");

module.exports = class Task {
  constructor(taskName, taskDesc) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
  }

  save() {
    return db.execute(
      "INSERT INTO tasks (task_name,task_desc) VALUES (?, ?)",
      [this.taskName, this.taskName]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("SELECT * FROM tasks");
  }

  static findById(id) {
    return db.execute("SELECT * FROM tasks WHERE tasks.task_id = ?", [id]);
  }
};
