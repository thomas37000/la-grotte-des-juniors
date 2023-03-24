/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../firebase/config';
import LogOut from '../Auth/SignOut';

const Profil = () => {
  const navigate = useNavigate();

  const signOut = async (e) => {
    e.preventDefault();

    await Auth.signOut()
      .then(function () {
        console.log('Successfully signed out.');
      })
      .catch(function (error) {
        console.log(error);
        console.log('An error occurred');
      });

    window.localStorage.removeItem('name');
    navigate('/');
  };

  return (
    <div className='bg-slate-100 flex items-center justify-around'>
      <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex justify-end px-4 pt-4'></div>
        <div className='flex flex-col items-center pb-10'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg'
            src='/docs/images/people/profile-picture-3.jpg'
            alt='pseudo'
          />
          {/* <img
          classNameName='w-full'
          src={localStorage.getItem('profilImage')}
          alt={localStorage.getItem('name')}
        /> */}
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {localStorage.getItem('name')}
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {localStorage.getItem('email')}
          </span>
          <div className='flex mt-4 space-x-3 md:mt-6'>
            <a
              href='#'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700'
            >
              <LogOut logout={signOut} />
            </a>
          </div>
        </div>
      </div>

      <div>
        <img
          className='h-auto w-80 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          className='h-auto w-80 rounded-lg'
          src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Profil;
