import image from './assets/image.png';
import {Block} from './classes/Block';

export const model = [
  new Block('title', 'Конструктор сайтов на JavaScript', {
    tag: 'h2',
    styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; padding: 1rem; text-align: center;',
  }),
  new Block('image', image, {
    alt: 'my image',
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    imageStyles: 'width: 50px; height: auto',
  }),
  new Block('textColumn', [
        'Пишем приложение на JS. Учимся!!!',
        'Пишем приложение на Java. Учимся!!!',
        'Пишем приложение на Java + Spring!'],
      {styles: 'background: linear-gradient(to bottom, yellow, #ff0099);padding: 1rem;color: #fff;font-weight: bold;text-align: center;'}),
  new Block('text', 'Вперед!!!', {
        tag: 'p',
        styles: 'background: linear-gradient(to bottom, #8e2de8, #4a00e0);' +
            'padding: 2rem 0;font-weight: bold;color: #fff;text-align: center;',
      },
  ),
];

// {
//   type: 'title', value: 'Конструктор сайтов на JavaScript', options: {
//     tag: 'h2',
//     styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; padding: 1rem; text-align: center;',
//   },
// },
// {
//   type: 'image', value: image, options: {
//     alt: 'my image',
//     styles: 'padding: 2rem 0; display: flex; justify-content: center;',
//     imageStyles: 'width: 50px; height: auto',
//   },
// },
// {
//   type: 'textColumn', value: [
//     'Пишем приложение на JS. Учимся!!!',
//     'Пишем приложение на Java. Учимся!!!',
//     'Пишем приложение на Java + Spring!'],
//   options: {
//     styles: 'background: linear-gradient(to bottom, yellow, #ff0099);padding: 1rem;color: #fff;font-weight: bold;text-align: center;',
//   },
// },
// {
//   type: 'text',
//   value: 'Вперед!!!', options: {
//     tag: 'p',
//     styles: 'background: linear-gradient(to bottom, #8e2de8, #4a00e0);' +
//         'padding: 2rem 0;font-weight: bold;color: #fff;text-align: center;',
//   },
// },