import styled from 'styled-components';
import { Link } from 'react-router-dom';
// types
import type { Elevation } from 'styles/theme.types';

export const HeaderBasic = styled.header<{ elevation: Elevation }>`
  position: fixed;
  width: 100%;
  padding: 15px 0;
  z-index: 1;
  background: ${({ theme }) => theme.palette.common.white};

  ${({ elevation, theme }) => theme.elevation[elevation]}

  ${(props) => props.theme.media.down('md')`
    padding-top: 15px;
    padding-bottom: 0;
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.theme.media.down('md')`
    flex-direction: column;
    align-items: flex-start; 
  `}
`;
export const HeaderLogo = styled.div`
  width: 165px;
  height: 40px;
  margin-left: 40px;
  overflow: hidden;

  ${(props) => props.theme.media.down('md')`
    margin: 0 auto;
    padding-bottom: 15px;
    padding-left: 20px;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    text-align: center;
  `}
  ${(props) => props.theme.media.down('sm')`
    text-align: left;
  `}
`;

export const HeaderLogoLink = styled(Link)`
  display: block;

  ${(props) => props.theme.media.down('md')`
   display: inline-flex;
   max-width: 165px;
   margin: 0 auto;
  `}
`;

export const HeaderLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;
