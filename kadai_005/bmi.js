function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}

const weight = 68; // kg
const height = 1.7; // m

const bmiValue = calculateBMI(weight, height);

// BMIの値をコンソールに出力
console.log(bmiValue);