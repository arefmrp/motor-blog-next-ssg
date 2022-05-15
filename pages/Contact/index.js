import React, {Component} from 'react';

class Index extends Component {
    render() {
       function getData(){
            const name = document.querySelector('.name-input').value;
            const email = document.querySelector('.email-input').value;
            const phone = document.querySelector('.phone-input').value;
            alert(`name=>${name},email=>${email},phone=>${phone}`)

        }
        return (
            <div className="contact-component">
                <div className="container-main">
                    <div className="contact-section-title">
                        برای ارتباط با ما تماس بگیرید
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-12">
                            <div className="contact-details">
                                <div className="contact-detail-icons">
                                    <ul>
                                        <li><i className="bi bi-phone"></i>09114843775</li>
                                        <li><i className="bi bi-envelope"></i>arefmrp@gmail.com</li>
                                        <li><i className="bi bi-telegram"></i>@motorAlpha</li>
                                    </ul>

                                </div>
                                <form method="post" className="contact-form" onSubmit={getData}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">نام و نام خانوادگی را وارد کنید :</label>
                                        <input type="text" className="form-control name-input" id="name" placeholder="نام و نام خانوادگی"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">ایمیل خود را وارد کنید :</label>
                                        <input type="email" className="form-control email-input" id="email" placeholder="ایمیل خود را وارد کنید"></input>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tel" className="form-label">تلفن همراه خود را وارد کنید :</label>
                                        <input type="number" className="form-control phone-input" id="tel" placeholder="تلفن همراه خود را وارد کنید"></input>
                                    </div>
                                    <button className="btn  contact-btn-cs">ارسال</button>
                                </form>
                            </div>

                        </div>
                        <div className="col-md-7 col-sm-12 col-12">
                            <div className="contact-details">
                                <img src={`/image/m1.jpg`} className='contact-image'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;