import React from "react";
import "./Admin.css";
import { useState } from "react";

const Admin = () => {
  const [description, setdescription] = useState(false);
  const desc = (event) => {
    event.preventDefault();
    setdescription(true);
  };
  return (
    <div div className="admin">
      <div className="admin_head">
        <div className="head_left">
          <div className="image_admin">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Lightbulb">
                <path
                  id="Vector"
                  d="M13.183 34.967H25.1675"
                  stroke="#0AF1B6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M11.7897 25.2296C10.363 24.1202 9.2074 22.7007 8.41058 21.0785C7.61377 19.4563 7.1966 17.674 7.19068 15.8667C7.16072 9.36513 12.389 3.95713 18.8905 3.80732C21.4068 3.74767 23.878 4.48176 25.9536 5.90546C28.0292 7.32916 29.6038 9.37021 30.4543 11.7391C31.3047 14.1081 31.3877 16.6846 30.6915 19.1034C29.9953 21.5221 28.5553 23.6603 26.5756 25.2146C26.1383 25.5527 25.7841 25.9862 25.54 26.4821C25.2959 26.9781 25.1685 27.5232 25.1674 28.0759V28.9748C25.1674 29.2926 25.0412 29.5975 24.8164 29.8222C24.5917 30.047 24.2868 30.1732 23.969 30.1732H14.3814C14.0635 30.1732 13.7587 30.047 13.5339 29.8222C13.3092 29.5975 13.1829 29.2926 13.1829 28.9748V28.0759C13.1792 27.5274 13.052 26.9867 12.8108 26.4939C12.5696 26.0012 12.2207 25.5691 11.7897 25.2296V25.2296Z"
                  stroke="#0AF1B6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector_3"
                  d="M20.3886 8.72095C21.8534 8.96925 23.205 9.66608 24.2568 10.7153C25.3087 11.7644 26.009 13.1142 26.261 14.5784"
                  stroke="#0AF1B6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <h1 className="admin_title"> BrainWave</h1>
        </div>
        <div className=" head_right">
          <h1> Welcome Administrator </h1>
        </div>
      </div>
      <div className="content">
        <div className="content_left">
          <button onClick={desc}>
            <h1>Add on Projects </h1>
          </button>
        </div>
        <div className="content_center">
          {description && (
            <h1 className="expanded">
              <form className="project_details">
                NAME <br />
                <input type="text" name="name" /> <br /> <br />
                DATE OF BIRTH <br />
                <input type="text" name="name" /> <br /> <br />
                PHONE NUMBER <br />
                <input type="text" name="name" /> <br /> <br />
                COUNTRY
                <br />
                <select name="country">
                  <option value="india">INDIA</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="africa">AFRICA</option>
                </select>
                <br /> <br />
                Project Name
                <br />
                <input type="text" name="name" /> <br /> <br />
                CREATE PASSWORD <br />
                <input type="text" name="name" /> <br /> <br />
                CONFIRM PASSWORD <br />
                <input type="text" name="name" /> <br /> <br />
                <input type="checkbox" id="" name="agreement" value="" />
                <br />
                <label className="terms">
                  I agree to the terms and conditions
                </label>
                <br /> <br />
                <button className="submit"> Register</button>
              </form>
            </h1>
          )}
        </div>
        <div className=" content_right">
          <button>
            <h1> Remove Projects</h1>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Admin;
