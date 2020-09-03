import * as React from 'react';
import styled from 'styled-components';
import About from '../components/AboutModule';
import Info from '../components/InfoModule';
import FontSetup from '../components/FontSetupModule';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/rootReducer';
import WebfontModule from '../components/WebfontModule';

const Wrapper = styled.div`
    margin: -8px;
`;

const HomePage = () => {
    const {status, content} = useSelector((state: RootState) => state.activeText);
    return (
        <Wrapper>
            <Info />
            <FontSetup />
            <About />
            {status == 'success' && <WebfontModule>{content}</WebfontModule>}
        </Wrapper>
    );
};

export default HomePage;
