import { useEffect, useState } from 'react';
import Book from '../types/book';


export function getBooks(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
    fetch("http://localhost:9000/api/book/all")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setBooks(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])
    
    return books;
}

export function getBooksByTag(idTag: number){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
    fetch("http://localhost:9000/api/tag/"+idTag+"/book/all")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setBooks(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])
    
    return books;
}

