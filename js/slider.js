'use strict';

var slides = $(".slide");
slides.hide();

var curIdx = 0;
var minIdx = 0;
var maxIdx = slides.length - 1;

slides.eq(0).show();

$('#left-arrow').click(() =>
{
    slides.eq(curIdx).hide();

    curIdx -= 1;
    if (curIdx < minIdx)
    {
        curIdx = maxIdx;
    }
    slides.eq(curIdx).fadeIn();
});

$('#right-arrow').click(()=>{
    slides.eq(curIdx).hide();

    curIdx += 1;
    if (curIdx > maxIdx)
    {
        curIdx = minIdx;
    }
    slides.eq(curIdx).fadeIn();
});