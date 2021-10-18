// Factories allow you to handle all of your object creation 
// in a centeralized location

// object constructor

function Developer(name) {
    this.name = name
    this.type = "Developer"
}
// object constructor
function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name)
                break;
        }
    }
}

function say() {
    console.log(`Hi, this is ${this.name} and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()

const employees = []

employees.push(employeeFactory.create("Bill",1))
employees.push(employeeFactory.create("Steve",2))


employees.map(e => {
    say.call(e)
})