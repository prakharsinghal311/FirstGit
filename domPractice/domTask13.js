// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


// Listen for form submit
myForm.addEventListener('submit', onSubmit);

// Listen for deletion of data
userList.addEventListener('click', deleteData);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || numberInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {

        // add date to local storage
        let data = {
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value
        };

        let data_serialized = JSON.stringify(data);

        localStorage.setItem(emailInput.value, data_serialized)

        // Create new list item with user
        const li = document.createElement('li');

        // create a delete button
        const deletebtn = document.createElement('button');

        // add text top delete button
        deletebtn.appendChild(document.createTextNode('Delete'));

        // add delete button to li
        li.appendChild(deletebtn);

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);


        // // Clear fields
        // nameInput.value = '';
        // emailInput.value = '';
        // numberInput.value = '';
    }
}

function deleteData(e) {
    var a = e.target.parentElement;
    userList.removeChild(a);
    localStorage.removeItem(emailInput.value);
}
