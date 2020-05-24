import React from 'react';

import {cleanup, render} from '@testing-library/react';
import AboutModule from '../AboutModule';

describe('AboutModule', () => {
    afterEach(cleanup);
    it('renders correctly', () => {
        const {container} = render(<AboutModule />);
        expect(container).toContain('Variable fonts plugin');
    });
});
