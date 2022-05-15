import React, {Component} from 'react';
import Link from "next/link";

class PostItem extends Component {
    render() {
        return (
            <div>
                <Link href={`/Posts/${this.props.id}`}>
                    <a className="posts-section-item">
                        <img src={`/image/posts/${this.props.pic}`}/>
                        <span className="post-item-title">
                            {this.props.title}
                        </span>
                        <span className="post-item-title">
                            {this.props.date}
                        </span>
                        <span className="post-item-interview">
                            {this.props.interview}
                        </span>
                    </a>
                </Link>
            </div>
        );
    }
}

export default PostItem;
