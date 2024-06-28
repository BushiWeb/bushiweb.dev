import { RenderOptions, render } from '@testing-library/react';
import React from 'react';
import Wrapper from './Wrapper';

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
    return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
