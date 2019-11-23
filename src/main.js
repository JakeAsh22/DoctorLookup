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
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=Varley&location=wa-seattle&skip=0&limit=10&user_key=99c49e507ab58e761efd1622ee667e9f`;

    request.onreadystatechange = function()
    {
      if (this.readyState ===4 && this.status ===200) {
        let response = JSON.parse(this.responseText);
        console.log("hello");
        getElements(response);
      }

    };

    request.open("GET",url,true);
    request.send();
    const getElements = function(response)
    {
      $(".docstuff").text(`${response.main}`);
    };
  });
});
