function submit() {
    var input = document.getElementById("input");
    var phrase = document.getElementById("phrase");
    var width = document.getElementById("width");
    var hints = document.getElementById("letters");
    var disclaimer = document.getElementById("disclaimer");
    var streched = [];
    var lists = [];
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var numbers = "1234567890";
    if (width.innerHTML > input.innerHTML.length) {
        disclaimer.innerHTML = "Width cannot be longer than the length of the phrase (" + input.innerHTML.length + ")!";
        return;
    }
    for (i = 0; i < width.innerHTML.length; i++) {
        if (!numbers.includes(width.innerHTML[i])) {
            disclaimer.innerHTML = "Width must be an interger! >:(";
            return;
        }
    }
    for (i = 0; i < input.innerHTML.length; i++) {
        streched.push(input.innerHTML.charAt(i));
    }
    
    var k = -1;
    
    for (i = 0; i < (streched.length / width.innerHTML); i++) {
        var row = phrase.insertRow(-1);
        for (j = 0; j < width.innerHTML; j++) {
            var cell = row.insertCell(j);
            k++;
            if (letters.includes(streched[k])) {
                cell.className = "blank";
                cell.innerHTML = "_";
            }
            else if (streched[k] == " " || k >= streched.length) {
                cell.className = "space";
                cell.innerHTML = "X";
            }
            else if (streched[k].includes("&")) {
                disclaimer.innerHTML = streched[k] + streched[k+1] + streched[k+2] + streched[k+3] + " is an invalid character.";
                for (a = -1; a < i; a++) {
                    phrase.deleteRow(0);
                }
                return;
            }
            else {
                
                cell.innerHTML = streched[k];
            }
        }
    }
    for (i = 0; i < width.innerHTML; i++) {
        lists.push([]);
    }
    for (i = 0; i < streched.length; i++) {
        if ((i + 1) % width.innerHTML != 0 && letters.includes(streched[i])) {
            lists[((i + 1) % width.innerHTML) - 1].push(streched[i]);
        }
        else if (letters.includes(streched[i])){
            lists[width.innerHTML - 1].push(streched[i]);
        }
    }
    for (i = 0; i < width.innerHTML; i++) {
        var currentPass = lists[i].length;
        var index, temp;
        while (currentPass > 0) {
            index = Math.floor(Math.random() * currentPass);
            currentPass--;
            temp = lists[i][currentPass];
            lists[i][currentPass] = lists[i][index];
            lists[i][index] = temp;
        }
        console.log(lists[i]);
    }
    var row = hints.insertRow(0);
    var j = 0;
    var k = 0;
    for (i = 0; i < streched.length; i++) {
        var cell = row.insertCell(-1);
        cell.className = "goodtable";
        if (lists[k].length > j) {
            cell.innerHTML = lists[k][j];
        }
        else {
            cell.innerHTML = " ";
        }
        k++;
        if (i % width.innerHTML == width.innerHTML - 1) {
            var row = hints.insertRow(0);
            j++;
            k = 0;
        }
    }
    disclaimer.innerHTML = "If you want to make a new puzzle please refresh the page";
 }
