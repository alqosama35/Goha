 
   let timeInSeconds = 60*60*0.5; 
   const timerElement = document.getElementById('timer');
   const questionsElement = document.getElementById('questions');
   const messageElement = document.getElementById('message');
   const submitButton = document.getElementById('submitBtn');

   function updateTimer() {
       const minutes = Math.floor(timeInSeconds / 60);
       const seconds = timeInSeconds % 60;
       timerElement.textContent = `Time: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
       if (timeInSeconds > 0) {
           timeInSeconds--; 
       } else {
           clearInterval(timerInterval);
           finishExam();
       }
   }

   function finishExam() {
       questionsElement.style.display = 'none'; 
       messageElement.style.display = 'block';  
       submitButton.style.display = 'none';   
   }
   const timerInterval = setInterval(updateTimer, 1000);
   submitButton.addEventListener('click', () => {
       clearInterval(timerInterval);
       finishExam();
   });