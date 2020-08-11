let history = [];
var nIntervId;
var textByLine;
var index = 0;
var pause = false;
import { sources } from './sources.js';

$(document).ready(function () {

    $("#pause").click(function () {
        $('#pause').hide();
        pause = false;
    });
    
    let Sources = sources();
    console.log(Sources);
    slideshow();

});

$(document).keyup(function (e) {
    switch (e.keyCode) { // next
        case 39:
            clearTimeout(nIntervId);
            if (index >= history.length && index > 0) {
                slideshow();
            } else {
                index++;
                slideshow(history[index - 1]);
            }
            break;

            // prev    
        case 37:
            clearTimeout(nIntervId);
            if (index > 0) {
                console.log("prev");
                console.log(index);
                index--;
                slideshow(history[index - 1]);
            }
            break;
            // esc
        case 27:
            $('#button').show();
            $('#myiframe').hide();
            $('#ass').show();
            clearTimeout(nIntervId);
            break;
            // a
        // case 65:
        //     var toAdd = prompt("Enter gif/image address");

        //     if (toAdd == null || toAdd == "") {} else {
        //         txt = toAdd;
        //         var test = JSON.parse(localStorage.getItem(category));

        //         var array = [];
        //         array[0] = txt;

        //         if (test) {
        //             array = array.concat(test);
        //         }

        //         localStorage.setItem(category, JSON.stringify(array));
        //     }
        //     break;
            // pause (p)
        case 80:
            if (pause) {
                if (index >= history.length && index > 0) {
                    slideshow();
                } else {
                    index++;
                    slideshow(history[index - 1]);
                }

                $('#pause').hide();
                pause = false;
            } else {
                clearTimeout(nIntervId);
                $('#pause').show();
                pause = true;
            }
            break;
    }
});

function slideshow(Source) {
    if (!Source) {
        if (index >= history.length) {
            index++;
            var i = getRandomInt(Sources.length);
            var source = Sources[i];
            history.push(source);
        }
    } else {
        source = Source;
    }

    console.log(source);
    console.log(history);

    loadsource(source);
}

function loadsource(source) {
    if (source.includes('.gfycat') || source.includes('mp4') || source.includes('webm')) {
        $('#image').hide();
        $('#video').show();

        var video = document.getElementById('video');

        video.src = source;

        if (!pause) {
            var myVideoPlayer = document.getElementById('video');
            myVideoPlayer.addEventListener('loadedmetadata', function () {
                clearTimeout(nIntervId);
                var x = myVideoPlayer.duration * 1000;
                nIntervId = window.setTimeout(slideshow, x + 500);
                console.log(nIntervId);
            });
        }
    } else {
        $('#video').hide();
        $('#image').show();

        var image = document.getElementById('image');
        image.src = source;

        if (!pause) {
            nIntervId = window.setTimeout(slideshow, 3000);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
