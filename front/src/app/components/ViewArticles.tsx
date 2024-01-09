import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import Article from './Article';

const ViewArticles = ()=> {
    return(
       <div className='grid grid-cols-1 cmd:grid-cols-2 clg:grid-cols-3 place-items-center'>
            {Array.from({ length: 12 }, (_, index) => (
                <Article  key={index}/>
            ))}
       </div>
    );
   
}
export default ViewArticles;
