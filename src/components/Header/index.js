import React, { Component } from 'react'
import { Responsive, Grid, Button, Menu, Form, Image } from 'semantic-ui-react'
import './styles.css'
import MainNavItem from '../../containers/MainNavItem'

const Header = () => (
  <div id="header">
    <Grid>
      <Grid.Row columns={2} id="top-nav-container">
        <Grid.Column>
          <div className="standard-padding">
            <Image src='./assets/images/logo.png' size='small' />
            <div className="sublogo">Protection-related information management</div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className="standard-padding">
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
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={1} id="main-nav-container">
        <Grid.Column>
          <Menu id="main-nav">
            <Responsive as={Menu.Menu} minWidth={Responsive.onlyTablet.minWidth}>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="/">
                  Home
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="cases">
                  Cases
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="tracing-requests">
                  Tracing Requests
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="incidents">
                  Incidents
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="forms">
                  Forms
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="settings">
                  Settings
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="reports">
                  Reports
                </MainNavItem>
              </Menu.Item>
              <Menu.Item className="main-menu-item">
                <MainNavItem page="download">
                  Download
                </MainNavItem>
              </Menu.Item>
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
