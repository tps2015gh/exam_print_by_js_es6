var canvas = null
var hight = 20 ; 
//=======================================================

function mmToPixel(mm){
    // var mm = 210;
    var dpr = window.devicePixelRatio;
    var pixels = mm * dpr * 96 / 25.4;
    return pixels;
}
//=======================================================

function setCanvasById(elementId){ 
    // get a reference to the canvas element
    canvas = document.getElementById(elementId);
    console.log("setCanvasById")
    console.log(this.canvas);

    canvas.setAttribute("width",mmToPixel(210));
    canvas.setAttribute("height",mmToPixel(297));
    canvas.style.width = "210mm";
    canvas.style.height = "297mm";
    canvas.style.backgroundColor = "white";
    canvas.style.border = "1px solid silver";
}
//=======================================================

function drawRec(){
    // get the 2D context for the canvas
    
    var ctx = canvas.getContext('2d');
    
    // set the fill style to blue
    ctx.fillStyle = 'blue';
    
    // draw a rectangle 4 columns wide and 5 rows high
    ctx.rect(0, 0, 4, 5);
    
    // fill the rectangle with the fill style
    ctx.fill();
    console.log("drawRec ok");
}
//=======================================================

function strokeRecMM(xmm,ymm,wimm,himm){
    // get the 2D context for the canvas
    
    var ctx = canvas.getContext('2d');
    
    var dpr = window.devicePixelRatio;
    var x = xmm * dpr * 96 / 25.4; // x position in pixels
    var y = ymm * dpr * 96 / 25.4; // y position in pixels   
    var wi = wimm * dpr * 96 / 25.4; // wi position in pixels   
    var hi = himm * dpr * 96 / 25.4; // hi position in pixels   
    console.log( " WI HI = "+  wimm + " / " + himm );

    // set the fill style to blue
    ctx.fillStyle = 'blue';
    
    // draw a rectangle 4 columns wide and 5 rows high
    // ctx.rect(x, y, wi, hi);
    // ctx.fill();

    ctx.strokeRect(x, y, wi, hi);
    
    // fill the rectangle with the fill style
    console.log("strokeRect ok");
}
//=======================================================
function strokeRecMmWithText(xmm,ymm,wimm,himm,str1){
    // get the 2D context for the canvas
    var ctx = canvas.getContext('2d');

    var dpr = window.devicePixelRatio;
    var x = xmm * dpr * 96 / 25.4; // x position in pixels
    var y = ymm * dpr * 96 / 25.4; // y position in pixels   
    var wi = wimm * dpr * 96 / 25.4; // wi position in pixels   
    var hi = himm * dpr * 96 / 25.4; // hi position in pixels   
    console.log( " WI HI = "+  wimm + " / " + himm );

    // set the fill style to blue
    ctx.fillStyle = 'blue';

    // draw a rectangle 4 columns wide and 5 rows high
    // ctx.rect(x, y, wi, hi);
    // ctx.fill();

    ctx.strokeRect(x, y, wi, hi);

    // fill the rectangle with the fill style
    console.log("strokeRect ok");

    // set the text alignment to center
    ctx.textAlign = 'center';

    // set the text baseline to middle
    ctx.textBaseline = 'middle';

    ctx.font = "16px sans-serif";
    // draw the string in the center of the rectangle
    ctx.fillText(str1, x + wi / 2, y + hi / 2);
}
//=======================================================

function drawRow4Col()
{
    // get a reference to the canvas element
    
    // get the 2D context for the canvas
    var ctx = canvas.getContext('2d');

    // set the fill style to blue
    ctx.fillStyle = 'lightyellow';
    ctx.strokeStyle = "blue";
    ctx.strokeStyle = "blue";


    // calculate the width of each rectangle
    var rectWidth = canvas.width / 4;

    // loop through each rectangle
    for (var i = 0; i < 4; i++) {
        // calculate the x coordinate of the rectangle
        var x = (rectWidth + 4) * i;

        // draw the rectangle
        ctx.rect(x, 0, rectWidth, hight);

        // fill the rectangle with the fill style
        ctx.fill();

        ctx.strokeRect(x, 0, rectWidth, hight);
    }
    ctx.strokeRect(0, 0, 10,10);
}
//=======================================================

export {setCanvasById,drawRec,drawRow4Col,strokeRecMM}
export {strokeRecMmWithText}
//=======================================================