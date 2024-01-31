window.onload = () => {
  let input = document.querySelector('#input');
  input.oninput = function () {
    let value = this.value.trim().toLowerCase(); // Convert input value to lowercase
    let list = document.querySelectorAll('#clas');

    if (value !== '') {
      list.forEach(elem => {
        // Convert inner text to lowercase and then check for a match
        if (elem.innerText.toLowerCase().search(value) === -1) {
          elem.classList.add('hidden');
        } else {
          elem.classList.remove('hidden');
        }
      });
    } else {
      list.forEach(elem => {
        elem.classList.remove('hidden');
      });
    }

    console.log(this.value);
  };
};
