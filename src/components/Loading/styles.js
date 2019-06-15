import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/lib/fa';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FaSpinner)`
  animation: ${rotate360} 2s linear infinite;
`;
