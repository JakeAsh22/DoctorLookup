import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor.js';

$(document).ready(function()
{
  $("#doctType").click(function()
  {
    let name = "Varley";
    let doctor = new Doctor();
    (async () =>
    {
      console.log("hi");
      const response = await doctor.getDocName();
      let docName = getElements(response);
      console.log(docName);
      console.log("hello")
    })();
    const getElements = function (response)
    {
      console.log(doctor.profile.last_name[0]);
    }
  });
});
