window.onload = () => {
  let input = document.querySelector('#input')
  input.oninput = function(){
    let value = this.value.trim();
    let list = document.querySelectorAll('#clas')
    

    if(value != '') {

      list.forEach(elem => {
        if(elem.innerText.search(value) == -1) {
          elem.classList.add('hidden')
        }
      })
    } else {
      list.forEach(elem => {
        elem.classList.remove('hidden')
      })
    }
    

    console.log(this.value);
  }
}