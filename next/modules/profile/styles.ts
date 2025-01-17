import styled, {css} from 'styled-components';
import ButtonBasic from '../core/components/Buttons/ButtonBasic';
import InputStyled from '../core/components/inputs/InputStyled';
import Link from 'next/link';

export const ProfileContainer = styled.div`
  display: flex;
  gap: 56px;
  justify-content: space-around;

  ${({theme}) => css`
    ${theme.media.down('md')`
      gap: 24px;
      margin-bottom: 40px;
    `}
    ${theme.media.down('sm')`
      flex-direction: column;
      gap: 24px;
      margin-bottom: 40px;
    `}
  `}
`;

export const FormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  max-width: 757px;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 343px;
  ${({theme}) => css`
    ${theme.media.down('sm')`
      min-width: auto;
    `}
  `}
`;

export const AvaContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-top: 40px;

  ${({theme}) => css`
    ${theme.media.down('md')`
      flex-direction: column;
    `}
  `}
`;

export const Ava = styled.div`
  width: 182px;
  height: 182px;
  border: 2px solid #1d7abd;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AddPhotoTxt = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #1d7abd;
  width: 50%;
`;

export const UserNames = styled.h6`
  font-weight: 400;
  font-size: 34px;
  line-height: 39px;
  color: #222121;

  ${({theme}) => css`
    ${theme.media.down('md')`
      margin-top: 40px;
    `}
  `}
`;

export const Contacts = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  ${({theme}) => css`
    ${theme.media.down('md')`
      flex-direction: column;
    `}
  `}
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Label = styled.h6`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  font-family: ${({theme}) => theme.font.family.gothicMedium};
`;

export const ContactTxt = styled.p`
  font-size: 20px;
  line-height: 23px;
  color: #4f4f4f;
`;

export const Divider = styled.div`
  height: 2px;
  background: #8daec1;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({theme}) => css`
    ${theme.media.down('xs')`
      gap: 24px;
    `}
  `}
`;

export const ActionBtn = styled(ButtonBasic)`
  max-width: 224px;
  white-space: nowrap;
  height: 56px;
  width: 207px;
  font-size: 18px;
`;

export const InfoSection = styled.div`
  max-width: 343px;
  ${({theme}) => css`
    ${theme.media.down('xs')`
      max-width: none;
    `}
  `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

export const TxtBtn = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  text-align: left;
  color: #1d7abd;
  cursor: pointer;
  border: none;
  background: transparent;
`;

export const EditBtnWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 32px;
`;

export const Input = styled(InputStyled)`
  .inputwrapper {
    border-width: 2px;
  }
`;

export const ProfileStyledLink = styled(Link)`
  border-radius: 16px;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  ${({theme}) => css`
    border: 2px solid #8daec1;
    color: ${theme.colors.default};
  `}

  &:active {
    background: ${props => props.theme.colors.primary};
    color: #ffffff;
  }
`;

export const ProfileStyledLinkText = styled.h4`
  ${({theme}) => css`
    color: inherit;
    font-size: ${theme.font.size.subtitle2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
  `}
`;

export const BookedTitleText = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.heading2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
  `}
`;

export const CheckingContractErrorMessageBlock = styled.div`
  width: 100%;
  background: #feb6c0;
  border-radius: 16px;
  border: 2px solid #8daec1;
  padding: 16px;
`;

export const CheckingContractErrorMessage = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular};
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
  `}
`;
