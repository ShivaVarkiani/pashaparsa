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