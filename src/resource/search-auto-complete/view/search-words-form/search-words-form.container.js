//@flow
import { connect } from 'react-redux';
import { SearchWordsFormComp } from './search-words-form.component';
import { updateSearchKeyAction } from '../../actions/update-search-key.usecase';
import { searchResultsSelector, searchKeySelector } from '../../state/search-auto-complete.selectors';

function mapStateToProps(state) {
    return {
        searchResults: searchResultsSelector(state),
        searchKey: searchKeySelector(state),
    }
}


const mapDispatchToProps = {
    updateSearchKeyAction
};

export const SearchWordsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchWordsFormComp);