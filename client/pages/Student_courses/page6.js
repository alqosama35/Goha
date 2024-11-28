let courses = [
    {
        title: "Arabic",
        description: "تعلم كل ما تحتاجه من النحو و القراءه و الكتابة في اللغه العربية",
        image: "https://i.pinimg.com/originals/75/3e/a5/753ea5478877595092520c0f53a52760.jpg",
        availability: "Available",
        price: 100,
        options: [
            { date: "2024-01-01", time: "9:00am - 12:00pm", teachers: ["Teacher A", "Teacher B"] },
            { date: "2024-01-08", time: "1:00pm - 4:00pm", teachers: ["Teacher C", "Teacher D"] }
        ]
    },
    {
        title: "English",
        description: "Learn everything you need to know in the English language",
        image: "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg",
        availability: "Full",
        price: 100,
        options: [
            { date: "2024-02-01", time: "9:00am - 12:00pm", teachers: ["Teacher E", "Teacher F"] },
            { date: "2024-02-08", time: "1:00pm - 4:00pm", teachers: ["Teacher G", "Teacher H"] }
        ]
    },
    {
        title: "Biology",
        description: "Foundations of Life: An Introduction to Biology.",
        image: "https://th.bing.com/th/id/R.28e7c19d7b006d1361fe2736d6447cbb?rik=xmD9yS6%2bUtZTGA&riu=http%3a%2f%2flivingunabridged.com%2fwp-content%2fuploads%2f2016%2f01%2fbiology-1024x576.jpg&ehk=BXaClJF1tWW42dnHO9TBQKkG1kmTP4h6m2Ry6tjzda4%3d&risl=&pid=ImgRaw&r=0",
        availability: "Available",
        price: 100,
        options: [
            { date: "2024-03-01", time: "10:00am - 1:00pm", teachers: ["Teacher I", "Teacher J"] },
            { date: "2024-03-08", time: "2:00pm - 5:00pm", teachers: ["Teacher K", "Teacher L"] }
        ]
    },
    {
        title: "Chemistry",
        description: "Chemical Wonders: An Introductory Course to Chemistry.",
        image: "https://i.pinimg.com/736x/df/35/f8/df35f889f984a7abb3d40e0e4547ddf7.jpg",
        availability: "Available",
        price: 100,
        options: [
            { date: "2024-04-01", time: "9:00am - 12:00pm", teachers: ["Teacher M", "Teacher N"] },
            { date: "2024-04-08", time: "1:00pm - 4:00pm", teachers: ["Teacher O", "Teacher P"] }
        ]
    },
    {
        title: "Physics",
        description: "The Universe Unveiled: An Introductory Course in Physics.",
        image: "https://th.bing.com/th/id/R.acd75934e4489f2d49986b1e33ca223a?rik=xLiDQWMlgtaDuQ&riu=http%3a%2f%2fst2.depositphotos.com%2f3351183%2f12376%2fv%2f450%2fdepositphotos_123762412-stock-illustration-chalk-drawing-physics-symbols-on.jpg&ehk=6mVcRkrKCQWID2rSqokirZU16sF%2fdvGzcJXbDEBkE6c%3d&risl=&pid=ImgRaw&r=0",
        availability: "Available",
        price: 100,
        options: [
            { date: "2024-05-01", time: "9:00am - 12:00pm", teachers: ["Teacher Q", "Teacher R"] },
            { date: "2024-05-08", time: "1:00pm - 4:00pm", teachers: ["Teacher S", "Teacher T"] }
        ]
    },
    {
        title: "Maths",
        description: "The Language of Patterns: Foundations of Mathematics.",
        image: "https://yt3.ggpht.com/a/AATXAJyXdfYcOvsSL9SGVdPgKDzvVKqHWh8dIvxbwA=s900-c-k-c0xffffffff-no-rj-mo",
        availability: "Available",
        price: 100,
        options: [
            { date: "2024-06-01", time: "10:00am - 1:00pm", teachers: ["Teacher U", "Teacher V"] },
            { date: "2024-06-08", time: "2:00pm - 5:00pm", teachers: ["Teacher W", "Teacher X"] }
        ]
    }
];

let courseToDelete = null;
let currentCourse = null;
let selectedIndex = null;

function showCourseInfo(button) {
    const courseCard = button.parentElement.parentElement;
    const courseName = courseCard.querySelector('h2').textContent;
    currentCourse = courses.find(course => course.title === courseName);

    if (currentCourse) {
        document.getElementById('course-info-title').textContent = currentCourse.title;

        const courseTeachers = currentCourse.options.map(option => option.teachers.join(", ")).join(" / ");
        document.getElementById('course-info-teachers').textContent = `Teachers: ${courseTeachers}`;

        const courseTimes = currentCourse.options.map(option => `${option.date} (${option.time})`).join(" or ");
        document.getElementById('course-info-times').textContent = `Times: ${courseTimes}`;

        document.getElementById('course-info-price').textContent = `Price: $${currentCourse.price}`; // Add price

        const optionSelect = document.getElementById('course-option');
        optionSelect.innerHTML = ''; // Clear previous options
        currentCourse.options.forEach((option, index) => {
            const optionElement = document.createElement('option');
            optionElement.value = index;
            optionElement.textContent = `${option.date} (${option.time})`;
            optionSelect.appendChild(optionElement);
        });

        document.getElementById('course-info-popup').style.display = 'flex';
    }
}

function enrollCourseWithOption() {
    selectedIndex = document.getElementById('course-option').value;
    if (selectedIndex === "") {
        alert("Please choose an option to enroll.");
        return;
    }
    document.getElementById('course-info-popup').style.display = 'none';
    document.getElementById('payment-popup').style.display = 'flex';
}

document.getElementById('enroll-option-button').onclick = enrollCourseWithOption;
document.getElementById('close-info-popup').onclick = () => {
    document.getElementById('course-info-popup').style.display = 'none';
};

document.getElementById('confirm-payment').onclick = () => {
    // Validate payment details here
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && expiryDate && cvv) {
        document.getElementById('payment-popup').style.display = 'none';
        document.getElementById('success-popup').style.display = 'flex';

        // Add the course to enrolled courses
        const enrolledContainer = document.getElementById('enrolled-container');
        const enrolledCourseCard = document.createElement('div');
        enrolledCourseCard.classList.add('course-card');

        const courseImage = document.createElement('img');
        courseImage.src = currentCourse.image;
        courseImage.alt = currentCourse.title;

        const courseTitle = document.createElement('h2');
        courseTitle.textContent = currentCourse.title;

        const courseDetails = document.createElement('div');
        courseDetails.classList.add('course-details');
        const selectedOption = currentCourse.options[selectedIndex];
        courseDetails.innerHTML = `
            <p>${currentCourse.description}</p>
            <p>Enrolled Date: ${selectedOption.date}</p>
            <p>Time: ${selectedOption.time}</p>
            <p>Teachers: ${selectedOption.teachers.join(", ")}</p>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = () => showConfirmationPopup(enrolledCourseCard);
        courseDetails.appendChild(deleteButton);

        enrolledCourseCard.appendChild(courseImage);
        enrolledCourseCard.appendChild(courseTitle);
        enrolledCourseCard.appendChild(courseDetails);

        enrolledContainer.appendChild(enrolledCourseCard);
    } else {
        alert('Please fill in all payment details.');
    }
};

document.getElementById('cancel-payment').onclick = () => {
    document.getElementById('payment-popup').style.display = 'none';
};

document.getElementById('close-success-popup').onclick = () => {
    document.getElementById('success-popup').style.display = 'none';
};

function showConfirmationPopup(courseCard) {
    courseToDelete = courseCard;
    document.getElementById('confirmation-popup').style.display = 'flex';
}

document.getElementById('confirm-delete').onclick = () => {
    if (courseToDelete) {
        courseToDelete.remove();
        courseToDelete = null;
        document.getElementById('confirmation-popup').style.display = 'none';
    }
};

document.getElementById('cancel-delete').onclick = () => {
    courseToDelete = null;
    document.getElementById('confirmation-popup').style.display = 'none';
};

function displayCourses() {
    const allCoursesContainer = document.getElementById('all-courses-container');

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        const courseImage = document.createElement('img');
        courseImage.src = course.image;
        courseImage.alt = course.title;

        const courseTitle = document.createElement('h2');
        courseTitle.textContent = course.title;

        const courseDetails = document.createElement('div');
        courseDetails.classList.add('course-details');

        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;

        const infoButton = document.createElement('button');
        infoButton.textContent = "Info";
        infoButton.classList.add('info-button');
        infoButton.onclick = () => showCourseInfo(infoButton);

        courseDetails.appendChild(courseDescription);
        courseDetails.appendChild(infoButton);

        courseCard.appendChild(courseImage);
        courseCard.appendChild(courseTitle);
        courseCard.appendChild(courseDetails);

        allCoursesContainer.appendChild(courseCard);
    });
}

document.addEventListener('DOMContentLoaded', displayCourses);
document.getElementById('go-back-button').onclick = () => {
    window.location.href = 'anotherPage.html'; // Replace 'anotherPage.html' with the actual URL of the page you want to go back to
};