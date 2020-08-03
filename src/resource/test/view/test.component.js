// @flow
import React from 'react';

type TestPageProps = {
    loadSampleDataAction: () => void,
};

export class TestPage extends React.PureComponent<TestPageProps> {
    componentDidMount() {
        this.props.loadSampleDataAction();
    }

    render() {
        return <div>Test Page</div>;
    }
}
