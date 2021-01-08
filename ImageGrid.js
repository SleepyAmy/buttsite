let images = [];
let videos = [];
var scrolldelay;
var pause = true;
var zoomed = false;
var index = 0;
var imageOffset = 12;
var isExecuted = false;
import { sources } from './sources.js';


$(document).ready(function ()
{
    
    images = sources;
        
        //console.log(images);
        shuffleArray(images);
        addimageRow(images, 0);
        addimageRow(images, 4);
        addimageRow(images, 8);




    $('body').on('click', function (e)
    {
        if (zoomed)
        {
            zoomed = false;
            $("#overlay").remove();
            $('.row').css('opacity', 1);
        }
        else if (e.target.tagName == "IMG")
        {
            zoomed = true;
            console.log(e.target.src);
            zoomImage(e.target);
        }
        else if (e.target.tagName == "VIDEO")
        {
            zoomed = true;
            zoomImage(e.target,true);
        }
    });

});

$(window).scroll(function ()
{
    videos.forEach(video =>
    {
        if (isAnyPartOfElementInViewport(video))
        {
            video.play();
        } else if (video.currentTime == video.duration)
        {
            var index = videos.indexOf(video);
            videos.splice(index, 1);
        }
    });

    //console.log(videos);
    //console.log(document.documentElement.scrollTop + window.innerHeight);
    
    var currentScroll = document.documentElement.scrollTop + window.innerHeight;

    var column1 = document.getElementById('column1');
    var column2 = document.getElementById('column2');
    var column3 = document.getElementById('column3');
    var column4 = document.getElementById('column4');


    var bodyRect = document.body.getBoundingClientRect(),
        elemRect1 = column1.lastChild.getBoundingClientRect(),
        elemRect2 = column2.lastChild.getBoundingClientRect(),
        elemRect3 = column3.lastChild.getBoundingClientRect(),
        elemRect4 = column4.lastChild.getBoundingClientRect(),
        offset1 = elemRect1.bottom - bodyRect.top,
        offset2 = elemRect2.bottom - bodyRect.top,
        offset3 = elemRect3.bottom - bodyRect.top,
        offset4 = elemRect4.bottom - bodyRect.top;
    
    //console.log(offset1);

    

    // Inside the "if" statement the "isExecuted" variable is negated to allow initial code execution.
    if (currentScroll > offset1 && !isExecuted)
    {
        console.log("row1");
        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true;

        addImageToColumn(images, imageOffset, 1);
        imageOffset++;
        
        // Your code goes here
        console.log("Working...");

        // After 1 second the "isExecuted" will be set to "false" to allow the code inside the "if" statement to be executed again
        setTimeout(() =>
        {
            isExecuted = false;
        }, 50);
    }
    else if (currentScroll > offset2 && !isExecuted)
    {
        console.log("row2");

        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true;

        addImageToColumn(images, imageOffset, 2);
        imageOffset++;

        // Your code goes here
        console.log("Working...");

        // After 1 second the "isExecuted" will be set to "false" to allow the code inside the "if" statement to be executed again
        setTimeout(() =>
        {
            isExecuted = false;
        }, 50);
    }
    else if (currentScroll > offset3 && !isExecuted)
    {
        console.log("row3");

        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true;

        addImageToColumn(images, imageOffset, 3);
        imageOffset++;

        // Your code goes here
        console.log("Working...");

        // After 1 second the "isExecuted" will be set to "false" to allow the code inside the "if" statement to be executed again
        setTimeout(() =>
        {
            isExecuted = false;
        }, 50);
    }
    else if (currentScroll > offset4 && !isExecuted)
    {
        console.log("row4");

        // Set "isExecuted" to "true" to prevent further execution
        isExecuted = true;

        addImageToColumn(images, imageOffset, 4);
        imageOffset++;

        // Your code goes here
        console.log("Working...");

        // After 1 second the "isExecuted" will be set to "false" to allow the code inside the "if" statement to be executed again
        setTimeout(() =>
        {
            isExecuted = false;
        }, 50);
    }
});


