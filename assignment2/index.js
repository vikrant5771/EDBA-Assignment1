
    const spinner = document.querySelector('.spinner');
    const tableBody = document.getElementById("user-container");
    
   //hiding the user table
   document.querySelector('.user-container').style.display = 'none';
   
   setTimeout(() => {
                spinner.style.display = 'none';
                document.querySelector('.user-container').style.display = 'block'; // Show the table
   }, 3000);



async function getUserData() {
    const response = await fetch("https://reqres.in/api/users");
    const usersData = await response.json();

    const usersArray = Array.isArray(usersData.data) ? usersData.data : [];
    return usersArray;
}

async function displayUsersTable() {
    try {
        const users = await getUserData();
        console.log(users);

        const userTableBody = document.getElementById('user-table-body');

        for (let user of users) {
            const row = document.createElement('tr');
            const userId = document.createElement('td');
            userId.textContent = user.id;
            row.appendChild(userId);

            const avatar = document.createElement('td');
            const avatarImage = document.createElement('img');
            avatarImage.src = user.avatar;
            avatar.appendChild(avatarImage);
            row.appendChild(avatar);
            
            const name = document.createElement('td')
            name.textContent = user.first_name +" "+ user.last_name;
            row.appendChild(name)
            

            const email = document.createElement('td')
            email.textContent = user.email;
            row.appendChild(email)


            userTableBody.appendChild(row);
        }
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

displayUsersTable();