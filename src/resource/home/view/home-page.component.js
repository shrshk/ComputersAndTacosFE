// @flow
import React from 'react';

type HomePageProps = {
};

export class HomePage extends React.PureComponent<HomePageProps> {

    render() {
        return <div>
            Shirish is still building stuff, check back soon, until then:
            <div>
                use this CURL to get data from a dictionary trie (ignore the $ sign):
                <div>
                    <code>
                        ${`curl --location --request POST 'https://api.computersandtacos.com/tries/search' \
                    --header 'Content-Type: text/plain' \
                    --data-raw '{
                    "queryString": ["ab", "c", "d"]
                }'`}
                    </code>
                </div>
            </div>
        </div>;
    }
}
