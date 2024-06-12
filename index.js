const inputfeild = document.getElementById("inputfeild");

  function display(input) { 
    inputfeild.value += input;
  }

  function cleardisplay() { 
    inputfeild.value = "";
  }

  function calculate() { 
    inputfeild.value = eval(inputfeild.value);
  }