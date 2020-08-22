import image from './assets/image.png';
import {
  ImageBlock,
  TextBlock,
  TextColumnBlock,
  TitleBlock,
} from './classes/Block';

export const model = [
  new TitleBlock('Конструктор сайтов на JavaScript', {
    tag: 'h2',
    styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; padding: 1rem; text-align: center;',
  }),
  new ImageBlock(image, {
    alt: 'my image',
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    imageStyles: 'width: 50px; height: auto',
  }),
  new TextColumnBlock([
        'Пишем приложение на JS. Учимся!!!',
        'Пишем приложение на Java. Учимся!!!',
        'Пишем приложение на Java + Spring!'],
      {styles: 'background: linear-gradient(to bottom, yellow, #ff0099);padding: 1rem;color: #fff;font-weight: bold;text-align: center;'}),
  new TextBlock('Вперед!!!', {
        tag: 'p',
        styles: 'background: linear-gradient(to bottom, #8e2de8, #4a00e0);' +
            'padding: 2rem 0;font-weight: bold;color: #fff;text-align: center;',
      },
  ),
];