import styled from 'styled-components'

export const BreadcrumbsWrapper = styled.div`
  margin: 0 auto 20px;
  padding: 10px 0;
  > span {
    color: #666;
    font-size: 14px;
    margin-right: 10px;
    > span {
      margin-right: 10px;
    }
    > a {
      text-decoration: none;
      color: inherit;
      position: relative;
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px dashed #bbb;
        transition: border .12s ease-out;
      }
      &:hover{
        color: var(--red-brand);
      }
    }
  }
`