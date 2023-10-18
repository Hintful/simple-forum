'use client'

import Link from "next/link";

const PostItem = (props) => {
    const post = props.post;

    return (
        <div> { /* required for outer component vertical spacing */ }
            <Link href={`forum/post/${post.id}`} prefetch={false}>
                <div className="border-2 p-4 w-1/2 shadow-sm cursor-pointer hover:bg-gray-200 transition ease-in-out select-none">
                    <text className="font-bold">{ post.title }</text>
                </div>
            </Link>
        </div>
    );
}
 
export default PostItem;