const calculateTemp = () => {
  const temp = document.getElementById("temp").value;
  const unit = document.getElementById("unit");
  const selectedUnit = unit.options[unit.selectedIndex].value;
  console.log(selectedUnit);

  const celToFah = (celcius) => {
    const fahrenheit = Math.round((celcius * 9) / 5 + 32);
    return fahrenheit;
  };

  const fahToCel = (fahrenheit) => {
    const celcius = Math.round(((fahrenheit - 32) * 5) / 9);
    return celcius;
  };

  let result;
  if (selectedUnit == "cel") {
    result = celToFah(temp);
    document.getElementById("result").innerHTML = `=${result} Fahrenheit`;
  } else {
    result = fahToCel(temp);
    document.getElementById("result").innerHTML = `= ${result} Celcius`;
  }
};
