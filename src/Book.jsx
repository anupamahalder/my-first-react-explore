import './Book.css';
export default function Book({book}){
    const {name, price} = book;
    return (
        <div className='book'>
            <p>Book name: {name}</p>
            <p>Book price: {price}</p>
        </div>
    );
}