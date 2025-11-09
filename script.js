class monitorValue{
    constructor() {
        this.monitor = document.querySelector(".monitor")
        
        this.operators = ['+', '-', '×', '÷'];
        this.numbers = this.numbers ? this.numbers : ''
        this.o = this.o ? this.o : ""
        this.x = this.x ? this.x : ""
        this.monitor.innerHTML = "0"
    }
    number(param){
        this.x = param

        this.numbers += this.x.toString()
        this.all += this.numbers
        this.monitor.innerHTML = this.numbers
        return this.numbers = this.numbers
    }
    operation(param){
        this.o = param
        this.all = this.monitor.textContent;
        let lastChar = this.all.charAt(this.all.length - 1);

        if (this.all.trim() === "" || this.operators.includes(lastChar)){
            return;
        }
        this.monitor.innerHTML = this.numbers + this.o
        return this.numbers = this.numbers + this.o
    }
    result(param){
        this.all = this.monitor.textContent;
        console.log("result :" + this.all)
        let lastChar = this.all.charAt(this.all.length - 1);

        if (this.all.trim() === "" || this.o === "" || this.operators.includes(lastChar)){
            return;
        }

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
                return this.numbers = xml.responseText
            }
            else { console.error('Error:', xml.status, xml.statusText); }
        }
        xml.send(this.all);
    }
    reset(){
        this.monitor.innerHTML = ''
        return [this.numbers = '', this.o = '', this.x = '']
    }
    backspace(){
        this.numbers = this.monitor.textContent.slice(0, -1)
        this.monitor.innerHTML = this.numbers
        if (this.numbers === ""){this.monitor.innerHTML = "0"}
    }
}

const mv = new monitorValue()

document.querySelector(".nP").addEventListener("click", () => {mv.operation('%')})
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
document.querySelector(".nc").addEventListener("click", () => {mv.number('.')})
document.querySelector(".nr").addEventListener("click", () => {mv.result("")})

window.addEventListener('keyup', function(event) {
    if (event.key == "%"){ document.querySelector(".nP").click() }
    if (event.key == "C"){ document.querySelector(".nC").click() }
    if (event.key == "Backspace"){ document.querySelector(".nbs").click() }
    if (event.key == "+"){ document.querySelector(".np").click() }
    if (event.key == "7"){ document.querySelector(".n7").click() }
    if (event.key == "8"){ document.querySelector(".n8").click() }
    if (event.key == "9"){ document.querySelector(".n9").click() }
    if (event.key == "/"){ document.querySelector(".nd").click() }
    if (event.key == "4"){ document.querySelector(".n4").click() }
    if (event.key == "5"){ document.querySelector(".n5").click() }
    if (event.key == "6"){ document.querySelector(".n6").click() }
    if (event.key == "*"){ document.querySelector(".nx").click() }
    if (event.key == "1"){ document.querySelector(".n1").click() }
    if (event.key == "2"){ document.querySelector(".n2").click() }
    if (event.key == "3"){ document.querySelector(".n3").click() }
    if (event.key == "-"){ document.querySelector(".nm").click() }
    if (event.key == "0"){ document.querySelector(".n0").click() }
    if (event.key == "," || event.key == "."){ document.querySelector(".nc").click() }
    if (event.key == "=" || event.key == "Enter"){ document.querySelector(".nr").click() }
    // console.log('Key released in input field:', event.key);
});