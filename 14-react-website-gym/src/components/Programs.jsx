import { FaCrow } from 'react-icons/fa';
import SectionHead from './sectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import { SiOpenai } from 'react-icons/si';
import { AiFillCaretRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs__container">
                <div className="programs__head">
                    <SectionHead icon={<FaCrow />} title="Programs" />
                </div>
                <div className="programs__wrapper">
                    {
                        programs.map(({ id, title, info, path }) => {
                            return (
                                <Card className="programs__program" key={id}>
                                    <span>{<SiOpenai />}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className="btn sm">Learn More {<AiFillCaretRight />}</Link>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs