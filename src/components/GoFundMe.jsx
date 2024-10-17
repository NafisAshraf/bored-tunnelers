import React from "react";

const GoFundMeWidget = () => {
  return (
    <div className="row conttainer px-5">
      <div className="col-7 px-5">
        <h1 style={{ fontWeight: "800", textAlign: "left" }} className="pb-3">
          Help Us Out!
        </h1>
        <div className="fs-5" style={{ textAlign: "left" }}>
          <p>
            The journey of Team Bored Tunnelers began last year. We were
            selected as finalists in Elon Musk's "Not-a-Boring Competition
            2024". Despite numerous challenges, we developed our Tunnel Boring
            Machine (TBM) and presented it at the competition in Texas, where we
            earned the coveted 'Rookie Award.' This was a huge achievement for
            us, as we were the first team from Asia to achieve this.
          </p>
          <p>
            This year, we are working on developing an improved TBM using the
            lessons we learned from previous year's competition. However,
            building an industrial-grade machine like this is very expensive, so
            we took fundraising efforts within the team and approached several
            companies for sponsorship. We also applied for government grants,
            such as the ICT Ministry's Innovation Fund. Unfortunately, due to
            the recent government transition, companies are not in a financial
            position to sponsor us, and government grants are currently
            unavailable due to changes in their hierarchy. With this in mind, we
            are launching this campaign and hope you will join us by donating
            generously to support our project.
          </p>
          <p className="fs-4 fw-bold">
            <span style={{ color: "#e8146c" }}>bKash Number:</span> 01550674505
          </p>
        </div>
      </div>
      <div className="col-5">
        <iframe
          title="GoFundMe Widget"
          src="https://www.gofundme.com/f/support-bored-tunnelers-bangladeshs-pride/widget/large"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          className="pt-3"
        ></iframe>
      </div>
    </div>
  );
};

export default GoFundMeWidget;
