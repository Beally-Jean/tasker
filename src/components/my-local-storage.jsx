export default class MyLocalStorage {
    constructor () {
      const tasks = window.localStorage.getItem('tasks')
      this.tasks = tasks ? JSON.parse(tasks) : []
      if (!Array.isArray(this.tasks)) this.tasks = []
      this._saveToLocalStorage()
    }
  
    get (id) {
      if (!id && id !== 0) return this.tasks.slice()
      return this.tasks[id]
    }
  
    set (id, data, ws) {
      if (!data) this.tasks.push(id)
      else this._setId(id, data, ws)
  
      this._saveToLocalStorage()
    }
  
    _setId (id, data, ws) {
      let task = this.tasks.find((task) => task.id === id)
      Object.assign(task, data, ws)
    }
  
    _saveToLocalStorage () {
      window.localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }