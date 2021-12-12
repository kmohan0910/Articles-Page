import { useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
export default function Article() {
    const {id} = useParams();
    const history= useNavigate()
    const url= "http://localhost:3000/articles/"+ id
    const {data : article, isPending , error} = useFetch(url)
   useEffect(()=>{
       if (error){
        //    history.goBack();
      setTimeout(()=>{
        history("/")
      },2000)

       }
   },[error, history])
    return (
        <div>
            {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {
            article&& <div>
                <h1>{article.title}</h1>
                <p>By {article.author}</p>
                <p>{article.body}</p>
                </div>
        }
        </div>
    )
}
