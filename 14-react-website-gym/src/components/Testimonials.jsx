import SectionHead from "./sectionHead"
import { FaQuoteLeft } from 'react-icons/fa';
import Card from "../UI/Card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io';
import { testimonials } from "../data";
import { useState } from "react";

const Testimonials = () => {
    const [index,setIndex] = useState(0);
    const {name,quote,job,avatar} = testimonials[index];

    const prevTestimonialsHandler=()=>{
        setIndex(prev => prev - 1);

        if(index < 0){
            setIndex(testimonials.length -1 );
        }
    };
    const nextTestimonialsHandler=()=>{
        setIndex(prev=> prev +1);

        if(index >= testimonials.length - 1){
            setIndex(0);
        }
    };

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<FaQuoteLeft/>} title='Testimonials' className='testimonials__head' />
            <Card className='testimonial' > 
                <div className="testimonials__avatar">
                    <img src={avatar} alt="Avatar" />
                </div>
                <p className="testimonials__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonials__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={nextTestimonialsHandler}>{<IoIosArrowDropleftCircle/>}</button>
                <button className="testimonials__btn" onClick={prevTestimonialsHandler}>{<IoIosArrowDroprightCircle/>}</button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials