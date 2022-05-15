import React from "react";
import Head from "next/head";
import Link from "next/link"








const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-sm nav-cs">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand">تیم موتورسواری آلفا</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar">
                        <span className=""><i className="bi bi-list"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav me-sm-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link" >خانه</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/About">
                                    <a className="nav-link" >درباره ما</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/Posts">
                                    <a className="nav-link" >پست ها</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/Gallery">
                                    <a className="nav-link" >گالری</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/Contact">
                                    <a className="nav-link" >تماس با ما</a>
                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );

}

export default Header;



