import styled from 'styled-components'

export const HeaderBarNoticeStyled = styled.div`
  width: 100%;
  min-height: 30px;
  background-color: var(--red-brand);
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    .headerNoticeNab-content {
      min-height: 30px;
      width: calc(100% - 80px);
      max-width: 1120px;
      
      text-align: center;
      line-height: 30px;
    }
  }
`  