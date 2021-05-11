// Let's try creating a card group to be displayed on the home page under the first image
import React from "react";
import {Card, CardActions, Grid, makeStyles} from "@material-ui/core";
import img1 from '../images/ExhallCC4.jpg';
import img2 from '../images/ExhallCC2.jpeg';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import GroupIcon from '@material-ui/icons/Group';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';

const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        padding: 20
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
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="/Players" variant="outlined" size="large" color="primary" startIcon={<GroupIcon />}>
                            Players
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
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
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="/Statistics" variant="outlined" size="large" color="primary" startIcon={<EqualizerIcon />}>
                            Statistics
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
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
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="/Awards" variant="outlined" size="large" color="primary" startIcon={<SportsCricketIcon />}>
                            Awards
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CardGroup;