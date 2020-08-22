import {col, row} from './utils';

function title(block) {
  const tag = block.options.tag;
  const styles = block.options.styles;

  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
}

function text(block) {
  const tag = block.options.tag;
  const styles = block.options.styles;
  return row(col(`<${tag} style="margin-bottom: 0;">${block.value}</${tag}>`),
      styles);
}

function image(block) {
  const tag = block.options.tag;
  const {alt, styles, imageStyles} = block.options;
  const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}">`;

  return row(html, styles);
}

function textColumn(block) {
  let map = block.value.map(item => col(item));
  return row(map.join(''), block.options.styles);
}

export const template = {title, text, textColumn, image};