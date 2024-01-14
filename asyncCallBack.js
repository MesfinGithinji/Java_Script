function download(url, process){
    setTimeout(() => {
        console.log(`Downloading ${url}...`);

        process(url);

    },2000); //delay our log by 2 sceconds 
}

function processImage(picture){
    console.log(`Processing ${picture}`);
}

let url = "https://www.shutterstock.com/pic.jpg";
download(url,processImage);


