import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

export default function Select({ name, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
            getValue: ref => {
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [defaultValue, fieldName, registerField, rest.isMulti]);

    return (
        <ReactSelect
            defaultValue={defaultValue}
            ref={selectRef}
            classNamePrefix="react-select"
            {...rest}
        />
    );
}
