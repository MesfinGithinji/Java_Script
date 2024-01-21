function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
    },1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';

download(url);
process(url);