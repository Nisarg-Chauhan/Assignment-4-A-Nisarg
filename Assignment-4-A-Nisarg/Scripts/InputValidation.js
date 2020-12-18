// Javascript to validate the form
function myFunction() {
 
    //Get all the elements from the html file
    var teacherFname = document.forms["myForm"]["TeacherFname"].value;
    var teacherLname = document.forms["myForm"]["TeacherLname"].value;
    var employeeNumber = document.forms["myForm"]["EmployeeNumber"].value;
    var hireDate = document.forms["myForm"]["HireDate"].value;
    var salary = document.forms["myForm"]["Salary"].value;
  

    //Display a message if the form is submitted successfully
    if (
        teacherFname === "" ||
        teacherLname === "" ||
        employeeNumber === "" ||
        hireDate === "" ||
        salary === "" 
    ) {
        return false;
    } else {
        //Make the header visible 
        document.getElementById("hidden").style.visibility = "visible";
        alert("Teacher Updated Successfully!")
    }
}