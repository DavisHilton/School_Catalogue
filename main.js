class School {
  constructor(name, level, numberberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberberOfStudents;
  }
  get name() {                               //Step 4
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberberOfStudents() {
    return this._numberOfStudents;
  }

  set numberberOfStudents(value) {               //step 5
    if (Number.isFinite(value)) {
      this._numberOfStudents = value;
    } else {
      console.log(`Invalid input: numberOfStudents must be set to a Number.`);
    }
  }

  quickFacts() {                                //step 6
    console.log(
      `${this.name} educates ${this.numberberOfStudents} students at the ${this.level} school level.`
    );
  }

   static pickSubstituteTeacher(substituteTeachers) {   //Step 7
       let random = Math.floor( Math.random() *(0,(substituteTeachers.length-1)));
       return substituteTeachers[random];
  }             
}


class Primary extends School {                   //step 8
    constructor(name, numberberOfStudents ,pickupPlolicy){                  // step 9
        super(name, 'primary', numberberOfStudents); //step 10
        this._pickupPlolicy = pickupPlolicy;      //step 11
    }

    get pickupPlolicy(){                         //step 12
        return this._pickupPlolicy;
    }
}


class High extends School {                   //step 13
    constructor(name, numberberOfStudents, sportsTeams){
        super(name, "high", numberberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        return this._sportsTeams
    }
}

////====================================================
//step 14 Primary Instance
let lorraineHansbury = new Primary("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

console.log(lorraineHansbury.pickupPlolicy);      
console.log(lorraineHansbury.quickFacts())        //step 15


 //this will randomly pick number from method .pickSubstituteTeacher step 16
 const sub = 
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

console.log(sub);
//====================================================
//step 17 high intance
const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//step 18
console.log(alSmith);
console.log(alSmith.name);
console.log(alSmith.numberberOfStudents);
console.log(alSmith.sportsTeams);


/*19.
Nice work! If you’ve made it this far, you have a strong understanding of class syntax and inheritance.

If you would like to continue working on this project, we have listed some avenues to build on your progress.

Create a middle school class
Add more properties to each class (averageTestScores, schoolOverview, etc.)
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
*/