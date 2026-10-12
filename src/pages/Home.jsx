import Contact from "./Contact";
import FAQ from "./FAQ";
import Funfacts from "./Funfacts";
import Practiceareas from "./PracticeAreas";
import Testimonial from "./Testimonial";

function Home(){
    return(
        <>
            <section
                aria-label="section"
                className="vh-100 no-padding text-light"
                id="section-intro"
                style={{
                    backgroundImage: "url('/images/background/5 (3).jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h3 className="id-color fadeInUp">Need Any Help?</h3>
                                <h1 className="fadeInUp">Best Defense Lawyers</h1>
                                <p className="lead fadeInUp">Our attorneys are committed to
                                    providing unparalleled legal representation and personalized service to our clients.
                                </p>
                                <div className="spacer-20"></div>
                                <a className="btn-custom fadeInUp" href="/contact">Contact
                                    Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt40 pb40 bg-color text-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 mb-sm-30 text-lg-start text-sm-center">
                            <h3 className="no-bottom">Contact Us Now! Get a Free Consultation for Your Case.</h3>
                        </div>
                        <div className="col-md-4 text-lg-end rtl-lg-start text-sm-center">
                            <a href="/contact" className="btn-custom btn-black light">Make Appointment</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;