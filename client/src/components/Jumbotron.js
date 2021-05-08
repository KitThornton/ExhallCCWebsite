// Let's trying creating a carousel for the homepage
import React from "react";
import { MDBJumbotron, MDBRow, MDBCol, MDBCardImage, MDBCardBody } from "mdbreact";
import img from '../images/ExhallCC1.png';
// import CardGroup from './CardGroup';

export default function Jumbotron() {

        return (
            // <div style={{ padding: 0 }} className="text-center">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{padding: 0}}>
                        <MDBCardImage
                            // className="img-fluid"
                            src={img}
                            // width={"100%"}
                        />
                        <MDBCardBody className="light">
                            <MDBRow>
                                {/*<CardGroup />*/}
                            </MDBRow>
                            <br/>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            // </div>
        )
}

// export default Jumbotron;