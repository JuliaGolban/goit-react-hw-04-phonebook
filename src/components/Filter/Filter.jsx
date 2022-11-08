import React from 'react';
import PropTypes from 'prop-types';
import { FieldFilter, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <FieldFilter>
            <LabelFilter>Find contacts by name</LabelFilter>
            <InputFilter
                type="text"
                name="filter"
                title="Name may contain only letters"
                value={value}
                onChange={onChange}
            />
        </FieldFilter>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
}