import '../Components/nav'
import React from "react";
//dependency import
import {createComponent} from '@lit/react';


import {TopNavBar} from "../Components/nav";
const TopNav = createComponent({
    react: React,
    tagName: 'top-nav',
    elementClass: TopNavBar
})
export default function MainPage():JSX.Element{
    return (
        <div>
            <TopNav></TopNav>
        </div>
    );
}
