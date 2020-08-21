// @flow
import React, { Fragment } from 'react';
import { SearchWordsForm } from './search-words-form/search-words-form.container';
import { SearchWordResultList } from './search-word-result-list';

type SearchAutoCompletePageProps = {
};

export const SearchAutoCompleteComp = () => {
    return (
        <Fragment>
            <SearchWordsForm />
            <SearchWordResultList />
        </Fragment>
    )
};
