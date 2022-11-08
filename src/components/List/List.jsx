import React from 'react';
import PropTypes from 'prop-types';
import { List, Item } from './List.styled';
import IconButton from 'components/buttons/IconBtn/IconBtn';
import { ReactComponent as DeleteIcon } from '../Icons/close.svg';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) => {
                return (
                    <Item key={id}>{name}: {number}
                        <IconButton aria-label="Delete contact" onClick={() => onDeleteContact(id)}>
                            <DeleteIcon width="10" heigth="10" />
                        </IconButton>
                    </Item>)
            })}
        </List>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
         PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
         }))
}