import { NavLink } from "react-router";

const Header = () => {

    return (
        <header className="flex justify-between items-center px-[60px] py-4">
            <h1>LOGO</h1>
            <nav className="flex gap-4">
                <NavLink
                    to={'/'}
                    className={'[&.active]:text-pink-600 [&.active]:font-bold'}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/sobre'}
                    className={'[&.active]:text-pink-600 [&.active]:font-bold'}
                >
                    Sobre
                </NavLink>
                <NavLink
                    to={'/produtos'}
                    className={'[&.active]:text-pink-600 [&.active]:font-bold'}
                >
                    Produtos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;