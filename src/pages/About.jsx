function About (){
    return(
        <>
            <section id="section-about" className="relative text-light" style={{ backgroundColor: '#111111' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <span className="p-title">Welcome</span><br/>
                            <h2>
                                Reputation.<br/>Respect. Result.
                            </h2>
                            <div className="small-border sm-left"></div>
                        </div>
                        <div className="col-md-8">
                            <p>We understand that legal issues can be some of the most challenging and stressful experiences in life. Whether you are dealing with a complex family matter, facing criminal charges, or navigating the intricacies of business law, our mission is to provide you with comprehensive, compassionate, and expert legal guidance. Our seasoned attorneys are committed to the highest standard of legal representation tailored to meet your unique needs.
                            </p>
                        </div>
                    </div>
                    <div className="spacer-double"></div>
                </div>
            </section>
                <section style={{ backgroundColor: '#f2f2f2' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-7">
                            <span className="p-title">Experiences</span><br/>
                            <h2>
                                Let Our Experience<br/>be Your Guide
                            </h2>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home"
                                        role="tab" aria-controls="pills-home" aria-selected="true">Our Attorneys</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile"
                                        role="tab" aria-controls="pills-profile" aria-selected="false">Our Expertise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact"
                                        role="tab" aria-controls="pills-contact" aria-selected="false">Our Firm</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">
                                    <p>Our attorneys are the cornerstone of our commitment to providing exceptional
                                        legal services. Each member of our team brings a wealth of experience,
                                        specialized knowledge, and a deep dedication to achieving the best outcomes for
                                        our clients. We pride ourselves on our collaborative approach, ensuring that
                                        every case benefits from the collective expertise of our diverse legal team.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">
                                    <p>We brings extensive experience and specialized knowledge to a wide range of legal
                                        practice areas. We are dedicated to providing top-tier legal services, tailored
                                        to meet the unique needs of each client. Whether you're facing a personal legal
                                        challenge or require sophisticated business counsel, our attorneys are here to
                                        guide you with unparalleled expertise and unwavering commitment.</p>
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab">
                                    <p>We are dedicated to providing exceptional legal services tailored to meet the
                                        unique needs of our clients. Our firm is built on a foundation of integrity,
                                        professionalism, and a commitment to excellence. Whether you're facing a
                                        personal legal challenge or require sophisticated business counsel, our team of
                                        experienced attorneys is here to guide you through every step of the legal
                                        process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jarallax image-container col-md-6 pull-right">
                    <img src="images/background/9.png" className="jarallax-img" alt=""/>
                </div>
            </section>
        </>
    )
}

export default About;