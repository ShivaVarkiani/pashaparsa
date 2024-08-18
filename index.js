// script.js
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0; // Keeps track of the last scroll position
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Determine if we are scrolled past a certain threshold
        if (currentScrollTop + viewportHeight >= documentHeight) {
            // If at the bottom of the page, keep lines hidden
            line1.classList.add('hidden');
            line2.classList.add('hidden');
        } else {
            // Check if scrolling down or up
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                line1.classList.add('hidden');
                line2.classList.add('hidden');
            } else {
                // Scrolling up
                line1.classList.remove('hidden');
                line2.classList.remove('hidden');
            }
        }

        // Update the last scroll position
       // lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const icons = document.querySelectorAll('.socialIcons');
    
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        
        if (currentScrollTop + viewportHeight >= documentHeight) {
            footer.classList.add('visible');
            icons.forEach(icon => icon.classList.add('visible'));
        } else {
            footer.classList.remove('visible');
            icons.forEach(icon => icon.classList.remove('visible'));
        }
    });
});


const form = document.querySelector('form'); 

function sendEmail(){

    Email.send({
        Host : "smtp.gmail.com",
        Username : "thepashaparsa@gmail.com",
        Password : "BD0963D02A637D5254CA87A7BF3CC680B922",
        To : 'thepashaparsa@gmail.com',
        From : document.getElementById(email).value,
        Subject : "message from website",
        Body : "Name: " + document.getElementById(name).value
                + "Email: " + document.getElementById(email).value
            + "Message: " + document.getElementById(Message).value
    }).then(
        message => alert("Message sent successfully")
    );
}
