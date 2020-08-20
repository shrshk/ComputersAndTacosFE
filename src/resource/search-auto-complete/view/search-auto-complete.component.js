// @flow
import React from 'react';
import ReactSearchBox from 'react-search-box';
import { SearchWordsForm } from './search-words-form/search-words-form.container';

type SearchAutoCompletePageProps = {
    loadWordRecommendationsAction: () => void,
};

export class SearchAutoCompleteComp extends React.PureComponent<SearchAutoCompletePageProps> {
    componentDidMount() {
        //this.props.loadWordRecommendationsAction();
    }

    // data = ['fl', 'flo', 'flow', 'flower'];
    data = [
        {
            key: 'fl',
            value: 'fl',
        },
        {
            key: 'flo',
            value: 'flo',
        },
        {
            key: 'flow',
            value: 'flow',
        },
        {
            key: 'flower',
            value: 'flower',
        },
    ];

    render() {
        return (
            <SearchWordsForm />
        )
    }
}
