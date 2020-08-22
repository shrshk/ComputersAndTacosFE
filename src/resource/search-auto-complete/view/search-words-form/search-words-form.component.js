// @flow
import React, { Fragment, type Element } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const SearchWordsFormComponent = (props) => {
    const { updateSearchKeyAction, searchResults, searchKey } = props;
    // {a: []}

    const recommendations = searchResults[searchKey] || [];

    return (
        <Autocomplete
            multiple
            fullWidth
            id="tags-standard"
            onChange={(event, value) => console.log(value)} // list of words you type
            options={recommendations}
            getOptionLabel={(option) => option}
            renderInput={(params) => {
                    return (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Search"
                                onChange={e => updateSearchKeyAction(e.target.value)} // each word
                            />
                        )
                    }
                }
        />
    )
};

const styles = () => ({

});

export const SearchWordsFormComp = withStyles(styles)(SearchWordsFormComponent);