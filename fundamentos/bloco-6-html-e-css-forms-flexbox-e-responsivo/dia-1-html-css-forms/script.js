const validation = new JustValidate('#form');

window.onload = function () {
  const clearBtn = document.querySelector('#erase-button');
  clearBtn.addEventListener('click', clearFields);
  const submitBtn = document.querySelector('#submit-button');
  submitBtn.addEventListener('click', buttonSubmit);
};


function buttonSubmit(event) {
  //event.preventDefault();
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

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ])
  .addField('#why', [
    {
      rule: 'minLength',
      value: 30,
    },
    {
      rule: 'maxLength',
      value: 300,
    },
    {
      rule: 'required',
      errorMessage: 'Reasons is required',
    },
  ])
  .addField('#agreement', [
    {
      rule: 'required',
      errorMessage: 'Agreement is required',
    },
  ])
  .addRequiredGroup('#checkbox_group',
    'You should select at least one option'
  )
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Date is required',
    },
  ])
