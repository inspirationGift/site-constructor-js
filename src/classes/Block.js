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
    this.tag = this.options.tag;
    this.styles = this.options.styles;
  }

  toHTML() {

    return row(col(`<${this.tag}>${this.value}</${this.tag}>`), this.styles);
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
    this.tag = options.tag;
    this.styles = options.styles;
  }

  toHTML() {
    return row(
        col(`<${this.tag} style="margin-bottom: 0;">${this.value}</${this.tag}>`),
        this.styles);
  }
}