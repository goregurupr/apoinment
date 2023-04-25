import React from 'react'
import "./../style.css"
const Hero = () => {
    const partnershipArray = [
        "https://shreethemes.in/doctris/layouts/assets/images/client/amazon.png",
        "https://shreethemes.in/doctris/layouts/assets/images/client/google.png",
        "https://shreethemes.in/doctris/layouts/assets/images/client/lenovo.png",
        "https://shreethemes.in/doctris/layouts/assets/images/client/paypal.png",
        "https://shreethemes.in/doctris/layouts/assets/images/client/shopify.png",
        "https://shreethemes.in/doctris/layouts/assets/images/client/spotify.png"
    ]
    const partnershipContent = <>
        {
            partnershipArray.map(item => <img className='img-fluid logo' key={item} src={item} alt={item} />)
        }
    </>
    return <>

        <div className='hero'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className='h-100 d-flex justify-content-center flex-column'>
                            <p className='fs-3'>Find Best Doctor</p>
                            <p>Great doctor if you need your family member to get immediate assistance, emergency treatment or a simple consultation.</p>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Doctor" />
                                <button type="button" className="btn btn-primary">
                                    <span className='bi bi-search me-3'></span>
                                    Search
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6">
                        <img src="https://shreethemes.in/doctris/layouts/assets/images/hero.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="partnership bg-secondary ">
            <div className="container d-flex justify-content-center py-4 gap-5">
                {partnershipContent}
            </div>
        </div>
    </>
}

export default Hero