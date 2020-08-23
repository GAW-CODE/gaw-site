import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon, MDBTooltip} from "mdbreact";

class Footer extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBFooter color="blue" className="pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">GLEN A. WILSON CODE</h5>
                            <p>
                                AS WILSON'S ONLY COMPUTER SCIENCE CLUB, WE STRIVE TO CREATE A COMMUNITY OF CODERS BY IGNITING AND REINFORCING AN INTEREST IN CS IN MEMBERS.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title pl-2">FIND US</h5>
                            <MDBBtn color="dark" social="git" size="md" href="https://link.gawhscode.com/github">
                                <MDBIcon fab icon="github" className="pr-1" /> GITHUB
                            </MDBBtn>
                            <MDBBtn color="dark" social="dis" size="md" href="https://link.gawhscode.com/discord">
                                <MDBIcon fab icon="discord" className="pr-1" /> DISCORD
                            </MDBBtn>
                            <MDBBtn color="red" social="yt" size="md" href="https://link.gawhscode.com/youtube">
                                <MDBIcon fab icon="youtube" className="pr-1" /> YOUTUBE
                            </MDBBtn>
                            <MDBBtn color="pink" social="ins" size="md" href="https://link.gawhscode.com/instagram">
                                <MDBIcon fab icon="instagram" className="pr-1" /> INSTAGRAM
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBFooter>
        );
    }
}

export default Footer;
