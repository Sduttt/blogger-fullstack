/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import service from "../../appwrite/appwriteConfig"

const PostCard = ({$id, title, featuredImage}) => {
  console.log(featuredImage)
  return (
    <div>
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mv-4">
                    <img src={service.getFile(featuredImage)} alt={title} className="w-full rounded-xl" />
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default PostCard