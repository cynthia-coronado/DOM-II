// Your code goes here

//selectors
const img = document.querySelectorAll('img')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const intro = document.querySelector('.intro')
const introImg = document.querySelectorAll('.intro > img')
const introHeader = document.querySelector('.intro > h2')
const introPara = document.querySelector('.intro > p')
const navLinks = document.querySelector('.nav');
const navContainer = document.querySelector('.nav-container');
const content = document.querySelectorAll('.content-section')
const destination = document.querySelectorAll('.destination')

//event listeners

const allLinks = document.links
const allLinksArray = Array.from(allLinks)
allLinksArray.forEach(link => {
    link.addEventListener('mouseover', event => {
        link.style.color = 'pruple'
    })
})

allLinksArray.forEach(link => {
    link.addEventListener('mouseout', event => {
        link.style.color = 'green'
    })
    link.addEventListener('focus', event => {
        link.style.backgroundColor = 'orange';
    })
    link.addEventListener('focusout', event => {
        link.style.backgroundColor = 'gray';
    })
})

for (let i = 0; i < img.length; i += 1) {
    img[i].addEventListener('click', event => {
        img[i].style.borderRadius = '50%'
    })
}

body.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
        body.style.background = 'linear-gradient(to bottom, #EBF2FF 30%, #AFCBFF)'
    }
})

body.addEventListener('wheel', event => {
    body.style.background = 'linear-gradient(to bottom, #fff 30%, #AFCBFF)';
    intro.style.display = 'flex';
    intro.style.flexDirection = 'column';
    intro.style.alignItems = 'center';
    img.style.width = '60%';
    img.style.borderRadius = '50%';
    intro.style.paddingTop = '15%';
    intro.style.height = '20%';
});

const navBorder = document.querySelector('.main-navigation');
document.addEventListener('scroll', event => {
    navBorder.style.borderBottom = '2px solid blue';
})

img.addEventListener('dblclick', event => {
    img.style.border = '5px dotted aqua'
})
