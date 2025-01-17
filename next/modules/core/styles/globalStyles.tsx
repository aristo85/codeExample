import {createGlobalStyle, css} from 'styled-components';

export const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8daec1;
    border-radius: 10px;
    height: 50px !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${({theme}) => theme.font.family.gothicMedium};
  ${scrollbarStyles};
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

button {
  font-family: ${({theme}) => theme.font.family.gothicMedium};
}

body {
  color: rgb(0, 0, 0);
}

a {
  color: inherit;
  text-decoration: none;
}
`;
