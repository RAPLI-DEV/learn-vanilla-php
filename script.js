class monitorValue{
    constructor() {
        this.monitor = document.querySelector(".monitor")
        this.numbers = this.numbers ? this.numbers : ''
        this.o = this.o ? this.o : ""
        this.x = this.x ? this.x : ""
    }
    number(param){
        this.x = param
        this.numbers += this.x.toString()
        this.monitor.innerHTML = this.numbers
        return this.numbers = this.numbers
    }
    operation(param){
        this.o = param
        this.monitor.innerHTML = this.numbers + this.o
        return this.numbers = this.numbers + this.o
    }
    result(param){
        this.all = this.monitor.textContent
        console.log("result :" + this.all)
        this.o = param
        this.monitor.innerHTML = this.o
        var xml = new XMLHttpRequest(); 
        xml.open('POST', 'calculator.php', true);
        xml.setRequestHeader('Content-Type', 'text/plain'); 
        xml.onload = () => {
            if (xml.status === 200) {
                this.answer = xml.responseText; 
                this.monitor.innerHTML = this.answer;
                this.all = ""
            }
            else { console.error('Error:', xml.status, xml.statusText); }
        }
        xml.send(this.all);
        return this.numbers = ''
    }
    reset(){
        this.monitor.innerHTML = ''
        return [this.numbers = '', this.o = '', this.x = '']
    }
    backspace(){
        this.numbers = this.monitor.textContent.slice(0, -1)
        this.monitor.innerHTML = this.numbers
    }
}

const mv = new monitorValue()

// document.querySelector(".np").addEventListener("click", () => {mv)})
document.querySelector(".nC").addEventListener("click", () => {mv.reset()})
document.querySelector(".nbs").addEventListener("click", () => {mv.backspace()})
document.querySelector(".np").addEventListener("click", () => {mv.operation('+')})
document.querySelector(".n7").addEventListener("click", () => {mv.number(7)})
document.querySelector(".n8").addEventListener("click", () => {mv.number(8)})
document.querySelector(".n9").addEventListener("click", () => {mv.number(9)})
document.querySelector(".nd").addEventListener("click", () => {mv.operation('÷')})
document.querySelector(".n4").addEventListener("click", () => {mv.number(4)})
document.querySelector(".n5").addEventListener("click", () => {mv.number(5)})
document.querySelector(".n6").addEventListener("click", () => {mv.number(6)})
document.querySelector(".nx").addEventListener("click", () => {mv.operation('×')})
document.querySelector(".n1").addEventListener("click", () => {mv.number(1)})
document.querySelector(".n2").addEventListener("click", () => {mv.number(2)})
document.querySelector(".n3").addEventListener("click", () => {mv.number(3)})
document.querySelector(".nm").addEventListener("click", () => {mv.operation('-')})
document.querySelector(".n0").addEventListener("click", () => {mv.number(0)})
// document.querySelector(".nc").addEventListener("click", () => {mv)})
document.querySelector(".nr").addEventListener("click", () => {mv.result("")})


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





