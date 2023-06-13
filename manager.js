const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary,title, manager = null, employees=[] ) {
        super(name, salary,title, manager);
        this.employees= employees
    }  
    addEmployee(employee){
     
        this.employees.push(employee)
        return this.employees}

        _totalSubSalary(employobj,sum =null) {
          const values = Object.values(employobj)
          for (const value of values) {
              //check if empolyee  is instanceof Manager, No ->sum += empolyee.salary
          if(value instanceof Manager){
            //console.log(value.name, value.salary);
            sum += value.salary+ this._totalSubSalary(value.employees,sum) }
            //console.log('running sum:' , sum)}
              //Yes ->sum+= manger.salary & recursive loop every manager's employee  sum += empolyee.salary
          else {
            sum += value.salary
            //console.log('add manager sum:' , sum)
            }}
            //console.log('final sum:' , sum)
            return sum}
    
    
  calculateBonus(multiplier) {
      let sum = this._totalSubSalary(this.employees)
      //console.log(sum)
      let bonus = (sum + this.salary )* multiplier
      return bonus
}}
const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

//console.log('splinter: ',splinter.calculateBonus(0.05)); // => 22500
//console.log('leo: ',leo.calculateBonus(0.05)); // => 17500
//console.log('raph: ',raph.calculateBonus(0.05)); // => 13000

//const entries = Object.entries( splinter.employees)
//const values = Object.values(splinter.employees);
//console.log('type: ',typeof splinter.employees , splinter.employees);
//console.log(entries);
//console.log(values);


try {
    module.exports = Manager;
  } catch {
    module.exports = null;
  }
