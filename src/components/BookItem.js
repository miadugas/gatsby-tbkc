import React from 'react';
import styled from "styled-components";

const BookItemWrapper = styled.section`
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin-bottom: 8px;
    display: flex;

    h2 {
        small {
            font-size: 14px;
            padding-left: 8px;
            font-weight: normal;
    }
    }
`;

const BookItemImageWrapper = styled.div`
    max-width: 200px;

    img{
    max-width: 200px;
    }
`;

const BookItemContentWrapper = styled.div`
    flex-grow: 1;
    padding-left: 68px;
`;

const BookItem = ({authorName, bookTitle, bookSummary, bookCover, children }) => {
    return (
        <BookItemWrapper>
            <BookItemImageWrapper>
            <img src={bookCover} alt="Book cover"/>
            </BookItemImageWrapper>
            <BookItemContentWrapper>
                <h2>
                {bookTitle}
                <small>{authorName}</small>
                </h2>
                <p>{bookSummary}</p>
                <div>
                {children}
                </div>
            </BookItemContentWrapper>
        </BookItemWrapper>
    )
}

export default BookItem;