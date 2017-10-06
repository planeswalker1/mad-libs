$('#form1').submit(function(event) {
  let person1Input = $('input#person1').val();
  let person2Input = $('input#person2').val();
  let animalInput = $('input#animal').val();
  let exclamationInput = $('input#exclamation').val();
  let verbInput = $('input#verb').val();
  let nounInput = $('input#noun').val();

  $('.person1').text(person1Input);
  $('.person2').text(person2Input);
  $('.animal').text(animalInput);
  $('.exclamation').text(exclamationInput);
  $('.verb').text(verbInput);
  $('.noun').text(nounInput);

  $('#story').slideDown();
  event.preventDefault();
});
