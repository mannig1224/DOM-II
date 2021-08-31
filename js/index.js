// Your code goes here

// animation for header in navbar took me two hours to do!
const headingAnimation = document.querySelector('.logo-heading');

headingAnimation.addEventListener("click", function() {
    // copying the node in the header
    const text = document.querySelector(".logo-heading");
    // copying just the text into another string
    const strText = text.textContent;
    // splitting up the text into an array
    const splitText = strText.split("");
    // emptying the text content from the original header
    text.textContent = "";

    for(let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick(){
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++
        if(char === splitText.length) {
            complete();
            return;
        }
    }
    function complete(){
        clearInterval(timer);
        timer = null;
    }
})


// added animation to links in navbars
const anchorLinks = document.querySelectorAll('.nav-link');

//prevent Default
document.querySelector('.nav').addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target);
    
})

anchorLinks[0].addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.1)';
})

anchorLinks[0].addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(0.9)';
})
anchorLinks[1].addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.1)';
})

anchorLinks[1].addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(0.9)';
})
anchorLinks[2].addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.1)';
})

anchorLinks[2].addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(0.9)';
})
anchorLinks[3].addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.1)';
})

anchorLinks[3].addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(0.9)';
})

////////////////////////////////////////////////////////////////////

// learned how to target buttons with classname 'btn' so huge upgrade from above.
document.querySelector('.content-pick').addEventListener('dblclick', function(event){
    if (event.target.className === 'btn') {
        event.target.style.background = 'orange';
    }
})

window.addEventListener('load', () => {
    alert('Welcome!!!');
  });