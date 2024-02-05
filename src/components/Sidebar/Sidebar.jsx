import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar_main_container">
      <div className="sidebar_body">
        <ul className="main_ul">
          <li>
            Main course
            <ul>
              <li>Chicken biryani</li>
              <li>Chicken biryani</li>
              <li>Chicken biryani</li>
              <li>Chicken biryani</li>
              <li>Chicken biryani</li>
            </ul>
          </li>
          <li>
            Lunch
            <ul>
              <li>Biryani</li>
              <li>Biryani</li>
              <li>Biryani</li>
              <li>Biryani</li>
              <li>Biryani</li>
            </ul>
          </li>
          <li>
            Desert
            <ul>
              <li>sweet</li>
            </ul>
            <ul>
              <li>sweet</li>
            </ul>
            <ul>
              <li>sweet</li>
            </ul>
            <ul>
              <li>sweet</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
