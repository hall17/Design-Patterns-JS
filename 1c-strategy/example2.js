class SalaryPaymentStrategy {
    constructor(paymentDetails) {
        this.salary = paymentDetails.salary
    }
    paymentAmount() {
        return (this.salary / 12).toFixed(2)
    }
}

class HourlyPaymentStrategy {
    constructor(paymentDetails) {
        this.hourlyRate = paymentDetails.hourlyRate
        this.numberOfHours = paymentDetails.numberOfHours
    }
    paymentAmount() {
        return (this.hourlyRate * this.numberOfHours)
    }
}


class Employee {
    constructor(employeeDetails, paymentDetails) {
        this.name = employeeDetails.name
        this.paymentDetails = paymentDetails
    }
    sendPayment(strategyClass) {
        const strategy = new strategyClass(this.paymentDetails)
        const paymentAmount = strategy.paymentAmount()
        console.log(`Sending $${paymentAmount} to ${this.name}!`)
    }
}

const billGates = new Employee({ name: 'Bill Gates' }, { salary: 150000 })
billGates.sendPayment(SalaryPaymentStrategy)

// let's say we want to create outsource employee
const johnny = new Employee(
    { name: 'John Doe' },
    {
        hourlyRate: 35,
        numberOfHours: 30
    })
johnny.sendPayment(HourlyPaymentStrategy)
