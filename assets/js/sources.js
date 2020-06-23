let source_articles = document.getElementById('source-articles');
source_articles.style.display = 'none';


function run(){
    let sel = document.querySelector('.custom-select').value;
    selection(sel);
}

function selection(source){
    switch(source){
        case '1':
            val = 'abc-news';
            getSourceData(val);
            break;
        case '2':
            val = 'bbc-news';
            getSourceData(val);
            break;
        case '3':
            val = 'bloomberg';
            getSourceData(val);
            break;
        case '4':
            val = 'business-insider';
            getSourceData(val);
            break;
        case '5':
            val = 'cbc-news';
            getSourceData(val);
            break;
        case '6':
            val = 'cnn';
            getSourceData(val);
            break;
        case '7':
            val = 'fox-news';
            getSourceData(val);
            break;
        default:
            console.log('Error');
    }
}

async function getSourceData(sourceName){
    let res = await fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${sourceName}&language=en&apiKey=6b772943c96d488ea6908263f9718bca`);
    let data = await res.json();


    let sTitle = document.querySelectorAll('#source-title');
    let sSubTitle = document.querySelectorAll('#source-text');
    let sLink = document.querySelectorAll('#source-link');
    let sImg = document.querySelectorAll('#source-img');

    let currSource = document.getElementById('sourceSel');
    currSource.innerText = sourceName;

    source_articles.style.display = '';
    
    for(let i = 0; i<data.articles.length; i++){
        sTitle[i].textContent = data.articles[i].title;
        sSubTitle[i].textContent = data.articles[i].description;
        sLink[i].setAttribute('href', data.articles[i].url);
        sImg[i].setAttribute('src', data.articles[i].urlToImage);
        
    }

}