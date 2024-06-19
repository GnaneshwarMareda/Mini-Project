let containerEl = document.getElementById('loginEl');
let formEl = document.getElementById('myForm');
let nameEl = document.getElementById('name');
let passwordEl = document.getElementById('password');
let signInBtn = document.getElementById('signInBtn');
let signUpBtn = document.getElementById('signUpBtn');
let signInEl = document.getElementById('signIn');
let signUpEl = document.getElementById('signUp');
let spinnerEl = document.getElementById('spinnerEl');
let errMsgEl = document.getElementById('errMsg');
let statusEl = document.getElementById('status');
let entireContainer = document.getElementById('entireContainer');

function toggleFormSpinner() {
  formEl.classList.toggle('d-none');
  spinnerEl.classList.toggle('d-none');
}

signInEl.addEventListener('click', () => {
  nameEl.value = '';
  passwordEl.value = '';
  statusEl.textContent = '';
  errMsgEl.textContent = '';

  toggleFormSpinner();
  signUpBtn.classList.add('d-none');
  signInBtn.classList.remove('d-none');
  setTimeout(toggleFormSpinner, 1000);
});

signUpEl.addEventListener('click', () => {
  nameEl.value = '';
  passwordEl.value = '';
  statusEl.textContent = '';
  errMsgEl.textContent = '';

  toggleFormSpinner();
  signUpBtn.classList.remove('d-none');
  signInBtn.classList.add('d-none');
  setTimeout(toggleFormSpinner, 1000);
});

formEl.addEventListener('submit', event => {
  event.preventDefault();
});

function executeScripts(container) {
  const scripts = container.getElementsByTagName('script');
  for (let script of scripts) {
    const newScript = document.createElement('script');
    if (script.src) {
      newScript.src = script.src;
    } else {
      newScript.textContent = script.textContent;
    }
    document.body.appendChild(newScript);
    document.body.removeChild(newScript); 
  }
}

async function handleSuccessfulAuth() {
  entireContainer.classList.add('d-none');
  spinnerEl.classList.remove('d-none');

  setTimeout(async () => {
    spinnerEl.classList.add('d-none');

    try {
      const appResponse = await fetch(
        'http://localhost:3000/app/',
        { method: 'GET' }
      );

      if (appResponse.ok) {
        const appContent = await appResponse.text();
        const appContainer = document.createElement('div');
        appContainer.innerHTML = appContent;
        document.body.innerHTML = '';
        document.body.appendChild(appContainer);
        executeScripts(appContainer);
      } else {
        statusEl.textContent = 'Failed to load app content.';
        statusEl.classList.add('text-danger');
        entireContainer.classList.remove('d-none');
      }
    } catch (error) {
      console.error(`Error fetching app content: ${error.message}`);
      statusEl.textContent = 'Network error. Please try again later.';
      statusEl.classList.add('text-danger');
      entireContainer.classList.remove('d-none');
    }
  }, 1000);
}

async function signUp() {
  if (nameEl.value === '') {
    errMsgEl.textContent = '*Username is required';
    return;
  } else if (passwordEl.value === '') {
    errMsgEl.textContent = '*Password is required';
    return;
  }

  errMsgEl.textContent = '';

  let data = {
    username: nameEl.value,
    password: passwordEl.value,
  };

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'http://localhost:3000/register/',
      options
    );
    const jsonData = await response.json();
    const status = response.status;

    statusEl.textContent = jsonData.message; 
    if (status === 201) {
      statusEl.classList.remove('text-danger');
      statusEl.textContent = "Successfully created account";
      statusEl.classList.add('text-success');
      handleSuccessfulAuth(); 
    } else {
      statusEl.classList.remove('text-success');
      statusEl.textContent = "Username already exists";
      statusEl.classList.add('text-danger');
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    statusEl.textContent = 'Network error. Please try again later.';
    statusEl.classList.add('text-danger');
  }
}

async function signIn() {
  if (nameEl.value === '') {
    errMsgEl.textContent = '*Username is required';
    return;
  } else if (passwordEl.value === '') {
    errMsgEl.textContent = '*Password is required';
    return;
  }

  errMsgEl.textContent = '';

  let data = {
    username: nameEl.value,
    password: passwordEl.value,
  };

  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      'http://localhost:3000/login/',
      options
    );
    const jsonData = await response.json();
    const status = response.status;

    statusEl.textContent = jsonData.message; 
    if (status === 201) {
      statusEl.classList.remove('text-danger');
      statusEl.textContent = "Signing In";
      statusEl.classList.add('text-success');
      handleSuccessfulAuth(); 
    } else {
      statusEl.classList.remove('text-success');
      statusEl.textContent = "Password or Username is Incorrect";
      statusEl.classList.add('text-danger');
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    statusEl.textContent = 'Network error. Please try again later.';
    statusEl.classList.add('text-danger');
  }
}

signUpBtn.addEventListener('click', signUp);
signInBtn.addEventListener('click', signIn);
