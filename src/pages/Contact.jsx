import { useState } from 'react';

function Contact(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState("Submit");

        function handleSubmit(e){
        e.preventDefault();
        if(!name.trim() || !email.trim() || !phone.trim() || !message.trim()) return;
        setSubmitted(submitted);
        }
        
        
    return(
        <>
              <section id="section-contact" className="text-light" style={{ backgroundColor: '#111111' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Contact Us</h2>
                                <div className="small-border"></div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-2 mb-sm-30 text-center">
                            <form name="contactForm" id="contact_form" className="form-border" method="post" action="https://www.designesia.com/themes/justica/email.php" onSubmit={handleSubmit}>
                                <div className="field-set">
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" value = {name}
                                       onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="field-set">
                                    <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="field-set">
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="field-set">
                                    <textarea name="message" id="message" className="form-control" placeholder="Your Message" value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="spacer-half"></div>
                                <div id="submit">
                                    <input type="submit" id="send_message" value={submitted} className="btn btn-custom" 
                                    onClick={(e) => setSubmitted(e.target.value)}
                                    />
                                </div>
                                <div id="mail_success" className="success">Your message has been sent successfully.</div>
                                <div id="mail_fail" className="error">Sorry, error occured this time sending your message.</div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                        </div>
                    </div>
                </div>
            </section>

             <section className="no-bottom relative text-white">
                <div className="container-fluid">
                    <div className="row bg-color no-gutters mt-min-100">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box f-boxed style-3 text-center" data-bgcolor="rgba(0,0,0,.1)">
                                <i className="icofont-letter"></i>
                                <div className="text">
                                    <h4>Request Quote</h4>
                                    Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward. 
                                </div>
                                <i className="wm icofont-letter"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box f-boxed style-3 text-center" data-bgcolor="rgba(0,0,0,.2)">
                                <i className="icofont-investigation"></i>
                                <div className="text">
                                    <h4>Investigation</h4>
                                    Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward. 
                                </div>
                                <i className="wm icofont-investigation"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box f-boxed style-3 text-center" data-bgcolor="rgba(0,0,0,.3)">
                                <i className="icofont-hand-power"></i>
                                <div className="text">
                                    <h4>Case Fight</h4>
                                    Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward. 
                                </div>
                                <i className="wm icofont-hand-power"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;