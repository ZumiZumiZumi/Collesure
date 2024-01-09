// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import '../globals.css'
// import Link from 'next/link'
// import Article from './Article';
// import { useState } from 'react';

// interface ArticleData {
//   userId: string;
//   userName: string;
//   title: string;
//   articleImage: string;
//   mainTag: string;
//   userImage: string;
// }

// interface ArticleCarouselProps {
//   articles: ArticleData[];
// }

// const Carousel: React.FC = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const showPrevArticles = () => {
//     setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
//   };

//   const showNextArticles = () => {
//     setStartIndex((prevIndex) =>
//       Math.min(prevIndex + 3, articles.length - 3)
//     );
//   };

//   const visibleArticles = articles.slice(startIndex, startIndex + 3);

//   return (
//     <div className="flex items-center">
//       <button className="mr-2" onClick={showPrevArticles}>
//         ←
//       </button>
//       {Array.from({ length: 18 }, (_, index) => (
//                 <Article  key={index}/>
//             ))}
//       <button onClick={showNextArticles}>→</button>
//     </div>
//   );
// };
  
//   export default Carousel;
