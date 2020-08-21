// @flow
import { connect } from 'react-redux';
import { searchWordsFormComp } from './search-words-form.component';
import {
    searchKeySelector,
    searchResultsSelector,
    prefixListSelector,
} from '../../state/search-auto-complete.selectors';
import { updateSearchKeyAction } from '../../actions/update-search-key.usecase';
import { updatePrefixListAction } from '../../actions/update-prefix-list.usecase';
import { loadAllRecommendationsAction } from '../../actions/load-all-recommendations.usecase';

function mapStateToProps(state) {
    return {
        searchKey: searchKeySelector(state),
        searchResults: searchResultsSelector(state),
        prefixList: prefixListSelector(state),
    };
}

const mapDispatchToProps = {
    updateSearchKeyAction,
    updatePrefixListAction,
    loadAllRecommendationsAction
};

export const SearchWordsForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchWordsFormComp);