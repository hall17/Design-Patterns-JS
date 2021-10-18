let obj = (function () {
    let objInstance // private variable

    // private function to create methods and properties
    function create() {
        let _isRunning = false
        let start = function () {
            _isRunning = true
        }
        let stop = function () {
            _isRunning = false
        }
        let currentState = function () {
            return _isRunning
        }
        return {
            start, stop, currentState
        }

    }

    return {
        getInstance: function () {
            if (!objInstance) {
                objInstance = create()
            }
            return objInstance
        }
    } // this return is obj
})()

let instance1 = obj.getInstance()
let instance2 = obj.getInstance()
instance1.start()
console.log(instance1.currentState())
console.log(instance2.currentState())
instance1.stop()
console.log(instance1.currentState())
console.log(instance2.currentState())
