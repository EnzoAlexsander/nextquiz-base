import styled from 'styled-components';

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function Logo({ className }) {
  return (
    <img width="340" src="https://www.thesportsdb.com/images/media/league/badge/dtp1dl1534767233.png" alt="Logo UCL" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
    margin: auto;
    display: block;
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`;

export default QuizLogo;
