/**
 * Copyright 2019 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/* Display a stock ticker that provides typeahead (aka autocomplete) capability.
 * This requires making an AJAX HTTP request (asynchronous JavaScript and XML request) to
 * your service and prefetching the list of all available stock tickers or making an async
 * query every time the input changes (AsyncTypeahead). If you don't have a route defined
 * in your services/API that returns all stock tickers as a JSON object, create one!
 *
 * You can use promises(axios),
 * fetch, jQuery...there are many libraries to help you do this. The data you will
 * receive will be in a JSON format.
 * https://hashnode.com/post/5-best-libraries-for-making-ajax-calls-in-react-cis8x5f7k0jl7th53z68s41k1
 * fetch: https://davidwalsh.name/fetch
 * axios: https://github.com/mzabriskie/axios (you will need to install this package)
 * jquery: http://api.jquery.com/jquery.getjson/ (you will need to install the jquery package)
 *
 * Feel free to choose among of the many open source options for your typeahead select box.
 * We recommend react-select or react-bootstrap-typeahead. react-boostrap-typeahead is included
 * in your package.json.
 *
 * react-select:
 * https://www.npmjs.com/package/react-select
 * http://jedwatson.github.io/react-select/
 * https://github.com/JedWatson/react-select
 * 
 * react-boostrap-typeahead
 * https://www.npmjs.com/package/react-bootstrap-typeahead
 * http://ericgio.github.io/react-bootstrap-typeahead/
 * https://github.com/ericgio/react-bootstrap-typeahead/blob/master/example/examples/BasicBehaviorsExample.react.js (note this is not ES2015)
 */

import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import TextInput from './TextInput.js';
//import {Typeahead} from 'react-bootstrap-typeahead'; UNCOMMENT this line if you are using the react-bootstrap-typeeahead component

/* If you chose to use react-boostrap-typeahead, look at AsyncTypeahead for a component that 
 * provides auto-complete suggestions as you type. This would require adding a search handler 
 * method for an onSearch prop.
 * https://github.com/ericgio/react-bootstrap-typeahead/blob/master/example/examples/AsyncExample.react.js
 */
class StockTicker extends React.Component {

    /**
     * TODO
     * Prefetch the data required to display options fo the typeahead component. Initialize a state array with
     * this data and pass it via props to the typeahead component that will be rendered.
     * https://github.com/ericgio/react-bootstrap-typeahead/blob/master/docs/Data.md
     * e.g.
     * options : [
     *   GS,
     *   AAPL,
     *   FB,
     * ]
     * If you are having difficulty with this, you may hard code the options array from the company data provided for the
     * services.
     */
    
