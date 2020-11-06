// Display random books in showcase section every time user reloads Home page.
import fs from 'fs';
import imgs from './assets/*.jpg';

const booksJson = fs.readFileSync(__dirname + '/books_db.json', 'utf8');
const booksParsed = JSON.parse(booksJson);

const getFourRandomBooks = () => {
    let arrRand = [];
    do {
        const randNum = Math.floor(Math.random() * booksParsed.length);
        if(arrRand.indexOf(booksParsed[randNum]) == -1) {
            arrRand.push(booksParsed[randNum])
        } 
    } while (arrRand.length < 4);

    return arrRand;
}

const populateShowcase = () => {
    const $showcase = document.getElementById('showcase-books');
    const randBooks = getFourRandomBooks();

    randBooks.map(book => {
        const divWrapper = document.createElement('div');
        divWrapper.className = 'showcase-card';

        const bookImg = document.createElement('img');
        bookImg.className = 'showcase-card-image';
        bookImg.src = imgs[book.img.replace('.jpg', '')];
        bookImg.alt = book.title;

        const bookContent = document.createElement('div');
        bookContent.className = 'showcase-card-content';

        const title = document.createElement('h2');
        title.className = 'showcase-card-content-title';
        title.innerHTML = book.title;

        const author = document.createElement('p');
        author.className = 'showcase-card-content-author';
        author.innerHTML = `by ${book.author}`;

        const icon = document.createElement('i');
        icon.className = 'fas fa-bookmark';

        const price = document.createElement('p');
        price.className = 'showcase-card-content-price';
        price.innerHTML = `$${book.price}`;

        bookContent.append(title, author, icon, price);
        divWrapper.append(bookImg, bookContent);
        $showcase.appendChild(divWrapper);
    });
}


// UI improve: close nav menu on click any page section
const closeNavMenu = () => {
    const $navItems = document.querySelectorAll(".nav-menu-wrapper-list-item");
    const $checkBox = document.getElementById("menu");
    $navItems.forEach($i => {
        $i.addEventListener('click', e => {
            if(e.target.nodeName == 'A') {
                $checkBox.checked = false;
            }
        });
    });
}

const init = () => {
    populateShowcase();
    closeNavMenu();
}


init();





