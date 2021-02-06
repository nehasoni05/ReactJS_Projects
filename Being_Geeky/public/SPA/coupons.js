import React from 'react';
import "./style.css";


class Coupons extends React.Component 
{
    render()
    {
        return (
<div className=" jumbotron three" id="coupon">
    <div className="coupons">
        <div>
        <img src={require("./image2.png")} alt="coupons" className="coupImg"/>
        </div>
    <div>
        <h2 className="heading4">Coupons</h2>
          <p className="content4">
      You can apply different coupons to get extra discount on selected courses.Certain internet providers exploit the fact that fill text cannot be recognized by automatic 
      search engines - meaningful information cannot be distinguished from meaningless: Target-generated dummy text mixed with a certain combination of search terms can lead to
      an increased frequency of visits by search machine users. As a consequence, advertising revenues, which rely on website 'hits', are increased.
  </p> 
  <p>Already have coupons?</p> 
  <hr/>
  <p><a href="#geeky" style={{textDecoration:'underline'}}>>Redeem</a></p>
    </div>
    </div>
</div>
        )
    }
}

export default Coupons;
