/* Background graphics for the home page */
export default function Background() {
    return (
        <>
            <svg
                width="540"
                height="539"
                viewBox="0 0 540 539"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="background-shape top-shape"
            >
                <path
                    d="
                        M 0.141789 0.691198
                        L 539.986 57.5046
                        C 252.635 181.577 145.774, 289.425 35.2 538.267
                        L 0.141789 0.691198
                        Z
                    "
                />
            </svg>
            <svg
                width="790"
                height="641"
                viewBox="0 0 790 641"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="background-shape bottom-shape"
            >
                <path
                    d="
                        M 631.084 640.294
                        L 0.170658 490.309
                        C 485.884 485.522 672.367 83.0778 767.112 6.22528
                        C 861.857 -70.6272 631.084 640.294 631.084 640.294
                        Z
                    "
                />
            </svg>
        </>
    );
}
