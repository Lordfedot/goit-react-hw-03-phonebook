import { Input } from './Styled/Filter.styled';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <Input
        onChange={onChangeFilter}
        type="text"
        name="filter"
        value={filter}
      />
    </label>
  );
};

export default Filter;
