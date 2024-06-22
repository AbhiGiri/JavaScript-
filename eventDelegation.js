//// Event Delegation :: 
// It is a pattern, to handle "Events", Efficiently.
// Instead of adding an "Event Listener" to "Each & Every Similar Element", we add an Event on a Particular "Target"
// using the "target" Property of the Event Object.

////  Eg. (i).
document.querySelector('#category').addEventListener('click', (e) => {
  console.log(e.target.id); // phone
});

////  Eg. (ii).
document.querySelector('#category').addEventListener('click', (e) => {
  if(e.target.tagName === 'LI') {
    console.log(window.location.href+'#'+e.target.id); // http://127.0.0.1:5501/index.html#phone
  };
});
