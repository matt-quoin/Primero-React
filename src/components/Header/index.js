import React, { Component } from 'react'
import { Responsive, Grid, Button, Menu, Form, Image } from 'semantic-ui-react'
import './styles.css'

export default class Header  extends Component {
  state = { activeItem: 'Home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="header">
        <Grid>
          <Grid.Row columns={2} id="top-nav-container">
            <Grid.Column>
              <Image src='./assets/images/logo.png' size='small' />
              <div className="sublogo">Protection-related information management</div>
            </Grid.Column>
            <Grid.Column>
              <ul class="menu simple align-right links">
                <li>
                  Logged in as: primero
                </li>
                <li>
                  <a href="/logout" id="logout">Logout</a>
                </li>
                <li>
                  <a href="/users/user-primero">My Account</a>
                </li>
                <li>
                  <a href="/contact_information/administrator">Contact &amp; Help</a>
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} id="main-nav-container">
            <Grid.Column>
              <Menu id="main-nav">
                <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
                  <Menu.Item className="main-menu-item" name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Cases" active={activeItem === 'Cases'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Tracing Requests" active={activeItem === 'Tracing Requests'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Incidents" active={activeItem === 'Incidents'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Forms" active={activeItem === 'Forms'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Settings" active={activeItem === 'Settings'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Reports" active={activeItem === 'Reports'} onClick={this.handleItemClick} />
                  <Menu.Item className="main-menu-item" name="Download" active={activeItem === 'Download'} onClick={this.handleItemClick} />
                </Responsive>
                <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth} position="right">
                  <Menu.Item>
                    <Form id="search-form">
                      <Form.Field className="search-field">
                        <input placeholder='Search' />
                      </Form.Field>
                      <Button type='submit' className="search-button">></Button>
                    </Form>
                  </Menu.Item>
                </Responsive>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}