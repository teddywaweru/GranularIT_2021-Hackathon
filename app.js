const apiUrl = "./data.json";

async function getapi(url) {
    const res = await fetch(url);

    let data = await res.json();
    console.log(data);
    courseData(data);
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
        tab += `<tr>
            <td>${course.name}</td>
            <td>${course.overview}</td>
            <td>${course.duration}</td>
            <td>${course.startDate}</td>
            <td>${course.time}</td>
            <td>${course.deliveryMode}</td>
            <td>${course.price}</td>
            <td>${course.totalSlots}</td>
            <td>${course.bookedSlots}</td>
        </tr>`;
    }

    document.getElementById("row").innerHTML = tab
}

