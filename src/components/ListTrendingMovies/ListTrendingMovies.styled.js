import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TrendingItem = styled(NavLink)`
  display: flex;

  margin-bottom: ${p => p.theme.space[2]}px;

  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;

  color: ${p => p.theme.colors.text};

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }

`;
