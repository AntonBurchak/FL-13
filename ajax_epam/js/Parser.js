class Parser {
   static parseBlog(parentClass, data) {
      const parent = document.querySelector(parentClass);
      parent.innerHTML = null;
      data.forEach(item => {
         parent.innerHTML += Parser.insertBlogItem(item);
      });
   }
   //post__main
   static parsePost(parentClass, data) {
      const parent = document.querySelector(parentClass);
      parent.innerHTML = null;
   }

   static insertBlogItem(item) {
      const renderStars = (item) => {
         let string = '';
         for (let i = 1; i <= 5; i++) {
            if (i <= item.stars) {
               string += '<div class="star star--active"></div>'
            } else {
               string += '<div class="star"></div>'
            }
         }
         return string;
      }
      return `
                <article class="blogPosts__item  blogPosts__item--${item.type}">
                  <div class="blogPosts__item-img">
                        <img src="${item.image}" alt="">
                  </div>
                  <div class="blogPosts__item-text">
                     <div>
                        <div class="blogPosts__item-info">
                           <div class="blogPosts__item-author">
                              <img src="images/Grace.png" alt="">
                           </div>
                           <div class="blogPosts__item-postinfo">
                              <p class="blogPosts__item-authorName">${item.author}</p>
                              <div class="posts__item-info">
                                 <time class="posts__item-date" datetime="${item.date}">${Parser.formatDate(item.date)}</time>
                                 <p class="posts__item-timeRead">${Math.ceil(item.text.length / 1400)} min read</p>
                                 <p class="posts__item-comments">
                                    <img src="images/a-icon-comment.svg" alt="">
                                    <span class="posts__item-quantity-comments">${item.comments.length}</span>
                                 </p>
                                 <div class="posts__item-stars">
                                    ${renderStars(item)}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <h2 class="blogPosts__item-heading">${item.title.length > 45 ? item.title.slice(0, 45).trim() + '...' : item.title}</h2>
                        <p class="blogPosts__item-pretext">${item.description}</p>
                        <a href="http://localhost:3000/post.html?id=${item.id}" class="blogPosts__item-more">Read more</a>
                     </div>
                    </div>
               </article>`
   }

   static insertBlogComment(comment) {
      return `
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
                            ${comment.body.length <= 200 ? '' : '<a href="#" class="comments__list-more clk">Read more</a>'}
                            
                            </div>
                    </div>
                </li>`
   }

   static insertPostItem(item) {

   }

   static formatDate(str) {
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const date = str.split('-');
      return `${date[2]} ${months[+date[1]]}, ${date[0]}`;
   }
}