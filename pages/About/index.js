import React, {Component} from 'react';
import Slider from "../../Components/slider";

class Index extends Component {
    render() {
        return (
            <div className="about-component">
                <div className="container">
                    <div className="slider-section">

                        <div id="demo" className="carousel slide" data-bs-ride="carousel">


                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>


                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-item-text">
                                        <p>
                                            <i className="bi bi-circle-fill"></i>
                                            به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                            <i className="bi bi-circle-fill"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-item-text">
                                        <p>

                                            <i className="bi bi-circle-fill"></i>
                                            به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                            <i className="bi bi-circle-fill"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-item-text">
                                        <p>
                                            <i className="bi bi-circle-fill"></i>
                                            به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                            <i className="bi bi-circle-fill"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="swiper-section">
                       <Slider></Slider>
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;