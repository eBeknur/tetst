function runTest() {
  var exitWord = "exit";
  var completedTests = 0;

  while (completedTests < 1) {
    var answer = prompt(
      "Savol " +
        (completedTests + 1) +
        ": Fransiya poytaxti? (Testdan chiqish uchun 'exit' matnini kiriting)"
    );

    if (answer === exitWord) {
      alert("Test ended");
      break;
    }

    if (answer.toLowerCase() === "parij") {
      alert("Tog'ri!");
      completedTests++;
    } else {
      alert("Xato , qaytadan urunib koring");
    }
  }

  alert(
    "Test tugadi sizning natijangiz " +
      completedTests +
      " ."
  );
}

runTest();
