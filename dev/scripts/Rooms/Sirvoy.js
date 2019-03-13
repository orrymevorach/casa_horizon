import React from 'react';

class Sirvoy extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://secured.sirvoy.com/widget/sirvoy.js";
        script.setAttribute("data-form-id", "5c86e182cccce")
        script.async = true;

        document.getElementById("sirvoy").appendChild(script)
    
    }

    render() {
        return (
            <div id="sirvoy" style={{marginTop: `200px`}}></div>
        )
    }
}

export default Sirvoy ;