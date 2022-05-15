import React, {Component, useEffect, useState} from 'react';
import PostItem from "../../Components/PostItem";
import PostRequest from "../../Requests/PostsRequest";
import {getPosts} from "../../lib/posts";


const Index = (props)=>{
    console.log(props)

    const data = props.allPosts

    return(
        <div className="post-component">
            <div className="container">
                <div className="posts-section-title">پست ها</div>
                <div className="row">
                    {
                        data ?
                            data.posts.map(item=>(
                            <div className="col-md-6 col-sm-12 col-12 mb-3" key={item.id}>
                                <PostItem id={item.id} title={item.title} pic={item.pic} date={item.date} interview={item.interview}></PostItem>
                            </div>
                        ))
                            :null
                    }
                </div>

            </div>

        </div>
    )
}
export async function getStaticPath(props){
    let data;
    return{
        props:{
            data,
            fallback:true
        }
    }

}
export async function getStaticProps(props){
    const allPosts = await getPosts();
    console.log('generate')



    return{
        props: {
            allPosts
        }
    }

}
export default Index;