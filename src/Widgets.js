import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info"; 
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
          <div className="widgets__articleLeft">
              <FiberManualRecordIcon />
          </div>

          <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </div>

        </div>
    )

    return (
        <div className="widgets">
           <div className="widgets__header">
               <h2>LinkedIn News</h2>
               <InfoIcon />
           </div>
           {newsArticle("Watch out!! Me coming as a new cool developer", "Top news - 5500 readers")}
           {newsArticle("Is Redux too good?", "Code - 1500 readers")}
           {newsArticle("Top 10 Programming Languages in 2021", "Code - 8500 readers")}
           
        </div>
    );
}

export default Widgets;
