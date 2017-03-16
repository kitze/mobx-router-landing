import styled from 'styled-components';
import flex from 'styles/flex';
import colors from 'styles/colors';

//styled-components
import {Page} from 'styles/styled-components/page-styled-components';

//components
import Icon from 'react-fontawesome';

export const Home = styled(Page)``;

export const Main = styled.div`
  background-color: ${colors.darkGrayish};
  height: 100vh;
  position: relative;
  
  ${flex.vertical}
  ${flex.centerVertical}
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  ${flex.vertical}
  ${flex.centerVertical}
`;

export const Title = styled.div`
  color: white;
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 10px;
  padding: 40px 0;
  text-shadow: 1px 1px 1px ${colors.darkGrayish};
`;

export const Subtitle = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 50px;
`;

export const Links = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalV}
`;

export const GithubIcon = styled(Icon)`
  color: #365d6f;
  font-size: 25px !important;
  margin-right: 10px;
`;

export const Link = styled.a`
  font-weight: 300;
  font-size: 18px;
  width: ${p => p.size === 'small' ? 130 : 180}px;
  height: 50px;
  cursor: pointer;
  color: ${colors.darkGrayish};
  border-radius: 3px;
  background-color: white;
  border: none;
  outline: none;
  transition: all 150ms linear;
  position: relative;
  margin-right: 15px;
  ${flex.horizontal}
  ${flex.centerHorizontal}
  text-decoration: none;
  
  &:hover {
    background-color: #e6e6e6;
  }
`;