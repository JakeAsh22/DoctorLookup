import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Doctor } from './doctor.js';

$(document).ready(function()
{
  $("#doctType").click(function()
  {
    let name = "Seattle Childrens";
    let doctor = new Doctor();
    (async () =>
    {
      const response = await doctor.getDocName();
      let docName = getElements(response);
      console.log(docName);
    })();
    const getElements = function (response)
    {
      return response[name];
    }
  });
});
