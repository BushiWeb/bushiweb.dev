import userEventTL, { Options } from '@testing-library/user-event';
import { act } from '@testing-library/react';

export const userEvent = {
    setup: (options?: Options) => {
        const user = userEventTL.setup(options);

        return {
            tab: async (options?: { shift?: boolean }) => {
                await act(async () => {
                    await user.tab(options);
                });
            },

            keyboard: async (input: string) => {
                await act(async () => {
                    await user.keyboard(input);
                });
            },

            type: async (
                ...args: [
                    Element,
                    string,
                    (
                        | {
                              skipClick?: boolean;
                              skipAutoClose?: boolean;
                              initialSelectionStart?: number;
                              initialSelectionEnd?: number;
                          }
                        | undefined
                    ),
                ]
            ) => {
                await act(async () => {
                    await user.type(...args);
                });
            },

            hover: async (element: Element) => {
                await act(async () => {
                    await user.hover(element);
                });
            },

            unhover: async (element: Element) => {
                await act(async () => {
                    await user.unhover(element);
                });
            },

            click: async (element: Element) => {
                await act(async () => {
                    await user.click(element);
                });
            },

            upload: async (element: HTMLElement, file: File | File[]) => {
                await act(async () => {
                    await user.upload(element, file);
                });
            },
        };
    },
};
