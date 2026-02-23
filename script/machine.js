function calculateCount() {
    totalCount.innerText = allCardsList.children.length;
    interviewCount.innerText = interviewCardsList.length;
    rejectedCount.innerText = rejectedCardsList.length;
}

function createCardInfo(clickedCard) {
    console.log('create card object');
    const title = clickedCard.querySelector('.title').innerText;
    const role = clickedCard.querySelector('.role').innerText;
    const location = clickedCard.querySelector('.location').innerText;
    const time = clickedCard.querySelector('.time').innerText;
    const salary = clickedCard.querySelector('.salary').innerText;
    const sta = clickedCard.querySelector('.sta').innerText;
    const des = clickedCard.querySelector('.des').innerText;

    const card = {
        title, role, location, time, salary, sta, des
    }

    // console.log('card created:', title, role, location, time, salary, sta, des);
    return card;
    

}