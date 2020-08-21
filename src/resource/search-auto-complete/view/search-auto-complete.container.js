// @flow
import { connect } from 'react-redux';
import { SearchAutoCompleteComp } from './search-auto-complete.component';
import { loadWordRecommendationsAction } from '../actions/load-word-recommendations.usecase';
import { allRecommendationsSelector, prefixListSelector } from '../state/search-auto-complete.selectors';

function mapStateToProps(state) {
    return {
        allRecommendations: allRecommendationsSelector(state),
        prefixList: prefixListSelector(state),
    };
}

export const SearchAutoComplete = connect(
    mapStateToProps,
    null
)(SearchAutoCompleteComp);
