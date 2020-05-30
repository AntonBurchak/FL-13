
(function () {

    const data = [
        {
            uid: 1,
            name: 'My first book',
            author: 'Redklif Smokkard',
            source: 'https://www.theplace.ru/archive/00_icons/1364_icon_128.jpg',
            plot: 'lorem ipsum!'
        }
    ]
    
    // send to storage
    const tmp = JSON.parse(localStorage.getItem('books'));
    if (!tmp || tmp.length === 0) {
        localStorage.setItem('books', JSON.stringify(data));
    }
    
   
})()

