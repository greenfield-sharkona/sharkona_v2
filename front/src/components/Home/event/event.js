import React , {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Event extends Component {
    render(){
        
        return (
          <div>
              

              <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Events</h2>
                    <h3 className="section-subheading text-muted">where you live your life ♥ </h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://www.events.ps/public/files/resized/1600x500/118999609_3296860673726042_7507617518094106018_o.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Bastat mubadarat</div>
                                <div className="portfolio-caption-heading"> <a> Dalia org </a> </div>

                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                   26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                    <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FZF4zJ5YXunbwbOFdKneSTA%252FGettyImages-594735980-1200.jpg&width=1200&quality=80" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Workshop | Partially damaged historical documents restoration</div>
                                <div className="portfolio-caption-heading"> <a> 
                                    The Palestinian Museum </a> </div>
                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                    26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://www.middleeasteye.net/sites/default/files/styles/landing_tile/public/GazaAmal%20Al-qarra%201_0.jpg?itok=AiB8dpvQ" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    Farmers' Market 2020</div>
                                <div className="portfolio-caption-heading"> <a> 
                                    
                                AL bireh Cultural Center </a> </div>
                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                    26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://pbs.twimg.com/media/DOWb-V9X0AA5SGa.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    Souq Baladi</div>
                                <div className="portfolio-caption-subheading text-muted">Alistiqlal Park</div>
                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                    26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="data:image/jpeg;base64,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" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    Live Music at Station 101
                                    </div>
                                <div className="portfolio-caption-subheading text-muted">
                                    Station 101</div>
                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                    26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://www.events.ps/public/files/resized/750x400/image/events1/6-1575456638.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Lemon Valley Journey</div>
                                <div className="portfolio-caption-subheading text-muted">village of Aboud , Ramallah & Albireh</div>
                                <div className="portfolio-caption-subheading text-muted">Start Date:
                                    26 Sep 2020  </div>
                                    <div className="portfolio-caption-subheading text-muted"> End Date 76 sep 2020 </div>
                                <div className="portfolio-buttom"> <button> book </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          </div>
       
        )
    }
  }

export default Event





