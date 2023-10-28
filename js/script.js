



function calculator() {
    let a = parseInt(prompt("Enter value for a: "))
    let b = parseInt(prompt("Enter value for b: "))
    let operation = prompt("Enter Operation that you want to perform.(+, -, x, /)")


    if (operation === "+") {
        alert(`The sum of ${a} and ${b} is equal to ${a + b}`)
    }
    else if (operation === "-") {
        alert(`The diff of ${a} and ${b} is equal to ${a - b}`)

    }
    else if (operation === "x") {
        alert(`The answer of ${a} X ${b} is equal to ${a * b}`)

    }
    else if (operation === "/") {
        alert(`The division of ${a} and ${b} is equal to ${a / b}`)

    }
    else {
        alert("Wrong Operation")
    }






    // let operation = 20

    // if(operation === "20"){
    //  alert("Hello")
    // }
    // else{
    //     alert("Not String")
    // }
}








