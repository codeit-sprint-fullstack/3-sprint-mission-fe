import React from "react"
import HeaderPart from "./RegisterPage/header";
import MainPart from "./RegisterPage/main";
import NamePart from "./RegisterPage/name";
import IntroPart from "./RegisterPage/intro";
import PricePart from "./RegisterPage/price";
import Tags from "./RegisterPage/tags"
import FooterPart from "./ProductPage/footer";

function Registration () {
    return(
        <div>
            <HeaderPart/>
            <MainPart/>
            <NamePart/>
            <IntroPart/>
            <PricePart/>
            <Tags/>
            <FooterPart/>
        </div>
    )
}

export default Registration;