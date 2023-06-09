const Employee = require('./employee');
const Manager = require('./manager');


const hobbes= new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('Calvin ', 130000 , 'Director ', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin );
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log('Hobbes: ',hobbes.calculateBonus(0.05)); // => 70,500
console.log('Calvin: ',calvin.calculateBonus(0.05)); // => 20,500
console.log('Susie: ',susie.calculateBonus(0.05)); // => 14,000
console.log('Lily: ',lily.calculateBonus(0.05))  //4,500
console.log('Clifford: ',clifford.calculateBonus(0.05))  //4,500
