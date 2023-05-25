import Phone from './Phone/Phone';
import Price from './Price/Price';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Page = () => (
    <>
        <div className="wrapper">
            <Header />
            <Carousel />
            <Phone />
            <Price />
            <Footer />
        </div>
    </>
);

export default Page;
