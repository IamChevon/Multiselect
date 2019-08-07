const container = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const title = document.querySelector('.title');
const itemList = document.querySelector('#item-list');

container.addEventListener('click', toggleChecked);

let itemcount = 0;
let nameList = [];

function checkAll() {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.add('checked');
    } itemcount = 4;
}

function clearAll() {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('checked');
    }
    itemcount = 0;
}

function checkOne(e) {

    if (e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
        itemcount -= 1;
    } else {
        e.target.classList.add('checked');
        itemcount += 1;
    }
    console.log(itemcount);
    return itemcount;

}

function toggleChecked(e) {
    if (e.target.classList.contains('title') && e.target.classList.contains('checked')) {
        e.target.classList.remove('checked');
        clearAll();
        clearAllNames();
    } else if (e.target.classList.contains('item')) {
        checkOne(e);
        addName(e);
        if (itemcount === 4) {
            title.classList.add('checked');
        } else {
            title.classList.remove('checked');
        }
    } else if (e.target.classList.contains('title')) {
        title.classList.add('checked');
        clearAllNames();
        checkAll();
        addAllNames();
    }

    displayName();
}

function displayName() {
    let firstTwo;
    let theRest;

    if (nameList.length >= 3) {
        firstTwo = nameList.slice(0, 2);
        theRest = nameList.slice(2);
    } else if (nameList.length === 2) {
        firstTwo = nameList.slice(0, 2);
        theRest = '';
    } else {
        firstTwo = nameList.slice(0);
        theRest = '';
    }

    itemList.value = firstTwo.join(', ');
    //  + theRest.length;
    if (theRest.length > 0) {
        itemList.value += " and " + theRest.length + " more";
    }

}

function addName(e) {

    if (nameList.includes(e.target.innerText)) {
        nameList.splice(nameList.indexOf(e.target.innerText), 1);
    } else {
        nameList.push(e.target.innerText);

    }
    console.log(nameList);
}

function addAllNames() {
    for (var i = 0; i < items.length; i++) {
        nameList.push(items[i].innerText);
    }

    console.log(nameList);
}

function clearAllNames() {
    nameList.splice(0);
    console.log(nameList);
}