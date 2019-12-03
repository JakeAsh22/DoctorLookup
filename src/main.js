import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
//import { Doctor } from './doctor.js';

$(document).ready(function()
{
  $("#doctType").click(function()
  {
    $(".doctorCard").hide();
    $(".doctorCard").show();
    //let name = "Varley";
    //let doctor = new Doctor();
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=wa-seattle&skip=0&limit=10&user_key=${process.env.API_KEY}`;

    request.onreadystatechange = function()
    {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        //console.log("hello");
        getElements(response);
      }

    };

    request.open("GET",url,true);
    request.send();
    const getElements = function(response)
    {
      $(".docstuff").text(`${response.practices}`);
    };
  });
});
