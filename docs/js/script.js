//Getting the current date
var today = new Date();
//Getting the current Day, month, and year
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

//formatting the date as DD/MM/YYYY
var formattedDate = day + '/' + month + '/' + year;

// display the element
document.getElementById('date').textContent = formattedDate;

//monile navbar button
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}