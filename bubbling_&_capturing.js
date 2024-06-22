// EventBubbling-and-Capturing :: 
// With bubbling,  the event is first captured by the innermost element, and then propagated to the outer elements.
// With capturing, the event is first captured by the outermost element, and the propagated to the inner elements.


document.querySelector('#grandParent').addEventListener('click', (e) => {
  console.log('GrandParent clicked');
}, true); // bubbling(by default) false


document.querySelector('#parent').addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('Parent clicked');
}, true); 

document.querySelector('#child').addEventListener('click', (e) => {
  console.log('Child clicked');
}, true);
