import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext.tsx";

export default function Header() {


    const { user, logout } = useAuth();

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">Accueil</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {user ? (
                            <>
                                <li>
                                    <Link to="/users">Utilisateurs</Link>
                                </li>
                            </>
                        ) : null}
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <span className="mr-3">Bienvenu, {user.email}</span>
                            <button onClick={logout} className="btn btn-secondary">Déconnexion</button>
                        </>
                    ) : (
                        <>
                            <Link to="/connexion" className="btn btn-primary mr-3">Connexion</Link>
                            <Link to="/inscription" className="btn btn-secondary">Inscription</Link>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}