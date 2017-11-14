$(function() {
  checkAndUpdatePetInfoInHtml();
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
})

  let pet_info = {
    name: "Mimo",
    weight: 10,
    happiness: 5
  }

  function clickedTreatButton() {
    pet_info['happiness'] = pet_info['happiness'] + 1;
    pet_info['weight'] = pet_info['weight'] + 1;
    checkAndUpdatePetInfoInHtml();
  }

  function clickedPlayButton() {
    pet_info['happiness'] = pet_info['happiness'] + 1;
    pet_info['weight'] = pet_info['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
  }

  function clickedExerciseButton() {
    pet_info['happiness'] = pet_info['happiness'] - 1;
    pet_info['weight'] = pet_info['weight'] - 1;
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();
    updatePetInfoInHtml();
  }

  function checkWeightAndHappinessBeforeUpdating() {
    if (pet_info['weight'] < 0) {
      pet_info['weight'] = 0
    }
  }

  // Updates your HTML with the current values in your pet_info dictionary
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
  }
