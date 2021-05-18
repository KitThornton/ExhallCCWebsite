import React from 'react';
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Paper,
    Typography, Avatar, CardHeader, Grid
} from "@material-ui/core";
import avatar from "../images/avatar.png";
import blue from '@material-ui/core/colors/blue';

const useStyles = makeStyles({
    media: {
        height: 300,
    },
    avatar: {
        backgroundColor: blue[500],
    },
});

const PlayerProfileCard = (props) => {

    const classes = useStyles();
    const playerName = props.playername;

    return(
        <Paper elevation={3}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {GetInitials(playerName)}
                        </Avatar>}
                    title={playerName}
                    subheader="Debut: September 14, 2016"
                >
                    KT
                </CardHeader>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={avatar}
                        title="PLayers"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Overview
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Debut:
                                    {/*{new Date().toLocaleDateString() } */}
                                    {<br/>}
                                    Seasons:    {<br/>}
                                    Matches:    {<br/>}
                                </Grid>
                                <Grid item xs={6}>
                                    Runs:   {<br/>}
                                    Wickets:    {<br/>}
                                    Catches:    {<br/>}
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*<Button href="/Players" variant="outlined" size="large" color="primary" startIcon={<GroupIcon />}>*/}
                    {/*    Players*/}
                    {/*</Button>*/}
                </CardActions>
            </Card>
        </Paper>
    )
};

function GetInitials(playerName) {

    if (!playerName) return "";
    return playerName.match(/\b(\w)/g).join('');
}

export default PlayerProfileCard;