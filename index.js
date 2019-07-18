'use strict';




function getDogImage(numberOfDogs) {
  fetch(`https://dog.ceo/api/breed/hound/images
`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').empty();

  responseJson.message.forEach(imgUrl => {
    $('.results-img').append(`<img src="${imgUrl}" class="results-img">`);

  });

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breedOfDog = $('input[name="breedOfDog"]').val();
    getDogImage(numOfDogs);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});