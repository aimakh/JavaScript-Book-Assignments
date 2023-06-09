1.
function displayData(data) {
    
    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let dataDisplay = document.getElementById("formData");
    dataDisplay.innerHTML = "Name:" + name + "<br>" + "Email:"
        + email + "<br>" + "Password:" + password + "<br>"

    // document.getElementById("signupForm").reset();
    
}

2.
function FullDetails(button) {
    var item = button.parentNode;
    var fullDetails = item.querySelector(".more-details");
    
    
    
    fullDetails.style.display = "block";
    
   
    // button.style.display = "none";
  }

  3.
  



  var students = [];

  function addStudent() {
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var gradeInput = document.getElementById("grade");

    var name = nameInput.value;
    var age = ageInput.value;
    var grade = gradeInput.value;

    if (name && age && grade) {
      var student = {
        name: name,
        age: age,
        grade: grade
      };

      students.push(student);
      renderTable();

      
      nameInput.value = "";
      ageInput.value = "";
      gradeInput.value = "";
    }
  }

  function renderTable() {
    var tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach(function(student, index) {
      var row = document.createElement("tr");

      var nameCell = document.createElement("td");
      nameCell.textContent = student.name;
      row.appendChild(nameCell);

      var ageCell = document.createElement("td");
      ageCell.textContent = student.age;
      row.appendChild(ageCell);

      var gradeCell = document.createElement("td");
      gradeCell.textContent = student.grade;
      row.appendChild(gradeCell);

      var actionCell = document.createElement("td");

      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        deleteStudent(index);
      });
      actionCell.appendChild(deleteButton);

      var editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function() {
        editStudent(index);
      });
      actionCell.appendChild(editButton);

      row.appendChild(actionCell);
      tableBody.appendChild(row);
    });
  }

  function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
  }

  function editStudent(index) {
    var student = students[index];
    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var gradeInput = document.getElementById("grade");

    nameInput.value = student.name;
    ageInput.value = student.age;
    gradeInput.value = student.grade;
  }



  
