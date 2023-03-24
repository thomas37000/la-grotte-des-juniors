/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      // l'appel de l'ap
      .get(``)
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading)
    return (
      <button
        disabled
        type='button'
        class='py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center'
      >
        <svg
          aria-hidden='true'
          role='status'
          class='inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600'
          viewBox='0 0 100 101'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='#1C64F2'
          />
        </svg>
        Loading...
      </button>
    );
  if (error) return <div>Error...</div>;

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      {/* 
        {images &&
          images.map((img, index) => (
            <div> <Card key={index} {...img} /> </div>
        ))} 
      */}

      {/* TODO : ajouter un boutton pour voter */}

      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
          alt=''
        />

        <div className='flex items-center'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-yellow-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Rating star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>
            4.95
          </p>
          <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
          <a
            href='#'
            className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
          >
            10 votes
          </a>
        </div>
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
          alt=''
        />
        <div className='flex items-center'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-yellow-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Rating star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>
            3.50
          </p>
          <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
          <a
            href='#'
            className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
          >
            6 votes
          </a>
        </div>
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
          alt=''
        />
        <div className='flex items-center'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-yellow-400'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Rating star</title>
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
          </svg>
          <p className='ml-2 text-sm font-bold text-gray-900 dark:text-white'>
            4.00
          </p>
          <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
          <a
            href='#'
            className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
          >
            8 votes
          </a>
        </div>
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto max-w-full rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Home;
