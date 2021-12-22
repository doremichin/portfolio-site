import { css } from 'styled-components'

export const screenSm = (styles) => css`
    @media (max-width: 576px) {
      ${styles}
    }
  `
export const screenMd = (styles) => css`
    @media (min-width: 577px) and (max-width: 992px){
      ${styles}
    }
  `
export const screenLg = (styles) => css`
    @media (min-width: 993px) {
      ${styles}
    }
  `
