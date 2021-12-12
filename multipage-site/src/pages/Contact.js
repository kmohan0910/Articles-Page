import { useLocation } from "react-router-dom";

export default function Contact() {
    const location = useLocation().search
    console.log(location)
    const queryParam= new URLSearchParams(location)
    const name= queryParam.get("name")   
    return (
        <div>
            <h2>Hey {name} , Contact us here ... </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, quidem! Minus cum ex nobis doloremque esse, officiis, adipisci voluptatibus sed nemo blanditiis, corporis molestias vitae amet provident? Odio, obcaecati architecto.</p>
        </div>
    )
}
