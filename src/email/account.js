var postmark = require("postmark");

var client = new postmark.Client(process.env.POSTMARK_API_TOKEN);

const sendWelcomeEmail = (email, name) => {
    client.sendEmail({
        "From": "management@typtutors.in",
        "To": email,
        "Subject": "Thanks for joining in!",
        "TextBody": `Welcome to app, ${name}. Let me know how you get along the app!`
    });
}

const sendCancelationEmail = (email, name) => {
    client.sendEmail({
        "From": "management@typtutors.in",
        "To": email,
        "Subject": "Sorry to see you go!",
        "TextBody": `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}