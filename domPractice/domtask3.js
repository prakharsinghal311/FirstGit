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

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';


var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelector('li:nth-child(2)');
even.style.color='green';

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
    //even[i].style.backgroundColor='#ccc';
}