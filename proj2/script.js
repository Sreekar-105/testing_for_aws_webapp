

var red = document.querySelector(".red");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var cyan = document.querySelector(".cyan");
var pink = document.querySelector(".pink");

var center = document.querySelector(".center");


// To get background color of each of these elements
// Here window.getComputedStyle will give us the final compuited style of the element given
console.log(window.getComputedStyle(cyan).backgroundColor);

const getBGcolour = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeElementColor = getBGcolour(orange);

orange.addEventListener('mouseenter',() =>{
    center.style.background = orangeElementColor;
});

const colorChanger = (element) =>{
    element.addEventListener('mouseenter',() =>{
        var colr = getBGcolour(element);
        center.style.background = colr;
    });
}

colorChanger(red);
colorChanger(violet);
colorChanger(cyan);
colorChanger(pink);