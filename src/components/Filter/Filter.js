import React from 'react';
import PropTypes from 'prop-types';

import {
    Input,
    Title,
    Label
} from './filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
    return (
        <Label>
            <Title>Find contacts by name</Title>
            <Input type="text" value={filter}
            onChange={e => {onChangeFilter(e.target.value)}}/>
        </Label>
    );
};

Filter.propType = {
    filter: PropTypes.string,
    onChangeFilter: PropTypes.func,
}