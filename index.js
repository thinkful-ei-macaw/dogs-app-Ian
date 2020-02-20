'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. that might not be a valid breed'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breed = $("#breed").val();
    let dogURL = breed.replace(/-/g, '/');
    console.log(dogURL)
    getDogImage(dogURL);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});