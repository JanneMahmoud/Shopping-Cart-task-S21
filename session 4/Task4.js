async function getUserProfile(id) {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

        if (!response.ok) {
            throw "User not found";
        }

        let user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
    } catch (error) {
        console.log(error);
    }
}

getUserProfile(1);