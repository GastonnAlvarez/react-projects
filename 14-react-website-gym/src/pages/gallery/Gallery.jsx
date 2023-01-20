import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import Gallery1 from "../../images/gallery1.jpg";
import Gallery2 from "../../images/gallery2.jpg";
import Gallery3 from "../../images/gallery3.jpg";
import Gallery4 from "../../images/gallery4.jpg";
import Gallery5 from "../../images/gallery5.jpg";
import Gallery6 from "../../images/gallery6.jpg";
import Gallery7 from "../../images/gallery7.jpg";
import Gallery8 from "../../images/gallery8.jpg";
import Gallery9 from "../../images/gallery9.jpg";
import Gallery10 from "../../images/gallery10.jpg";
import Gallery11 from "../../images/gallery11.jpg";
import Gallery12 from "../../images/gallery12.jpg";
import Gallery13 from "../../images/gallery13.jpg";
import Gallery14 from "../../images/gallery14.jpg";
import Gallery15 from "../../images/gallery15.jpg";
import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 0; i <= galleryLength; i++) {
    // images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title='OurGallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsam officia culpa adipisci, dolorem at?
      </Header>
      <div className="gallery">
        <div className="container gallery__container">
          <article>
            <img src={Gallery1} alt="gallery" />
          </article>
          <article>
            <img src={Gallery2} alt="gallery" />
          </article>
          <article>
            <img src={Gallery3} alt="gallery" />
          </article>
          <article>
            <img src={Gallery4} alt="gallery" />
          </article>
          <article>
            <img src={Gallery5} alt="gallery" />
          </article>
          <article>
            <img src={Gallery6} alt="gallery" />
          </article>
          <article>
            <img src={Gallery7} alt="gallery" />
          </article>
          <article>
            <img src={Gallery8} alt="gallery" />
          </article>
          <article>
            <img src={Gallery9} alt="gallery" />
          </article>
          <article>
            <img src={Gallery10} alt="gallery" />
          </article>
          <article>
            <img src={Gallery11} alt="gallery" />
          </article>
          <article>
            <img src={Gallery12} alt="gallery" />
          </article>
          <article>
            <img src={Gallery13} alt="gallery" />
          </article>
          <article>
            <img src={Gallery14} alt="gallery" />
          </article>
          <article>
            <img src={Gallery15} alt="gallery" />
          </article>
        </div>
      </div>
    </>
  )
}

export default Gallery