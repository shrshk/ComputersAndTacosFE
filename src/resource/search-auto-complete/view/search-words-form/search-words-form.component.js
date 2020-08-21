// @flow
import React, { Fragment, type Element } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

export type searchWordsFormProps = {
};

type InternalProps = {
    classes: $Call<typeof styles>,
    reset: () => void,
};

type Props = searchWordsFormProps & InternalProps;

const searchWordsFormComponent = (props: Props) => {
    const {
        classes,
        updateSearchKeyAction,
        updatePrefixListAction,
        loadAllRecommendationsAction,
        searchKey,
        prefixList,
        searchResults,
    } = props;

    const recommendations = searchResults[searchKey] || [];

    return (
        <Fragment>
            <Autocomplete
                multiple
                fullWidth
                id="tags-standard"
                onChange={(event, value) => updatePrefixListAction(value)} // update redux state with list of strings
                options={recommendations}
                getOptionLabel={(option) => option}
                renderInput={(params) => {
                    return (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Search"
                                onChange={e => updateSearchKeyAction(e.target.value)} // get values from api and
                            />
                        )
                    }
                }
            />
            { prefixList.length>0 &&
                <Button variant="contained" color="primary" onClick={loadAllRecommendationsAction}>
                    Get All Results
                </Button>
            }
        </Fragment>
    );
};

const styles = () => ({

});

export const searchWordsFormComp = withStyles(styles)(searchWordsFormComponent);