function Footer() {
    return (
        <>
         {/* footer begin */}
      <footer>
        <div className="container"> 
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <a href="index.html"><img alt="" className="img-fluid mb20" src="/images/logo-light.png" /></a>
                <address className="s1">
                  <span><i className="id-color fa fa-map-marker fa-lg" />
                    <b>Abuja Office</b><br />
                    "The Brook" [Ground FLoor], Gemko Villa, No. 4 Alliade Close, by Nig. Army Welfare, Garki 2 - Abuja<br /><br />
                    <b>Lagos Office</b><br />
                    "The Node" Flat 1, [Ground FLoor], 9, Funsho Street Link, Off Alara Street, Sabo Yaba, Lagos
                  </span>
                  <span><i className="id-color fa fa-phone fa-lg" />+234 812 444 0006</span>
                  <span><i className="id-color fa fa-envelope-o fa-lg" /><a href="mailto:contact@example.com">everlaw@example.com</a></span>
                  <span><i className="id-color fa fa-file-pdf-o fa-lg" /><a href="#">Download
                      Brochure</a></span>
                </address>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="id-color mb20">Practice Areas</h5>
              <ul className="ul-style-2">
                <li>Corporate and M&amp;A</li>
                <li>Construction and Real Estate</li>
                <li>Commercial Duspute Resolution</li>
                <li>Employment</li>
                <li>Banking and Finance</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <h5 className="id-color">Newsletter</h5>
                <p>Signup for our newsletter to get the latest news, updates and special offers in your
                  inbox.</p>
                <form action="https://www.designesia.com/themes/justica/blank.php" className="row" id="form_subscribe" method="post" name="form_subscribe">
                  <div className="col text-center">
                    <input className="form-control" id="name_1" name="name_1" placeholder="enter your email" type="text" /> <a href="#" id="btn-submit"><i className="fa fa-long-arrow-right" /></a>
                    <div className="clearfix" />
                  </div>
                </form>
                <div className="spacer-10" />
                <small>Your email is safe with us. We don't spam.</small>
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                © Copyright - Team Yellow TECH4YOUTH Cohort 1                    
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="social-icons">
                  <a href="#"><i className="fa fa-facebook fa-lg" /></a>
                  <a href="#"><i className="fa fa-twitter fa-lg" /></a>
                  <a href="#"><i className="fa fa-linkedin fa-lg" /></a>
                  <a href="#"><i className="fa fa-pinterest fa-lg" /></a>
                  <a href="#"><i className="fa fa-rss fa-lg" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer close */}
      </>
    )
}

export default Footer;