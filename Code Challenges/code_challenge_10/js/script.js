// assigning variable to buttons to react with a message in the DOM
const button_1 = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const button_3 = document.querySelector("#button_3");
let message = document.querySelector("#message");

// click produces p in under h2 'Message says'
// display message wait 1000ms second message
// button_1
button_1.addEventListener("click", () => {
    // while message has a child present remove on click 
    while (message.firstChild) { // Loop From AI
        message.removeChild(message.firstChild);
    } // creating a p element in the message board
    const p = document.createElement('p');
    p.innerText = `AHHH!! Zombie!`;
    message.append(p);
    setTimeout(() => { // create a delayed p element
        const p = document.createElement('p');
        p.innerText = `We need 3/4lbs of grill cheese and 10oz of tomato bisque, STAT!`;
        // appending to the id message
        message.append(p);
    }, 1000);
    clearInterval(setTimeout)
});
// button_2
// when clicking another button remove text
button_2.addEventListener("click", () => {
    // while message has a child present remove on click
    while (message.firstChild) { // Loop From AI
        message.removeChild(message.firstChild);
    }
    // add new message
    const p = document.createElement('p');
    p.innerText = `You're a little too happy for a student`;
    message.append(p);
    setTimeout(() => { // create a delayed p element
        const p = document.createElement('p');
        p.innerText = `What's your secret?`;
        // appending to the id message
        message.append(p);
    }, 1000);
});
// when clicking another button remove text
button_3.addEventListener("click", () => {
    // while message has a child present remove on click
    while (message.firstChild) { // Loop From AI
        message.removeChild(message.firstChild);
    } // creating a p element in the message board
    const p = document.createElement('p');
    p.innerText = `Little Caesar's?`;
    // appending to the id message
    message.append(p);
    setTimeout(() => { // create a delayed p element
        const p = document.createElement('p');
        p.innerText = `Wait... Bruce?`;
        message.append(p);
    }, 1000);
});




