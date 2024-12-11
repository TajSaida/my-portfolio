import React from 'react';
import LoadingImag from '../../public/load3.gif';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex items-center justify-center"
        style={{ height: '300px', width: '300px' }}
      >
        <Image className="opacity-70" src={LoadingImag} alt="loading-img" />
      </div>
    </div>
  );
}
