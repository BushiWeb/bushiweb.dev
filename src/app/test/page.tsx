'use client';
import { IconButton } from '@/shared/components/buttons/IconButton/IconButton';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Test() {
    return (
        <main className="relative isolate flex grow flex-col flex-nowrap items-center justify-start overflow-hidden bg-primary-container px-300 py-500 text-primary-on-container tablet:px-500 tablet:py-800 l-desktop:flex-row">
            <IconButton
                icon={faXmark}
                label="Fermer"
                onPress={() => console.log('press')}
            />
        </main>
    );
}
