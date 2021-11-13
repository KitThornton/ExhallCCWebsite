// Let's try creating a card group to be displayed on the home page under the first image
import React from "react";
import {Card, CardActions, Grid, makeStyles, Paper, Typography, Button, CardContent, CardMedia, CardActionArea  } from "@material-ui/core";
import img1 from '../images/ExhallCC4.jpg';
import img2 from '../images/ExhallCC2.jpeg';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupIcon from '@material-ui/icons/Group';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        padding: 20,
        minHeight: 700
    },
    media: {
        height: 300,
    },
});

const CardGroup = () => {
    const classes = useStyles();

    return(
        <Grid className={classes.root}  container spacing={8}>
            <Grid item xs={4}>
                <Paper elevation={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img2}
                                title="PLayers"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Players
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Check out the player database with .
                                    {<br/>}
                                    {<br/>}
                                    {<br/>}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/Players" variant="outlined" size="large" color="primary" startIcon={<GroupIcon />}>
                                Players
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img1}
                                title="Statistics"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Statistics
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Check out the bowling, batting and fielding statistics from 1956 to the present day
                                    and see how players have developed through the seasons.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/Statistics" variant="outlined" size="large" color="primary" startIcon={<EqualizerIcon />}>
                                Statistics
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper elevation={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Awards
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    View awards handed out at the club and league level.
                                    {<br/>}
                                    {<br/>}
                                    {<br/>}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button href="/Awards" variant="outlined" size="large" color="primary" startIcon={<SportsCricketIcon />}>
                                Awards
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default CardGroup;