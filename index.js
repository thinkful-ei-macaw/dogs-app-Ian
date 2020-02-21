'use strict';

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
    console.log(responseJson);
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    generateHtml(responseJson)
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let inputNum = $('#dogNum').val();
    getDogImage(inputNum);
  });
};

function generateHtml(arr) {
  let results = '';
  arr.message.forEach(element => {
    results += `<img src="${element}" class="results-img">`
  });
  return results
};

function addDogs(item, index) {
  results += item;
};

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});