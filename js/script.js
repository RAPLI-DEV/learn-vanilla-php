class calculatorApp{
    constructor() {
        this.monitor = document.querySelector(".monitor")
        this.bracketed = false;
        this.bracketedLevel = 0;
        this.inputStack = []
        this.input = '0'
        this.output = ''
        this.monitor.innerHTML = this.input
    }
    number(param){
        let numbers = param.toString();
        let lastChar = this.input.charAt(this.input.length - 1);
        if(lastChar !== "!" ){
        if (this.input == '0'){
            return [this.input = numbers, this.monitor.innerHTML = this.input, this.inputStack.push(this.input), ];
        } 
        else if(this.bracketed){
            return [this.input = this.input.slice(0, this.bracketedLevel) + numbers + ")".repeat(this.bracketedLevel + (this.bracketedLevel * -2)), this.monitor.innerHTML = this.input, this.inputStack.push(this.input)];
        }
        else {
            return [this.input += numbers, this.monitor.innerHTML = this.input, this.inputStack.push(this.input)]
        }
    }
    }
    operation(param){
        let operations = param.toString()
        let lastChar = this.input.charAt(this.input.length - 1 + this.bracketedLevel);
        const operators = ['+', '×', '÷', '%', '^', '('];

        if (operators.includes(lastChar) && operations !== "-"||
            this.input.trim() === "" && operations !== "-" ||
            lastChar === "-" && operations === "-" ||
            operations === "!" && this.input.trim() === "" ||
            operations === "!" && lastChar === '!' 
        )
            {
                return;
            }

        if (this.input == '0'){
            return [this.input = operations, this.monitor.innerHTML = this.input, this.inputStack.push(this.input)];
        }
        else if(this.bracketed){
            return [this.input = this.input.slice(0, this.bracketedLevel) + operations + ")".repeat(this.bracketedLevel + this.bracketedLevel * -2), this.monitor.innerHTML = this.input, this.inputStack.push(this.input)]
        } else {
            return [this.input += operations, this.monitor.innerHTML = this.input, this.inputStack.push(this.input)]
        }
    }
    bracket(param){
        let bracket = param.toString()
        let lastChar = this.input.charAt(this.input.length - 1 + this.bracketedLevel);

        
        if(Number(lastChar)){
            return;
        }
        if (this.input == '0'){
            return [this.input = bracket, this.monitor.innerHTML = this.input, this.bracketed = true, this.bracketedLevel--, this.inputStack.push(this.input)];
        } 
        else if(this.bracketed){
            return [this.input = this.input.slice(0, this.bracketedLevel) + bracket + ")".repeat(this.bracketedLevel + this.bracketedLevel * -2), this.monitor.innerHTML = this.input, this.bracketedLevel--, this.inputStack.push(this.input)]
        }
        else {
            return [this.input += bracket, this.monitor.innerHTML = this.input, this.bracketed = true, this.bracketedLevel--, this.inputStack.push(this.input)];
        }

        
    }
    result(){
        const operators = ['+', '-', '×', '÷'];
        let lastChar = this.input.charAt(this.input.length - 1);

        if (this.input.trim() === "" || operators.includes(lastChar)){
            return;
        }

        var xml = new XMLHttpRequest();
        xml.open('POST', 'php/calculator.php/', true);
        xml.setRequestHeader('Content-Type', 'text/plain');
        xml.onload = () => {
            if (xml.status === 200) {
                this.output = xml.responseText
                this.monitor.innerHTML = this.output;
                return this.input = this.output
            } else { 
                console.error('Error:', xml.status, xml.statusText); 
            }
        }
        xml.send(this.input);
    }
    reset(){
        return [this.input = '0', this.monitor.innerHTML = '0', this.output = '0', this.bracketed = false, this.bracketedLevel = 0]
    }
    backspace(){
        let brackets = ['sin()', 'cos()', 'tan()']
        let value = this.inputStack[this.inputStack.length - 2 ];
        if (value === undefined){
            return [this.input = "0", this.monitor.innerHTML = this.input, this.bracketedLevel = 0, this.bracketed = false, this.inputStack.pop()]
        } 
        else if(brackets.includes(value)){
            return [this.input = value, this.monitor.innerHTML = this.input, this.bracketedLevel--, this.inputStack.pop()]
        }
        else {
            return [this.input = value, this.monitor.innerHTML = this.input, this.inputStack.pop(),]
        }
    }
}

