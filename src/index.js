import {model} from './model';
import {template} from './template';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {
  const generate = template[block.type];
  if (generate) {
    const html = generate(block);
    site.insertAdjacentHTML('beforeend', html);
  }
});
