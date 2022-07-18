import styled, { css } from 'styled-components';

export const CardsBlock = styled.div`
  display: flex;
  justify-content: center;
  ${(props) => props.theme.media.down('md')`
    flex-direction: column;
    max-width: 317px;
    margin: auto;
  `}
`;

export const CardFront = styled.div`
  max-width: 317px;
  padding: 21px 18px 54px 19px;
  background: #e8e9ed;
  z-index: 1;
  ${({ theme }) => css`
    border-radius: ${theme.shape.borderRadius.large};
  `}

  img {
    margin-bottom: 27px;
  }

  ${(props) => props.theme.media.down('md')`
    max-width: 280px;
    z-index: 0;
  `}

  ${(props) => props.theme.media.down('sm')`
    width: auto;
  `}
`;

export const CardBaseFieldset = styled.fieldset`
  max-width: 280px;
`;

export const CardBaseLabel = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family.auxiliary};
    font-size: ${theme.font.size.body2};
    color: ${theme.palette.common.black};
  `}
`;

export const CardBaseInput = styled.input`
  height: 29px;
  margin-top: 4px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  ${({ theme }) => css`
    background: ${theme.palette.common.white};
    font-size: ${theme.font.size.body3};
  `}
  &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CardNumber = styled(CardBaseFieldset)`
  margin-top: 25px;

  ${(props) => props.theme.media.down('sm')`
    width: 100%;
  `}
`;

export const CardNumberField = styled(CardBaseInput)`
  width: 280px;
  letter-spacing: 8px;
`;

export const CardGroup = styled(CardsBlock)`
  margin-top: 10px;

  ${(props) => props.theme.media.down('sm')`
    flex-direction: column;
  `}
`;

export const CardExpiryLabel = styled(CardBaseLabel)`
  display: flex;
  flex: 0 0 100%;
`;

export const CardExpiryField = styled(CardBaseInput)`
  width: 45px;
`;

export const CardExpiryDivider = styled.span`
  margin: 0 1px;
`;

export const CardOwner = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-left: 17px;

  ${(props) => props.theme.media.down('md')`
    margin-left: auto;
  `}

  ${(props) => props.theme.media.down('sm')`
    margin-top: 10px;
    margin-left: 0;
  `}
`;

export const CardOwnerField = styled(CardBaseInput)`
  width: 161px;

  ${(props) => props.theme.media.down('sm')`
    width: 100%;
  `}
`;

export const CardOwnerLabel = styled(CardBaseLabel)``;

export const CardBack = styled(CardsBlock)`
  flex-direction: column;
  max-width: 317px;
  margin-left: -167px;
  margin-top: 17px;
  margin-bottom: -17px;
  z-index: 0;

  ${({ theme }) => css`
    background: #b8b9be;
    border-radius: ${theme.shape.borderRadius.large};
  `}

  ${(props) => props.theme.media.down('md')`
    margin-left: 0;
    margin-bottom: 0;
  `}

  ${(props) => props.theme.media.down('sm')`
    min-width: auto;
  `}
`;

export const CardMagniteLine = styled.span`
  height: 53px;
  margin-top: 26px;
  margin-bottom: 23px;
  background-color: #33373f;
`;

export const CardCVV = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 185px;
  padding-right: 17px;
  padding-bottom: 32px;
  text-align: center;

  ${(props) => props.theme.media.down('md')`
    min-width: none;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  `}
`;

export const CardCVVLabel = styled(CardBaseLabel)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.body3};
  `}

  ${(props) => props.theme.media.down('md')`
    padding: 0 33%;
  `}
`;

export const CardCVVField = styled(CardBaseInput)`
  width: 78px;
  margin: 0 auto 9px auto;
  ${({ theme }) => css`
    background: ${theme.palette.common.white};
  `}
`;
