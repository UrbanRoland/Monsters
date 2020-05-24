import React, { Component } from "react";
import left from "../icons/arrow-left.svg";
import right from "../icons/arrow-right.svg";
import ChosenElements from "./ChosenElements";
import logo from "../logo.svg";
import data from "../data/data";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/appStyle.css";
//import MonstersList from "./MonstersList";
import monsters from "../data/monsters";
import fire from "../icons/fire.svg";
import attack from "../icons/attack.svg";
import defense from "../icons/defense.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import search from "../icons/search.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: data.elements,
      property: data.elements[0],
      monstersData: monsters.monster,
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.id + 1;
    this.setState({
      property: data.elements[newIndex],
    });
  };
  prevProperty = () => {
    const newIndex = this.state.property.id - 1;
    this.setState({
      property: data.elements[newIndex],
    });
  };

  addMonster(e) {
    e.preventDefault();
    const newMonsterName = this.newMonsterName.value;
    const newMonsterAttack = this.newMonsterAttack.value;
    const newMonsterDefense = this.newMonsterDefense.value;
    let newMonsters = {
      name: newMonsterName,
      attack: newMonsterAttack,
      defense: newMonsterDefense,
      elemental: fire,
    };
    this.setState({
      monstersData: [...this.state.monstersData, newMonsters],
    });
  }
  listMonsters = (monster, index) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td className="elementsImg">
                <img src={monster.elemental} alt="asd" />
              </td>
              <td>
                <p key={index} className="asd">
                  {" "}
                  {monster.name}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  render() {
    return (
      <div className="app">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="title">Monsters</h1>
        <h6>Create Monster</h6>
        <span className="block-example border border-dark">
          <div className="addMonster">
            <table>
              <tbody>
                <tr>
                  <th>
                    <button
                      id="left"
                      onClick={() => this.prevProperty()}
                      disabled={this.state.property.id === 0}
                    >
                      <img src={left} alt="left" />
                    </button>
                  </th>
                  <th className="elemental">
                    <ChosenElements property={this.state.property} />
                  </th>
                  <th>
                    <button
                      id="right"
                      onClick={() => this.nextProperty()}
                      disabled={
                        this.state.property.id === data.elements.length - 1
                      }
                    >
                      <img src={right} alt="right" />
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
            <Form
              className="form"
              onSubmit={(e) => {
                this.addMonster(e);
              }}
            >
              <Form.Group controlId="formBasicText" className="monsterName">
                <Form.Control
                  ref={(input) => {
                    this.newMonsterName = input;
                  }}
                  type="text"
                  placeholder="Monster Name"
                />
                <Container md={4}>
                  <Row>
                    <Col xs={3}>
                      <p></p>
                      <img src={attack} alt="attack" className="attackImg" />
                    </Col>
                    <Col xs={3}>
                      <p></p>
                      <Form.Control
                        className="monsterAttack"
                        ref={(input) => {
                          this.newMonsterAttack = input;
                        }}
                        type="number"
                      />
                    </Col>
                    <Col xs={3}>
                      <p></p>
                      <img src={defense} alt="defense" className="defenseImg" />
                    </Col>
                    <Col xs={3}>
                      <p></p>
                      <Form.Control
                        className="monsterDefense"
                        ref={(input) => {
                          this.newMonsterDefense = input;
                        }}
                        type="number"
                      />
                    </Col>
                  </Row>
                </Container>
              </Form.Group>

              <Button variant="primary" type="submit" className="sumbitButton">
                Add
              </Button>
            </Form>
          </div>
        </span>
        <h6 className="monstersName">Monsters</h6>
        <Form.Group controlId="formBasicText" className="monsterName">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <img src={search} alt="asd" className="searcImg" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="serach" />
          </InputGroup>
        </Form.Group>
        {/*<MonstersList property={this.state.monstersData} />*/}

        {this.state.monstersData.map(this.listMonsters)}
      </div>
    );
  }
}

export default App;
