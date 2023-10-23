'use client'

const Write = () => {

    return ( 
        <div>
            <h4>Write Post</h4>
            <form action="/api/writepost" method="POST">
                <input name="title" placeholder="Title"/>
                <input name="content" placeholder="Content"/>
                <button className="border-2 text-sm p-1 rounded-md" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Write;