// user interface (or front-end) logic
$('#form1').submit(function(event) {
  // refactored code
  let inputs = ['person1', 'person2', 'animal', 'exclamation', 'verb', 'noun'];
  inputs.forEach(function(input) {
    let userInput = $('input#' + input).val();
    $('.' + input).text(userInput);
  });
  // old code
  // let person1Input = $('input#person1').val();
  // let person2Input = $('input#person2').val();
  // let animalInput = $('input#animal').val();
  // let exclamationInput = $('input#exclamation').val();
  // let verbInput = $('input#verb').val();
  // let nounInput = $('input#noun').val();
  //
  // $('.person1').text(person1Input);
  // $('.person2').text(person2Input);
  // $('.animal').text(animalInput);
  // $('.exclamation').text(exclamationInput);
  // $('.verb').text(verbInput);
  // $('.noun').text(nounInput);
  $('#story').slideDown();
  event.preventDefault();
});

$('input').focus(function() {
  $('#story').slideUp();
});
