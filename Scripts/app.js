console.log('\x1b[32mapp is connected successfully\x1b[0m');

// get element,value,innertext by id
const eleOf = id => document.getElementById(id);
const valueOf = id => eleOf(id).value;
const textOf = id => eleOf(id).innerText;
// visibility hidden of showing fucntions ------->
const hideById = id => eleOf(id).classList.add('hidden');
const visiById = id => eleOf(id).classList.remove('hidden');

const handlePlay = () => {
  hideById('section-homepage');
  visiById('section-playGround')
};
