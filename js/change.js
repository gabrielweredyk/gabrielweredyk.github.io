var question = 1;
var name = "";
var contact = "";
var payment = "";
var date = "";
var budget = "";
var domain = "";
var content = "";
var style = "";
var forward = true;

var firebaseConfig = {
    apiKey: "AIzaSyA9BXwyEZEY35fAjcVTskIGR4Jif3D5IPk",
    authDomain: "orders-22e2f.firebaseapp.com",
    databaseURL: "https://orders-22e2f.firebaseio.com",
    projectId: "orders-22e2f",
    storageBucket: "orders-22e2f.appspot.com",
    messagingSenderId: "868733769021",
    appId: "1:868733769021:web:dff94eeb5f50d014"
};
firebase.initializeApp(firebaseConfig);
console.log(firebase.appId);
function next(direction) {
    var answer = document.getElementById("answer");
    var quest = document.getElementById("question");
    if (direction && question < 10) {
        question++;
        forward = true;
    }
    else if (!direction && question > 1) {
        question--;
        forward = false;
    }
    if (question == 1) {
        if (!forward) {
            contact = answer.innerHTML;
        }
        answer.innerHTML = name;
        quest.innerHTML = "What's your name?";
    }
    else if (question == 2) {
        if (forward) {
            name = answer.innerHTML;
        }
        else {
            payment = answer.innerHTML;
        }
        answer.innerHTML = contact;
        quest.innerHTML = "Where can I contact you?";
    }
    else if (question == 3) {
        if (forward) {
            contact = answer.innerHTML;
        }
        else {
            date = answer.innerHTML;
        }
        answer.innerHTML = payment;
        quest.innerHTML = "What method of payment are you using?";
    }
    else if (question == 4) {
        if (forward) {
            payment = answer.innerHTML;
        }
        else {
            budget = answer.innerHTML;
        }
        answer.innerHTML = date;
        quest.innerHTML = "When do you want your website due?";
    }
    else if (question == 5) {
        if (forward) {
            date = answer.innerHTML;
        }
        else {
            domain = answer.innerHTML;
        }
        answer.innerHTML = budget;

        quest.innerHTML = "Do you have a budget? If so, how much?";
        document.getElementById("disclaimer").innerHTML = "";
    }
    else if (question == 6) {
        if (forward) {
            budget = answer.innerHTML;
        }
        else {
            content = answer.innerHTML;
        }
        answer.innerHTML = domain;
        quest.innerHTML = "What domain do you want to use? Example: gweredyk.com";
        document.getElementById("disclaimer").innerHTML = "DISCLAIMER: I will help you host the domain however I can't pay for the domain due to the fact that it is a yearly charge.  I can show you where to get one and your options but I can not buy your domain.";
    }
    else if (question == 7) {
        domain = answer.innerHTML;
        answer.innerHTML = content;
        quest.innerHTML = "What do you want on your website?";
        document.getElementById("disclaimer").innerHTML = "";
    }
    else if (question == 8) {
        if (forward) {
            content = answer.innerHTML;
        }
        answer.innerHTML = style;
        quest.innerHTML = "How do you want your website to look? Do you have an example website that you want me to look at?";
        document.getElementById("continue").innerHTML = "Continue";
        document.getElementById("back").innerHTML = "Back";
    }
    else if (question == 9) {
        style = answer.innerHTML;
        answer.innerHTML = "";
        answer.style.width = "0px";
        answer.contentEditable = "false";
        quest.innerHTML = "Is the following information correct?";
        document.getElementById("continue").innerHTML = "Yes";
        document.getElementById("back").innerHTML = "No";
        document.getElementById("disclaimer").innerHTML = "";

        document.getElementById("answers").innerHTML = "Name: " + name + "\nContact: " + contact + "\nPayment Method: " + payment + "\nDate: " + date + "\nBudget: " + budget + "\nDomain: " + domain + "\nContext: " + content + "\nStyle: " + style;
    }
    else if (question == 10) {
        quest.innerHTML = "Your information has been sent to Gabriel!";
        document.getElementById("disclaimer").innerHTML = "Thank you for ordering! You will recieve a message from Gabe once he has your information!";
        document.getElementById("buttons").removeChild(document.getElementById("continue"));
        document.getElementById("buttons").removeChild(document.getElementById("back"));
    }

}
