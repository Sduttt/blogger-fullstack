import { useState } from "react"
import service from "../appwrite/appwriteConfig"
import { Container, PostCard } from "../components/index"


const AllPosts = () => {
    const [posts, setPosts] = useState([])



    service.getPosts([])
        .then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })


    return (
        <div className="py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => {
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts