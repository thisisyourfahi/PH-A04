function calculateCount() {
    totalCount.innerText = allCardsList.children.length;
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
    rcSection.innerHTML = `
        <p>Rejected Cards</p>

    `;
    icSection.innerHTML = `
        <p>Interview Cards</p>

    `;

    for (const interviewCard of interviewCardsList) {
        const newCard = createACard(interviewCard);
        icSection.appendChild(newCard);
    }
    for (const rejectedCard of rejectedCardsList) {
        const newCard = createACard(rejectedCard);
        rcSection.appendChild(newCard);
    }
    calculateCount();
}

function filter(id) {
    // console.log('filter called from:', id);
    acSection.classList.add('hidden');
    icSection.classList.add('hidden');
    rcSection.classList.add('hidden');

    const selectedSection = document.getElementById(id);
    selectedSection.classList.remove('hidden');
    render();
}