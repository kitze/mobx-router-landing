import styled from 'styled-components';
import flex from 'styles/flex';

export const Page = styled.div`
    ${flex.vertical}
    flex: 1;
    min-width: 100%;
    position: relative;
`;

export const Wrapper = styled.div`
    max-width: 1020px;
    margin: auto;
    width: 100%;
    padding: 0 30px;
`;