/**
 * 
 */
function someFunction()
{
	var url = './FakeDynamic.html?' + 't=' + Math.random();
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
			// Every thing ok
			console.log(xhr.responseText); // handle response.
			document.getElementById("someID").innerHTML += xhr.responseText ;
		}
	};
	xhr.send();
}