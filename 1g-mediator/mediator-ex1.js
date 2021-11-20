// Mediator pattern allows you to define an object known as the mediator
// that encapsulates and controls how some set of objects interact w/ each other

// Nesneler arasındaki iletişim aracı başka bir nesne üzerinden sağlanmaktadır
// 

function Member(name) {
    this.name = name
    this.chatroom = null
}

Member.prototype = {
    send: function (message, receiver) {
        this.chatroom.send(message, this, receiver)
    },
    receive: function (message, sender) {
        console.log(`${sender.name} to ${this.name} : ${message}`)
    }
}

function Chatroom() {
    this.members = {}
}
Chatroom.prototype = {
    addMember: function(member)
    {
        this.members[member.name] = member
        member.chatroom = this
    },
    send: function (message,sender,receiver) {
        receiver.receive(message,sender)
    }
}

const chat = new Chatroom()

const bob = new Member("Bob")
const john = new Member("John")
const tim = new Member("Tim")

chat.addMember(bob)
chat.addMember(john)
chat.addMember(tim)

bob.send("Hello John",john)