import Header from "../component/Header";
import NavBar from "../component/NavBar"


const HomePage = () => {
    return (
        <>
      
            <div className="container mt-5 text-center">
                <h1 className="text-4xl text-gray-800">Welcome to LSM!</h1>
                <h4 className="text-xl text-gray-600">A simple LSM application</h4>

               
            </div>
            <div>
                <Header/>
            </div>
        </>

    )
}


export default HomePage;