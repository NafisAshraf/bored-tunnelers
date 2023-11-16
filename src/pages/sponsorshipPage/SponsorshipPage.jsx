import React from "react";
import "../../components/technology/technology.css";
import GoFundMeWidget from "../../components/GoFundMe";

const SponsorshipPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>Sponsorship</h1>
          <p className="px-5 text-center"></p>
        </div>
      </div>
      <div className="bg-white ">
        <div
          className=""
          style={{ margin: "0 30px", fontSize: "20px", textAlign: "left" }}
        >
          <div className="table-responsive below-header">
            <table className="table table-striped text-success table-border border-light mt-5">
              <thead className="border-light">
                <tr>
                  <th scope="col" style={{ fontSize: "30px" }}>
                    OPTIONS
                  </th>
                  <th scope="col" style={{ fontSize: "30px", color: "silver" }}>
                    SILVER
                  </th>
                  <th scope="col" style={{ fontSize: "30px", color: "gold" }}>
                    GOLD
                  </th>
                  <th
                    scope="col"
                    style={{ fontSize: "30px", color: "platinum" }}
                  >
                    PLATINUM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    ADVERTISEMENT ON SOCIAL MEDIA
                  </th>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    LOGO IN WEBSITE & BANNERS
                  </th>
                  <td style={{ fontSize: "18px" }}>
                    <i className="fas fa-check"></i>✅
                  </td>
                  <td style={{ fontSize: "18px" }}>
                    <i className="fas fa-check"></i>✅
                  </td>
                  <td style={{ fontSize: "18px" }}>
                    <i className="fas fa-check"></i>✅
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    INVITATION TO ALL TEAM EVENTS
                  </th>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    RECEIVE “THANK YOU” GIFT (POSTER + T-SHIRT)
                  </th>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    LOGO ON ROBOT
                  </th>
                  <td style={{ fontSize: "18px" }}>S</td>
                  <td style={{ fontSize: "18px" }}>M</td>
                  <td style={{ fontSize: "18px" }}>L</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    LOGO ON APPARELS
                  </th>
                  <td style={{ fontSize: "18px" }}>S</td>
                  <td style={{ fontSize: "18px" }}>M</td>
                  <td style={{ fontSize: "18px" }}>L</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    LOGO IN TEAM BANNER
                  </th>
                  <td style={{ fontSize: "18px" }}>S</td>
                  <td style={{ fontSize: "18px" }}>M</td>
                  <td style={{ fontSize: "18px" }}>L</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    MONTHLY TEAM REPORT
                  </th>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    ROBOT AVAILABLE FOR COMPANY'S EVENT SHOWCASE
                  </th>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    DISTRIBUTION OF PROMOTION MATERIALS
                  </th>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    HIGHLY MENTIONED IN PUBLISHED ARTICLE
                  </th>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
                <tr>
                  <th scope="row" style={{ fontSize: "18px" }}>
                    CUSTOM BENEFIT
                  </th>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}></td>
                  <td style={{ fontSize: "18px" }}>✅</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="/contact" className="btn btn-primary mb-5">
              CONTACT US TO BE A SPONSOR
            </a>
          </div>
        </div>
      </div>
      <GoFundMeWidget />
    </>
  );
};

export default SponsorshipPage;
