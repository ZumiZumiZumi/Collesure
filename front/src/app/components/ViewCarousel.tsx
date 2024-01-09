import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import Article from './Article';

const ViewCarousel = ()=> {
    return(
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Article Carousel</h1>
            <Carousel articles={articles} />
        </div>
    );
   
}
export default ViewCarousel;
