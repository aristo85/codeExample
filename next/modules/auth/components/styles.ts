import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
  padding-right: 5px;
  margin-right: -10px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8daec1;
    border-radius: 10px;
    height: 50px !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const ModalTitle = styled.h4`
  font-size: 24px;
  line-height: 27px;
  color: #222121;
  text-align: center;
  margin-bottom: 24px;
  ${({theme}) => theme.media.down('sm')`
  text-align: left;
  margin-bottom: 16px;
  `}
`;

export const ConfirmBtn = styled(ButtonBasic)`
  margin: 10px 0;
  width: 100%;
  min-height: 63px;
  cursor: pointer;
  ${({theme}) => theme.media.down('sm')`
  height: 59px;
  min-height: 59px;
  font-size: 20px;
  line-height: 22px;
  padding: 0px;
  margin-top: 50px;
  `}
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-top: 10px;
  align-items: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  ${({theme}) => theme.media.down('xs')`
    width: 80%;
    gap: 10px;
  `}
`;

export const FooterTxt = styled.h6`
  font-size: 22px;
  line-height: 25px;
  color: #222121;
  ${({theme}) => theme.media.down('sm')`
  font-size: 16px;
  line-height: 18px;
  `}
`;

export const FooterLink = styled.h6`
  font-size: 22px;
  line-height: 25px;
  color: #1d7abd;
  border-bottom: 3px solid #1d7abd;
  padding-bottom: 5px;
  cursor: pointer;
  ${({theme}) => theme.media.down('sm')`
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 5px;
  `}
`;

export const BackBtn = styled(ArrowBackIosIcon)`
  position: absolute;
  top: 35px;
  left: 35px;
  color: #1d7abd;
  font-size: 24px;
  cursor: pointer;
`;

export const RecoverySucceedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const RecoverySucceedTxt = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: #222121;
  text-align: center;
  ${({theme}) => theme.media.down('sm')`
  text-align: left;
  margin-bottom: 16px;
  `}
`;

export const RecoverySucceedEmail = styled.h6`
  font-size: 20px;
  line-height: 23px;
  color: #222121;
  text-align: center;
  ${({theme}) => theme.media.down('sm')`
  text-align: left;
  `}
`;

export const RegOptionContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  ${({theme}) => theme.media.down('sm')`
  flex-direction: column;
  `}
`;

export const RegOptionBtn = styled(ButtonBasic)`
  width: 270px;
  height: 63px;
  cursor: pointer;
  ${({theme}) => theme.media.down('sm')`
  font-size: 20px;
  line-height: 23px;
  padding: 0px;
  width: 100%;
  height: 59px;
  `}
`;

export const CondTxt = styled.p`
  font-size: 16px;
  line-height: 18px;
  ${({theme}) => theme.media.down('sm')`
  font-size: 14px;
  line-height: 16px;
  `}
`;

export const CondLink = styled.a`
  color: #1d7abd;
`;

export const SucceedTxt = styled.p`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  ${({theme}) => theme.media.down('sm')`
    text-align: start;
  `}
`;

export const ConfirmEamilSuccessBtn = styled(ButtonBasic)`
  margin: 10px 0;
  width: 100%;
  min-height: 63px;
  margin-top: 24px;
  cursor: pointer;
  ${({theme}) => theme.media.down('sm')`
  height: 59px;
  min-height: 59px;
  font-size: 20px;
  line-height: 22px;
  padding: 0px;
  margin-top: 50px;
  `}
`;

export const RegFormSentTxt = styled.p`
  font-size: 16px;
  line-height: 18px;
`;

export const RegPartnerTxt = styled.p`
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin: -10px 0 10px 0;
`;

export const RegFormSentEmail = styled.span`
  color: ${prosps => prosps.theme.colors.primary};
`;
