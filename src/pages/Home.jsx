import { useState, useEffect } from 'react'
import service from '../appwrite/appwriteConfig'
import { Container, PostCard } from '../components/index'

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])

    if (posts.length == 0) {
        return (
            <div className="py-8">
                <Container>
                    <h1 className="text-2xl font-bold">No posts yet</h1>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="w-full py-8">
                <Container>
                    {
                        posts.map((post, index) => (
                            <div key={index}  className="p-2 w-1/4">
                                <PostCard post={post} />
                            </div>
                        ))
                    }
                </Container>
            </div>
        )
    }
}

export default Home