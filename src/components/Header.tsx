import { type ReactNode } from "react";

type HeaderProps = {
    src: string;
    alt: string;
    children: ReactNode;
};

const Header = (props: HeaderProps) => {
    const { src, alt, children } = props;
    return (
        <header>
            <img src={src} alt={alt} />
            {children}
        </header>
    );
};

export default Header;
