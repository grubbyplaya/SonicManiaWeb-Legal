var FilePath;

document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("fileInput");

    fileInput.addEventListener("change", function() {
        const selectedFile = fileInput.files[0];

        if (selectedFile && selectedFile.name === "Data.rsdk") {
            window.FilePath = URL.createObjectURL(selectedFile);
            console.log("FilePath:", FilePath); // Logs the accessible path
            loadRSDK(FilePath);
        } else {
            console.error("Incorrect file selected. Please upload Data.rsdk.");
        }
    });
});

function loadRSDK(FilePath) {
    console.log("Using Data.rsdk from:", FilePath);
    
    const script = document.createElement("script");
    script.src = "RSDKv5.js";
    script.onload = function() {
        console.log("RSDKv5.js loaded successfully.");
	var fileBox = document.getElementById("fileInput")
	fileBox.remove();
    };
    document.body.appendChild(script);
}