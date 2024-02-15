function addNews() {
    fetch('https://e81ff723-060f-43f4-a8e1-06f20559ccc9.mock.pstmn.io/news')
    .then(response => response.json())
    .then(news => {
        const newsContainer = document.getElementById('news');
        let generatedNewsHtml = '';
        news.forEach((newsItem) => {
            const html = `
            <div class="card-news">
                <h2 class="card-news__title">${newsItem.title}</h2>
                <p class="card-news__date">${newsItem.date}</p>
                <p class="card-news__description">${newsItem.description}</p>
                <a class="card-news__link" href="#">Read More</a>
            </div>
            `;
            generatedNewsHtml = generatedNewsHtml + html;
        });
        
        newsContainer.innerHTML = generatedNewsHtml;
    });
    
    

}

function processCookie() {
    const cookieBanner = document.getElementsByClassName('cookie-alert')[0];
    const acceptCookie = document.getElementById('accept-cookie');
    acceptCookie.onclick = function() {
        cookieBanner.style.display = 'none';
    }
}

addNews();
processCookie();






























