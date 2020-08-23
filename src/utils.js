export function row(content, styles = '') {
  return `<div class="row" style="margin: 0;${styles}">${content}</div>`;
};

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
};

export function css(styles = {}) {
  const toString = key => {
    return `${key}:${styles[key]}`;
  };
  return Object.keys(styles).map(toString).join(';');
}