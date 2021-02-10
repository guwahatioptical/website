import React,{useState} from 'react'
import "../css/mainpage.css"
import logo from "../images/logo_.png"

function Navbar(){
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };
    const [shadow, setShadow] = useState(false)
    const checkShadow = () =>{
        if (!shadow && window.pageYOffset > 1){
            setShadow(true)    
         } else if (shadow && window.pageYOffset <= 1){
            setShadow(false)    
         }  
    }
    window.addEventListener('scroll', checkShadow)
    return(
        <div className="navbar" style={{boxShadow: shadow?'#dbdbdb 0vh 0vh 3vh':'none'}}>
            <div><img onClick={scrollTop} src={logo} alt="brand logo" /></div>
            <div className="links">
                <div className="nav_link">About Us</div>
                <div className="nav_link">Customer Reviews</div>
                <div className="nav_link">Our Products</div>
                <div className="nav_link">Contact Us</div>
                <div className="nav_link">Opening Hours</div>
                <div className="nav_link">Locate Us</div>
            </div>
        </div>
    )
}

function MainPage() {
    const tag = ['C','O','M','I','N','G','S','O','O','N','.','.','.']
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }
    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      }
          return (
        <div className="mainpage-body">
            <Navbar />
            <div className="cms">
            {//tag.map((char,index)=><p key={index} style={{animationDelay:`${index/20}s`}} className="fadeIn">{char}</p>)
            }
            <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={e=>setMessage(e.target.value)} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
            </div>
        </div>
    )
}

export default MainPage
