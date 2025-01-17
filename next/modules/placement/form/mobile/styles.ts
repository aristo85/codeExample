import styled from 'styled-components';
import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';

export const RoomInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding-bottom: 16px;
  border-bottom: 2px solid #c6e1f3;
  margin: 16px 0 0;
`;

export const ModalRoomContent = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 46px 16px 100px;
`;

export const ModalRoomButton = styled(ButtonBasic)`
  position: fixed;
  width: 90%;
  align-self: center;
  bottom: 20px;
`;

export const ModalRoomTitle = styled.h2`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.subtitle1};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const MobileButton = styled(ButtonBasic)`
  align-self: center;
`;

export const MobileButtonBlock = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export const ConfirmTitle = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const ConfirmValue = styled.h3`
  ${({theme}) => `
    color: #4F4F4F;
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;

export const ConfirmFormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BookingStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CurrentStep = styled.h2`
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: flex-end;
  color: #222121;
`;

export const StepsContainer = styled.h2`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-top: -8px;
`;

interface StepProps {
  currentStep?: boolean;
}
export const Step = styled.h2<StepProps>`
  font-weight: 400;
  font-size: 20px;
  color: ${props =>
    props.currentStep ? props.theme.colors.default : '#8daec1'};
`;

export const StepDescription = styled.h3`
  ${({theme}) => `
    color: ${theme.colors.default};
    font-size: ${theme.font.size.body2};
    font-weight: ${theme.font.weight.regular}
  `};
`;
