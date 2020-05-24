import React from 'react';

import {cleanup, render} from '@testing-library/react';
import ModuleWrapper from '../ModuleWrapper';

describe('ModuleWrapper', () => {
    afterEach(cleanup);
    it('renders title correctly when open', () => {
        const {container} = render(<ModuleWrapper title="Test title" open={true} />);
        expect(container.innerHTML).toContain('Test title');
    });

    it('renders title correctly when closed', () => {
        const {container} = render(<ModuleWrapper title="Test title" open={false} />);
        expect(container.innerHTML).toContain('Test title');
    });

    it('renders children correctly when open', () => {
        const {container} = render(
            <ModuleWrapper title="Test title" open={true}>
                CONTENT TEST
            </ModuleWrapper>
        );
        expect(container.innerHTML).toContain('CONTENT TEST');
    });

    it('renders children correctly when closed', () => {
        const {container} = render(
            <ModuleWrapper title="Test title" open={false}>
                CONTENT TEST
            </ModuleWrapper>
        );
        expect(container.innerHTML).not.toContain('CONTENT TEST');
    });
});
