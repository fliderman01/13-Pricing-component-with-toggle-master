// const left = document.querySelector('#left'); // მარცხენა ღილაკი
// const right = document.querySelector('#right'); // მარჯვენა ღილაკი

// // მარცხენა ღილაკი
//   left.addEventListener('click', (e) => {
//     document.querySelector('.span1').style.display = 'initial'; // ტანიას პარაგრაფის გაჩენა
//     document.querySelector('.span2').style.display = 'none'; // ჯონის პარაგრაფის გაქრობა
//   });

// // მარჯვენა ღილაკი
// right.addEventListener('click', (e) => {
//     document.querySelector('.span1').style.display = 'none'; // ტანიას პარაგრაფის გაქრობა
//     document.querySelector('.span2').style.display = 'initial'; // ჯონის პარაგრაფის გაჩენა
//   });

function myFunction() {
    document.querySelector('.span1').style.display = 'none'; // ტანიას პარაგრაფის გაჩენა
    document.querySelector('.span2').style.display = 'initial'; // ჯონის პარაგრაფის გაქრობა
  };