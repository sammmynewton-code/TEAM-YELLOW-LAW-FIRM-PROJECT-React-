function Header() {
    return(
     <>
     <div id="wrapper">
          <div id="topbar" className="topbar-noborder">
            <div className="container">
                <div className="topbar-left sm-hide">
                    <span className="topbar-widget tb-social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </span>
                </div>
                <div className="topbar-right">
                    <div className="topbar-right">
                        <span className="topbar-widget"><a href="#">Privacy policy</a></span>
                        <span className="topbar-widget"><a href="#">Request Quote</a></span>
                        <span className="topbar-widget"><a href="#">FAQ</a></span>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
         {/* header begin */}
          <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                {/* logo begin {*/}
                                <div id="logo">
                                    <a href="index.html">
                                        <img alt="" className="logo" src="images/logo-light.png" />
                                        <img alt="" className="logo-2" src="images/logo.png" />
                                    </a>
                                </div>
                                {/* logo close {*/}
                            </div>
                            <div className="de-flex-col header-col-mid">
                                {/* mainmenu begin {*/}
                                <ul id="mainmenu" className="onepage-menu">
                                    <li><a href="/">Home</a></li> 
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/practiceareas">Practice Areas</a></li>
                                    <li><a href="/team">Team</a></li>
                                    <li><a href="/news">News</a></li>
                                    {/*<li><a href="/faq">FAQ</a></li>*/}
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/feepricing">Legal Fee Calculator</a></li>
                                </ul>
                                {/* mainmenu close {*/}
                            </div>
                            <div className="de-flex-col">
                                <div className="h-phone md-hide"><span>Need&nbsp;Help?</span><i className="fa fa-phone"></i>+234 812 444 0006</div>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* header close */}
        </div>
     </>
    )
}

export default Header;