import Title from "../Components/Title";

export default function Home() {
  return (
      <div className='parent-component'>
        <div className="container-main">
            <div className="slider-section">
                <div id="demo" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={`/image/m4.jpg`} alt="m1" className="d-block w-100 "></img>
                        </div>
                        <div className="carousel-item">
                            <img src={`/image/m10.jpg`} alt="m2" className="d-block w-100 "></img>
                        </div>
                        <div className="carousel-item">
                            <img src={`/image/m3.jpg`} alt="m3" className="d-block w-100 "></img>
                        </div>
                    </div>

                </div>
            </div>
            <div className="award-section">
                <div className="container">
                    <Title title="قهرمانی ها" desc="لیستی کوتاه از قهرمانی هایمان در مسابقات کشوری از سال 80"></Title>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="award-item">
                                <span><i className="bi bi-award-fill"></i></span>
                                <span>مسابقات جشنواره اردیبهشت</span>
                                <span>سال 85</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="award-item">
                                <span><i className="bi bi-award"></i></span>
                                <span>مسابقات انتخابی تیم ملی</span>
                                <span>سال 86</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="award-item">
                                <span><i className="bi bi-award-fill"></i></span>
                                <span>مسابقات انتخابی استانی</span>
                                <span>سال 85</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="award-item">
                                <span><i className="bi bi-award"></i></span>
                                <span>مسابقات انتخابی تیم ملی</span>
                                <span>سال 89</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="interview-section">
                <div className="container">
                    <Title title="درباره ما" desc="کمی در مورد تیم ما بدانید و مارا بهتر بشناسید"></Title>
                    <div className="row">
                      <div className="col-12">
                          <p className="interview-desc">
                              بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                          </p>
                          <p className="interview-desc">
                              بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                          </p>
                      </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

  )
}
