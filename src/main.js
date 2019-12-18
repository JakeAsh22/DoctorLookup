import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor.js';

$(document).ready(function()
{
  $("#nameButton").click(function()
  {
    $(".docstuff").text("");
    $(".doctorCard").hide();
    $(".doctorCard").show();
    let lastName = $('#docFind').val();
    let newPatients = "";

    (async () => {
      let lastNameSearch = new Doctor();
      const response = await lastNameSearch.getDocByName(lastName);
      getElements(response);
    })();

    const getElements = function(response)
    {
      if (lastName == '')
      {
        $(".docstuff").text("Please enter the last name of a doctor.");
      }
      else
      {
        for (let i = 0;i<response.data.length;i++)
        {
          if (response.data[i].practices[0].accepts_new_patients)
            newPatients = "Yes";
          else
            newPatients = "No";

          $(".docstuff").append(`<li>The doctors information is:
            ${response.data[i].profile.last_name}, ${response.data[i].profile.first_name}
           <ul>Phone Number: ${response.data[i].practices[0].phones[0].number}</ul>
           <ul>Accepting new patients? ${newPatients}</ul></li>`);
        }
      }
    };
  });

  $("#sickButton").click(function()
  {
    $(".docstuff").text("");
    $(".doctorCard").hide();
    $(".doctorCard").show();
    let issue = $('#sickness').val();
    let newPatients = "";

    (async () => {
      let issueSearch = new Doctor();
      const response = await issueSearch.getDocByIssue(issue);
      getElements(response);
    })();
    const getElements = function(response)
    {
      if (issue == '')
      {
        $(".docstuff").text("Please enter the issue you are having.");
      }
      else
      {
        for (let i = 0;i<response.data.length;i++)
        {
          if (response.data[i].practices[0].accepts_new_patients)
            newPatients = "Yes";
          else
            newPatients = "No";

          $(".docstuff").append(`<li>The doctors information is:
            ${response.data[i].profile.last_name}, ${response.data[i].profile.first_name}
           <ul>Phone Number: ${response.data[i].practices[0].phones[0].number}</ul>
           <ul>Accepting new patients? ${newPatients}</ul></li>`);
        }
      }
    };
  });

});
