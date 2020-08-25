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
                    <MDBCol md="4" className="pb-2">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Frontend</MDBCardTitle>
                                <MDBCardText>User-Interaction / Display</MDBCardText>
                                <MDBCardBody>The frontend division is for xxxxxxx (Currently a placeholder)</MDBCardBody>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="pb-2">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Backend</MDBCardTitle>
                                <MDBCardText>Server End / Undisplayed Processes</MDBCardText>
                                <MDBCardBody>The backend division is for xxxxxxx (Currently a placeholder)</MDBCardBody>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="4" className="pb-2">
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Hardware</MDBCardTitle>
                                <MDBCardText>Robots / Machines</MDBCardText>
                                <MDBCardBody>The hardware division is for xxxxxxx (Currently a placeholder)</MDBCardBody>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </MDBContainer>
    );
}