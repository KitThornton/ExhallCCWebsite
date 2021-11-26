import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import img from "../images/ExhallCC1.png"

export default function MediaCard() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image={img}
                    title="Exhall and Wixford CC"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Exhall and Wixford CC
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        View all statistics collected from 1956 to the present day. Search via player, teams, season and
                        award!
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/*  <CardActions>*/}
            {/*  <Button size="small" href="/AboutTheClub" color="primary">*/}
            {/*    About the club*/}
            {/*  </Button>*/}
            {/*  <Button size="small" href="/Players" color="primary">*/}
            {/*      Players*/}
            {/*  </Button>*/}
            {/*</CardActions>*/}
        </Card>
    );
}
