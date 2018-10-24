/* Parent Class */
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

/* Child Class */
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name)
    this._certifications = certifications;
  }

  takeVacationDays() {

  }

  addCertification() {

  }
}

/* Instance of child class */
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
