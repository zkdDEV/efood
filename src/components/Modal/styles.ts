import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: ${colors.red};
    padding: 8px;
    height: 344px;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
`

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding: 8px 24px 24px 24px;
  height: 312px;
  color: ${colors.white};

  img {
    object-fit: cover;
    width: 280px;
  }

  div {
    padding-left: 24px;

    h3 {
      font-size: 18px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      padding: 16px 0;
    }
  }
`

export const AddButton = styled.button`
  padding: 4px 6px;
  background-color: ${colors.white};
  color: ${colors.red};
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
