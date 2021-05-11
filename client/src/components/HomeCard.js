import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
                        View all statistics collected from 1956 to the present day. Search via player, teams, season and award!
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
