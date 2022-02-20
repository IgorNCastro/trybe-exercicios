window.onload = function () {
  const clearBtn = document.querySelector('#erase-button');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-button');
  submitBtn.addEventListener('click', buttonSubmit);
};


function buttonSubmit(event) {
  event.preventDefault();
}

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
}