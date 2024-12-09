let counter = 1; 

document
  .getElementById("addQuestionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const questionText = document.getElementById("questionText").value;
    const options = [
      document.getElementById("option1").value,
      document.getElementById("option2").value,
      document.getElementById("option3").value,
      document.getElementById("option4").value,
    ];
    const correctOption = document.getElementById("correctOption").value;
    
    console.log("Question:", questionText);
    console.log("Choices:", options);
    console.log("Correct answer:", options[correctOption - 1]);
    
    const jsonObject = {
      question: questionText, 
      choices: options, 
      correctChoice: options[correctOption - 1]
    };

    console.log(jsonObject);

    counter++; 
    document.getElementById("counter").innerText =
      "Question number: " + counter;

    this.reset();
  });

let finish = document.getElementsByClassName("Finish");

finish[0].onclick = function Done() {
  Swal.fire({
    title: "Thank you!",
    text: "Questions added successfully",
    icon: "success",
    confirmButtonText: "Ok",
  });
};