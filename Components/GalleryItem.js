import React, {Component} from 'react';

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id={`myModal${this.props.id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">


                            <div className="modal-header">

                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>


                            <div className="modal-body">
                                <img src={`/image/${this.props.pic}`} className="modal-image"></img>
                            </div>


                            <div className="modal-footer">
                                <ul className="modal-list-desc">

                                    {
                                        this.props.features.map(item=>(<li key={item.key}><i className="bi bi-circle-fill"></i>{item}</li>))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <a className="gallery-section-item" data-bs-toggle="modal" data-bs-target={`#myModal${this.props.id}`}>
                    <img src={`/image/${this.props.pic}`}/>
                </a>
            </div>
        );
    }
}

export default GalleryItem;