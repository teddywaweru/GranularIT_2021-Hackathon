const apiUrl = "./data.json";

async function getapi(url) {
  const res = await fetch(url);

  let data = await res.json();
  console.log(data);
  myData = data;
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

  for (let course of data.courses) {
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

function myFilter() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  table = document.getElementById("row");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
