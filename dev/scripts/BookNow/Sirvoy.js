import React from 'react';

class Sirvoy extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
        script.setAttribute("data-form-id", "5c86e182cccce")
        script.async = true;

        document.getElementById("sirvoy").appendChild(script)
        
        const logoNav = document.getElementsByClassName("logo-nav-top-right")[0]
        const logoImage = document.getElementsByClassName("logo-nav-top-left")[0].children[0]
        if(window.location.hash === "#/book") {
            logoNav.style.display = "none"
            logoImage.style.opacity = "1"
        }
    }

    render() {
        return (
            <div id="sirvoy"></div>
        )
    }
}

export default Sirvoy ;