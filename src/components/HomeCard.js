import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import img from "../images/ExhallCC1.png"

const useStyles = makeStyles({
    root: {
        // maxWidth: 345
        width: "100%",
        padding: 0
    },
    media: {
        height: 470
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
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
