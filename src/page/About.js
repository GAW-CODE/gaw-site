import React from "react";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer} from "mdbreact";
import Footer from "../component/Footer";

export default function About() {
    return (
        <MDBContainer fluid className="py-5">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle cascade className="flex-center" ><h1>About Us</h1></MDBCardTitle>
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>We are xxxxxx (Placeholder right now)</MDBCardTitle>
                        <MDBCardText>
                            We have xxx.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCardBody>
            </MDBCard>
            <Footer />
        </MDBContainer>
    );
}