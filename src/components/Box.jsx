import styled from 'styled-components';
import {
  color,
  typography,
  space,
  layout,
  flexbox,
  border,
  position,
} from 'styled-system';

const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  typography
);

export default Box;
