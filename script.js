// Created by Kyle Carmichael for IFT 301 Spring A 2023 at ASU

//Global variables

let valid1 = false;
let valid2 = false;
let valid3 = false;
let valid4 = false;
let valid5 = false;
let valid6 = false;

// Main function, runs onclick for the 'See Results' btn

function getQuizResults() {

    let q1ans = document.querySelector('input[name="q1"]:checked');
    let q2ans = document.querySelector('input[name="q2"]:checked');
    let q3ans = document.querySelector('input[name="q3"]:checked');
    let q4ans = document.querySelector('input[name="q4"]:checked');
    let q5ans = document.querySelector('input[name="q5"]:checked');
    let q6ans = document.querySelector('input[name="q6"]:checked');

    let layoutMessage = document.getElementById('layoutMessage');
    let capsMessage = document.getElementById('capsMessage');
    let switchesMessage = document.getElementById('switchesMessage');

    // Error Handling
    let q1 = document.querySelector('.question1')
    let q2 = document.querySelector('.question2')
    let q3 = document.querySelector('.question3')
    let q4 = document.querySelector('.question4')
    let q5 = document.querySelector('.question5')
    let q6 = document.querySelector('.question6')
   
    // Checks if each question has an answer and adds CSS error class to show user if null
    // If it has the error class but isnt null then the class is removed and the valid flag is set to true
    // realizing that this could have been done in a loop :/
    if (q1ans === null) {
        q1.classList.add('not-answered');
    } else if (q1ans != null && q1.classList[1] === 'not-answered'){
        q1.classList.remove('not-answered')
        valid1 = true;
    } else {
        valid1 = true;
    }

    if (q2ans === null) {
        q2.classList.add('not-answered');
    } else if (q2ans != null && q2.classList[1] === 'not-answered'){
        q2.classList.remove('not-answered')
        valid2 = true;
    } else {
        valid2 = true;
    }

    if (q3ans === null) {
        q3.classList.add('not-answered');
    } else if (q3ans != null && q3.classList[1] === 'not-answered'){
        q3.classList.remove('not-answered')
        valid3 = true;
    } else {
        valid3 = true;
    }

    if (q4ans === null) {
        q4.classList.add('not-answered');
    } else if (q4ans != null && q4.classList[1] === 'not-answered'){
        q4.classList.remove('not-answered')
        valid4 = true;
    } else {
        valid4 = true;
    }

    if (q5ans === null) {
        q5.classList.add('not-answered');
    } else if (q5ans != null && q5.classList[1] === 'not-answered'){
        q5.classList.remove('not-answered')
        valid5 = true;
    } else {
        valid5 = true;
    }

    if (q6ans === null) {
        q6.classList.add('not-answered');
        valid6 = false
    } else if (q6ans != null && q6.classList[1] === 'not-answered'){
        q6.classList.remove('not-answered')
        valid6 = true;
    } else {
        valid6 = true;
    }
    
    // If none of the values are null then the quiz results can be run
    if (valid1 === true && valid2 === true  && valid3 === true  && valid4 === true  && valid5 === true  && valid6 === true) {

        // removes hidden results section
        function removeHidden(){
            if (document.querySelector('.results-section').classList.length === 2) {
                document.querySelector('.hidden').classList.remove('hidden');
            }
        }
        
        removeHidden();

        // main quiz logic
        switch (q1ans.value) {
            case 'yes':
                layoutMessage.innerHTML = (layout100);
                break;
            case 'sometimes':
                layoutMessage.innerHTML = (layoutENP);
        }
        switch (q2ans.value) {
            case 'yes':
                if (q1ans.value === 'yes'){
                    break; 
                } else if (q1ans.value === 'sometimes') {
                    break;
                } else {
                    layoutMessage.innerHTML = (layoutTKL);
                    break;
                }
        }
        switch (q3ans.value) {
            case 'yes':
                capsMessage.innerHTML = (capsCherry);
                break;
            case 'no':
                capsMessage.innerHTML = (capsOther);
        }
        switch (q4ans.value) {
            case 'yes':
                if (q1ans.value === 'no' && q2ans.value === 'no') {
                    layoutMessage.innerHTML = (layout65);
                    break;
                } else {
                    break;
                }
            case 'no':
                if (q1ans.value === 'no' && q2ans.value === 'no') {
                    layoutMessage.innerHTML = (layout40);
                } 
        }
        switch (q5ans.value) {
            case 'no':
                switchesMessage.innerHTML = (switchBlue);
        }
        switch (q6ans.value) {
            case 'acc':
                if (q5ans.value === 'yes'){
                    switchesMessage.innerHTML = (switchBlack);
                    break;
                }   
            case 'speed':
                if (q5ans.value === 'yes'){
                    switchesMessage.innerHTML = (switchRed);
                }
           
        }
    }
}

// Output messages

// Layout

let layout100 = 'Get a 100% keyboard. This full sized keyboard will suit your needs well. If you are looking to add a little space to for your mouse, consider a numberpad set to the left rather than the right.';
let layoutTKL = 'Get a TKL (Ten key less) keyboard. You can use the extra space the number pad takes up towards you mouse.';
let layoutENP = layoutTKL + ' If you sometimes use the numberpad, consider an external number pad that you only plug in when you need it. You could also place it on the left side of your keyboard, preserving your mouse area.';
let layout65 = 'Get a 65% keyboard. This size drops the num pad and Function row.';
let layout40 = "Get a 60% or even 40%. We're getting pretty small now. A 60% drops the arrow keys, F row, and num pad while the 40% also drops the number row. If you're looking for compact and travel friendly this might also be a great option for you.";

// Cap Profile

let capsCherry = 'Cherry Profile keys will be the best fit for you because they bring the Function row closer to you.';
let capsOther = "Since you don't really use the F row, you can get any keycap profile you'd like! Check out the KeyCaps page to learn more.";

// Switch Type

let switchBlue = 'Cherry Blues are clicky switches that might be a good fit for you. But beware, they are loud and will canabalize any silence in your space.';
let switchRed = 'Cherry Reds are linear switches suited well for gaming.';
let switchBlack = 'Cherry Blacks are linear switches that work well for people who type a lot.';

