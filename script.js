const listItems = document.querySelectorAll('#book-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {

    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  }
});

// prevent default behaviour
const addForm = document.forms{'add-book'};

addForm.addEventListener('submit', function(e){
  e.prevnetDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});






