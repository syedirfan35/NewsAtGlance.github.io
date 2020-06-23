let countryBtn = document.querySelectorAll('#countryBtn');

let country_articles = document.getElementById('country-articles');
country_articles.style.display = 'none';

for(let i=0; i<countryBtn.length; i++){
    countryBtn[i].addEventListener('click', getCountryInfo);
}

function getCountryInfo(e){
    let val = e.target.getAttribute("value");
    getCountryData(val);
}


async function getCountryData(countryName){
    let res = await fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${countryName}&language=en&apiKey=6b772943c96d488ea6908263f9718bca`)
    let data = await res.json();
    
    let cnTitle = document.querySelectorAll('#country-title');
    let cnSubTitle = document.querySelectorAll('#country-text');
    let cnLink = document.querySelectorAll('#country-link');
    let cnImg = document.querySelectorAll('#country-img');

    country_articles.style.display = '';
    
    for(let i = 0; i<data.articles.length; i++){
        cnTitle[i].textContent = data.articles[i].title;
        cnSubTitle[i].textContent = data.articles[i].description;
        cnLink[i].setAttribute('href', data.articles[i].url);
        cnImg[i].setAttribute('src', data.articles[i].urlToImage);
        
    }
}