// @flow
import React from 'react';
import { Routes } from '../../routes';

const rootStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
};

export function AppRoot() {
    return (
        <div style={rootStyle}>
            <Routes />
        </div>
    );
}
