// @flow
import { connect } from 'react-redux';
import { SearchAutoCompleteComp } from './search-auto-complete.component';
import { loadWordRecommendationsAction } from '../actions/load-word-recommendations.usecase';

const mapDispatchToProps = {
    loadWordRecommendationsAction,
};

export const SearchAutoComplete = connect(
    null,
    mapDispatchToProps
)(SearchAutoCompleteComp);
