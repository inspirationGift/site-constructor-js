import {col, row} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Реализуй метод');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'h2', styles} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {alt, styles, imageStyles} = this.options;
    const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`;
    return row(html, styles);
  }
}

export class TextColumnBlock extends Block {
  constructor(value, options) {
    super(value, options);
    this.styles = options.styles;

  }

  toHTML() {
    let map = this.value.map(item => col(item));
    return row(map.join(''), this.styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'p', styles} = this.options;
    return row(
        col(`<${tag} style="margin-bottom: 0;">${this.value}</${tag}>`),
        styles);
  }
}