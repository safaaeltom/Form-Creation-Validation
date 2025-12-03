document.addEventListener("DOMContentLoaded", function() {

    async function fetchUserData() {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const dataContainer = document.getElementById("api-data");

        dataContainer.innerHTML = "Loading user data...";

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();
            
            dataContainer.innerHTML = "";

            const userList = document.createElement("ul");

            users.forEach(function(user) {
                const li = document.createElement("li");
                li.textContent = user.name;
                userList.appendChild(li);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            dataContainer.innerHTML = "Failed to load user data.";
        }
    }

    fetchUserData();

});

