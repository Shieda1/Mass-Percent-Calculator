// https://www.omnicalculator.com/chemistry/mass-percent#how-to-find-mass-percent-mass-percent-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const masspercentageRadio = document.getElementById('masspercentageRadio');
const massofsoluteRadio = document.getElementById('massofsoluteRadio');
const massofsolventRadio = document.getElementById('massofsolventRadio');

let masspercentage;
let massofsolute = v1;
let massofsolvent = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

masspercentageRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass of solute';
  variable2.textContent = 'Mass of solvent';
  massofsolute = v1;
  massofsolvent = v2;
  result.textContent = '';
});

massofsoluteRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass percentage';
  variable2.textContent = 'Mass of solvent';
  masspercentage = v1;
  massofsolvent = v2;
  result.textContent = '';
});

massofsolventRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass percentage';
  variable2.textContent = 'Mass of solute';
  masspercentage = v1;
  massofsolute = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(masspercentageRadio.checked)
    result.textContent = `Mass percentage = ${computeMasspercentage().toFixed(2)}`;

  else if(massofsoluteRadio.checked)
    result.textContent = `Mass of solute = ${computeMassofsolute().toFixed(2)}`;

  else if(massofsolventRadio.checked)
    result.textContent = `Mass of solvent = ${computeMassofsolvent().toFixed(2)}`;
})

// calculation

function computeMasspercentage() {
  return (Number(massofsolute.value) / (Number(massofsolute.value) + Number(massofsolvent.value))) * 100;
}

function computeMassofsolute() {
  return ;
}

function computeMassofsolvent() {
  return (Number(massofsolute.value) / (Number(masspercentage.value) / 100)) - Number(massofsolute.value);
}