import React from 'react';

import {cleanup, render} from '@testing-library/react';
import AboutModule from '../AboutModule';

describe('AboutModule', () => {
    afterEach(cleanup);
    it('renders correctly when open', () => {
        const {container} = render(<AboutModule open={true} />);
        expect(container.innerHTML).toContain('Variable fonts plugin');
    });

    it('renders correctly when closed', () => {
        const {container} = render(<AboutModule />);
        expect(container.innerHTML).not.toContain('Variable fonts plugin');
    });
});
