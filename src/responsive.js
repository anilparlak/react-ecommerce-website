import { css } from "styled-components";

export const tablet = (props) => {
  return css` 
    @media only screen and (max-width: 1024px){
      ${props}
    }

  `
}
export const iPad = (props) => {
  return css` 
    @media only screen and (max-width: 960px){
      ${props}
    }

  `
}

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 590px) {
      ${props}
    }
  `;
};


