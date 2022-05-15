import React , {useState,useEffect} from 'react';
import {useRouter} from "next/router";
import {getSelectedPost,getPosts} from "../../lib/posts";




const Pitem = (props) => {
  const router = useRouter().query.Pitem;
  //  const [items,setItem] = useState([]);
  //  const dataZ = items;

    // useEffect(()=>{
    //    PostItemRequest.get('http://localhost:3000/data/posts.json')
    //        .then(res=>{
    //            const dataX = res.data.posts;
    //            const dataY = dataX.find(item=>item.id===parseInt(router));
    //            setItem(dataY)
    //           // setItem(prevState =>prevState + prevState.push(dataY))
    //            console.log(items)
    //        })
    //
    // },[])
   const dataZ = props.allPosts.posts.find(item=>item.id === parseInt(router));
   console.log(dataZ)
    return (

            <div className="container-main">
                <div className="postDesc-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 col-sm-6 col-12">
                            <img src={`/image/posts/${dataZ.pic}`} className="postDesc-image"></img>
                        </div>
                        <div className="col-lg-6 col-md-7 col-sm-6 col-12">
                          <div className='postDesc-Description'>
                              <div className='postDesc-Description-row1'>
                                  <span>{dataZ.title}</span>
                                  <span>{dataZ.date}</span>
                              </div>
                              <div className='postDesc-Description-row2'>
                                  <span>
                                      {dataZ.interview}
                                  </span>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                            <p className='postDesc-text1'>
                                بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                                بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                            </p>
                            <p className='postDesc-text2'>
                                {dataZ.description}
                            </p>
                        </div>

                    </div>
                </div>



            </div>
    );
};
export async function getServerSideProps(props){
    const allPosts = await getPosts();


    return{
        props:{
           allPosts
        }
    }
}

    export default Pitem;