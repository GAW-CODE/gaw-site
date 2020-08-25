import React from "react";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../component/Footer";

export default function About() {
    return (
        <MDBContainer fluid className="py-5">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle cascade className="flex-center" ><h1>About Us</h1></MDBCardTitle>
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>We are a competitive coding organization that has different divisions when working on projects or competing</MDBCardTitle>
                    </MDBCardBody>
                </MDBCardBody>
            </MDBCard>
            <MDBContainer fluid className="text-center py-3">
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Frontend</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Backend</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Hardware</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </MDBContainer>
    );
}