document.getElementById("popup-trigger").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
  });
  
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
  });