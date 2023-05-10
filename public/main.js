const catBtn = document.querySelector(`#cat`);
const dogBtn = document.querySelector(`#dog`);

const catHandler = () => alert('The cat name is: Rascal')
const dogHandler = () => alert("The dog name is: Doug");

catBtn.addEventListener('click', catHandler)
dogBtn.addEventListener('click', dogHandler)