import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Grid } from "@material-ui/core";

class Footer extends React.Component {

    render() {
        return (
                <Grid container alignItems="center"
                           justify="center">
                    &copy; {new Date().getFullYear()} Copyright: Kit Thornton
                </Grid>
        );
    }
}

export default Footer;
