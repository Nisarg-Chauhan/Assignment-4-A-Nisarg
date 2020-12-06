using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Assignment_4_A_Nisarg.Models
{
    public class Teacher
    {
        //The following fields define a Teacher
        public int TeacherId;
       
        public string TeacherFname;
        public string TeacherLname;
        public string EmployeeNumber;
        public DateTime HireDate;
        public decimal Salary; 

        //parameter-less constructor function
        public Teacher() { }
    }
}