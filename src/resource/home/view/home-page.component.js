// @flow
import React, { Fragment } from 'react';
import { LeftNav } from '../../left-nav/left-nav.component';

type HomePageProps = {
};

export class HomePage extends React.PureComponent<HomePageProps> {

    render() {
        return (
            <Fragment>
                <LeftNav />
            </Fragment>
        );
    }
}

