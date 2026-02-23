1. 
getElementById: used to get a specific element with a unique id
getElementsByClassName: is used to get all the element with a particular class name
querySelector: returns the first element that matches the CSS selector
querySelectorAll: select all elements that matches the CSS selector

2. 
Ex: create a paragrap with a sentence and add it to main main element
code: 
const p = document.createElement('p');
p.innerText = 'Hello there';
const main = document.querySelector('main');
main.appendChild(p);

3. 