import ButtonBasic from '@/modules/core/components/Buttons/ButtonBasic';
import styled, {css} from 'styled-components';
import Image from 'next/image';

export const SpecialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1180px;
  width: 100%;
  gap: 48px;
  margin-bottom: 16px;

  ${({theme}) => theme.media.down('md')`
    gap: 32px;
    padding: 0;
    flex-direction: column;
  `}
  ${({theme}) => theme.media.down('md')`
    gap: 16px;
    padding: 0;
  `}
`;

export const SpecialCardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors.default};
  min-width: 280px;
`;

export const SpecialCard = styled.div`
  min-height: 340px;
  position: relative;
  margin-top: 32px;
  cursor: pointer;

  ${({theme}) => theme.media.down('md')`
    min-height: 300px;
    margin-top: 24px;
  `}

  ${({theme}) => theme.media.down('xs')`
    min-height: 260px;
    margin-top: 16px;
  `}
`;

export const SpecialTitle = styled.h2`
  ${({theme}) => css`
    font-family: ${theme.font.family.gothicMedium};
    color: ${theme.colors.default};
    font-weight: ${theme.font.weight.regular};
    font-size: 32px;
    line-height: 36px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    ${theme.media.down('md')`
      font-size: 28px;
      line-height: 1.25;
    `};
    ${theme.media.down('xs')`
      font-size: 20px;
    line-height: 32px;
    `};
  `}
`;

export const SpecialImage = styled(Image)`
  border-radius: 40px;
  object-fit: cover;

  ${({theme}) => theme.media.down('xs')`
    border-radius: 16px;
  `}
`;

export const SpecialBtn = styled(ButtonBasic)`
  width: 174px;
  height: 56px;
  border: 2px solid #1d7abd;
  border-radius: 32px;
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 18px;
  font-family: ${({theme}) => theme.font.family.gothicDemi};

  ${({theme}) => theme.media.down('xs')`
    width: calc(100% - 32px);
    border-radius: 16px;
  `}
`;
