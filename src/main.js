import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WeatherService } from './backend-code';

$(document).ready(function () {
  
  $("#city").keyup(function (event) {
    if (event.keyCode === 13) {

      /* API call with Javascript's XMLHttpRequest object and Javascripts Promise object with UI and backend logic separated ---------- */
      let weatherService = new WeatherService();
      let promise = weatherService.getWeatherByCity($("#city").val());

      promise.then(function(response) {
        let body = JSON.parse(response);
        $('#test').append(`<br>The humidity in ${body.name} is ${body.main.humidity}%`);
        $('#test').append(`<br>The temperature in Kelvins is ${body.main.temp}.`);
        $('#test').append(`<br>The current forecast is ${body.weather[0].main} (${body.weather[0].description}).`);
        $('#city').val("");
      }, function(error) {
        $('#test').append(`<br>There was an error processing your request: ${error.message} Please try again.`);
      });


      /* API call with jQuery ajax method ---------- */
      // $.ajax({
      //   url: `http://api.openweathermap.org/data/2.5/weather?q=${$("#city").val()}&APPID=${process.env.exports.apiKey}`,
      //   type: 'GET',
      //   data: {
      //     format: 'json'
      //   },
      //   success: function (response) {
      //     $('#test').append(`<br>The humidity in ${response.name} is ${response.main.humidity}%`);
      //     $('#test').append(`<br>The temperature in Kelvins is ${response.main.temp}.`);
      //     $('#test').append(`<br>The current forecast is ${response.weather[0].main} (${response.weather[0].description}).`);
      //     $('#city').val("");
      //   },
      //   error: function () {
      //     $('#test').append("<br>There was an error processing your request. Please try again.");
      //   }
      // });


      /* API call with Javascript's XMLHttpRequest object ---------- */
      // let request = new XMLHttpRequest();
      // const url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#city").val()}&APPID=${process.env.exports.apiKey}`;

      // request.onreadystatechange = function() {
      //   if (this.readyState === 4 && this.status === 200) {
      //     const response = JSON.parse(this.responseText);
      //     getElements(response);
      //   }
      // }

      // request.open("GET", url, true);
      // request.send();

      // const getElements = function(response) {
      //   $('#test').append(`<br>The humidity in ${response.name} is ${response.main.humidity}%`);
      //   $('#test').append(`<br>The temperature in Kelvins is ${response.main.temp}.`);
      //   $('#test').append(`<br>The current forecast is ${response.weather[0].main} (${response.weather[0].description}).`);
      //   $('#city').val("");

      // }


      /* API call with jQuery shorthand get() method and promises then() method ---------- */
      // $.get(`http://api.openweathermap.org/data/2.5/weather?q=${$("#city").val()}&APPID=${process.env.exports.apiKey}`).then(function(response) {
      //   $('#test').append(`<br>The humidity in ${response.name} is ${response.main.humidity}%`);
      //   $('#test').append(`<br>The temperature in Kelvins is ${response.main.temp}.`);
      //   $('#test').append(`<br>The current forecast is ${response.weather[0].main} (${response.weather[0].description}).`);
      //   $('#city').val("");
      // }).fail(function(error) {
      //   $('#test').append(`<br>There was an error processing your request: ${error.responseText} Please try again.`);
      // });


      /* API call with Javascript's XMLHttpRequest object and Javascripts Promise object ---------- */
    //   let promise = new Promise(function(resolve, reject) {
    //     let request = new XMLHttpRequest();
    //     let url = `http://api.openweathermap.org/data/2.5/weather?q=${$("#city").val()}&APPID=${process.env.exports.apiKey}`;
  
    //     request.onload = function() {
    //       if (this.status === 200) {
    //         resolve(request.response);
    //       } else {
    //         reject(Error(request.statusText));
    //       }
    //     }
    //     request.open("GET", url, true);
    //     request.send();
    //   });

    //   promise.then(function(response) {
    //     let body = JSON.parse(response);
    //     $('#test').append(`<br>The humidity in ${body.name} is ${body.main.humidity}%`);
    //     $('#test').append(`<br>The temperature in Kelvins is ${body.main.temp}.`);
    //     $('#test').append(`<br>The current forecast is ${body.weather[0].main} (${body.weather[0].description}).`);
    //     $('#city').val("");

    //   }, function(error) {
    //     $('#test').append(`<br>There was an error processing your request: ${error.message} Please try again.`);
    //   });
    // }

    }
  });
});
