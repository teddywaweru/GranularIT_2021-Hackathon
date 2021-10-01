const apiUrl = "./data.json";
const test = document.getElementById('test');
const row = document.getElementById('row');
console.log(row);
console.log(test);
var filter = document.getElementById('filter');
var filterValue = document.getElementById('filter').value;
var priceFilter = document.getElementById('priceFilter')

console.log(filterValue);

async function getapi(url) {
    const res = await fetch(url);
    
    let data = await res.json();
    // console.log(data);
    courseData(data);
    
    filter.addEventListener("change",()=>{
        // this.data = data;
        console.log(priceFilterValue);
        myFilter(data,filterValue)
        test.style.color = 'red'
    })
    priceFilter.addEventListener('keyup',()=>{
        // this.data = data;
        
        var priceFilterValue = document.getElementById('priceFilter').value;

        myPriceFilter(data,priceFilterValue)
        test.style.color = 'red'
})
    
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
            this.filterValue = filterValue
            this.data = data;
            
            console.log(data);
            // data.filter(course=>{
                //     if (course.name === filterValue){
                    //         console.log(course.name);
                    //     }
                    // })
                    // console.log(filterValue.value);
                    
                }
                
                function myPriceFilter(data, priceFilterValue){
                    this.data = data
                    this.priceFilterValue = priceFilterValue


                    // console.log(data.courses[0]);
                    const dataArray = Object.entries(data)
/*
// console.log({data})
var courses = data.courses;
// console.log({courses});
// var allPrices = courses.map((course)=>course.price);
// console.log({allPrices});
// console.log({priceFilterValue})
// console.log(priceFilterValue);

var modifiedCourses = courses.map((course)=>{
    if(course.price > priceFilterValue){
return course;
    }else{
return null;
    }
});

console.log({modifiedCourses})
*/
                    var filterList = data.courses.filter(course=>{
                      return  course.price==priceFilterValue;
                        // console.log(course.name);  
                        // console.log(priceFilterValue);  
                    })   
                    
                    console.log({
                        priceFilterValue,
                        allPrices:filterList.map((list)=>list.price)
                    }
                    );

// console.log({filterList})
// console.log({filterList:filterList})

                    // console.log(filterList);
                    // for(var i; i<filterList.length; i++){
                    //     console.log(filterList.name)
                    // }

                // console.log(filterList);
                    // console.log(data.courses);
                    

                    
                    // for (let course of data.courses){
                        
                    //     if (priceFilterValue > course.price){
                            
                            
                    //         tab += `<tr id="courses">
                    //         <td id="name">${course.name}</td>
                    //         <td id="overview">${course.overview}</td>
                    //         <td id="duration">${course.duration}</td>
                    //         <td id="startDate">${course.startDate}</td>
                    //         <td id="time">${course.time}</td>
                    //         <td id="deliveryMode">${course.deliveryMode}</td>
                    //         <td id="price">${course.price}</td>
                    //         <td id="totalSlots">${course.totalSlots}</td>
                    //         <td id="bookedSlots">${course.bookedSlots}</td>
                    //         </tr>`;
                            
                            
                    //         document.getElementById("row").innerHTML = tab;
                            
                    //     }

                   // }

}



