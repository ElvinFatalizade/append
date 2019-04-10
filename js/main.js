

var area = document.querySelector(".area");

// area.addEventListener("click", function (e) {

//     e.target.style.backgroundColor = "red";

//     console.log(e.type);


// });



// document.body.addEventListener("keyup", function(e){
//     console.log(e.which);
// });


var citySelect = document.querySelector("select[name='city']");

var selctedCities = document.querySelector(".selected-cities");

citySelect.addEventListener("change", function () {



    var li = document.createElement("li");

    li.classList.add("list-group-item");

    li.innerText = this.value;

    selctedCities.append(li);


    this.children[this.selectedIndex].remove();

    this.selectedIndex = 0;




});