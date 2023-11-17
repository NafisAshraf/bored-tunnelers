import React from "react";
import "../../components/technology/technology.css";
import GoFundMeWidget from "../../components/GoFundMe";
import sponsorshipData from "./sponsorshipData.json";
import { Link } from "react-router-dom";

const SponsorshipPage = () => {
  const renderSponsorshipContent = (item) => {
    if (typeof item === "boolean") {
      return <i className="fas fa-check text-success"></i>;
    } else {
      return item;
    }
  };

  return (
    <>
      <div className="page-header">
        <div className="container page-header-text pt-5 px-3">
          <h1>Sponsorship</h1>
          <p className="px-5 text-center"></p>
        </div>
      </div>
      <div className="table-responsive below-header bg-white">
        <div className="container pb-4 d-flex flex-column justify-content-center align-items-center">
          <table className="table table-hover mt-5">
            <thead>
              <tr className="align-middle fs-3" style={{ height: "75px" }}>
                <td scope="col">Sponsorship Perks</td>
                <td className="text-center" scope="col">
                  Silver
                </td>
                <td className="text-center" scope="col">
                  Gold
                </td>
                <td className="text-center" scope="col">
                  Platinum
                </td>
              </tr>
            </thead>
            <tbody>
              {sponsorshipData.map((item, index) => (
                <tr
                  key={index}
                  className="align-middle"
                  style={{ height: "45px" }}
                >
                  <td>{item.option}</td>
                  <td className="text-center" style={{ width: "20%" }}>
                    {renderSponsorshipContent(item.silver)}
                  </td>
                  <td className="text-center" style={{ width: "20%" }}>
                    {renderSponsorshipContent(item.gold)}
                  </td>
                  <td className="text-center" style={{ width: "20%" }}>
                    {renderSponsorshipContent(item.platinum)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/contact">
            <button className="btn btn-dark btn-lg rounded-0 mt-3">
              Become a Sponsor
            </button>
          </Link>
        </div>
        <hr className="pb-5" />
      </div>

      <div className="container-fluid text-center bg-white">
        <h2 className="pb-4">You Can Support Us Through GoFundMe As Well</h2>
        <GoFundMeWidget />
      </div>
    </>
  );
};

export default SponsorshipPage;
