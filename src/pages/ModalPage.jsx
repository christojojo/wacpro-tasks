import Modal from '../components/Modal/Modal'
import React from 'react'

function ModalPage() {
  return (
    <div className='w-full'>
      <Modal 
      ModalTitle='Modal Title'
      ModalContent='lorem ipsum kaplicha kuplinja kapalmayathu.....'
      className='max-w-[500px] '
      centered={true}
       ></Modal>
    </div>
  )
}

export default ModalPage
