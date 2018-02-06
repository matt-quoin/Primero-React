import React from 'react'
import { Responsive, Grid, Button, Menu, Form, Image } from 'semantic-ui-react'
import './styles.css'

const Header = () => (
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
              <Menu.Item className="main-menu-item">Home</Menu.Item>
              <Menu.Item className="main-menu-item">Cases</Menu.Item>
              <Menu.Item className="main-menu-item">Tracing Requests</Menu.Item>
              <Menu.Item className="main-menu-item">Incidents</Menu.Item>
              <Menu.Item className="main-menu-item">Forms</Menu.Item>
              <Menu.Item className="main-menu-item">Settings</Menu.Item>
              <Menu.Item className="main-menu-item">Reports</Menu.Item>
              <Menu.Item className="main-menu-item">Download</Menu.Item>
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

export default Header