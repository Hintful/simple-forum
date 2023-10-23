'use client'
import { useRouter } from "next/navigation"

const WriteSuccess = () => {
    const router = useRouter();

    return ( 
        <div>
            <h4>Post Write successful!</h4>
            <button onClick={() => { router.push('/forum') }}>Return to forum</button>
        </div>
     );
}
 
export default WriteSuccess;