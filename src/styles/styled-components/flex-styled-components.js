import flex from 'styles/flex';
import styled from 'styled-components';

export const Horizontal = styled.div`
    ${flex.horizontal}
    ${props => props['center'] && flex.centerHorizontal}
    ${props => props['center-h'] && flex.centerHorizontalH}
    ${props => props['center-v'] && flex.centerHorizontalV}
    ${props => props['wrap'] && flex.wrap}
    ${props => props['space-around'] && flex.spaceAround}
    ${props => props['space-between'] && flex.spaceBetween}
`;

export const Vertical = styled.div`
    ${flex.vertical}
    ${props => props['center'] && flex.centerVertical}
    ${props => props['center-h'] && flex.centerVerticalH}
    ${props => props['center-v'] && flex.centerVerticalV}
    ${props => props['wrap'] && flex.wrap}
    ${props => props['space-around'] && flex.spaceAround}
    ${props => props['space-between'] && flex.spaceBetween}
`;