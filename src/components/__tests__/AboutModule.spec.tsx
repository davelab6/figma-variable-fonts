import React from 'react';

import AboutModule from '../AboutModule';
import {render} from '@testing-library/react';

describe('AboutModule', () => {
    it('renders correctly', () => {
        const el = render(<AboutModule />);
        expect(el).toContain('Variable fonts plugin');
    });
});
