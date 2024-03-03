// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Dave",
  questions: [
    
{
    questionText: "Кој е излезот од следниот код:",
    codeExamples: "print(2 ** 3 ** 2)",
    responses: [
        { text: "512", correct: true },
        { text: "64" },
        { text: "128" },
        { text: "32" }, ]},


  {
      questionText: "Кој е излезот од следниот код:",
      codeExamples: "print(-18 // 4)",
      responses: [
        { text: "-4"},
        { text: "4" },
        { text: "-5" , correct: true },
        { text: "5" }, ] },


  {
    questionText: "Која е вредноста на следниот Python израз:",
    codeExamples: "print(36 / 4)",
    responses: [
    { text: "9" },
    { text: "9.0", correct: true },] },


  {
    questionText: "Од што е излезот нa: ",
    codeExamples: "print(2 % 6) ",
    responses: [
    { text: "0.33" },
    { text: "10" },
    { text: "2", correct: true }] },

{
      questionText: "Кој е излезот од следниот код:",
      codeExamples: "print((7 + 3) - (14 + 3))",
      responses: [
        { text: "-7"},
        { text: "7" },
        { text: "-1" , correct: true },
        { text: "0" }, ] },
      {

      questionText: "Кој е излезот од следниот код ако x = 7",
      codeExamples: "print(x > 4 and x < 8)",
      responses: [
        { text: "True" , correct: true},
        { text: "False"  },] },

{
      questionText: "Кој е излезот од следниот код ако x = 7",
      codeExamples: "print(x += 3)",
      responses: [
        { text: "7"},
        { text: "3" },
        { text: "10" , correct: true },
        { text: "5" }, ] },

{
      questionText: "Кој е излезот од следниот код ако x = 9 и y = 8",
      codeExamples: "print(x % y)",
      responses: [
        { text: "9"},
        { text: "4" },
        { text: "1" , correct: true },
        { text: "5" }, ] },


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
