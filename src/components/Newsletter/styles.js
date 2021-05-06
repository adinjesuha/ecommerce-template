import styled, { keyframes } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import { device } from '../../utils/breakpoints'

const spin =  keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  position: relative;
  width: 100%;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  .dbl-spinner {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: transparent;
    border: 4px solid transparent;
    border-top: 4px solid rgba(255,255,255,.5);
    border-left: 4px solid rgba(255,255,255,.5);
    animation: 2s ${spin} linear infinite;
  }
  .dbl-spinner--2 {
    border: 4px solid transparent;
    border-right: 4px solid #fff;
    border-bottom: 4px solid #fff;
    animation: 1s ${spin} linear infinite;
  }
  @media ${device.mobileL}{
    min-width: 54px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4000;
  background: #fff;
  overflow: auto;
  padding: 0;
  align-items: stretch;
  display: flex;
  justify-content: center;
  visibility: ${props => props.modalOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.modalOpen ? 1 : 0};;
  transition: opacity .3s ease;
  .dialog{
    background: #fff;
    padding: 80px 20px 20px;
    margin: auto;
    max-width: 620px;
    position: relative;
    p {
      color: var(--black);
    }
  }
  /* .btn__wrap{
    display: inline-block;
    border-radius: 2px;
    width: 240px;
    overflow: hidden;
    position: relative;
  } */
  .btn--close{
    background: transparent;
    border: 0;
    width: 64px;
    height: 48px;
    position: absolute;
    top: 16px;
    right: 14px;
    transform: rotate(0deg);
    span{
      background: #111517;
      display: block;
      opacity: 1;
      height: 3px;
      width: 32px;
      position: absolute;
      top: 21px;
      left: 16px;
      transition: .25s ease-in-out,background-color .3s ease-out;
      &:first-child{
        transform: rotate(45deg);
      }
      &:last-child{
        transform: rotate(-45deg);
      }
    }
    &:hover span{
      background: #f53e5b;
    }
  }
  .container{
    margin-right: auto;
    margin-left: auto;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    p{
      font-size: 1.125rem;
      line-height: 2rem;
      font-family: Playfair Display,sans-serif;
      font-weight: 500;
      margin: 1.875rem auto;
      max-width: 580px;
    }
  }
  @media ${device.tablet}{
    background: rgba(0,0,0,.7);
    padding: 40px 0;
    .btn--close{
      top: 0;
      right: -66px;
      span{
        background: #fff;
      }
    }
    .dialog{
      padding: 40px;
      border-radius: 4px;
    }
  }
`