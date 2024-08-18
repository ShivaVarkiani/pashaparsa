document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0; // Keeps track of the last scroll position

    window.addEventListener('scroll', function() {
        let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        // Check if scrolling down
        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            document.querySelector('.line1').classList.add('hidden');
            document.querySelector('.line2').classList.add('hidden');
        } else {
            // Scrolling up
            document.querySelector('.line1').classList.remove('hidden');
            document.querySelector('.line2').classList.remove('hidden');
        }

        // Update the last scroll position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
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