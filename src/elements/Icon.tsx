import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getSizeModifiers,
    isLeft, isRight,
    removeAlignmentProps, removeSizeProps,
    withHelpersModifiers,
} from './../bulma';
import { getHTMLProps, isOption } from './../helpers';

export interface Icon<T> extends Bulma.Size, Bulma.Alignment,
    React.HTMLProps<T> {
    isAlign?: 'left' | 'right';
}

const isAlignOption = isOption(isLeft, isRight);

export function Icon({ children, ...props }: Icon<HTMLElement>) {
    const className = classNames(
        'icon',
        {
            ...(isAlignOption(props.isAlign) ? { [`is-${props.isAlign}`]: true } : {}),
            ...getSizeModifiers(props),
        }
    );

    const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

    const icon = (
        <span {...HTMLProps} className={className}>
            {children ? children : (<i className={`${props.className}`} aria-hidden="true"></i>)}
        </span>
    );

    return icon;
}

const HOC = /*@__PURE__*/withHelpersModifiers(Icon);
export default HOC;
