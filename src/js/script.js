/* document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('str').onclick = function() {
        this.innerHTML = '';
    }
    const inp = document.getElementById('date'),
          div = document.getElementById('str'),
          btn = document.getElementById('go');
    btn.addEventListener('click', function () {
      if (inp.value.length)   // добавляем текст только если его длина !== 0
        div.innerHTML += inp.value + '<br>'; 
    });
    let start = new Date(document.getElementById('date').value);
    let urage = 2023 - start.getFullYear();
  }); 
 */

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('zB').onclick = function() {
        this.innerHTML = '';
    }
    const inp = document.getElementById('name'),
          div = document.getElementById('zB'),
          btn = document.getElementById('go');
    btn.addEventListener('click', function () {
      if (inp.value.length)   // добавляем текст только если его длина !== 0
        div.innerHTML += inp.value; 
    });
  }); 


let a = document.querySelectorAll('input');
for (let elem in a) {
    if (a[elem].checked)
        console.log(elem);
}