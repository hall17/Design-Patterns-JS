
// Calculate shipping costs

function Fedex() {
    this.calculate = function (package) {
        // fedex calculations

        return 2.45 // random number
    }
}
function UPS() {
    this.calculate = function (package) {
        // fedex calculations

        return 1.56 // random number
    }
}
function USPS() {
    this.calculate = function (package) {
        // fedex calculations

        return 4.5 // random number
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = {
    from: 'Alabama',
    to: 'Alaska',
    weight: 1.55
}

// instead of this use strategy pattern
// fedex.calculate(package)
// ups.calculate(package)
// usps.calculate(package)


// Strategy Pattern
function Shipping() {
    this.company = ""
    this.setStrategy = function(company) {
        this.company = company
    }
    this.calculate = function(package) {
        return this.company.calculate(package)
    }
}

const shipping = new Shipping()

// fedex
shipping.setStrategy(fedex)
console.log("Fedex: "+ shipping.calculate(package))
// ups
shipping.setStrategy(ups)
console.log("UPS: "+ shipping.calculate(package))
// usps
shipping.setStrategy(usps)
console.log("USPS: "+ shipping.calculate(package))