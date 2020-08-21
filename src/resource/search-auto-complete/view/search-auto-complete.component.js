// @flow
import React, { Fragment } from 'react';
import { SearchWordsForm } from './search-words-form/search-words-form.container';
import { AllRecommendationsList } from './all-recommendations-list.component';

type SearchAutoCompletePageProps = {
};

export const SearchAutoCompleteComp = (props: SearchAutoCompletePageProps) => {
    const { allRecommendations, prefixList } = props;
    return (
        <Fragment>
            <SearchWordsForm />
            {
                Object.keys(allRecommendations).length!=0 &&
                <AllRecommendationsList allRecommendations={allRecommendations} prefixList={prefixList} />
            }

        </Fragment>
    )
};
