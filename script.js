document.addEventListener("DOMContentLoaded", function() {
  let result = document.querySelector('#result');
  
  let clear = document.querySelector('#clear');
  let equalTo = document.querySelector('#equalTo');
  let delete_single_num = document.querySelector('#delete_single_num');
  
  let Normal_btn = document.querySelectorAll('.Normal_btn');
  
  let initial_value = "";

  // ✅ adjust font size dynamically
  function adjustFontSize() {
    let length = result.innerHTML.length;
    if (length <= 10) {
      result.style.fontSize = "2em";
    } else if (length <= 15) {
      result.style.fontSize = "1.5em";
    } else {
      result.style.fontSize = "1em";
    }
  }
  
  Normal_btn.forEach((btn) => {
    btn.addEventListener('click', function() {
      let text = this.innerHTML;
      initial_value += text;
      result.innerHTML = initial_value;
      adjustFontSize();
    });
  });
  
  equalTo.addEventListener('click', function() {
    if (result.innerHTML != "") {
      try {
        result.innerHTML = eval(result.innerHTML);
        initial_value = result.innerHTML;
        adjustFontSize();
      } catch {
        result.innerHTML = "Error";
        initial_value = "";
      }
    } else {
      alert('Please enter a number');
    }
  });

  clear.addEventListener('click', function() {
    result.innerHTML = "";
    initial_value = "";
    adjustFontSize();
  });
  
  delete_single_num.addEventListener('click', function() {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
    initial_value = result.innerHTML;
    adjustFontSize();
  });
});
