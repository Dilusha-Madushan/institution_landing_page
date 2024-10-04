document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <!-- <a class="navbar-brand" href="#">Educational Institute</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="courses.html">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Login</a>
                    </li>
                </ul>
                <button id="colorButton" class="btn btn-secondary ml-3">Colour</button>
            </div>
        </nav>
    `;

    // Insert the navbar into the placeholder
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

    // Attach event listeners after the navbar is loaded
    const colorButton = document.getElementById('colorButton');
    if (colorButton) {
        colorButton.addEventListener('click', function () {
            const colors = ['#f8f9fa', '#e9ecef', '#d1e7dd', '#ffc107'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;

            // Store the selected color in localStorage so other pages can use it
            localStorage.setItem('backgroundColor', randomColor);
        });
    }

    // Apply the stored background color if it exists
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});



// Function to handle login confirmation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert(`Username: ${username}\nPassword: ${password}`);
    });
}

// // Function to change the background color of the page
// function changeBackgroundColor(color) {
//     document.body.style.backgroundColor = color;
// }

// // Example usage of color change
// const colorButton = document.getElementById('colorButton');
// if (colorButton) {
//     colorButton.addEventListener('click', function() {
//         const colors = ['#f8f9fa', '#e9ecef', '#d1e7dd', '#ffc107'];
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         changeBackgroundColor(randomColor);
//     });
// }