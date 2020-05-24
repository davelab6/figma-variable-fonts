import * as React from 'react';
import ModuleWrapper from './ModuleWrapper';

const AboutModule = (props: {open?: boolean}) => (
    <ModuleWrapper title="About" open={props.open}>
        Variable fonts plugin is developed by Leonard Bogdonoff 2020-present. The variable fonts rendering engine is
        based on Samsa.js by Laurence Penney.
        <ul>
            <li>
                <a href="https://github.com/rememberlenny/figma-variable-fonts">GitHub repository</a>
            </li>
            <li>
                <a href="https://twitter.com/rememberlenny">@rememberlenny</a> updates via Twitter
            </li>
        </ul>
    </ModuleWrapper>
);

export default AboutModule;
