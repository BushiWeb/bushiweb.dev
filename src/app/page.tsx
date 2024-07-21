import { Background } from './_ui/Background';

export default function Home() {
    return (
        <main className="relative isolate flex grow flex-col flex-nowrap items-center justify-start overflow-hidden bg-primary-container px-300 py-500 text-primary-on-container tablet:px-500 tablet:py-800 l-desktop:flex-row">
            <div className="flex w-3/4 flex-col flex-nowrap items-center justify-start gap-500 text-center l-desktop:w-content-l">
                <h1 className="font-display text-l6 font-medium leading-tight">
                    Votre projet mérite un site web à votre image
                </h1>
                <p className="font-primary text-l1 font-normal leading-normal">
                    Développeur web freelance, je vous accompagne dans
                    l$apos;installation de votre présence en ligne avec un site
                    web entièrement personnalisé et optimisé pour le
                    référencement.
                </p>
            </div>
            <Background />
        </main>
    );
}
