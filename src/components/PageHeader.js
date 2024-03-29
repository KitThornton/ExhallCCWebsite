// So we'll have a header for each page. Pass in the text for the header and brief description. This will  be
// definitely changed later.
import React, {Fragment} from "react";
import {Grid} from "@mui/material";
// import { makeStyles } from "@material-ui/core/styles";

export default class PageHeader extends React.Component {

    render() {

        const header = this.props.header;
        const description = this.props.description;

        return (
            <Fragment>
                <Grid spacing={7}>
                    <Grid item={12}>
                        <h1>{header}</h1>
                        <h3>{description}</h3>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}