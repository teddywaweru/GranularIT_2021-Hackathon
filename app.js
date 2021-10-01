const apiUrl = "./data.json";
const filter = document.getElementById('filter');
// var filterValue = ""
const filterValue = document.getElementById('filter');
console.log(filterValue);

async function getapi(url) {
    const res = await fetch(url);

    let data = await res.json();
    // console.log(data);
    courseData(data);

    filter.addEventListener('keyup',myFilter(data, filterValue))

}

getapi(apiUrl);

function courseData(data) {
    let tab = `<tr>
                    <th>Name</th>
                    <th>Overview</th>
                    <th>Duration</th>
                    <th>Start Date</th>
                    <th>Time</th>
                    <th>Delivery Mode</th>
                    <th>Price</th>
                    <th>Total Slots</th>
                    <th>Booked Slots</th>
                </tr>`;

    for (let course of data.courses){
        tab += `<tr id="courses">
            <td id="name">${course.name}</td>
            <td id="overview">${course.overview}</td>
            <td id="duration">${course.duration}</td>
            <td id="startDate">${course.startDate}</td>
            <td id="time">${course.time}</td>
            <td id="deliveryMode">${course.deliveryMode}</td>
            <td id="price">${course.price}</td>
            <td id="totalSlots">${course.totalSlots}</td>
            <td id="bookedSlots">${course.bookedSlots}</td>
        </tr>`;
    }

    document.getElementById("row").innerHTML = tab;
}

// function myFilter() {
//     let input = document.getElementById("filter").value;
//     input.toLowerCase();
//     let name = document.querySelectorAll("td");
//     for(i = 0; i < name.length; i++) {
//     }
// }


function myFilter(data, filterValue) {
    // let filter = document.getElementById("filter").value;
    const filteredCourses = course

    console.log(filterValue);

}