const calc = new calculatorApp()

document.querySelector(".def-factorial").addEventListener("click", () => {calc.operation('!')})
document.querySelector(".def-percent").addEventListener("click", () => {calc.operation('%')})
document.querySelector(".def-clear").addEventListener("click", () => {calc.reset()})
document.querySelector(".def-backSpace").addEventListener("click", () => {calc.backspace()})
document.querySelector(".def-add").addEventListener("click", () => {calc.operation('+')})
document.querySelector(".def-sin").addEventListener("click", () => {calc.bracket('sin()')})
document.querySelector(".def-num7").addEventListener("click", () => {calc.number(7)})
document.querySelector(".def-num8").addEventListener("click", () => {calc.number(8)})
document.querySelector(".def-num9").addEventListener("click", () => {calc.number(9)})
document.querySelector(".def-div").addEventListener("click", () => {calc.operation('÷')})
document.querySelector(".def-cos").addEventListener("click", () => {calc.bracket('cos()')})
document.querySelector(".def-num4").addEventListener("click", () => {calc.number(4)})
document.querySelector(".def-num5").addEventListener("click", () => {calc.number(5)})
document.querySelector(".def-num6").addEventListener("click", () => {calc.number(6)})
document.querySelector(".def-mul").addEventListener("click", () => {calc.operation('×')})
document.querySelector(".def-tan").addEventListener("click", () => {calc.bracket('tan()')})
document.querySelector(".def-num1").addEventListener("click", () => {calc.number(1)})
document.querySelector(".def-num2").addEventListener("click", () => {calc.number(2)})
document.querySelector(".def-num3").addEventListener("click", () => {calc.number(3)})
document.querySelector(".def-sub").addEventListener("click", () => {calc.operation('-')})
document.querySelector(".def-exponent").addEventListener("click", () => {calc.operation('^')})
document.querySelector(".def-num0").addEventListener("click", () => {calc.number(0)})
document.querySelector(".def-comma").addEventListener("click", () => {calc.number('.')})
document.querySelector(".def-eql").addEventListener("click", () => {calc.result("")})

window.addEventListener('keyup', (event) => {
    if (event.key == "!"){ document.querySelector(".def-factorial").click() }
    if (event.key == "%"){ document.querySelector(".def-percent").click() }
    if (event.key == "C"){ document.querySelector(".def-clear").click() }
    if (event.key == "Backspace"){ document.querySelector(".def-backSpace").click() }
    if (event.key == "+"){ document.querySelector(".def-add").click() }
    if (event.key == "s"){ document.querySelector(".def-sin").click() }
    if (event.key == "7"){ document.querySelector(".def-num7").click() }
    if (event.key == "8"){ document.querySelector(".def-num8").click() }
    if (event.key == "9"){ document.querySelector(".def-num9").click() }
    if (event.key == "/" || event.key == ":"){ document.querySelector(".def-div").click() }
    if (event.key == "c"){ document.querySelector(".def-cos").click() }
    if (event.key == "4"){ document.querySelector(".def-num4").click() }
    if (event.key == "5"){ document.querySelector(".def-num5").click() }
    if (event.key == "6"){ document.querySelector(".def-num6").click() }
    if (event.key == "*"){ document.querySelector(".def-mul").click() }
    if (event.key == "t"){ document.querySelector(".def-tan").click() }
    if (event.key == "1"){ document.querySelector(".def-num1").click() }
    if (event.key == "2"){ document.querySelector(".def-num2").click() }
    if (event.key == "3"){ document.querySelector(".def-num3").click() }
    if (event.key == "-"){ document.querySelector(".def-sub").click() }
    if (event.key == "^"){ document.querySelector(".def-exponent").click() }
    if (event.key == "0"){ document.querySelector(".def-num0").click() }
    if (event.key == "," || event.key == "."){ document.querySelector(".def-comma").click() }
    if (event.key == "=" || event.key == "Enter"){ document.querySelector(".def-eql").click() }
    // console.log('Key released in input field:', event.key);
});