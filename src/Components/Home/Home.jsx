import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    const navigation=useNavigation()
    return (
        <div>
            <Header></Header>
            {
               navigation.state === 'loading' ? <div>
                <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    />
               </div> : <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;