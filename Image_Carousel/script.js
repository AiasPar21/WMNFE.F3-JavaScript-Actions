let i = 0;
let time = 1000;
let timer;
const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg'
]

function playButton(){
    document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    timer = setTimeout(playButton, time);
}

function stopButton(){
    clearTimeout(timer);
}

function thumbnails(x){
    stopButton();
    document.slide.src = images[x];
}

function nextImage(){
    stopButton();
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    document.slide.src = images[i];
}

function prevImage(){
    stopButton();
    document.slide.src = images[i];
    if(i>0){
        i--;
    }else{
        i = images.length-1;
    }
    document.slide.src = images[i];
}