import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import './about.css';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae libero voluptas tempora? Laboriosam ad totam distinctio pariatur. Quis, eos!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi corrupti, earum consequatur vero non enim excepturi distinctio aperiam. Facilis nobis odit deserunt maiores necessitatibus, iste quam velit praesentium reiciendis.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum hic, ea esse quos magni ullam omnis, nobis facere incidunt exercitationem dolorum. Unde nulla, qui architecto possimus doloremque dolorum ex magni?
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, amet? Dolorem ea eaque facere ipsam eveniet nostrum quibusdam molestias necessitatibus!</p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi corrupti, earum consequatur vero non enim excepturi distinctio aperiam. Facilis nobis odit deserunt maiores necessitatibus, iste quam velit praesentium reiciendis.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum hic, ea esse quos magni ullam omnis, nobis facere incidunt exercitationem dolorum. Unde nulla, qui architecto possimus doloremque dolorum ex magni?
            </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, amet? Dolorem ea eaque facere ipsam eveniet nostrum quibusdam molestias necessitatibus!</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Vision Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi corrupti, earum consequatur vero non enim excepturi distinctio aperiam. Facilis nobis odit deserunt maiores necessitatibus, iste quam velit praesentium reiciendis.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum hic, ea esse quos magni ullam omnis, nobis facere incidunt exercitationem dolorum. Unde nulla, qui architecto possimus doloremque dolorum ex magni?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About