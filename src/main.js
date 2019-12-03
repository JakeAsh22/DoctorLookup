import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
//import { Doctor } from './doctor.js';

$(document).ready(function()
{
  $("#nameButton").click(function()
  {
    $(".doctorCard").hide();
    $(".doctorCard").show();
    //let name = "Varley";
    //let doctor = new Doctor();
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=Smith&location=wa-seattle&skip=0&limit=50&user_key=${process.env.API_KEY}`;

    request.onreadystatechange = function()
    {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        //console.log("hello");
        getElements(response);
      }

    };
    let newPatients = "";
    request.open("GET",url,true);
    request.send();
    const getElements = function(response)
    {
      console.log(response.data[1]);
      if (response.data[0].practices[0].accepts_new_patients)
        newPatients = "Is accepting new patients";
      else
        newPatients = "Is not accepting new patients"
      console.log(response.data[0].practices[0].phones[0].number);
      $(".docstuff").text(`The doctors information is: ${response.data[0].profile.last_name}, ${response.data[0].profile.first_name} Phone Number: ${response.data[0].practices[0].phones[0].number} Accepting new patients? ${newPatients}`);
    };
  });
});
