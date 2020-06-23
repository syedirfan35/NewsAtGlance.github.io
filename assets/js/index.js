async function getHeadlinesData(){
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=6b772943c96d488ea6908263f9718bca');
    const data = await res.json();
    
    let title = document.querySelectorAll('.hero-title');
    let sub_title = document.querySelectorAll('.hero-subtitle');
    let titleImg = document.querySelectorAll('.carousel-hero');
    let titleBtn = document.querySelectorAll('.hero-button');

    // console.log(data.articles[0].urlToImage);

    for(let i=0; i<data.articles.length; i++){
        title[i].innerHTML = data.articles[i].title;
        sub_title[i].innerHTML = data.articles[i].description;
        // titleImg[i].setAttribute('href', data.articles[i].urlToImage);
        // console.log(titleImg[i]);
        titleBtn[i].setAttribute('href', data.articles[i].url);
        titleImg[i].setAttribute('style', "background-image: url("+data.articles[i].urlToImage+")");
        // titleImg[i].setAttribute('style', 'src = data.articles[i].urlToImage');
        // titleImg[i].style.backgroundImage = url(data.articles[i].urlToImage);
    }
}

getHeadlinesData();

//stories data

async function getStoriesData(){
    let res = await fetch('https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=6b772943c96d488ea6908263f9718bca');
    let data = await res.json();
    let storyData = [];
    // console.log(data);

    for(let i=5; i<data.articles.length; i++){
        storyData.push(data.articles[i]);
    }
    // console.log(storyData[0].title);

    let storyTitle = document.querySelectorAll('#card-title');
    let storySubTitle = document.querySelectorAll('#card-text');
    let storyLink = document.querySelectorAll('#card-link');
    let storyImg = document.querySelectorAll('#card-img');
    
    // console.log(storyLink);
    for(let i = 0; i<storyData.length; i++){
        storyTitle[i].textContent = storyData[i].title;
        storySubTitle[i].innerHTML = storyData[i].description;
        storyLink[i].setAttribute('href', storyData[i].url);
        storyImg[i].setAttribute('src', storyData[i].urlToImage);
        // console.log(storyImg[i]);
    }
}


getStoriesData();
