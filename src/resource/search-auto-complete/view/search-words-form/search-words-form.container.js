// @flow
import { connect } from 'react-redux';
import { searchWordsFormComp } from './search-words-form.component';
import {
    searchKeySelector,
    searchResultsSelector,
} from '../../state/search-auto-complete.selectors';
import { updateSearchKeyAction } from '../../actions/update-search-key.usecase';

function mapStateToProps(state) {
    return {
        searchKey: searchKeySelector(state),
        searchResults: searchResultsSelector(state),
    };
}

const mapDispatchToProps = {
    updateSearchKeyAction
};

export const SearchWordsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchWordsFormComp);