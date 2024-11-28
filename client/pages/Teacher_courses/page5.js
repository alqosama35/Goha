let courses = [
    {
        title: "Arabic",
        description: "تعلم كل ما تحتاجه من النحو و القراءه و الكتابة في اللغه العربية",
        image: "https://i.pinimg.com/originals/75/3e/a5/753ea5478877595092520c0f53a52760.jpg",
        availability: "Available",
        price: "$100",
        options: [
            { date: "2024-01-01", time: "9:00am - 12:00pm" },
            { date: "2024-01-08", time: "1:00pm - 4:00pm" }
        ]
    },
    {
        title: "English",
        description: "Learn everything you need to know in the English language",
        image: "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg",
        availability: "Full",
        price: "$120",
        options: [
            { date: "2024-02-01", time: "9:00am - 12:00pm" },
            { date: "2024-02-08", time: "1:00pm - 4:00pm" }
        ]
    },
    {
        title: "Biology",
        description: "Foundations of Life: An Introduction to Biology.",
        image: "https://th.bing.com/th/id/R.28e7c19d7b006d1361fe2736d6447cbb?rik=xmD9yS6%2bUtZTGA&riu=http%3a%2f%2flivingunabridged.com%2fwp-content%2fuploads%2f2016%2f01%2fbiology-1024x576.jpg&ehk=BXaClJF1tWW42dnHO9TBQKkG1kmTP4h6m2Ry6tjzda4%3d&risl=&pid=ImgRaw&r=0",
        availability: "Available",
        price: "$150",
        options: [
            { date: "2024-03-01", time: "10:00am - 1:00pm" },
            { date: "2024-03-08", time: "2:00pm - 5:00pm" }
        ]
    },
    {
        title: "Chemistry",
        description: "Chemical Wonders: An Introductory Course to Chemistry.",
        image: "https://i.pinimg.com/736x/df/35/f8/df35f889f984a7abb3d40e0e4547ddf7.jpg",
        availability: "Available",
        price: "$130",
        options: [
            { date: "2024-04-01", time: "9:00am - 12:00pm" },
            { date: "2024-04-08", time: "1:00pm - 4:00pm" }
        ]
    },
    {
        title: "Physics",
        description: "The Universe Unveiled: An Introductory Course in Physics.",
        image: "https://th.bing.com/th/id/R.acd75934e4489f2d49986b1e33ca223a?rik=xLiDQWMlgtaDuQ&riu=http%3a%2f%2fst2.depositphotos.com%2f3351183%2f12376%2fv%2f450%2fdepositphotos_123762412-stock-illustration-chalk-drawing-physics-symbols-on.jpg&ehk=6mVcRkrKCQWID2rSqokirZU16sF%2fdvGzcJXbDEBkE6c%3d&risl=&pid=ImgRaw&r=0",
        availability: "Available",
        price: "$140",
        options: [
            { date: "2024-05-01", time: "9:00am - 12:00pm" },
            { date: "2024-05-08", time: "1:00pm - 4:00pm" }
        ]
    }
];

let courseToDelete = null;
let currentCourse = null;
let selectedIndex = null;

document.addEventListener('DOMContentLoaded', () => {
    const addCourseButton = document.getElementById('add-course-button');
    const closeExistingPopupButton = document.getElementById('close-existing-popup');
    const closeNewPopupButton = document.getElementById('close-new-popup');
    const courseSelect = document.getElementById('course-select');

    if (addCourseButton) {
        addCourseButton.onclick = () => {
            document.getElementById('teach-new-popup').style.display = 'flex';
            document.getElementById('new-course-name').value = '';
            document.getElementById('new-course-description').value = '';
            document.getElementById('new-course-price').value = '';
            document.getElementById('new-course-date').value = '';
        };
    }

    if (closeExistingPopupButton) {
        closeExistingPopupButton.onclick = () => {
            document.getElementById('teach-existing-popup').style.display = 'none';
        };
    }

    if (closeNewPopupButton) {
        closeNewPopupButton.onclick = () => {
            document.getElementById('teach-new-popup').style.display = 'none';
        };
    }

    populateCourseSelect();
    displayCourses();
});
function populateCourseSelect() {
    const courseSelect = document.getElementById('course-select');
    if (courseSelect) {
        courseSelect.innerHTML = '<option value="">Select a course</option>';
        courses.forEach((course, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${course.title}`;
            courseSelect.appendChild(option);
        });
    }
}

function displayCourses() {
    const courseSelection = document.getElementById('course-selection');
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        const courseImage = document.createElement('img');
        courseImage.src = course.image;
        courseImage.alt = course.title;

        const courseTitle = document.createElement('h3');
        courseTitle.textContent = course.title;

        courseCard.appendChild(courseImage);
        courseCard.appendChild(courseTitle);

        courseCard.onclick = () => {
            document.getElementById('teach-existing-popup').style.display = 'flex';
            document.getElementById('existing-course-price').value = course.price.replace('$', '');
            document.getElementById('existing-course-date').value = course.options[0].date;
        };

        courseSelection.appendChild(courseCard);
    });

    const addCourseCard = document.getElementById('add-course-card');
    courseSelection.appendChild(addCourseCard);
}
document.getElementById('teach-existing-course-form').onsubmit = (event) => {
    event.preventDefault();
    const courseIndex = document.getElementById('course-select').value;
    if (courseIndex !== "") {
        const selectedDate = document.getElementById('existing-course-date').value;
        const selectedPrice = document.getElementById('existing-course-price').value;
        courses[courseIndex].price = `$${selectedPrice}`;
        courses[courseIndex].options[0].date = selectedDate;
        addToTeachedCourses(courses[courseIndex]);
        alert(`You have chosen to teach the ${courses[courseIndex].title} course on ${selectedDate} for ${courses[courseIndex].price}.`);
    }
    document.getElementById('teach-existing-popup').style.display = 'none';
};

document.getElementById('teach-new-course-form').onsubmit = (event) => {
    event.preventDefault();
    const newCourseName = document.getElementById('new-course-name').value;
    const newCourseDescription = document.getElementById('new-course-description').value;
    const newCoursePrice = document.getElementById('new-course-price').value;
    const newCourseDate = document.getElementById('new-course-date').value;

    const newCourse = {
        title: newCourseName,
        description: newCourseDescription,
        price: `$${newCoursePrice}`,
        image: 'https://via.placeholder.com/150',
        availability: "Available",
        options: [
            {
                date: newCourseDate,
                time: 'To be determined'
            }
        ]
    };
    courses.push(newCourse);
    addToTeachedCourses(newCourse);
    alert(`You have added a new course: ${newCourse.title}.`);
    populateCourseSelect();
    document.getElementById('teach-new-popup').style.display = 'none';
};
function addToTeachedCourses(course) {
    const teachedContainer = document.getElementById('teached-course-container');
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');

    const courseImage = document.createElement('img');
    courseImage.src = course.image;
    courseImage.alt = course.title;

    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.title;

    const courseDetails = document.createElement('p');
    courseDetails.textContent = `Price: ${course.price}, Date: ${course.options[0].date} (${course.options[0].time})`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = () => showConfirmationPopup(courseCard);

    courseCard.appendChild(courseImage);
    courseCard.appendChild(courseTitle);
    courseCard.appendChild(courseDetails);
    courseCard.appendChild(deleteButton);

    teachedContainer.appendChild(courseCard);
}

function showConfirmationPopup(courseCard) {
    document.getElementById('confirm-delete-popup').style.display = 'flex';
    document.getElementById('confirm-delete').onclick = () => {
        courseCard.remove();
        document.getElementById('confirm-delete-popup').style.display = 'none';
    };
    document.getElementById('cancel-delete').onclick = () => {
        document.getElementById('confirm-delete-popup').style.display = 'none';
    };
}
document.getElementById('go-back-button').onclick = () => {
    window.location.href = 'anotherPage.html'; // Replace 'anotherPage.html' with the actual URL of the page you want to go back to
};