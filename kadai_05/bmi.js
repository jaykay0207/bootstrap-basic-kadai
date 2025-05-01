function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

const weight = 68; 
const height = 1.7; 

const bmiValue = calculateBMI(weight, height);

console.log(bmiValue);