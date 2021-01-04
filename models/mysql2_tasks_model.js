const db = require("../util/database");

module.exports = class Task {
  constructor(taskName, taskDesc) {
    this.taskName = taskName;
    this.taskDesc = taskDesc;
  }

  save() {
    return db.execute("INSERT INTO tasks (task_name,task_desc) VALUES (?, ?)", [
      this.taskName,
      this.taskName,
    ]);
  }

  static deleteById(id) {
    return db.execute("DELETE FROM tasks WHERE tasks.task_id = ?", [id]);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM tasks");
  }

  static findById(id) {
    return db.execute("SELECT * FROM tasks WHERE tasks.task_id = ?", [id]);
  }

  static edit(id,taskName,taskDesc) {
    return db.execute(
      "UPDATE tasks SET tasks.task_name = ?, tasks.task_desc = ? WHERE tasks.task_id = ?",
      [taskName, taskDesc, id]
    );
  }
};
