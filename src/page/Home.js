
import React from "react";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBContainer, MDBRow} from "mdbreact";
import Footer from "../component/Footer";

export default function Home() {
    return (
        <MDBContainer fluid className="py-5">
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle className="flex-center" >Glen A. Wilson CODE Team</MDBCardTitle>
                    <MDBCardTitle tag="h6" sub className="mb-2 text-muted flex-center">
                        As Wilson's only computer science club, we strive to create a community of coders by igniting and reinforcing an interest in CS in members.
                    </MDBCardTitle>
                </MDBCardBody>
            </MDBCard>
            <Footer />
        </MDBContainer>
    );
}
