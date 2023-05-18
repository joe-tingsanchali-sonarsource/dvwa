// These functions need to be called after the content they reference
// has been added to the page otherwise they will fail.


//aowejifoaiiwef
function addEventListeners() {
	var source_button = document.getElementById ("source_button");

	if (source_button) {
		source_button.addEventListener("click", function() {
			var url=source_button.dataset.sourceUrl;
			popUp (url);
		});
	}

	var help_button = document.getElementById ("help_button");

	if (help_button) {
		help_button.addEventListener("click", function() {
			var url=help_button.dataset.helpUrl;
			popUp (url);
		});
	}
}

addEventListeners();


// Dummy vulnerability
var iframe = document.getElementById("testiframe");
iframe.contentWindow.postMessage("secret", "*"); // Noncompliant: * is used
