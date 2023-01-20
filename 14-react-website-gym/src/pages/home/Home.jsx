import Testimonials from '../../components/Testimonials';
import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Values from '../../components/Values';
import './home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </>

  )
}

export default Home