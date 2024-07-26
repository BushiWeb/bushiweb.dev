import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { navigationContext } from './Navigation';
import { IconButton } from '@/shared/components/buttons/IconButton/IconButton';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import clsx from 'clsx';
import {
    Dialog,
    DialogTrigger,
    Modal,
    ModalOverlay,
} from 'react-aria-components';
import { FAB } from '@/shared/components/buttons/FAB/FAB';
import { SocialLinks } from '@/shared/components/SocialLinks/SocialLinks';

/**
 * Drawer navigation, pops up from the bottom of the screen to save space.
 * Triggered by a FAB.
 */
export const NavigtationDrawer = () => {
    const navigationLinks = useContext(navigationContext);
    const pathName = usePathname();

    return (
        <DialogTrigger>
            <FAB icon={faBars} label="Ouvrir le tiroir de navigation" />
            <ModalOverlay
                className="items center fixed inset-0 z-backdrop bg-black/35 backdrop-blur-sm"
                isDismissable
            >
                <Modal className="fixed bottom-0 left-0 right-0 rounded-t-500 bg-surface-layer4 tablet:right-auto tablet:top-0 tablet:rounded-none tablet:rounded-r-500">
                    <Dialog className="relative outline-none">
                        {({ close }) => (
                            <nav className="flew-nowrap flex flex-col content-start items-center justify-between gap-400 p-400 text-primary-on-container tablet:pb-800 tablet:pl-600 tablet:pr-1000 tablet:pt-1000">
                                <IconButton
                                    icon={faXmark}
                                    label="Fermer la tiroir de navigation"
                                    onPress={close}
                                    className="!absolute left-300 top-300 tablet:left-auto tablet:right-300"
                                />
                                <ul className="flex flex-col flex-nowrap items-center justify-start gap-300 tablet:items-start">
                                    {navigationLinks.map(({ label, to }) => (
                                        <li key={label}>
                                            <Link
                                                href={to}
                                                className={clsx(
                                                    'text-m font-primary font-semibold leading-tight',
                                                    'active:text-surface-on',
                                                    'focus-visible:focus-ring',
                                                    'hover:text-surface-on hover:underline hover:decoration-[15%] hover:underline-offset-8',
                                                    {
                                                        'text-surface-on':
                                                            to === pathName,
                                                    },
                                                )}
                                                onClick={close}
                                                onTouchEnd={close}
                                            >
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <SocialLinks />
                            </nav>
                        )}
                    </Dialog>
                </Modal>
            </ModalOverlay>
        </DialogTrigger>
    );
};
