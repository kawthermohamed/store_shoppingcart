// import { useState, useEffect } from "react";
import Procard from "./Procard";
import { useContext } from "react";
import { contextProvider } from "./Context";
function ExportData() {
  const { pros } = useContext(contextProvider);

  return (
    <>
      <div className="container mt-5">
        <div className="cards row">
          {pros.map((ele) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12">
                <Procard {...ele} key={ele.id} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExportData;
