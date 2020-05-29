
(function () {
    const data_comments = [
        {
            author: "Jack Johnson",
            stars: 1,
            postdate: "11 min ago",
            body: "Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably",
            source: "images/Neil80.png",
            hash: "12KAfhqncfl396"
        },
        {
            author: "Emma Garcia",
            stars: 5,
            postdate: "3 days ago",
            body: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil",
            source: "images/Sarah80.png",
            hash: "82uKwadoYefl326"
        },
        {
            author: "Ann Moore",
            stars: 3,
            postdate: "a week ago",
            body: "Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Polite do object at passed it is.",
            source: "images/Ann80.png",
            hash: "66LVoosjqsfl346"
        }
    ];

    
    const comments__list = document.querySelector('.comments__list');
    function renderComments(data) {
        
        
        const renderStars = (stars) => {
            let starsString = "";
            for(let i = 1; i <= 5; i++) {
                if (i <= stars) {
                    starsString += '<div class="star star--active"></div>'
                } else {
                    starsString += '<div class="star"></div>'
                }
            }
            return starsString;
        }

        data.forEach(comment => {
            const pattern =
                `
            <li class="comments__list-item" data-hash="${comment.hash}">
                    <img src="${comment.source}" alt="">
                    <div class="comments__list-text">
                        <div class="comments__list-author">
                            <div class="comments__list-first">
                                <p class="comments__list-name">${comment.author}</p>
                                <div class="posts__item-stars">
                                    ${renderStars(comment.stars)}
                                </div>
                            </div>
                            <div class="comments__list-sec">
                                <img src="images/a-icon-time.svg" alt="">
                                <p>${comment.postdate}</p>
                            </div>
                        </div>
                        <div class="comments__list-body">
                            <p>${comment.body.length <= 200 ? comment.body : comment.body.slice(0, 200) + '...'}</p>
                            ${comment.body.length <= 200 ? '' : '<a href="#" class="comments__list-more">Read more</a>'}
                            
                            </div>
                    </div>
                </li>
            `;

            comments__list.innerHTML += pattern;
        });
    }

    renderComments(data_comments);

    comments__list.addEventListener('click', (e) => {
        if(e.target.classList.contains('comments__list-more')) {
            e.preventDefault();
            e.target.classList.toggle('active')

            const comment = e.target.offsetParent;
            const hash = comment.parentElement.getAttribute('data-hash');

            const text = comment.querySelector('.comments__list-body p');
            const initial_text = data_comments.find(comment => comment.hash == hash);

            if (e.target.classList.contains('active')) {
                if (initial_text) {
                    e.target.textContent = 'Read less';
                    text.textContent = initial_text.body;
                } else {
                    alert(`Does not found comment with hash: ${hash}`);
                }
            } else {
                if (initial_text) {
                    e.target.textContent = 'Read more';
                    text.textContent = initial_text.body.slice(0, 200) + '...';
                } else {
                    alert(`Does not found comment with hash: ${hash}`);
                }
            }
           

            
        }
    });

})();