import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}));

export const AllRecommendationsList =  (props) => {
    const { allRecommendations, prefixList } = props;
    console.log("allRco" + allRecommendations);
    const classes = useStyles();
    const cardContent = (prefix) => {
        return allRecommendations[prefix] ? allRecommendations[prefix].join() : '';
    };
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {prefixList && prefixList.length>0 && prefixList.map(prefix => (
                    <Grid item xs={12} sm={6} md={3} key={prefixList.indexOf(prefix)}>
                        <Card>
                            <CardHeader
                                title={`${prefix}`}
                            />
                            <CardContent>
                                <Typography variant="body2" gutterBottom>
                                    { cardContent(prefix) }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};