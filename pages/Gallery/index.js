import React, {Component} from 'react';
import Link from "next/link";
import GalleryItem from "../../Components/GalleryItem";
import GalleryRequest from "../../Requests/GalleryRequest";
import {getGalleryItems} from "../../lib/gallery";


// class Index extends Component {
//     state = {
//         gallery:[]
//
//     }
//     componentDidMount() {
//         const http = GalleryRequest.get('http://localhost:3000/data/gallery.json');
//         http.then(res=>{
//             const dataX = res.data;
//             this.setState({
//                 gallery:dataX.gallery,
//             })
//         })
//
//     }
//
//     render() {
//         return (
//             <div className="gallery-component">
//                 <div className="container-main">
//                     <div className="gallery-section-title">گالری</div>
//                     <div className="row">
//
//
//                         {
//                             this.state.gallery.map(item=>(<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={item.id}>
//
//                                 <GalleryItem id={item.id} pic={item.pic} features={item.features}></GalleryItem>
//
//                             </div>))
//                         }
//
//
//
//                     </div>
//
//                 </div>
//
//             </div>
//         );
//     }
// }


const Index = (props) => {
    const dataZ = props.allItems;
    return (
        <div className="gallery-component">
            <div className="container-main">
                <div className="gallery-section-title">گالری</div>
                <div className="row">


                    {
                        dataZ.gallery.map(item=>(<div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={item.id}>

                            <GalleryItem id={item.id} pic={item.pic} features={item.features}></GalleryItem>

                        </div>))
                    }



                </div>

            </div>

        </div>
    );

};
export async function getStaticProps(props){
    const allItems = await getGalleryItems()
    return {
        props:{
            allItems
        }
    }
}

export default Index;