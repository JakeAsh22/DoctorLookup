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
    let request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?last_name=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=99c49e507ab58e761efd1622ee667e9f`
    };
  });
});
