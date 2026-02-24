function addCardsToAllCardsList() {
    const nodes = allCardParent.children;
    for (const node of nodes) {
        const card = createCardInfo(node);
        allCardsList.push(card);
    }
    render();
}

function calculateCount() {
    totalCount.innerText = allCardParent.children.length;
    interviewCount.innerText = interviewCardsList.length;
    rejectedCount.innerText = rejectedCardsList.length;
}

function createCardInfo(clickedCard) {
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

function createACard(interviewCard) {
    const div = document.createElement('div');
    div.className = "card shadow-sm rounded-md p-4 space-y-4";
    div.innerHTML = `
        <!-- title + role -->
            <div>
                <p class="title font-semibold text-xl">${interviewCard.title}</p>
                <p class="role">${interviewCard.role}</p>
            </div>

            <!-- location + time + salary -->
            <div class="flex  gap-8">
                <p class="location">${interviewCard.location}</p>
                <p class="time">${interviewCard.time}</p>
                <p class="salary">${interviewCard.salary}</p>
            </div>

            <!-- status + description -->
            <div>
                <p class="sta">${interviewCard.sta}</p>
                <p class="des">
                    ${interviewCard.des}
                </p>
            </div>

            <!-- interview + rejected -->
            <div>
                <button class="btn btn-outline btn-success">INTERVIEW</button>
                <button class="btn btn-outline btn-error">REJECTED</button>
            </div>
    `;
    return div;
}

function render() {
    rcSection.innerHTML = '';
    icSection.innerHTML = '';
    acSection.innerHTML = '';

    for (const interviewCard of interviewCardsList) {
        const newCard = createACard(interviewCard);
        icSection.appendChild(newCard);
    }
    for (const rejectedCard of rejectedCardsList) {
        const newCard = createACard(rejectedCard);
        rcSection.appendChild(newCard);
    }
    for (const allCard of allCardsList) {
        const newCard = createACard(allCard);
        acSection.appendChild(newCard);
    }
    calculateCount();
}

function filter(secctionId, buttonId) {
    // console.log('filter called from:', id);
    acSection.classList.add('hidden');
    icSection.classList.add('hidden');
    rcSection.classList.add('hidden');
    const selectedSection = document.getElementById(secctionId);
    selectedSection.classList.remove('hidden');

    allBtn.classList.remove('btn-soft', 'btn-primary');
    interviewBtn.classList.remove('btn-soft', 'btn-primary');
    rejectedBtn.classList.remove('btn-soft', 'btn-primary');
    const selectedBtn = document.getElementById(buttonId);
    selectedBtn.classList.add('btn-soft', 'btn-primary');
    
    render();
    noJobs(buttonId);
}

function noJobs(buttonId) {
    const noCards = document.getElementById('no-cards');
    noCards.classList.add('hidden');
    
    if (interviewCardsList.length === 0 && buttonId === 'filter-interview') {
        noCards.classList.remove('hidden');
    } 
    if (rejectedCardsList.length === 0 && buttonId === 'filter-rejected') {
        noCards.classList.remove('hidden');
    }
}