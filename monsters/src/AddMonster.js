import React, { Component } from "react";
import left from "./icons/arrow-left.svg";
import right from "./icons/arrow-right.svg";
import air from "./icons/air.svg";
import earth from "./icons/earth.svg";
import fire from "./icons/fire.svg";
import water from "./icons/water.svg";
import update from "react-addons-update";

import "./addMonsterStyle.css";

class AddMonster extends Component {
  constructor(props) {
    super(props);
    var clicks = 0;
  }
  state = {
    element: [
      {
        name: "air",
        image: air,
        selected: "false",
      },
    ],
    elements: [
      {
        name: "air",
        image: air,
        selected: "false",
      },
      {
        name: "earth",
        image: earth,
        selected: "false",
      },
      {
        name: "fire",
        image: fire,
        selected: "false",
      },
      {
        name: "water",
        image: water,
        selected: "false",
      },
    ],
  };
  count(i) {
    return i + 1;
  }

  nextImage = () => {
    /* this.setState({
      element: update(this.state.element, {
        0: { image: { $set: a } },
      }),
    });
  };
  */
    // let i = this.state.elements.indexOf(this.state.elements[0]);

    this.setState({
      element: update(this.state.element, {
        0: { image: { $set: this.state.elements[this.count(0)].image } },
      }),
    });
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <button id="left">
                  <img src={left} alt="right" />
                </button>
              </th>
              <th>
                <img
                  src={this.state.element[0].image}
                  alt="Element"
                  id="elemental"
                />
              </th>
              <th>
                <button id="right" onClick={this.nextImage}>
                  <img src={right} alt="right" />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddMonster;