$(document).keyup(function (e)
{
    switch (e.keyCode)
    {
        // next
        case 39:
            if (zoomed)
            {
                var image = document.getElementsByClassName("zoomed_image")[0];
                var id = image.id;
                id++;
                image.src = res[id];
                image.id = id;
                index = id;
            }
            break;
        // prev
        case 37:
            if (zoomed && index > 0)
            {
                var image = document.getElementsByClassName("zoomed_image")[0];
                var id = image.id;
                id--;
                image.src = res[id];
                image.id = id;
                index = id;
            }
            break;
        // start scroll (s)
        case 83:
            if (pause)
            {
                pause = false;
                if (zoomed)
                {

                }
                else
                {
                    pageScroll();
                }
            } else
            {
                pause = true;
                clearTimeout(scrolldelay);
            }
            break;
        // pause (p)
        case 80:
            if (pause)
            {

            } else
            {
                pause = true;
                clearTimeout(scrolldelay);
            }
            break;
    }
});




function pageScroll()
{
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
}

function addimageRow(images, offset)
{
    //shuffleArray(images);
    var column1 = document.getElementById('column1');
    var column2 = document.getElementById('column2');
    var column3 = document.getElementById('column3');
    var column4 = document.getElementById('column4');
    var i = 0;

    //while (i<5)
    {

        if (images[i + offset].includes('mp4'))
        {
            var img1 = document.createElement("video");
            videos.push(img1);
            //img1.setAttribute('autoplay', true);
        }
        else
        {
            var img1 = document.createElement("img");
        }


        if (images[i + offset + 1].includes('mp4'))
        {
            var img2 = document.createElement("video");
            videos.push(img2);
            //img2.setAttribute('autoplay', true);
        } else
        {
            var img2 = document.createElement("img");
        }

        if (images[i + offset + 2].includes('mp4'))
        {
            var img3 = document.createElement("video");
            videos.push(img3);
            //img3.setAttribute('autoplay', true);
        } else
        {
            var img3 = document.createElement("img");
        }

        if (images[i + offset + 3].includes('mp4'))
        {
            var img4 = document.createElement("video");
            //img4.setAttribute('autoplay', true);
            videos.push(img4);
        } else
        {
            var img4 = document.createElement("img");
        }

        img1.id = i + offset;
        img2.id = i + offset + 1;
        img3.id = i + offset + 2;
        img4.id = i + offset + 3;

        img1.src = images[i + offset];
        img2.src = images[i + offset + 1];
        img3.src = images[i + offset + 2];
        img4.src = images[i + offset + 3];

        column1.appendChild(img1);
        column2.appendChild(img2);
        column3.appendChild(img3);
        column4.appendChild(img4);

        i = i + 4;
    }
}

function addImageToColumn(images,offset,columnNumber)
{
    var Column = document.getElementById('column' + columnNumber);
    image = images[offset];

    if (image.includes('mp4'))
    {
        var img = document.createElement("video");
        videos.push(img);
    }
    else
    {
        var img = document.createElement("img");
    }

    img.id = offset;
    img.src = image;

    Column.appendChild(img);
}

function zoomImage(image, isvideo)
{
    var aspectRatio = $(image).width() / $(image).height();
    $(image).data("aspect-ratio", aspectRatio);

    $("body").append("<div id='overlay'></div>");
    $("#overlay").css({
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'top': '0',
        'left': '0',
        'backgroundColor': 'rgba(0,0,0, 0.8)',
        'display': 'flex',
        'alignItems': 'center',
        'justify-content': 'center;'
    });

    if (!isvideo)
    {
        $("#overlay").append("<img src='" + image.src + "' class='zoomed_image'" + "' id='" + image.id + "'/>");
    }
    else
    {
        $("#overlay").append("<video autoplay='true' loop='true' src='" + image.src + "' class='zoomed_image'" + "' id='" + image.id + "'/>");
    }

    $(".zoomed_image").css({
        'maxWidth': '80%',
        'maxHeight': '80%',
        'margin': 'auto'
    });

    $('.row').css('opacity', 0.5);

    // Conditional statement
    if (aspectRatio > 1)
    {
        // Image is landscape
        $(".zoomed_image").css({
            maxWidth: '80%',
            maxHeight: 'auto',
        });
    } else if (aspectRatio < 1)
    {
        // Image is portrait
        $(imagee).css({
            maxWidth: "100%",
            height: "80%"
        });
    } else
    {
        // Image is square
        $(imagee).css({
            maxWidth: "100%",
            height: "auto"
        });
    }
}

function shuffleArray(array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}