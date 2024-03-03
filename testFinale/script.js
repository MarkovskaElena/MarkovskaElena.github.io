// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Dave",
  questions: [
{
      questionText: "Каков тип на податоци би отпечатил податочниот тип на x во следниов пример:",
      codeExamples: "x = ('apple', 'banana', 'cherry'), print(type(x))",
      responses: [
        { text: "list"},
        { text: "int" },
        { text: "tuple" , correct: true },
        { text: "string" }, ] },

{
      questionText: "Кој е излезот од следниот код ако z = float(3)",
      codeExamples: "print(z)",
      responses: [
        { text: "0.3"},
        { text: "3" },
        { text: "3.0" , correct: true },
        { text: "error" }, ] },

{
questionText: "Кој е излезот од следниот код ако x = 8",
      codeExamples: "print(x &= 3)",
      responses: [
        { text: "8"},
        { text: "3" },
        { text: "0" , correct: true },
        { text: "error" }, ] },

{
      questionText: "Кој е излезот од следниот код:",
      codeExamples: "print(5 + 4 - 7 + 3)",
      responses: [
        { text: "4"},
        { text: "-7" },
        { text: "5" , correct: true },
        { text: "3" }, ] },

{
      questionText: "Кој е излезот од следниот код ако a = 20 и b = 33",
      codeExamples: "if a > b: print(b is greater than a)",
      responses: [
        { text: "b is greater than a", correct: true },
        { text: "a is greater than b" }, ] },


{
      questionText: "Кој е излезот од следниот код ако a = 20 и b = 33",
      codeExamples: "print(x >= y)",
      responses: [
        { text: "True"},
        { text: "False" , correct: true }, ] },

{
    questionText: "Кој е излезот од следниот код:",
    codeExamples: "for x in range(6): print(x) ",
    responses: [
        { text: "0 1 2 3 4 5", correct: true },
        { text: "1 2 3 4 5" },
        { text: "1 2 3 4 5 6" },
        { text: "0 1 2 3 4 5 6" }, ] },

  {
    questionText: "Од што е излезот на: ",
    codeExamples: "for x in range(2, 6): print(x)",
    responses: [
    { text: "2 3 4 5" , correct: true},
    { text: "2 3 4 5 6" },
    { text: "0 2 3 4 5 6" }] },


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
