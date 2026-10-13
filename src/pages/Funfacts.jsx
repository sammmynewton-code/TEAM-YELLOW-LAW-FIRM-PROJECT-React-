import './Funfacts.css';

function Funfacts(){
    return(
        <>
         <section className="funfacts-section text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <span className="p-title">Fun facts</span><br/>
                            <h2>
                                What we did?
                            </h2>
                            <div className="small-border sm-left"></div>
                            <p>Trust in our expertise and let us champion your legal rights with skill and compassion.
                            </p>
                        </div>
                        <div className="col-md-8 offset-md-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>4500</span></h3>
                                        <h5 className="id-color">Home Protected</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>16</span>k</h3>
                                        <h5 className="id-color">People Saved</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>4</span>m</h3>
                                        <h5 className="id-color">Money Saved</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>52</span>k</h3>
                                        <h5 className="id-color">Contract Signed</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>100</span>+</h3>
                                        <h5 className="id-color">Countries</h5>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mb30">
                                    <div className="de_count">
                                        <h3><span>2</span>k</h3>
                                        <h5 className="id-color">Staff Member</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Funfacts;