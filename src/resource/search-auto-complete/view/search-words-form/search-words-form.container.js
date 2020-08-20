// @flow
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { searchWordsFormComp } from './search-words-form.component';
import {
    searchWordsFormInitialValuesSelector,
    searchWordsFormValuesSelector,
    recommendationsSelector,
    searchKeySelector,
    searchResultsSelector,
    searchResultsSelectorFactory,
} from '../../state/search-auto-complete.selectors';
import { updateSearchKeyAction } from '../../actions/update-search-key.usecase';

function mapStateToProps(state, ownProps) {
    const { searchKey } = ownProps;
    console.log(searchKey + "16");
    return {
        initialValues: { ...searchWordsFormInitialValuesSelector(state) },
        ymmFilterFormValues: searchWordsFormValuesSelector(state),
        recommendations: recommendationsSelector(state),
        searchKey: searchKeySelector(state),
        searchResultsF: searchResultsSelectorFactory(searchKey)(state),
        searchResults: searchResultsSelector(state),
    };
}

const mapDispatchToProps = {
    updateSearchKeyAction
};

export const SearchWordsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    reduxForm({
        form: 'search-words-form-component',
        enableReinitialize: true,
    })(searchWordsFormComp)
);