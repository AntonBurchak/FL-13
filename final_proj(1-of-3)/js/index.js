
// Add function that scroll to need section after click on navigation element
const anchors = document.querySelectorAll('.header__nav a[href*="#"]')
const scrollTopBtn = document.querySelector('.scrollTop');

for (let anchor of [scrollTopBtn, ...anchors]) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();


    if(anchor.className === 'scrollTop active') {
        anchor.setAttribute('href', '#intro')
        document.querySelector('a[href="#intro"]').classList.add('active')
    } else {
        document.querySelector('a[href="#intro"]').classList.remove('active')

    }

    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

// Event listener on scroll top button
window.addEventListener('scroll', () => {
    if(pageYOffset >= 200) {
        scrollTopBtn.classList.add('active')
    } else {
        scrollTopBtn.classList.remove('active')
    }
})