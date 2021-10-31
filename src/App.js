import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import React, { Component } from 'react'
import './SideBarCss.css'
import SideBar from './SideBar';
export default class App extends Component{
  jQuerycode = () => {
    $('.btn').click(function(){
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
    });
    
    
    $('.sidebar ul li a').click(function(){
    var id = $(this).attr('id');
    $('nav ul li ul.item-show-'+id).toggleClass("show");
    $('nav ul li #'+id+' span').toggleClass("rotate");
    
    });
    
    $('nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

