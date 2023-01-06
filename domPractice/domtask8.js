var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    // add text node wth input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');

    // create edit button
    var edit = document.createElement('button');

    // add classes to del buttton
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // add classes to edit button
    edit.className = 'btn btn-danger btn-sm float-right edit';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // append text node
    edit.appendChild(document.createTextNode('edit'));

    // append button to li
    li.appendChild(deleteBtn);

    // append button to li
    li.appendChild(edit);

    // append li to list
    itemList.appendChild(li);
}

// remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
