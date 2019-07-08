import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Example } from './backend-code';

let example = new Example();

$(document).ready(function () {
  $("#test").append(`<br>${example.name}`);
  example.exampleMethod();
  $("#test").append(`<br>${example.name}`);

  $("#city").keyup(function (event) {
    if (event.keyCode === 13) {

      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${$("#city").val()}&APPID=${process.env.exports.apiKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function (response) {
          $('#test').append(`<br>The humidity in ${response.name} is ${response.main.humidity}%`);
          $('#test').append(`<br>The temperature in Kelvins is ${response.main.temp}.`);
          $('#test').append(`<br>The current forecast is ${response.weather[0].main} (${response.weather[0].description}).`);
          $('#city').val("");
        },
        error: function () {
          $('#test').append("<br>There was an error processing your request. Please try again.");
        }
      });
    }
  });

});
