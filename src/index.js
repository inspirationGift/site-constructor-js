import {model} from './model';
import './styles/main.css';
import {Site} from './classes/site';
import {SideBar} from './classes/sideBar';

const updateCallBack = newBlock => {
  model.push(newBlock);
  site.render(model);
};

const site = new Site('#site');

new SideBar('#panel', updateCallBack);

site.render(model);




