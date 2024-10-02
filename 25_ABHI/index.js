function getBmiValue(){
    // alert("hello");

    var wei = document.querySelector("#weight").value;
    console.log(wei);
    
    var hei = document.querySelector("#height").value;
    console.log(hei);
    
    hei = hei *12;
    hei = hei * 0.025;
    
    var bmiValue = wei/ (Math.pow(hei,2));
    bmiValue = (Math.round(bmiValue));(Math.round(bmiValue));

    console.log(bmiValue);
    document.getElementById("bmivalue").value = bmiValue;
    // var wei = document.getElementById('weight').value;
    // var hei = document.getElementById('height').value;
    
    // console.log(wei, hei);

    // height = height * 12;
    // height = height * 0.025;

    // var newbmivalue = weight / (Math.pow(height,2));
    // newbmivalue = (Math.round(newbmivalue));
    // document.getElementById('bmivalue').value = newbmivalue;
}