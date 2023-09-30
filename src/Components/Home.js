import { Link } from "react-router-dom";

 function Home (){
    
    return(
       <div>
        <h1>Home</h1>
        <Link to='/quiz'>Go to Quiz</Link>
        </div>
    );
};

export default Home;