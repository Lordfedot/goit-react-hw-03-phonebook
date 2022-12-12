import { List, Contact, ButtonDelete } from './Styled/ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Contact key={id}>
        <p>{name}: {number}</p>
        <ButtonDelete
          type="button"
          onClick={() => {onDelete(id);}}
        >
          Delete
        </ButtonDelete>
      </Contact>
    ))}
  </List>
);

export default ContactsList;
