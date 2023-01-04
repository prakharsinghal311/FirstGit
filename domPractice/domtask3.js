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

var li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
    li[i].style.fontWeight='bold';
}
li[2].style.backgroundColor = 'green';

// GETELEMENTSBYTAGNAME //

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i=0;i<li.length;i++)
{
    li[i].style.backgroundColor = '#f4f4f4';
    li[i].style.fontWeight='bold';
}
li[2].style.backgroundColor = 'green';

// QUERYSELECTOR //

var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';