<!-- 1. 
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
Event bubbling is a way that events move through the DOM when something happens, like a click. It starts at the element I actually clicked and then bubbles up to its parents, all the way to the top.

4. 
Event delegation is a technique in JavaScript where instead of attaching event listeners to multiple individual child elements, i attach a single event listener to a parent element and let the event “bubble up” to it. Then, inside that listener, i check which child element triggered the event.

5. 
preventDefault(): Stops the default browser behavior for an event. Such as: Prevent a form from submitting, Stop a right-click context menu from appearing.
stopPropagation(): Stops the event from bubbling up the DOM tree. Useful when you want a child element to handle an event without letting the parent react. -->


# JavaScript DOM & Event Basics

## 1. Selecting Elements

- **getElementById**: Used to get a specific element with a unique ID.  
- **getElementsByClassName**: Used to get all elements with a particular class name.  
- **querySelector**: Returns the first element that matches the CSS selector.  
- **querySelectorAll**: Selects all elements that match the CSS selector.

---

## 2. Creating and Adding Elements

Example: Create a paragraph with a sentence and add it to the `<main>` element.

```javascript
const p = document.createElement('p');
p.innerText = 'Hello there';

const main = document.querySelector('main');
main.appendChild(p);
```
## 3. Event bubbling

**Event bubbling** is a way that events move through the DOM when something happens, like a click. It starts at the element I actually clicked and then bubbles up to its parents, all the way to the top.