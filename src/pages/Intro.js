import React from 'react';
// Pictures
import logo from '../assets/logo.png';
// import members from '../assets/members.png';
import shriya from "../assets/shriya.jpg";
import sein from "../assets/sein.jpg";
import ryan from "../assets/ryan.png";
import elma from "../assets/elma.jpg";
import yusra from "../assets/yusra.jpg";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const logoStyles = {
    height: "200px",
    width: "400px",
    marginTop: "20px",
    borderRadius: "20px"
}

const containerStyles = {
    backgroundColor: "#30336b",
    height: '100vh',
    minHeight: '100vh'
}

const members = [
    { name: "Ryan Fleck", src: ryan, email: "rflec028@uOttawa.ca" },
    { name: "Shriya Gundala", src: shriya, email: "sgund051@uOttawa.ca" },
    { name: "Sein Izumita", src: sein, email: "sizum075@uOttawa.ca" },
    { name: "Elma Khandaker", src: elma, email: "ekhan029@uOttawa.ca" },
    { name: "Yusra Ozohu", src: yusra, email: "yadin030@uOttawa.ca" },
];

const MemberCard = (props) => {
    // console.log(props);
    const { name, src, email } = props;
    return (
        <div style={{
            color:"white"
        }}>
            <Card>
                <CardImg width="80%" src={shriya} alt="Card image cap" style={{borderRadius: "25px"}}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{email}</CardSubtitle>
                    <CardText>I am cool.</CardText>
                    {/* <Button>Click on me :)</Button> */}
                </CardBody>
            </Card>
        </div>
    );
};

const Intro = () => {
    return (
        <div style={containerStyles}>
            <div
                style={{ textAlign: "center" }}
            >
                <img src={logo} style={logoStyles} />
            </div>
            <div
                style={{
                    textAlign: "center",
                    color: "#eccc68",
                    fontSize: "28px",
                    marginTop: "10px",
                }}
            >
                CEG 4912 Capstone

            </div>

            <div style={{
                textAlign: "center",
                color: "#eccc68",
                fontSize: "18px",
                marginTop: "10px",
            }}>
                Contactless Button Actuation
                for the  COVID-19 Era

            </div>

            <div
                style={{ textAlign: "center", marginTop:"20px" }}
            >
                <Grid container spacing={1} alignItems="center" alignContent='center' justify="center">
                    {members.map((item, index) => {
                        const { name, src, email } = item;
                        return (
                            <Grid item xs={2}>
                                {/* <Paper > */}
                                    <MemberCard name={name} src={src} key={name} email={email} />
                                {/* </Paper> */}
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    );
}

export default Intro;
