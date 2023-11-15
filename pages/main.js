document.addEventListener('DOMContentLoaded', async function () {
    const cardsContainer = document.getElementById('fetch-target');

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function buildCard(data) {
        const card = document.createElement('div');
        card.className = 'card dark-lavender';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardImg = document.createElement('img');
        cardImg.className = "card-img-top card-img-one";
        cardImg.alt = "Card Image";
        cardImg.src = data[0].LogoPath;
        
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = data[0].Name;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = "Total Data Bocor : " + data[0].PwnCount;

        const cardText2 = document.createElement('p');
        cardText2.className = 'card-text';
        cardText2.textContent = data[0].BreachDate;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardImg);
        card.appendChild(cardBody);

        return card;
    }

    function displayCards(cards) {
        cardsContainer.innerHTML = '';
        cards.forEach(card => {
            cardsContainer.appendChild(card);
        });
    }

    let data = new Array;
    data.push(await fetchData("https://haveibeenpwned.com/api/v3/breaches?Domain=adobe.com"));
    data.push(await fetchData("https://haveibeenpwned.com/api/v3/breaches?Domain=facebook.com"));
    data.push(await fetchData("https://haveibeenpwned.com/api/v3/breaches?Domain=tokopedia.com"));
    console.log(data);

    if (data) {
        const cards = data.map(buildCard);
        displayCards(cards);
    }
});