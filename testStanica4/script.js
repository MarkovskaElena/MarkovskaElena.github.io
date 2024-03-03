// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Dave",
  questions: [
    
{
    questionText: "Кој е излезот од следниот код ако n=6",
    codeExamples: "if n > 5: print(n * n * n)",
    responses: [
        { text: "236" },
        { text: "216" , correct: true},
        { text: "28" },
        { text: "132" }
    ]
}
,
  {
      questionText: "Кој е излезот од следниот код ако a = 200 и b = 33",
      codeExamples: "if a > b: print(a is greater than b)",
      responses: [
        { text: "b is greater than a"},
        { text: "a is greater than b" , correct: true }, ] },


  {
    questionText: "Кој е излезот од следниот код ако a = 2 и b = 330",
    codeExamples: "print(A) if a > b else print(B)",
    responses: [
    { text: "A" },
    { text: "B", correct: true },] },


  {
    questionText: "Кој е излезот од следниот код ако a = 330 и b = 330",
    codeExamples: "print(A) if a > b else print(=) if a == b else print(B)",
    responses: [
    { text: "<" },
    { text: ">" },
    { text: "=", correct: true }] },

{
      questionText: "Кој е излезот од следниот код ако a = 200 и b = 33 и c = 50",
      codeExamples: "if a > b and c > a: print(Both conditions are True)",
      responses: [
        { text: " "},
        { text: "error" },
        { text: "Both conditions are True" , correct: true },
        { text: "0" }, ] },
     

  ] },

userResponseSkelaton = Array(quiz.questions.length).fill(null);


var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false },

  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    } },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      //console.log(this.userResponses);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
      this.questionIndex++;
    },

    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
        typeof this.quiz.questions[i].responses[
        this.userResponses[i]] !==
        "undefined" &&
        this.quiz.questions[i].responses[this.userResponses[i]].correct)
        {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    } ,
    calculatePercentage: function() {
    return (this.score() / this.quiz.questions.length) * 100;
  }
  } });
