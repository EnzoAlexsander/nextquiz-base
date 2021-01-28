import styled from 'styled-components';

const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid #fff;
    background-color: #000080;
    border-radius: 4px;
    overflow: hidden;
    h1,
    h2,
    h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
    }
    span {
        font-size: 17px;
        font-weight: bold;
        color: #000080;
        margin: auto;
    }
    form {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 32px 0;
    }
    button {
        color: #fff;
        height: 38px;
        font-weight: bold;
        outline: none;
        border: 1px solid #fff;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: #363636;
        :enabled {
        background-color: #000080;
        cursor: pointer;
    }        
}
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    * {
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px 32px;
    & > *:first-child {
        margin-top: 0;
    }
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
