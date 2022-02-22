import {
  createGlobalStyle,
  FlattenSimpleInterpolation
} from 'styled-components';

import FontStyles from './fonts';
import ResetStyles from './reset';
import NormaliseStyles from './normalise';

export function createFontsStylesheet({
  styles = FontStyles,
  target = document.head
}: {
  styles?: FlattenSimpleInterpolation;
  target?: HTMLElement;
} = {}): null {
  const style = document.createElement('style');
  style.setAttribute('data-fonts', '');
  style.innerHTML = styles.join('');

  const customFontsStyleElement = target.querySelector('[data-fonts]');

  if (customFontsStyleElement) {
    target.replaceChild(style, customFontsStyleElement);
  } else {
    const targetStyle = target.getElementsByTagName('style')[0];
    const parent = targetStyle.parentNode;

    if (parent?.lastChild === targetStyle) {
      parent.appendChild(style);
    } else {
      parent?.insertBefore(style, targetStyle.nextSibling);
    }
  }

  return null;
}

export { FontStyles, ResetStyles, NormaliseStyles };

export default createGlobalStyle<{ target: HTMLElement }>`
  ${ResetStyles}
  ${NormaliseStyles}

  ${({ target }) => createFontsStylesheet({ target })}
`;
