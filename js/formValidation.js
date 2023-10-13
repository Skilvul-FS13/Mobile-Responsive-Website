const btnSubmit = document.getElementById('submit-form');
const showResult = document.getElementById('result');
const form = document.getElementById('form');

function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  const formData = {
    name,
    city,
    email,
    zipCode,
    status,
  };

  return formData;
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  const status = document.getElementById('status').checked;
  return status ? true : false;
}

function validateFormData(formData) {
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked()) {
    console.log('form terisi');
    return true;
  } else {
    console.log('tidak terisi');
    return false;
  }
}

form.addEventListener('submit', submit);

function submit(e) {
  e.preventDefault();
  const data = handleGetFormData();
  const warning = document.getElementById('warning');
  if (validateFormData(data) === false) {
    warning.textContent = 'Periksa form anda sekali lagi';
  } else {
    warning.textContent = '';
  }
}

console.log(JSON.parse(localStorage.getItem('USER_LOGGED_IN')));
