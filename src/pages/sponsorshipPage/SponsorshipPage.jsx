import React from 'react';

const SponsorshipPage = () => {
    return (
        <div style={{ margin: '30px', fontSize: '20px', textAlign: 'left' }}>
            <div className="table-responsive">
                <table className="table table-striped text-success table-border border-light">
                    <thead className="border-light">
                        <tr>
                            <th scope="col" style={{ fontSize: '30px' }}>OPTIONS</th>
                            <th scope="col" style={{ fontSize: '30px', color: 'silver' }}>SILVER</th>
                            <th scope="col" style={{ fontSize: '30px', color: 'gold' }}>GOLD</th>
                            <th scope="col" style={{ fontSize: '30px', color: 'platinum' }}>PLATINUM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>ADVERTISEMENT ON SOCIAL MEDIA</th>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>LOGO IN WEBSITE & BANNERS</th>
                            <td style={{ fontSize: '18px' }}><i className="fas fa-check"></i>✅</td>
                            <td style={{ fontSize: '18px' }}><i className="fas fa-check"></i>✅</td>
                            <td style={{ fontSize: '18px' }}><i className="fas fa-check"></i>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>INVITATION TO ALL TEAM EVENTS</th>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>RECEIVE “THANK YOU” GIFT (POSTER + T-SHIRT)</th>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>LOGO ON ROBOT</th>
                            <td style={{ fontSize: '18px' }}>S</td>
                            <td style={{ fontSize: '18px' }}>M</td>
                            <td style={{ fontSize: '18px' }}>L</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>LOGO ON APPARELS</th>
                            <td style={{ fontSize: '18px' }}>S</td>
                            <td style={{ fontSize: '18px' }}>M</td>
                            <td style={{ fontSize: '18px' }}>L</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>LOGO IN TEAM BANNER</th>
                            <td style={{ fontSize: '18px' }}>S</td>
                            <td style={{ fontSize: '18px' }}>M</td>
                            <td style={{ fontSize: '18px' }}>L</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>MONTHLY TEAM REPORT</th>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>ROBOT AVAILABLE FOR COMPANY'S EVENT SHOWCASE</th>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>DISTRIBUTION OF PROMOTION MATERIALS</th>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>HIGHLY MENTIONED IN PUBLISHED ARTICLE</th>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ fontSize: '18px' }}>CUSTOM BENEFIT</th>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}></td>
                            <td style={{ fontSize: '18px' }}>✅</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="/contact" className="btn btn-primary">CONTACT US TO BE A SPONSOR</a>
            </div>
        </div>
    );
}

export default SponsorshipPage;
