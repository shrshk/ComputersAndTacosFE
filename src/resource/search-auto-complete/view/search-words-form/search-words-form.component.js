// @flow
import React, { Fragment, type Element } from 'react';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export type searchWordsFormProps = {
};

type InternalProps = {
    classes: $Call<typeof styles>,
    reset: () => void,
};

type Props = searchWordsFormProps & InternalProps;

const renderAutoCompleteField = (props: any): Element<*> => {
    const { options, updateSearchKeyAction } = props;
    console.log(options + " options");
    return (
        <Autocomplete
            multiple
            fullWidth
            id="tags-standard"
            onChange={(event, value) => console.log(value)} // update redux state with list of strings
            options={options}
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
    );
};

const searchWordsFormComponent = (props: Props) => {
    const {
        classes,
        reset,
        initialValues,
        updateSearchKeyAction,
        searchKey,
        searchResults,
    } = props;

    console.log( searchKey + " sK 60");
    console.log( searchResults + " sR 61");
    const recommendations = searchResults[searchKey] || [];

    return (
        <Fragment>
            <FormControlLabel
                control={
                <Field
                  id="searchKey"
                  name="searchKey"
                  component={renderAutoCompleteField}
                  options={recommendations}
                  updateSearchKeyAction={updateSearchKeyAction}
                />
              }
            />
        </Fragment>
    );
};

const styles = () => ({

});

export const searchWordsFormComp = withStyles(styles)(searchWordsFormComponent);