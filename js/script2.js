

function check() {
    let txt = document.querySelector('.fixed-textarea');
    let checkBox = document.querySelector('#checkBox');

    if (checkBox.checked == true) {
        txt.classList.add('bold');
    }

    else {
        txt.classList.remove('bold');
    }

}
/////////////////////////////////////////

function lol() {
    q = txt + RunBtn;
    console.log(q);

}

lol();


///////////////////////

colorWell = document.querySelector("#colorWell");
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
}
function updateFirst(event) {
    var p = document.querySelector("#backG");

    if (p) {
        p.style.color = event.target.value;
    }
} function updateAll(event) {
    document.querySelector("p").forEach(function (p) {
        p.style.color = event.target.value;
    });
}

/////////////////////////////

var openFile = function (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var node = document.querySelector('#backG');
        node.innerText = text;
    };
    reader.readAsText(input.files[0]);
};

function previewFile() {
    var preview = document.querySelector('.img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;

    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}





