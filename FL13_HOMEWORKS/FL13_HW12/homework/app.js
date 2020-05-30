const root = document.getElementById('root');


/*
    Сделано:
    1) Рендер книг и манипуляция с BOM
    2) Рендер выбранной книги
    Сделать:
    1) Редактирование книги
    2) Добавление книги

    ПОЧЕМУ НЕ СДЕЛАНО: Я с оффлайн группы Днепра, нам сказали делать финальную таску.
*/


(function() {
    // markup
    const wrapper = document.createElement('div');
    wrapper.classList = 'book';

    const book_left = document.createElement('div');
    book_left.classList = 'book__left';

    const book__left__heading = document.createElement('h2');
    book__left__heading.textContent = 'List of books';

    const book__left__list = document.createElement('ul');
    book__left__list.classList = 'books__list';

    const book_right = document.createElement('div');
    book_right.classList = 'book__right';



    // render
    function renderList() {
        const data = JSON.parse(localStorage.getItem('books'));
        const icon = 'https://img.icons8.com/dusk/2x/book.png';
    
        data.forEach(book => {
            book__left__list.innerHTML += 
            `<li class="book__item" uid="${book.uid}">
                <img src="${icon}">
                <div class="book__item-name">
                    <div class="book__name">${book.name}</div><div class="book__auth">${book.author}</div>
                </div>
                <span class="edit">edit</span>
            </li>`;
        })
    }
    renderList();

    book_left.append(book__left__heading, book__left__list);
    wrapper.append(book_left, book_right);
    root.appendChild(wrapper);


    // click event listener
    const list = book__left__list;

    list.addEventListener('click', (e) => {
        let parent;
        
        if (e.target.className === 'book__item' || e.target.offsetParent.className === 'book__item') {
            e.target.className === 'book__item' ? parent = e.target : parent = e.target.offsetParent;

            
            const uid = parent.getAttribute('uid');
            
            switch(e.target.className) {
                case 'edit':
                    pushState(uid);
                    location.hash = 'edit';
                    break;

                default:
                    pushState(uid);
                    location.hash = 'preview';
            }
        }
        
    });

    function bookPreview(uid) {
        const data = JSON.parse(localStorage.getItem('books'));

        const book = data.find(book => book.uid === +uid);  
        
        const pattern = `
            <img src="${book.source}">
            <h2>Name: ${book.name}</h2>
            <h3>Author: ${book.author}</h3>
            <p>Plot: ${book.plot}</p>
        `;

        book_right.innerHTML = pattern;
    }


    // function bookEdit(uid) {
    //     const data = JSON.parse(localStorage.getItem('books'));
    //     const book = data.find(book => book.uid === +uid);  


    // }


    window.onpopstate = function() {
        const id = location.search.slice(4, location.search.length);
        switch(location.hash) {
            case '#edit':
                console.log('edit: ' + id);
                break;
            case '#preview':
                bookPreview(id)
                break;
            default:
                bookClear();
        }
    }

    
    function pushState(uid){
        window.history.pushState({
            id: uid
        }, '', `?id=${uid}`);
    }
    
    function bookClear() {
        book_right.innerHTML = null;
    }
})();

