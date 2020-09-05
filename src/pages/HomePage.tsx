import * as React from 'react';
import styled from 'styled-components';
import About from '../components/AboutModule';
import Info from '../components/InfoModule';
import FontSetup from '../components/FontSetupModule';
import {useSelector} from 'react-redux';
import {RootState} from '../store/rootReducer';
import WebfontModule from '../components/WebfontModule';
import AxesModule from '../components/AxesModule';
import CanvasActions from '../components/CanvasActions';

const Wrapper = styled.div`
    margin: -8px;
`;

const HomePage = () => {
    const {status, content} = useSelector((state: RootState) => state.activeText);
    return (
        <Wrapper>
            <Info />
            <FontSetup />
            <AxesModule />
            <CanvasActions />
            {status == 'success' ? <WebfontModule>{content}</WebfontModule> : <>Select a single text node</>}
            <About />
        </Wrapper>
    );
};

export default HomePage;
