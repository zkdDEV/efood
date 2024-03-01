import styled from 'styled-components'
import { colors } from '../../styles'

export const Section = styled.section`
  padding-top: 56px;
  padding-bottom: 120px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    overflow: auto;
  }
`
export const Content = styled.div`
  padding: 8px;
  margin: 0;
  background-color: ${colors.red};
  color: ${colors.lightYellow};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      img {
        padding-bottom: 2px;
      }
    }
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 16px 0;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

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
    background-color: rgba(0, 0, 0, 0.8);
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
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${colors.white};
  color: ${colors.red};
  font-weight: bold;
  border: none;
  cursor: pointer;
`
export const AboutButton = styled(AddButton)`
  width: 100%;
  color: ${colors.red};
  background-color: ${colors.lightYellow};
  padding: 4px 0;
`
