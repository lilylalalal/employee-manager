class Employee {
    constructor(name, salary,title, manager = null) {
      this.name = name;
      this.salary = salary;
      this.title = title;
      this.manager = manager;
      if(manager != null) {
      manager.addEmployee(this)}
    }
    

}

//let leo = new Employee('Leonardo', 90000, 'Ninja');
//console.log(leo)


try {
    module.exports = Employee;
  } catch {
    module.exports = null;
  }
