import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Grid} from "@mui/material";
// import Box from '@material-ui/core/Box';
// import {withStyles} from '@mui/material/styles'
import grey from '@mui/material/colors/grey';


class Footer extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <Grid container alignItems="center"
                  justify="center">
                <Grid className="root" item={12}>
                    &copy; {new Date().getFullYear()} Copyright: Kit Thornton
                </Grid>

                {/*<Box width={"100%"} height={"100%"} bgcolor="text.secondary">*/}
                {/*    &copy; {new Date().getFullYear()} Copyright: Kit Thornton*/}
                {/*</Box>*/}
            </Grid>
        );
    }
}

// const useStyles = theme => ({
//     root: {
//         display: 'flex',
//         minHeight: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         backgroundColor: grey[800],
//         color: grey[100]
//     },
// });

export default Footer;
