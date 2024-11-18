import React from 'react';
import Book from './Book';

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 react" numOfPage="300"/>
            <Book name="처음 만난 spring boot" numOfPage="550"/>
            <Book name="처음 만난 mysql" numOfPage="250"/>
        </div>
    );
}

export default Library;