/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  margin-bottom: 25px;
  height: 38px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: linear-gradient(rgba(255, 255, 255, 1),rgb(f, f, f));
  border: 1px solid #000080;
  outline: none;
  padding: 0 16px;
  color: #000080;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
`;

// eslint-disable-next-line import/prefer-default-export
export function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string.isRequired,
};

export default Input;
