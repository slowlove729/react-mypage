/* eslint-disable */

import './App.css';
import H_logo from './H_logo.svg'
import { Navbar, Nav, Jumbotron, Container, Card } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Switch, useParams } from 'react-router-dom'
import React, { useState } from 'react';

import PostData from './PostData'

function App() {

  let [posts, postsMod] = useState(PostData);

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CustomNav></CustomNav>

            <Jumbotron fluid>
              <Container>
                <h1>Hong's DEV blog</h1>
                <p>
                  리액트 개발 블로그
                </p>
              </Container>
            </Jumbotron>
          </Route>
          <Route path="/posts">
            <CustomNav></CustomNav>
            <CustomCard posts={posts}></CustomCard>
          </Route>
          <Route path="/photos">
            <CustomNav></CustomNav>
            <div>photo</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


function CustomNav(props){
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img
            alt=""
            src={H_logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span>Hong's DEV Blog</span>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link to="/posts">Posts</Link></Nav.Link>
        <Nav.Link><Link to="/photos">Photos</Link></Nav.Link>
      </Nav>
    </Navbar>
  )
}


function CustomCard(props){

  return(
    <div className="container">
      <div className="row">
        {
          props.posts.map((post, i)=>{
            return(
              <div className="col-md-6">
                <Card border="secondary">
                  <Card.Header><Link to="/posts/:postid">{post.header}</Link></Card.Header>
                  <Card.Body>
                    <Card.Title><Link to="/posts/:postid">{post.title}</Link></Card.Title>
                    <Card.Text><Link to="/posts/:postid">{post.text}</Link></Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}