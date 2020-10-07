<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function myFunction() {
  var inpObj = document.getElementById("submit");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Login";
  } 
} 
</script>