    constructor(props) {
        super(props);
        this.state = {
            showcompanyinfo: false, //TODO: Use this boolean to determine if the company information should be rendered
            company : {
                symbol: '',
                name: '',
                city: '',
                state: '',
                sector: '',
                industry: ''
                
            },
            options : [
                {
                    "symbol":"ATVI",
                    "name":"Activision Blizzard Inc",
                    "headquartersCity":"Santa Monica",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":9600,
                    "sector":"Technology",
                    "industry":"Internet Gaming"
                },
                {
                    "symbol":"ADBE",
                    "name":"Adobe Systems Incorporated",
                    "headquartersCity":"Santa Jose",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":10000,
                    "sector":"Technology",
                    "industry":"Application Software"
                },
                {
                    "symbol":"AKAM",
                    "name":"Akamai Technologies Inc.",
                    "headquartersCity":"Cambridge",
                    "headquartersStateOrCountry":"MA",
                    "numberOfEmployees":6200,
                    "sector":"Technology",
                    "industry":"IT Services & Consulting"
                },
                {
                    "symbol":"ALXN",
                    "name":"Alexion Pharmaceuticals Inc.",
                    "headquartersCity":"New Haven",
                    "headquartersStateOrCountry":"CT",
                    "numberOfEmployees":2924,
                    "sector":"Healthcare",
                    "industry":"Biopharmaceuticals"
                },
                {
                    "symbol":"GOOG",
                    "name":"Alphabet Inc.",
                    "headquartersCity":"Mountain View",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":98771,
                    "sector":"Technology",
                    "industry":"Search Engines"
                },
                {
                    "symbol":"AMZN",
                    "name":"Amazon.com Inc.",
                    "headquartersCity":"Seattle",
                    "headquartersStateOrCountry":"WA",
                    "numberOfEmployees":647500,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Internet & Mail Order Department Stores"
                },
                {
                    "symbol":"AAL",
                    "name":"American Airlines Group Inc.",
                    "headquartersCity":"Fort Worth",
                    "headquartersStateOrCountry":"TX",
                    "numberOfEmployees":118500,
                    "sector":"Industrials",
                    "industry":"Regional Airlines"
                },
                {
                    "symbol":"AMGN",
                    "name":"Amgen Inc.",
                    "headquartersCity":"Thousand Oaks",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":118500,
                    "sector":"Healthcare",
                    "industry":"Bio Therapeutic Drugs"
                },
                {
                    "symbol":"ADI",
                    "name":"Analog Devices Inc.",
                    "headquartersCity":"Norwood",
                    "headquartersStateOrCountry":"MA",
                    "numberOfEmployees":10000,
                    "sector":"Technology",
                    "industry":"Semiconductors"
                },
                {
                    "symbol":"AAPL",
                    "name":"Apple Inc.",
                    "headquartersCity":"Cupertino",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":116000,
                    "sector":"Technology",
                    "industry":"Computer Hardware"
                },
                {
                    "symbol":"AMAT",
                    "name":"Applied Materials Inc.",
                    "headquartersCity":"Santa Clara",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":15600,
                    "sector":"Technology",
                    "industry":"Semiconductor Machinery Manufacturing"
                },
                {
                    "symbol":"ADSK",
                    "name":"Autodesk Inc.",
                    "headquartersCity":"San Rafael",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":9000,
                    "sector":"Technology",
                    "industry":"Application Software"
                },
                {
                    "symbol":"ADP",
                    "name":"Automatic Data Processing Inc.",
                    "headquartersCity":"Roseland",
                    "headquartersStateOrCountry":"NJ",
                    "numberOfEmployees":57000,
                    "sector":"Technology",
                    "industry":"IT Services & Consulting"
                },
                {
                    "symbol":"BIDU",
                    "name":"Baidu Inc.",
                    "headquartersCity":"Beijing",
                    "headquartersStateOrCountry":"China",
                    "numberOfEmployees":45887,
                    "sector":"Technology",
                    "industry":"Search Engines"
                },
                {
                    "symbol":"BIIB",
                    "name":"Biogen Inc.",
                    "headquartersCity":"Cambridge",
                    "headquartersStateOrCountry":"MA",
                    "numberOfEmployees":7350,
                    "sector":"Healthcare",
                    "industry":"Biopharmaceuticals"
                },
                {
                    "symbol":"BMRN",
                    "name":"BioMarin Pharmaceutical Inc.",
                    "headquartersCity":"Novato",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":2293,
                    "sector":"Healthcare",
                    "industry":"Biopharmaceuticals"
                },
                {
                    "symbol":"AVGO",
                    "name":"Broadcom Limited",
                    "headquartersCity":"San Jose",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":15700,
                    "sector":"Technology",
                    "industry":"Semiconductors"
                },
                {
                    "symbol":"CA",
                    "name":"CA Inc.",
                    "headquartersCity":"New York",
                    "headquartersStateOrCountry":"NY",
                    "numberOfEmployees":11000,
                    "sector":"Technology",
                    "industry":"Server & Database Software"
                },
                {
                    "symbol":"CELG",
                    "name":"Celgene Corporation",
                    "headquartersCity":"Summit",
                    "headquartersStateOrCountry":"NJ",
                    "numberOfEmployees":7132,
                    "sector":"Healthcare",
                    "industry":"Bio Therapeutic Drugs"
                },
                {
                    "symbol":"CERN",
                    "name":"Cerner Corporation",
                    "headquartersCity":"North Kansas City",
                    "headquartersStateOrCountry":"MO",
                    "numberOfEmployees":24400,
                    "sector":"Healthcare",
                    "industry":"Advanced Medical Equipment & Technology"
                },
                {
                    "symbol":"CHTR",
                    "name":"Charter Communications Inc.",
                    "headquartersCity":"Stamford",
                    "headquartersStateOrCountry":"CT",
                    "numberOfEmployees":null,
                    "sector":null,
                    "industry":null
                },
                {
                    "symbol":"CHKP",
                    "name":"Check Point Software Technologies Ltd.",
                    "headquartersCity":"Tel Aviv",
                    "headquartersStateOrCountry":"Israel",
                    "numberOfEmployees":3898,
                    "sector":"Technology",
                    "industry":"Application Software"
                },
                {
                    "symbol":"CTAS",
                    "name":"Cintas Corporation",
                    "headquartersCity":"Cincinnati",
                    "headquartersStateOrCountry":"OH",
                    "numberOfEmployees":35000,
                    "sector":"Industrials",
                    "industry":"Business Support Services"
                },
                {
                    "symbol":"CSCO",
                    "name":"Cisco Systems Inc.",
                    "headquartersCity":"San Jose",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":71959,
                    "sector":"Technology",
                    "industry":"Communications & Networking"
                },
                {
                    "symbol":"CTXS",
                    "name":"Citrix Systems Inc.",
                    "headquartersCity":"Fort Lauderdale",
                    "headquartersStateOrCountry":"FL",
                    "numberOfEmployees":9600,
                    "sector":"Technology",
                    "industry":"Software"
                },
                {
                    "symbol":"CTSH",
                    "name":"Cognizant Technology Solutions Corporation",
                    "headquartersCity":"Teaneck",
                    "headquartersStateOrCountry":"NJ",
                    "numberOfEmployees":260200,
                    "sector":"Technology",
                    "industry":"IT Services & Consulting"
                },
                {
                    "symbol":"CMCSA",
                    "name":"Comcast Corporation",
                    "headquartersCity":"Philadelphia",
                    "headquartersStateOrCountry":"PA",
                    "numberOfEmployees":159000,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Broadcasting"
                },
                {
                    "symbol":"COST",
                    "name":"Costco Wholesale Corporation",
                    "headquartersCity":"Issaquah",
                    "headquartersStateOrCountry":"WA",
                    "numberOfEmployees":126000,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Discount Stores"
                },
                {
                    "symbol":"CSX",
                    "name":"CSX Corporation",
                    "headquartersCity":"Jacksonville",
                    "headquartersStateOrCountry":"FL",
                    "numberOfEmployees":27000,
                    "sector":"Industrials",
                    "industry":"Ground Freight & Logistics"
                },
                {
                    "symbol":"CTRP",
                    "name":"Ctrip.com International Ltd.",
                    "headquartersCity":"Shanghai",
                    "headquartersStateOrCountry":"China",
                    "numberOfEmployees":37000,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Travel Agents"
                },
                {
                    "symbol":"XRAY",
                    "name":"DENTSPLY SIRONA Inc.",
                    "headquartersCity":"York",
                    "headquartersStateOrCountry":"PA",
                    "numberOfEmployees":15700,
                    "sector":"Healthcare",
                    "industry":"Medical Equipment, Supplies & Distribution"
                },
                {
                    "symbol":"DISCA",
                    "name":"Discovery Communications Inc.",
                    "headquartersCity":"Silver Spring",
                    "headquartersStateOrCountry":"MD",
                    "numberOfEmployees":7000,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Television Broadcasting"
                },
                {
                    "symbol":"DISCK",
                    "name":"Discovery Communications Inc.",
                    "headquartersCity":"Silver Spring",
                    "headquartersStateOrCountry":"MD",
                    "numberOfEmployees":7000,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Television Broadcasting"
                },
                {
                    "symbol":"DISH",
                    "name":"DISH Network Corporation",
                    "headquartersCity":"Englewood",
                    "headquartersStateOrCountry":"CO",
                    "numberOfEmployees":16000,
                    "sector":"Cyclical Consumer Goods & Service",
                    "industry":"Cable Service Providers"
                },
                {
                    "symbol":"DLTR",
                    "name":"Dollar Tree Inc.",
                    "headquartersCity":"Chesapeake",
                    "headquartersStateOrCountry":"VA",
                    "numberOfEmployees":55300,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Discount Stores without groceries"
                },
                {
                    "symbol":"EBAY",
                    "name":"eBay Inc.",
                    "headquartersCity":"San Jose",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":12600,
                    "sector":"Technology",
                    "industry":"E-commerce & Auction Services"
                },
                {
                    "symbol":"EA",
                    "name":"Electronic Arts Inc.",
                    "headquartersCity":"Redwood City",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":8500,
                    "sector":"Technology",
                    "industry":"Application Software"
                },
                {
                    "symbol":"EXPE",
                    "name":"Expedia Inc.",
                    "headquartersCity":"Redmond",
                    "headquartersStateOrCountry":"WA",
                    "numberOfEmployees":20075,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Travel Agents"
                },
                {
                    "symbol":"ESRX",
                    "name":"Express Scripts Holding Company",
                    "headquartersCity":null,
                    "headquartersStateOrCountry":null,
                    "numberOfEmployees":null,
                    "sector":null,
                    "industry":null
                },
                {
                    "symbol":"FB",
                    "name":"Facebook Inc.",
                    "headquartersCity":"Menlo Park",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":17048,
                    "sector":"Technology",
                    "industry":"Social Media & Networking"
                },
                {
                    "symbol":"FAST",
                    "name":"Fastenal Company",
                    "headquartersCity":"Winona",
                    "headquartersStateOrCountry":"MN",
                    "numberOfEmployees":19822,
                    "sector":"Industrials",
                    "industry":"Industrial Machinery & Equipment Wholesale"
                },
                {
                    "symbol":"FISV",
                    "name":"Fiserv Inc.",
                    "headquartersCity":"Brookfield",
                    "headquartersStateOrCountry":"WI",
                    "numberOfEmployees":21000,
                    "sector":"Industrials",
                    "industry":"Transaction & Payment Services"
                },
                {
                    "symbol":"GILD",
                    "name":"Gilead Sciences Inc.",
                    "headquartersCity":"Foster City",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":9000,
                    "sector":"Healthcare",
                    "industry":"Bio Therapeutic Drugs"
                },
                {
                    "symbol":"HAS",
                    "name":"Hasbro Inc.",
                    "headquartersCity":"Pawtucket",
                    "headquartersStateOrCountry":"RI",
                    "numberOfEmployees":5400,
                    "sector":"Cyclical Consumer Goods & Services",
                    "industry":"Toys & Juvenile Products"
                },
                {
                    "symbol":"HSIC",
                    "name":"Henry Schein Inc.",
                    "headquartersCity":"Melville",
                    "headquartersStateOrCountry":"NY",
                    "numberOfEmployees":21000,
                    "sector":"Healthcare",
                    "industry":"Medical Equipment Wholesale"
                },
                {
                    "symbol":"HOLX",
                    "name":"Hologic Inc.",
                    "headquartersCity":"Marlborough",
                    "headquartersStateOrCountry":"MA",
                    "numberOfEmployees":5333,
                    "sector":"Healthcare",
                    "industry":"Advanced Medical Equipment & Technology"
                },
                {
                    "symbol":"IDXX",
                    "name":"IDEXX Laboratories Inc.",
                    "headquartersCity":"Westbrook",
                    "headquartersStateOrCountry":"ME",
                    "numberOfEmployees":7365,
                    "sector":"Healthcare",
                    "industry":"Veterinary Medical Equipment & Supplies"
                },
                {
                    "symbol":"ILMN",
                    "name":"IDEXX Laboratories Inc.",
                    "headquartersCity":"San Diego",
                    "headquartersStateOrCountry":"CA",
                    "numberOfEmployees":5500,
                    "sector":"Healthcare",
                    "industry":"Advanced Medical Equipment & Technology"
                },
                {
                    "symbol":"INCY",
                    "name":"Incyte Corporation",
                    "headquartersCity":"Wilmington",
                    "headquartersStateOrCountry":"DE",
                    "numberOfEmployees":980,
                    "sector":"Healthcare",
                    "industry":"Biotechnology & Medical Research"
                }
            ]
            
            /**
             * TODO
             * Add any additional state to pass via props to the typeahead component.
             */
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.length > 0) {
            
            /**
             * TODO
             * Make a request to your service to GET company information for the selected company and set it in state.
             * The information you will need to determine the URL will be contained in the 'event[0]' object,
             * e.g. event[0] (event[0].symbol if your options are an array of objects) provides you the symbol selected.
             * The URL will be on your localhost (e.g. http://localhost:8000/service_path/some_param) where
             * your service is running. Your service MUST be running for the request to work (you can add a catch function
             * to handle errors). If you successfully retrieve this information, you can set the state objects
             * and render it.
             */
            fetch('http://localhost:8000/service_path/some_param')
                  .then(response => {
                    if (!response.ok) {
                        throw new Error("HTTP error " + response.status);
                    }
                    return response.json();
                })
                .then(json => {
                    this.state = json;
                    //console.log(this.users);
                })
                .catch(function () {
                    this.dataError = true;
                })
             
                    

            this.setState({showinfo: true});
            this.props.onChange(event)
            //this.props.onChange(..);  Call this.props.onChange with the selected symbol to propagate it
            // to the App component, which will handle it via its own onChane prop,
            // ultimately  used to fetch the data for the LineChart component.

        }
        else {
            this.setState({showinfo: false});
            this.props.onChange(undefined);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.company.username, this.state.message, this.state.tags, this.state.dateStamp);}
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({company: value});
      }
    

    render() {

        /**
         * TODO
         * Render a typeahead component that uses the data prefetched from your service to display a list of companies or
         * ticker symbols. The props you use can be stored as state objects.
         * On change should fetch the company information and display Company, Ticker Symbol, City, State/Country, Sector, and Industry information.
         * https://github.com/ericgio/react-bootstrap-typeahead/blob/master/docs/Props.md
         */

        return (
            <div className="stockticker">
                <div className="ticker-input">
                    <p><strong>Stock Ticker</strong></p>
                    <div className="stockticker-typeahead">
                    <TextInput name='stockTicker' label="Stockticker" value={this.state.company} onChange={this.handleSubmit.bind(this)}/>
                        {/*useful props if you decide to use react-bootstrap-typeahead
                        <Typeahead
                             align='6'
                             filterBy={this.options}
                             labelKey="name"
                             onChange={this.handleChange}
                             minLength='1'
                             placeholder="Company Name/Ticker"
                             options={this.options}
                             change='false'
                        />
                        */
                        }
                    </div>
                </div>
                <div>
                    /**
                     *  TODO
                     *  Create a div element that shows a company information when the ticker changes. You will need to use a conditional here
                     *  to help control rendering and pass these states as props to the component. This conditional can
                     *  be maintained as a state object.
                     *  http://reactpatterns.com/#conditional-rendering
                     */
                    <TextInput name='stockTicker' label="Stockticker" value={this.state.company} onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default StockTicker;
