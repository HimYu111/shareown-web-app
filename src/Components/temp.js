
const renderTwoColumnsText = () => {
    if (result.SO_housing === 0) {
      return (
        <div className="text-center my-4"></div>
      );
    }
    return (
        <div className="results">
        <div className="text-white results-2cols">
          
          {/* Full Ownership */}
          <div className="results-1st-col std-1stcol">
            <h2 className="results-sharedOwn font-bold">
              <ToggleText
                regularText="With Staircasing"
                toggleableText="Staircasing happens every time enough money is saved, accounting for transaction costs. 
                Savings are used to take an additional mortgage, and the maximum available share is brought."
              />
            </h2>
            <div className="initial-share">
                <p className="font-bold">Initial Share</p>
                <p>You can afford to buy an initial share of</p>
                <p><span className="results-number mb-3">{result.SO_share ? formatNumber(result.SO_share.toFixed(0)) : '0'}%</span></p>
                <p>at the age of</p>
                <p><span className="results-number mb-3">{result.SO_start_age ? formatNumber(result.SO_start_age.toFixed(0)) : '0'}</span></p>
            </div>
                <ToggleText
                    className="font-bold" 
                    regularText ="Savings "
                    toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
                />
            <p className=""><div className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</div> </p>
                <ToggleText
                    className="font-bold" 
                    regularText ="Housing wealth "
                    toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
                />
            <p className=""><div className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</div></p>
            <p className="font-bold mb-3">You will be mortgage free {result.SO_mortgage_finish < 1 ? '' : 'by the age of'}
                <ToggleText
                  className="font-bold" 
                  regularText =" "
                  toggleableText="Assuming all savings are used to make repayments. For further model assumptions check the FAQs."
                />
                {result.SO_mortgage_finish < 1 ? (<div className="results-number">now</div>) : 
                (<div className="results-number mb-3">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : "0"}</div>)}
              </p>
          </div>










          <div className="results-2nd-col std-2ndcol">
          <h2 className="results-fullOwn font-bold">Without Staircasing</h2>
            <div className="initial-share">
                <p className="font-bold">Initial Share</p>
                <p>You can afford to buy an initial share of</p>
                <p><span className="results-number mb-3">{result.SO_share ? formatNumber(result.SO_share.toFixed(0)) : '0'}%</span></p>
                <p>at the age of</p>
                <p><span className="results-number mb-3">{result.SO_start_age ? formatNumber(result.SO_start_age.toFixed(0)) : '0'}</span></p>
            </div>
                <ToggleText
                    className="font-bold" 
                    regularText ="Savings "
                    toggleableText="Current value of future savings accumulated up until retirement age. For model assumptions check the FAQs."
                />
            <p className=""><div className="results-number">£{result.SO_liquid ? formatNumber(result.SO_liquid.toFixed(0)) : '0'}</div> </p>
                <ToggleText
                    className="font-bold" 
                    regularText ="Housing wealth "
                    toggleableText="Current value of future housing wealth accumulated up until retirement age. For model assumptions check the FAQs."
                />
            <p className=""><div className="results-number">£{result.SO_housing ? formatNumber(result.SO_housing.toFixed(0)) : '0'}</div></p>
            <p className="font-bold mb-3">You will be mortgage free {result.SO_mortgage_finish < 1 ? '' : 'by the age of'}
                <ToggleText
                  className="font-bold" 
                  regularText =" "
                  toggleableText="Assuming all savings are used to make repayments. For further model assumptions check the FAQs."
                />
                {result.SO_mortgage_finish < 1 ? (<div className="results-number">now</div>) : 
                (<div className="results-number mb-3">{result.SO_mortgage_finish ? formatNumber(result.SO_mortgage_finish.toFixed(0)) : "0"}</div>)}
              </p>
          </div>
        </div>
      </div>
    );
  };