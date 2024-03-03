// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/
var quiz = {
  user: "Dave",
  questions: [
    
  {
    questionText: "Дали е правилно или неправилно дефинирана променливата:",
    codeExamples: "font-size = 15",
    responses: [
    { text: "Правилно", correct: true },
    { text: "Неправилно" },] },


  {
      questionText: "Каков тип на податоци би отпечатил податочниот тип на x во следниов пример:",
      codeExamples: "x = ['apple', 'banana', 'cherry'], print(type(x))",
      responses: [
        { text: "list", correct: true },
        { text: "int" },
        { text: "tuple" },
        { text: "string" }, ] },


  {
    questionText: "Дали # е точниот знак за овој коментар:",
    codeExamples: "#This is a comment?",
    responses: [
    { text: "не" },
    { text: "да", correct: true },] },


  {
    questionText: "Кој тип на податок би го имала променливата x по извршувањето на наредбата во следниов пример:",
    codeExamples: "x = str(\"Hi\") ",
    responses: [
    { text: "int" },
    { text: "float" },
    { text: "str", correct: true }] },

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
