// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Dave",
  questions: [
    
{
    questionText: "Кој е излезот од следниот код:",
    codeExamples: "for x in range(6): print(x) ",
    responses: [
        { text: "0 1 2 3 4 5", correct: true },
        { text: "1 2 3 4 5" },
        { text: "1 2 3 4 5 6" },
        { text: "0 1 2 3 4 5 6" }
    ]
}
,
  {
      questionText: "Кој е излезот од следниот код ако k = ['a', 'b', 'c', 'd']",
      codeExamples: "for x in k: print(x)",
      responses: [
        { text: "abcd"},
        { text: "a b c" },
        { text: "a b c d" , correct: true },
        { text: "error" }, ] },


  {
    questionText: "Која е вредноста на следниот Python израз:",
    codeExamples: "for x in 'python': print(x)",
    responses: [
    { text: "p y h o n" },
    { text: "p y t h o n", correct: true },] },


  {
    questionText: "Од што е излезот на: ",
    codeExamples: "for x in range(2, 30, 3): print(x)",
    responses: [
    { text: "2 3 30" },
    { text: "2 5 9 11 14 17 20 23 26 30" },
    { text: "2 5 8 11 14 17 20 23 26 29", correct: true }] },


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
