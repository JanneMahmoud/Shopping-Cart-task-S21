function sendVerificationEmail(email) {
    return new Promise(function (resolve) {
        console.log("Sending verification email...");

        setTimeout(function () {
            resolve("Email sent successfully");
        }, 2000);
    });
}

async function registerUser(name, email) {
    try {
        if (name === "" || email === "") {
            throw "Name and email are required";
        }

        let message = await sendVerificationEmail(email);
        console.log(message);
        console.log("User registered successfully");
    } catch (error) {
        console.log(error);
    }
}

registerUser("Janne", "jannemahmoudd@gmail.com");