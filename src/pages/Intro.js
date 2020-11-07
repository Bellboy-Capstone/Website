import React from "react";
// Pictures
import logo from "../assets/logo.png";
import shriya from "../assets/shriya.jpg";
import sein from "../assets/sein.jpg";
import ryan from "../assets/ryan.png";
import elma from "../assets/elma.jpg";
import yusra from "../assets/yusra.jpg";
import Grid from "@material-ui/core/Grid";

import {
  Card,
  CardImg,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardText,
} from "reactstrap";

const logoStyles = {
  height: "200px",
  width: "400px",
  marginTop: "20px",
  borderRadius: "20px",
};

const containerStyles = {
  backgroundColor: "#30336b",
  height: "100vh",
  minHeight: "100vh",
};

const members = [
  {
    name: "Sein Izumita",
    src: sein,
    email: "sizum075@uOttawa.ca",
    role: "System Design & Machine Learning",
  },
  {
    name: "Ryan Fleck",
    src: ryan,
    email: "rflec028@uOttawa.ca",
    role: "Product Owner & Researcher",
  },
  {
    name: "Shriya Gundala",
    src: shriya,
    email: "sgund051@uOttawa.ca",
    role: "Scrum Master & Full-Stack Developer",
  },
  {
    name: "Elma Khandaker",
    src: elma,
    email: "ekhan029@uOttawa.ca",
    role: "Back End Developer & UX",
  },
  {
    name: "Yusra Ozohu",
    src: yusra,
    email: "yadin030@uOttawa.ca",
    role: "System Engineer & Quality Assurance",
  },
];

const MemberCard = (props) => {
  const { name, src, email, role } = props;
  return (
    <div style={{ color: "white"}}>
      <Card>
        <CardImg
          width="80%"
          src={src}
          alt="Card image cap"
          style={{ borderRadius: "25px" }}
        />
        <CardBody>
          <br></br>
          <CardHeader>
            <b>
              <font size="5">{name}</font>
            </b>
          </CardHeader>
          <br></br>
          <CardText>{role}</CardText>
          <CardSubtitle>{email}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

const Intro = () => {
  return (
    <div style={containerStyles}>
      <div style={{ textAlign: "center" }}>
        <img alt="name" src={logo} style={logoStyles} />
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#dff9fb",
          fontSize: "28px",
          marginTop: "10px",
        }}
      >
        <b>CEG 4912 Capstone</b>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#dff9fb",
          fontSize: "18px",
          marginTop: "10px",
        }}
      >
        Contactless Button Actuation for the COVID-19 Era
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Grid
          container
          spacing={1}
          alignItems="center"
          alignContent="center"
          justify="center"
        >
          {members.map(item => {
            const { name, src, email, role } = item;
            return (
              <Grid item xs={2} key={name}>
                <MemberCard
                  name={name}
                  src={src}
                  key={name}
                  email={email}
                  role={role}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Intro;
