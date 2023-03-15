function audit() {
    let weight = document.getElementById('weight').Value;
    let height = document.getElementById('height').Value;
    let bmi = weight / (Math.pow(height ,2))
    let result ="";

if (bmi < 18)
    document.write("Underweight");
else if (bmi < 25)
    document.write("Normal");
else if (bmi < 30)
    document.write("Overweight");
else
    document.write("obese");
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". You " + "<b>"+ result + "</b>";
}