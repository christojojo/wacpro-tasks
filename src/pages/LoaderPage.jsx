import React, { useState } from 'react'
import Loader from '../components/Loader/Loader'
import Button from '../components/Button';

function LoaderPage() {

  return (

    <div className='element-wrap flex flex-col gap-4  '>
      <h1 className='pb-3 text-lg font-semibold text-center'>loader</h1>
      <div>
      <Button loading='true' children={'loader demo'} variant='primary'></Button>    
      </div>
        <div>
        <Button loading='true' children={'loader demo'} variant='secondary'></Button>
</div>    
    </div>
  )
}

export default LoaderPage




