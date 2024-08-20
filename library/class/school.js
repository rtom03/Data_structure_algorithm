class Person {
    constructor(name, teaches) {
        this.name = name
    }
    introducesSelf() {
        return (`my name is mr ${this.name}`)
    }

}

class Professor extends Person {
    constructor(name, teaches) {
        super(name, teaches)
        this.teaches = teaches

    }
    introducesSelf() {
        return (`my name is mr ${this.name} and i'm your ${this.teaches} teacher`)
    }
}

class Students extends Person {
    constructor(name, study, year) {
        super(name, study)
        this.study = study
        this.scores = []
        this.grade = year;
        this.tardies = 0;
    }
    static enrollStudents(...students) {
        return 'Enrolling Students!'
    }
    markLate() {
        this.tardies += 2;
        if (this.tardies >= 3) return 'You Are Expelled'
        return (`${this.name} has been late ${this.tardies} times`)
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length;
    }
}

const prof = new Professor('Mensar', 'Physics')
console.log(prof.introducesSelf())


const stud = new Students('Allison', 'Computer Science')

console.log(stud.markLate(), stud.addScore(90), stud.addScore(100), stud.calculateAverage())