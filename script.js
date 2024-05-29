function loginAnswer(number) {
}
function SaveQuestion() {
  let Question = {
    Q: document.getElementById("Q").value,
    A1: document.getElementById("A1").value,
    A2: document.getElementById("A2").value,
    A3: document.getElementById("A3").value,
    RA: document.getElementById("Q").value,
  };
  const arr = [Question.Q, Question.A1, Question.A2, Question.A3, Question.RA];
  let length_int = localStorage.length + 1;
  let length = length_int.toString();
  localStorage.setItem(length, JSON.stringify(arr));
}