function captureTheNumbers(array){
   let regex = /\d+/g;
   let text = array.join(' ');
   let numbers = text.match(regex);
   console.log(numbers.join(' '));
}

captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']);
captureTheNumbers(['123a456',
    '789b987',
    '654c321',
    '0']);