import { Wrapper } from './Wrapper';
import { RenderOptions, render } from '@testing-library/react';

/**
 * Wrapper around the Testing Library render function, to automatically add the wrapper.
 * @prop {React.ReactNode} ui - Component to render.
 * @prop {RenderOptions} [options={}] - Options to pass to the Testing Library render function.
 *
 */
const customRender = (ui: React.ReactNode, options: RenderOptions = {}) => {
    return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render, render as tlRender };
