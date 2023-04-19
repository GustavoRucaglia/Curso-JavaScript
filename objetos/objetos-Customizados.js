function changeName(name){
    this.name = name
    this.updateAt = new Date()
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updateAt: null,
    completed: false,
    changeName: changeName
}
const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updateAt: null,
    completed: false,
    changeName: changeName
}

task1.name = " task 1 upted"
task1.updateAt = new Date
task1.changeName("oiie")
console.log(task1)
//console.log(task1, task2)