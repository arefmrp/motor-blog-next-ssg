import React, {Component} from 'react';
import Head from "next/head";
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer-component">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 ">
                            <div className="footer-component-div">
                                <span className="footer-component-div-title">صفحات</span>
                                <ul>
                                    <li><Link href="/"><a className="footer-links"><i className='bi bi-circle'></i>درباره ما</a></Link></li>
                                    <li><Link href="/Contact"><a className="footer-links"><i className='bi bi-circle'></i>ارتباط با ما</a></Link></li>
                                    <li><Link href="/Gallery"><a className="footer-links"><i className='bi bi-circle'></i>گالری</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 ">
                            <div className="footer-component-div">
                                <span className="footer-component-div-title">پشتیبانی</span>
                                <ul>
                                    <li><Link href="/"><a className="footer-links"><i className='bi bi-envelope'></i>درباره ما</a></Link></li>
                                    <li><Link href="/Contact"><a className="footer-links"><i className='bi bi-phone'></i>ارتباط با ما</a></Link></li>
                                    <li><Link href="/Gallery"><a className="footer-links"><i className='bi bi-heart'></i>گالری</a></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 ">
                        <div className="footer-component-div">
                            <span className="footer-component-div-title">دنبال کنید</span>
                            <ul>
                                <li><a className="footer-links"><i className='bi bi-instagram'></i>اینستاگرام</a></li>
                                <li><a className="footer-links"><i className='bi bi-twitter'></i>توییتر</a></li>
                                <li><a className="footer-links"><i className='bi bi-telegram'></i>تلگرام</a></li>
                            </ul>
                        </div>
                    </div>
                        <div className="col-lg-3 col-sm-6 col-12 ">
                            <div className="footer-component-div">
                                <span className="footer-component-div-title">تیم آلفا </span>
                                <ul>
                                    <li>
                                        <span className="footer-links">
                                            استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>






            </div>
                <div className="footer-info">
                    <span>
                        طراحی شده با <i className="bi bi-heart-fill"></i> توسط <a>َAREFMRP</a>
                    </span>

                </div>
                </>
        );
    }
}

export default Footer;