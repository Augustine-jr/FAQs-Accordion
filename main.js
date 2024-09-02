
// Convert the NodeList to a true array using the spread syntax
// Select all elements with the class 'accordion' and convert the NodeList to an array
let accordions = [...document.querySelectorAll('.accordion')];

// Loop through each accordion element
accordions.forEach(acc => {
  // Add a click event listener to each accordion element
  acc.addEventListener('click', () => {

    // Find the element immediately after the current accordion element
    let accordionContent = acc.nextElementSibling;

    // Close other accordion contents
    accordions.forEach(otherAcc => {
      let otherContent = otherAcc.nextElementSibling;
      // If another accordion is open, close it
      if (otherContent !== accordionContent) {
        otherContent.classList.remove('active');
        otherContent.style.maxHeight = null;
      }
    });

    // Toggle the clicked accordion
    if (accordionContent.style.maxHeight) {
      // If it is expanded, remove the 'active' class to collapse the content
      accordionContent.classList.remove('active');
      accordionContent.style.maxHeight = null; // Collapse the content
    } else {
      // Content is currently hidden, so we need to show it
      accordionContent.classList.add('active'); // Add the 'active' class to expand the content
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; // Expand the content
    }
  });
});