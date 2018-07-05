import * as classNames from 'classnames';
import * as React from 'react';

import {
  Bulma,
  getColorModifiers, removeColorProps,
  withHelpersModifiers,
} from './../../../bulma';
import { getHTMLProps } from './../../../helpers';

export interface FileLabel<T> extends Bulma.Tag,
    React.HTMLProps<T> {

}

export function FileLabel({ tag = 'label', ...props }: FileLabel<HTMLElement>) {
  const className = classNames(
      'file-label',
      props.className,
  );

  const HTMLProps = getHTMLProps(props, removeColorProps);

  return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(FileLabel);
export default HOC;