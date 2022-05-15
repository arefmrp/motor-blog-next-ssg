import PostsRequest from "../Requests/PostsRequest";
import PostItemRequest from "../Requests/PostItemRequest";




export async function getPosts(){
    const posts =await fetch("http://localhost:3000/data/posts.json")
    return posts.json()
}


export async function getSelectedPost(id){
    PostItemRequest.get('http://localhost:3000/data/posts.json')
        .then(res=>{
            const dataX = res.data.posts;
            const dataY = dataX.find(item=>item.id===parseInt(id));
            return dataY
            // setItem(prevState =>prevState + prevState.push(dataY))

        })

}