// Examine the document object //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle)
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom='solid 3px #000';
//let addItem = document.getElementById('main');
//addItem.style.color='green';
//addItem.style.fontWeight='bold';
// GETELEMENTSBYCLASSNAME //

// var li = document.getElementsByClassName('list-group-item');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
//     li[i].style.fontWeight='bold';
// }
// li[2].style.backgroundColor = 'green';

// // GETELEMENTSBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor = '#f4f4f4';
//     li[i].style.fontWeight='bold';
// }
// li[2].style.backgroundColor = 'green';

// QUERYSELECTOR //

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value="Hello World";

// var submit=document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// let item2=document.querySelector('.list-group-item:nth-child(2)');
// item2.style.backgroundColor='green';

// let item3=document.querySelector('.list-group-item:nth-child(3)');
// item3.style.display='none';

// QuerySELECTORALL //

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';


// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelector('li:nth-child(2)');
// even.style.color='green';

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
//     //even[i].style.backgroundColor='#ccc';
// }

// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode
//console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';

// parentElement
// console.log(itemList.parentElement.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firrstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div

var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello';

// add attr
newDiv.setAttribute('title', 'Hello Div');

// create text node
var newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


//console.log(newDiv);

//newDiv.style.fontSize = '30px';

var newDiv1 = document.createElement('div');
var newDivText1 = document.createTextNode('Hello World');
newDiv1.appendChild(newDivText1);

container.insertBefore(newDiv, h1);

var listgroup = document.querySelector('.container .list-group');
var ul = document.querySelector('.container .list-group-item');

listgroup.insertBefore(newDiv1, ul);

