import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Table<T> extends React.HTMLProps<T> {
    isBordered?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
}

export function Table(props: Table<HTMLElement>) {
    const className = classNames(
        'table',
        {
            'is-bordered': props.isBordered,
            'is-narrow': props.isNarrow,
            'is-striped': props.isStriped,
            'is-hoverable': props.isHoverable,
        },
        props.className,
    );
    const {
        isBordered,
        isStriped,
        isNarrow,
        isHoverable,
        ...HTMLProps,
    } = props;

    return (
        <table {...HTMLProps} className={className} />
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(Table);
export default HOC;
