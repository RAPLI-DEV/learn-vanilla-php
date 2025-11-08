class monitorValue{
    constructor() {
        this.monitor = document.querySelector(".monitor")
        this.numbers = ''
        this.o = ""
    }
    number(param){
        this.x = param
        this.numbers += param.toString()
        this.monitor.innerHTML += this.numbers
        return this.numbers
    }
    operation(param){
        this.o = param
        this.monitor.innerHTML += this.o
    }
    result(param){
        this.o = param
        this.monitor.innerHTML = this.o
    }
}

const mv = new monitorValue()

// document.querySelector(".np").addEventListener("click", () => {mv)})
// document.querySelector(".nC").addEventListener("click", () => {mv)})
// document.querySelector(".nbs").addEventListener("click", () => {mv)})
document.querySelector(".np").addEventListener("click", () => {new monitorValue().operation('+')})
document.querySelector(".n7").addEventListener("click", () => {new monitorValue().number(7)})
document.querySelector(".n8").addEventListener("click", () => {new monitorValue().number(8)})
document.querySelector(".n9").addEventListener("click", () => {new monitorValue().number(9)})
document.querySelector(".nd").addEventListener("click", () => {new monitorValue().operation('÷')})
document.querySelector(".n4").addEventListener("click", () => {new monitorValue().number(4)})
document.querySelector(".n5").addEventListener("click", () => {new monitorValue().number(5)})
document.querySelector(".n6").addEventListener("click", () => {new monitorValue().number(6)})
document.querySelector(".nx").addEventListener("click", () => {new monitorValue().operation('×')})
document.querySelector(".n1").addEventListener("click", () => {new monitorValue().number(1)})
document.querySelector(".n2").addEventListener("click", () => {new monitorValue().number(2)})
document.querySelector(".n3").addEventListener("click", () => {new monitorValue().number(3)})
document.querySelector(".nm").addEventListener("click", () => {new monitorValue().operation('-')})
document.querySelector(".n0").addEventListener("click", () => {new monitorValue().number(0)})
// document.querySelector(".nc").addEventListener("click", () => {mv)})
document.querySelector(".nr").addEventListener("click", () => {new monitorValue().result("")})


// document.querySelector(".n%").addEventListener("click", () => {console.log("")})
// document.querySelector(".nC").addEventListener("click", () => {console.log("")})
// document.querySelector(".nbs").addEventListener("click", () => {console.log("")})
// document.querySelector(".n+").addEventListener("click", () => {console.log("")})
// document.querySelector(".n7").addEventListener("click", () => {console.log("7")})
// document.querySelector(".n8").addEventListener("click", () => {console.log("8")})
// document.querySelector(".n9").addEventListener("click", () => {console.log("9")})
// document.querySelector(".n:").addEventListener("click", () => {console.log("")})
// document.querySelector(".n4").addEventListener("click", () => {console.log("4")})
// document.querySelector(".n5").addEventListener("click", () => {console.log("5")})
// document.querySelector(".n6").addEventListener("click", () => {console.log("6")})
// document.querySelector(".nx").addEventListener("click", () => {console.log("")})
// document.querySelector(".n1").addEventListener("click", () => {console.log("1")})
// document.querySelector(".n2").addEventListener("click", () => {console.log("2")})
// document.querySelector(".n3").addEventListener("click", () => {console.log("3")})
// document.querySelector(".n-").addEventListener("click", () => {console.log("")})
// document.querySelector(".n0").addEventListener("click", () => {console.log("0")})
// document.querySelector(".n,").addEventListener("click", () => {console.log("")})
// document.querySelector(".n=").addEventListener("click", () => {console.log("")})





