import React, { Component } from 'react'
import Article from '../article/Article'
import Best from '../best/Best'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Works from '../works/Works'

export default class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <Works/>
            <Best/>
            <Article/>
            <Footer/>
            </>
        )
    }
}
