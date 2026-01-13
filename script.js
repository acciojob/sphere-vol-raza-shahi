function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let volume = document.getElementById("volume");
	let V = (4 / 3) * Math.PI * Math.pow(radius, 3);

	volume.value = V;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
