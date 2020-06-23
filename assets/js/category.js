let btn = document.querySelectorAll('#categoryBtn');
let cHeader = document.querySelector('#cHeader');
let cNow = document.querySelector('#cNow');
let allArticles = document.querySelector('.article-list');
let footer = document.querySelector('#cFooter');
footer.style.display = 'none';
allArticles.style.display = 'none';
cHeader.style.display = 'none';
// btn.addEventListener('click', getCategory);

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', getCategory);
}


function getCategory(e){
    let value = e.target.textContent.toLowerCase();
    getCategoryData(value);
}

async function getCategoryData(categoryName){
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${categoryName}&apiKey=6b772943c96d488ea6908263f9718bca`);
    let data = await res.json();
    
    cHeader.style.display = '';
    allArticles.style.display = '';

    let cTitle = document.querySelectorAll('#c-title');
    let cSubTitle = document.querySelectorAll('#c-text');
    let cLink = document.querySelectorAll('#c-link');
    let cImg = document.querySelectorAll('#c-img');
    cNow.innerText = categoryName.toUpperCase();
    footer.style.display = '';


    for(let i = 0; i<data.articles.length; i++){
        cTitle[i].textContent = data.articles[i].title;
        cSubTitle[i].innerHTML = data.articles[i].description;
        cLink[i].setAttribute('href', data.articles[i].url);
        cImg[i].setAttribute('src', data.articles[i].urlToImage);
        
    }
    
}
