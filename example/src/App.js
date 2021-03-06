import React, { Component } from "react";

import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea,
  Avatar,
  Balloon,
  List,
  Table,
  Progress,
  Icon,
  Sprite,
  ControllerIcon
} from "nes-react";

import Row from "./Row";
import Col from "./Col";

export default class App extends Component {
  state = {
    selectedRadioValue: "option1",
    boxOneChecked: false,
    boxTwoChecked: true,
    textInput: "",
    successInput: "",
    warningInput: "",
    errorInput: "",
    textareaInput: ""
  };

  handleRadioSelect(value) {
    this.setState({ selectedRadioValue: value });
  }

  toggleCheckBox(checkBoxName) {
    this.setState({
      [`${checkBoxName}Checked`]: !this.state[`${checkBoxName}Checked`]
    });
  }

  render() {
    const {
      selectedRadioValue,
      boxOneChecked,
      boxTwoChecked,
      textInput,
      successInput,
      warningInput,
      errorInput,
      textareaInput
    } = this.state;

    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 15,
          width: 1024
        }}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <h1>nes-react</h1>
        <h4>
          A React component library based on the awesome{" "}
          <a href="https://github.com/BcRikko/NES.css">nes.css</a>
        </h4>

        {/* Containers */}
        <Container>
          <p>Containers</p>
          <Row>
            <Col>
              <Container>Regular</Container>
            </Col>
            <Col>
              <Container rounded>Rounded</Container>
            </Col>
            <Col>
              <Container title="With Title">Title for this one</Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container dark>Dark</Container>
            </Col>
            <Col>
              <Container centered>Centered text for this one!</Container>
            </Col>
          </Row>
        </Container>

        {/* Buttons */}
        <Container title="Buttons">
          <Button>Regular</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
          <Button disabled>Disabled</Button>
        </Container>

        {/* Radios */}
        <Container title="Radios">
          <Radios
            selectedValue={selectedRadioValue}
            options={[
              {
                value: "yes",
                label: "Yes"
              },
              {
                value: "no",
                label: "No"
              }
            ]}
            onValueChange={this.handleRadioSelect.bind(this)}
          />
        </Container>

        {/* Checkboxes */}
        <Container title="Checkboxes">
          <Checkbox
            checked={boxOneChecked}
            label="Box One"
            onSelect={() => this.toggleCheckBox("boxOne")}
          />

          <Checkbox
            checked={boxTwoChecked}
            label="Box Two"
            onSelect={() => this.toggleCheckBox("boxTwo")}
          />
        </Container>

        {/* Text Inputs */}
        <Container title="Text Inputs">
          <TextInput
            label="Label"
            placeholder="Text placeholder"
            value={textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
          />
          <TextInput
            label="Success"
            labelInline
            success
            value={successInput}
            onChange={e => this.setState({ successInput: e.target.value })}
          />
          <TextInput
            label="Warning"
            labelInline
            warning
            value={warningInput}
            onChange={e => this.setState({ warningInput: e.target.value })}
          />
          <TextInput
            label="Error"
            labelInline
            error
            value={errorInput}
            onChange={e => this.setState({ errorInput: e.target.value })}
          />
          <TextArea
            label="Text Area"
            value={textareaInput}
            onChange={e => this.setState({ textareaInput: e.target.value })}
          />
        </Container>

        {/* Avatars */}
        <Container title="Avatars">
          <Avatar src="https://www.gravatar.com/avatar" small />
          <Avatar src="https://www.gravatar.com/avatar" />
          <Avatar src="https://www.gravatar.com/avatar" medium />
          <Avatar src="https://www.gravatar.com/avatar" large />
          <Avatar src="https://www.gravatar.com/avatar" small rounded />
          <Avatar src="https://www.gravatar.com/avatar" rounded />
          <Avatar src="https://www.gravatar.com/avatar" medium rounded />
          <Avatar src="https://www.gravatar.com/avatar" large rounded />
        </Container>

        {/* Balloons */}
        <Container title="Balloons">
          <Row>
            <Col>
              <div style={{ display: "flex" }}>
                <Sprite sprite="bcrikko" style={{ alignSelf: "flex-end" }} />
                <Balloon style={{ margin: "2rem", maxWidth: "400px" }} fromLeft>
                  Here's one from the left!
                </Balloon>
              </div>
            </Col>
            <Col>
              <div style={{ display: "flex" }}>
                <Balloon
                  style={{ margin: "2rem", maxWidth: "400px" }}
                  fromRight
                >
                  And one from the right!
                </Balloon>
                <Sprite sprite="bcrikko" style={{ alignSelf: "flex-end" }} />
              </div>
            </Col>
          </Row>
        </Container>

        {/* Lists */}
        <Container title="Lists">
          <p>Lists</p>
          <List>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </List>

          <List solid>
            <li>Solid 1</li>
            <li>Solid 2</li>
            <li>Solid 3</li>
          </List>
        </Container>

        {/* Tables */}
        <Container title="Tables">
          <Table>
            <thead>
              <tr>
                <th>Table</th>
                <th>Table</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1 Cell 1</td>
                <td>Row 1 Cell 2</td>
              </tr>

              <tr>
                <td>Row 2 Cell 1</td>
                <td>Row 2 Cell 2</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ height: 20 }} />
          <Table bordered>
            <thead>
              <tr>
                <th>Table bordered</th>
                <th>Table bordered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1 Cell 1</td>
                <td>Row 1 Cell 2</td>
              </tr>

              <tr>
                <td>Row 2 Cell 1</td>
                <td>Row 2 Cell 2</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ height: 20 }} />
          <Table bordered centered style={{ width: 700 }}>
            <thead>
              <tr>
                <th>Table centered</th>
                <th>Table centered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1 Cell 1</td>
                <td>Row 1 Cell 2</td>
              </tr>

              <tr>
                <td>Row 2 Cell 1</td>
                <td>Row 2 Cell 2</td>
              </tr>
            </tbody>
          </Table>
          <div style={{ height: 20 }} />
          <Table bordered centered dark style={{ width: 700 }}>
            <thead>
              <tr>
                <th>Table dark</th>
                <th>Table dark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1 Cell 1</td>
                <td>Row 1 Cell 2</td>
              </tr>

              <tr>
                <td>Row 2 Cell 1</td>
                <td>Row 2 Cell 2</td>
              </tr>
            </tbody>
          </Table>
        </Container>

        {/* Progress */}
        <Container title="Progress Bars">
          <Progress value={90} max={100} />
          <Progress value={80} max={100} primary />
          <Progress value={70} max={100} success />
          <Progress value={60} max={100} warning />
          <Progress value={50} max={100} error />
          <Progress value={40} max={100} pattern />
        </Container>

        {/* Icons */}
        <Container title="Icons">
          <Container title="Size and state">
            <Icon icon="star" small />
            <Icon icon="star" />
            <Icon icon="star" medium />
            <Icon icon="star" large />
            <Icon icon="star" half large />
            <Icon icon="star" empty large />
            <Icon icon="star" transparent large />
          </Container>

          <Container title="Available icons">
            {[
              "heart",
              "star",
              "like",
              "twitter",
              "facebook",
              "github",
              "youtube",
              "google",
              "medium",
              "twitch",
              "reddit",
              "whatsapp",
              "gmail",
              "linkedin",
              "close",
              "trophy"
            ].map(icon => (
              <Icon key={icon} icon={icon} />
            ))}
          </Container>
        </Container>

        <Container title="Sprites">
          {[
            "octocat",
            "mario",
            "ash",
            "pokeball",
            "bulbasaur",
            "charmander",
            "squirtle",
            "smartphone",
            "phone",
            "kirby",
            "bcrikko"
          ].map(sprite => (
            <Sprite style={{ margin: 5 }} sprite={sprite} key={sprite} />
          ))}
        </Container>

        {/* Controller Icons */}
        <Container title="Controller Icons">
          {["nes", "nes-jp", "snes", "snes-jp"].map(controller => (
            <ControllerIcon
              style={{ margin: 5 }}
              controller={controller}
              key={controller}
            />
          ))}
        </Container>
      </div>
    );
  }
}
