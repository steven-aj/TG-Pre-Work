/* Class declaration */
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular'); // new instance
const surgeonDurant = new Surgeon('Durant', 'Orthopedics'); // new instance
