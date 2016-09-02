export default class Task{
  constructor(name,desc){
    // we'll generate a new string based onthe current timestamp
    this.task_id = Date.now().toString(36)
    this.task_name = name || 'Default Name'
    this.task_desc = desc || 'Default Description'
    this.completed = false
    this.deleted = false
    this.formOpen = false
  }
}
