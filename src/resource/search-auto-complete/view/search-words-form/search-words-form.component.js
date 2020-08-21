// @flow
import React, { Fragment, type Element } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
        searchKey,
        searchResults,
    } = props;

    const recommendations = searchResults[searchKey] || [];

    return (
        <Fragment>
            <Autocomplete
                multiple
                fullWidth
                id="tags-standard"
                onChange={(event, value) => console.log(value)} // update redux state with list of strings
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
        </Fragment>
    );
};

const styles = () => ({

});

export const searchWordsFormComp = withStyles(styles)(searchWordsFormComponent);