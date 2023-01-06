var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Get description
    var description = document.getElementById('description').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    // add text node wth input value
    li.appendChild(document.createTextNode(newItem));

    // add text with input description value
    li.appendChild(document.createTextNode(" " + description));

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

    //append button to li
    li.appendChild(edit);

    // append button to li
    li.appendChild(deleteBtn);

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

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var itemName2 = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


