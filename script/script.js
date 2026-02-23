let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allCardsList = document.querySelector('.all-cards');
let interviewCardsList = [], rejectedCardsList = [];
calculateCount();

let acSection = document.getElementById('all-cards');
let icSection = document.getElementById('int-cards');
let rcSection = document.getElementById('rej-cards');


// event occured in acSection
acSection.addEventListener('click', function(event) {
    const clickedCard = event.target.closest('.card');
    const clickedBtn = event.target.closest('.btn');

    
    // which button was clicked?
    if (clickedBtn.classList.contains('btn-success')) {
        const cardInfo = createCardInfo(clickedCard);

        // does it exist on the interviewCardList?
        const exist = interviewCardsList.find(item => item.title === cardInfo.title);
        if (exist) {
            console.log('exist in the intcardlist');
        } else {
            console.log('doesnt exist in the intcardlist');
        }
    } else if (clickedBtn.classList.contains('btn-error')) {
        const cardInfo = createCardInfo(clickedCard);

        // does it exist in the rejectedCardList?
        const exist = rejectedCardsList.find(item => item.title === cardInfo.title);
        if (exist) {
            console.log('exist in the rejectedCardList');
        } else {
            console.log('doesnt exist in the rejectedCardList');
        }
    }
})

// event occured in icSection
icSection.addEventListener('click', function(event) {
    console.log('event happened in icSection');
})

// event occured in rcSection
rcSection.addEventListener('click', function(event) {
    console.log('event happened in rcSectino');
})