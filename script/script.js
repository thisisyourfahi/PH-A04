let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allCardParent = document.querySelector('.all-cards');
let allCardsList = [], interviewCardsList = [], rejectedCardsList = [];

let acSection = document.getElementById('all-cards');
let icSection = document.getElementById('int-cards');
let rcSection = document.getElementById('rej-cards');

let allBtn = document.getElementById('filter-all');
let interviewBtn = document.getElementById('filter-interview');
let rejectedBtn = document.getElementById('filter-rejected');

calculateCount();
addCardsToAllCardsList();




// event occured in acSection
acSection.addEventListener('click', function (event) {
    const clickedCard = event.target.closest('.card');
    const clickedBtn = event.target.closest('.btn');


    // which button was clicked?
    if (clickedBtn.classList.contains('btn-success')) {
        const cardInfo = createCardInfo(clickedCard);

        // does it exist on the interviewCardList?
        const exist = interviewCardsList.find(item => item.title === cardInfo.title);
        if (!exist) {
            // push in the existence list and render
            cardInfo.sta = 'INTERVIEW';
            clickedCard.querySelector('.sta').innerText = 'INTERVIEW';
            interviewCardsList.push(cardInfo);

            for (const card of allCardsList) {
                if (card.title === cardInfo.title) {
                    card.sta = 'INTERVIEW';
                }
            }

            rejectedCardsList = rejectedCardsList.filter(item => item.title !== cardInfo.title);
            render();
        }
    } else if (clickedBtn.classList.contains('btn-error')) {
        const cardInfo = createCardInfo(clickedCard);

        // does it exist in the rejectedCardList?
        const exist = rejectedCardsList.find(item => item.title === cardInfo.title);
        if (!exist) {
            cardInfo.sta = 'REJECTED';
            clickedCard.querySelector('.sta').innerText = 'REJECTED';
            rejectedCardsList.push(cardInfo);

            for (const card of allCardsList) {
                if (card.title === cardInfo.title) {
                    card.sta = 'REJECTED';
                }
            }

            interviewCardsList = interviewCardsList.filter(item => item.title !== cardInfo.title);
            render();
        }
    }
})

// event occured in icSection
icSection.addEventListener('click', function (event) {
    const clickedCard = event.target.closest('.card');
    const clickedBtn = event.target.closest('.btn');

    if (clickedBtn.classList.contains('btn-error')) {
        // console.log('rejected clicked in icSection. need to remove the card from the interviewCardList and then add it to the rejectedCardList');
        const cardInfo = createCardInfo(clickedCard);
        interviewCardsList = interviewCardsList.filter(item => item.title !== cardInfo.title);

        // changing status of the card from all card section
        for (const card of allCardsList) {
            if (card.title === cardInfo.title) {
                card.sta = 'REJECTED';
            }
        }

        cardInfo.sta = 'REJECTED';
        rejectedCardsList.push(cardInfo);
        render();
    }

    noJobs('filter-interview');
})

// event occured in rcSection
rcSection.addEventListener('click', function (event) {
    console.log('event happened in rcSectino');

    const clickedCard = event.target.closest('.card');
    const clickedBtn = event.target.closest('.btn');

    if (clickedBtn.classList.contains('btn-success')) {
        const cardInfo = createCardInfo(clickedCard);
        rejectedCardsList = rejectedCardsList.filter(item => item.title !== cardInfo.title);

        for (const card of allCardsList) {
            if (card.title === cardInfo.title) {
                card.sta = 'INTERVIEW';
            }
        }

        cardInfo.sta = 'INTERVIEW';
        interviewCardsList.push(cardInfo);
        render();
    }

    noJobs('filter-rejected');
})