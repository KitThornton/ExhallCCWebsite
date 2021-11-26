import React from 'react';
import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import avatar from "../images/avatar.png";

class PlayerProfileCard extends React.Component {

    render() {

        const playerName = this.props.playername;
        const debut = !this.props.debut ? [] : this.props.debut[0];
        const profile = !this.props.profileData ? [] : this.props.profileData[0];
        const {classes} = this.props;

        return (
            <Paper elevation={3}>
                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                {GetInitials(playerName)}
                            </Avatar>}
                        title={playerName}
                        subheader={CreateSubheader(debut["debut"], debut["latestyear"])}
                    >
                    </CardHeader>
                    <CardActionArea>
                        <CardMedia
                            className="media"
                            image={avatar}
                            title="Players"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Overview
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        Debut: <span style={{display: "inline-block", width: 20}}/> {debut["debut"]} {
                                        <br/>}
                                        Seasons: &emsp; {debut["seasons"]} {<br/>}
                                        Matches: &emsp; {profile["matches"]}
                                    </Grid>
                                    <Grid item xs={6}>
                                        Runs: &emsp; &emsp; {profile["runs"]} {<br/>}
                                        Wickets:&emsp; {profile["wickets"]} {<br/>}
                                        Catches:&emsp; {profile["catches"]}
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/*<Button href="/Players" variant="outlined" size="large" color="primary"
                            startIcon={<GroupIcon />}>*/}
                        {/*    Players*/}
                        {/*</Button>*/}
                    </CardActions>
                </Card>
            </Paper>
        )
    }
}

// const styles = theme => ({
//     media: {
//         height: 300,
//     }, avatar: {
//         backgroundColor: blue[500],
//     },
// });

function GetInitials(playerName) {

    if (!playerName) return "";
    return playerName.match(/\b(\w)/g).join('');
}

function CreateSubheader(debut, latest) {
    return "Years active: " + debut + " - " + latest;
}

export default PlayerProfileCard;