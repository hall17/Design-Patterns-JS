// Proxy pattern allows you tou use one object known as the proxy
// as a placeholder for another object. Proxy controls access to that object.

// We want to use this pattern to add extra functionality

//
function CryptocurrencyAPI() {
    this.getValue = function (coin) {
        console.log("Calling External API")
        switch (coin) {
            case "Bitcoin":
                return "$65000"
            case "Litecoin":
                return "$50"
            case "Ethereum":
                return "$250"


        }
    }
}

// const api = new CryptocurrencyAPI()

// console.log(api.getValue("Bitcoin"))
// console.log(api.getValue("Litecoin"))

function CryptoCurrencyProxy() {
    this.api = new CryptocurrencyAPI()
    this.cache = {}

    this.getValue = function (coin) {
        if (this.cache[coin] == null) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin]
    }
}

const proxy = new CryptoCurrencyProxy()
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))
console.log(proxy.getValue("Bitcoin"))
console.log(proxy.getValue("Litecoin"))