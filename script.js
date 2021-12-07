const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const email = form['email'].value;

    if(email === '') {
        addErrorTo('email', 'Please provide a valid email');
    } else {
        removeErrorFrom('email');
    }

    if(validateEmail(email) === false) {
        addErrorTo('email', 'Please provide a valid email');
    } else {
        removeErrorFrom('email');
    }

});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');
  
    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.display = "flex";

    const errorimg = form[field].parentNode.querySelector('.errorimg');
    errorimg.style.display = "inline-block";
  }

  function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');
  
    const small = form[field].parentNode.querySelector('small');
    small.style.display = "none";

    const errorimg = form[field].parentNode.querySelector('.errorimg');
    errorimg.style.display = "none";
  }

  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  


