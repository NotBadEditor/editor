window.onload = () => {

    const main = document.querySelector('.main');

    main.onmouseover = mainShow;
    main.onmouseout = mainHide;

    function mainShow() {
        main.style.top = 0;

    }

    function mainHide() {

        main.style.top = '-5vh';
    }
}
//////////////////////////////////////////////////////////

const txt = document.querySelector('.fixed-textarea');
const RunBtn = document.querySelector('.btnRun');
const btnText = document.querySelector('#btnText');


txt.addEventListener('dblclick', createPage);
RunBtn.addEventListener('click', createPage1);
btnText.addEventListener('keydown', storage);

let StyleCss = document.querySelector('.css');
let ScriptJs = document.querySelector('.js');
let html = document.querySelector('.html');

function storage() {

    let StyleCss = document.querySelector('.css').value;
    let ScriptJs = document.querySelector('.js').value;
    let html = document.querySelector('.html').value;

    localStorage.setItem('html', html);
    localStorage.setItem('css', StyleCss);
    localStorage.setItem('js', ScriptJs);

}


function createPage() {
    let StyleCss = document.querySelector('.css').value;
    let ScriptJs = document.querySelector('.js').value;
    let html = document.querySelector('.html').value;
    let page = "<style>" + StyleCss + "</style><script>" + ScriptJs + "</script>" + html;

    iframe.innerHTML = page;

    page = window.open();
    page.document.write("<style>" + StyleCss + "</style><script>" + ScriptJs + "</script>" + html);
    page.document.close();

    localStorage.setItem('html', html);
    localStorage.setItem('css', StyleCss);
    localStorage.setItem('js', ScriptJs);
}

if (localStorage.getItem('html') !== null) {
    let backTxtLocalStorage = localStorage.getItem('html');
    html.textContent = backTxtLocalStorage;
}

if (localStorage.getItem('css') !== null) {
    let backTxtLocalStorage = localStorage.getItem('css');
    StyleCss.textContent = backTxtLocalStorage;
}

if (localStorage.getItem('js') !== null) {
    let backTxtLocalStorage = localStorage.getItem('js');
    ScriptJs.textContent = backTxtLocalStorage;
}


function createPage1() {

    let StyleCss = document.querySelector('.css').value;
    let ScriptJs = document.querySelector('.js').value;
    let html = document.querySelector('.html').value;

    let page = "<style>" + StyleCss + "</style><script>" + ScriptJs + "</script>" + html;

    iframe.innerHTML = page;

    localStorage.setItem('html', html);
    localStorage.setItem('css', StyleCss);
    localStorage.setItem('js', ScriptJs);
}

////////////////////////////////////////  clear page

const btnCleanPage = document.querySelector('#btnCleanPage');

btnCleanPage.addEventListener('click', cleanPage);

function cleanPage() {
    localStorage.removeItem('html');
    localStorage.removeItem('css');
    localStorage.removeItem('js');
    document.location.reload();

}
////////////////////// tag select
$('.html').show();

$("#selectItem").change(function () {
    $('.fixed-textarea').find('textarea').hide();
    let selected = $('#selectItem option:selected').attr('id');
    $('.' + selected).show();
});

///////////////////////////////////////////// Random theme

var el_up = document.getElementById('#txt');
var rgbValue = [255, 0, 0];

function getforeGColor(rgb) {
    var cols = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
    var b = 1;
    var rValue = cols[1];
    var gValue = cols[2];
    var bValue = cols[3];
    var rV = Math.floor((255 - rValue) * b);
    var gV = Math.floor((255 - gValue) * b);
    var bV = Math.floor((255 - bValue) * b);
    return 'rgb(' + rV + ', ' + gV + ', ' + bV + ')';
}

function setColor() {
    rgbValue[0] = Math.round(Math.random() * 255);
    rgbValue[1] = Math.round(Math.random() * 255);
    rgbValue[2] = Math.round(Math.random() * 255);
    var color = Math.round(((parseInt(rgbValue[0]) * 299) +
        (parseInt(rgbValue[1]) * 587) +
        (parseInt(rgbValue[2]) * 114)) / 1000);
    var backColor =
        'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', '
        + rgbValue[2] + ')';

    var textColor = getforeGColor(backColor);
    $('#backG').css('color', textColor);
    $('#backG').css('background-color', backColor);
}

function GFG_Fun() {
    setColor();
}

///////////////////////// off contextMenu

let modal2 = document.getElementById('id02');

document.oncontextmenu = () => {
    modal2.style.display = 'block'

    return false;
}

//////////////////////////Modal Window

let modal = document.getElementById('id01');
let modal1 = document.getElementById('id02');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



///////////////////// \ for placeholder( focus - hide, nofocus - show)

$('textarea')
    .focus(function () {
        $(this).css("background", "none");
    })
    .blur(function () {
        if ($(this)[0].value == '') {
            $(this).css("background", "url(img/1.png) center center no-repeat");
        }
    });

//////////////////