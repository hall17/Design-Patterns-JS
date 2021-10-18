// keep track of observers looking at it
function Subject() {
    this.observers = [] // array of observer functions
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn)
    },
    unsubscribe: function (fnToRemove) 
    {
        this.observers = this.observers.filter(fn => fn != fnToRemove)
    },
    fire: function () {
        this.observers.forEach(fn => {
            fn.call()
        })
    }
}

const subject = new Subject()

function Observer1()
{
    console.log("Observer 1 Firing")
}
function Observer2()
{
    console.log("Observer 2 Firing")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.unsubscribe(Observer2)

subject.fire()