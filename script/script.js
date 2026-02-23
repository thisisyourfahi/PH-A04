let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

let allCards = document.querySelector('.all-cards');
let interviewCards = [], rejectedCards = [];
calculateCount();