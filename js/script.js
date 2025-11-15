class calculatorApp{
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
        xml.open('POST', '../php/calculator.php', true);
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
        if (this.numbers === ""){this.monitor.innerHTML = "0"}
        return [this.numbers = '', this.o = '', this.x = '']
    }
    backspace(){
        this.numbers = this.monitor.textContent.slice(0, -1)
        this.monitor.innerHTML = this.numbers
        if (this.numbers === ""){this.monitor.innerHTML = "0"}
    }
}

const calc = new calculatorApp()

document.querySelector(".def-percent").addEventListener("click", () => {calc.operation('%')})
document.querySelector(".def-clear").addEventListener("click", () => {calc.reset()})
document.querySelector(".def-backSpace").addEventListener("click", () => {calc.backspace()})
document.querySelector(".def-add").addEventListener("click", () => {calc.operation('+')})
document.querySelector(".def-num7").addEventListener("click", () => {calc.number(7)})
document.querySelector(".def-num8").addEventListener("click", () => {calc.number(8)})
document.querySelector(".def-num9").addEventListener("click", () => {calc.number(9)})
document.querySelector(".def-div").addEventListener("click", () => {calc.operation('÷')})
document.querySelector(".def-num4").addEventListener("click", () => {calc.number(4)})
document.querySelector(".def-num5").addEventListener("click", () => {calc.number(5)})
document.querySelector(".def-num6").addEventListener("click", () => {calc.number(6)})
document.querySelector(".def-mul").addEventListener("click", () => {calc.operation('×')})
document.querySelector(".def-num1").addEventListener("click", () => {calc.number(1)})
document.querySelector(".def-num2").addEventListener("click", () => {calc.number(2)})
document.querySelector(".def-num3").addEventListener("click", () => {calc.number(3)})
document.querySelector(".def-sub").addEventListener("click", () => {calc.operation('-')})
document.querySelector(".def-num0").addEventListener("click", () => {calc.number(0)})
document.querySelector(".def-comma").addEventListener("click", () => {calc.number('.')})
document.querySelector(".def-eql").addEventListener("click", () => {calc.result("")})

window.addEventListener('keyup', (event) => {
    if (event.key == "%"){ document.querySelector(".def-percent").click() }
    if (event.key == "C"){ document.querySelector(".def-clear").click() }
    if (event.key == "Backspace"){ document.querySelector(".def-backSpace").click() }
    if (event.key == "+"){ document.querySelector(".def-add").click() }
    if (event.key == "7"){ document.querySelector(".def-num7").click() }
    if (event.key == "8"){ document.querySelector(".def-num8").click() }
    if (event.key == "9"){ document.querySelector(".def-num9").click() }
    if (event.key == "/" || event.key == ":"){ document.querySelector(".def-div").click() }
    if (event.key == "4"){ document.querySelector(".def-num4").click() }
    if (event.key == "5"){ document.querySelector(".def-num5").click() }
    if (event.key == "6"){ document.querySelector(".def-num6").click() }
    if (event.key == "*"){ document.querySelector(".def-mul").click() }
    if (event.key == "1"){ document.querySelector(".def-num1").click() }
    if (event.key == "2"){ document.querySelector(".def-num2").click() }
    if (event.key == "3"){ document.querySelector(".def-num3").click() }
    if (event.key == "-"){ document.querySelector(".def-sub").click() }
    if (event.key == "0"){ document.querySelector(".def-num0").click() }
    if (event.key == "," || event.key == "."){ document.querySelector(".def-comma").click() }
    if (event.key == "=" || event.key == "Enter"){ document.querySelector(".def-eql").click() }
    // console.log('Key released in input field:', event.key);
});