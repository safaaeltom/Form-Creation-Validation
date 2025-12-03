document.addEventListener("DOMContentLoaded", function() {

    async function fetchUserData() {
        const apiurl = "https://jsonplaceholder.typicode.com/users";
        const dataContainer = document.getElementById("api-data");

        dataContainer.innerHTML = "Loading user data...";

        try {
            const response = await fetch(apiurl);
            const users = await response.json();

            // create a <ul>
            const userList = document.createElement("ul");
            users.forEach(function(user) {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });

            dataContainer.innerHTML = "";
            dataContainer.appendChild(userList);

        } catch (error) {
            dataContainer.innerHTML = "Failed to load user data.";
        }
    }

    fetchUserData();

});

