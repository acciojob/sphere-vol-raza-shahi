function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
  let radius = document.getElementById("radius").value;
  let res = document.getElementById("volume");
  if (radius < 0 || isNaN(radius)) {
    res.value = NaN;
  } else {
    res.value = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
  }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
