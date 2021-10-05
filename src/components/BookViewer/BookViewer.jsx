import React from 'react';

const BookViewer = (props) => {
    return ( 
    <div className="row row-spacer">
        <div className="col-md-4">
            {/*Button here to move to the pervious book viewed*/}
            <button onClick={props.PreviousBook}>Previous Book</button>
        </div>
        <div className="col-md-4">
            {/*Display book with cover here*/}
            <h1>{props.book.title}</h1>
            <h4>{props.book.author}</h4>
        </div>
        <div className="col-md-4"> 
            {/*Button here to move to the pervious book viewed*/}
            <button onClick={props.NextBook}>Next Book</button>
        </div>
    </div>
 );
}
 
export default BookViewer;