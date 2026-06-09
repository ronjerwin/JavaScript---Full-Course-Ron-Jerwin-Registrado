const calculationResult = document.querySelector('#calculationResult');

    let calculation = localStorage.getItem('calculation') || "";
    calculationResult.textContent = calculation;
    function updateCalculation(value) {
     if (value === '=') {
      const result = eval(calculation);
      calculationResult.textContent = result;
      calculation = "";
      localStorage.removeItem('calculation');
      return;
    }

    calculation += value;
    localStorage.setItem('calculation', calculation);
    calculationResult.textContent = calculation;
    }