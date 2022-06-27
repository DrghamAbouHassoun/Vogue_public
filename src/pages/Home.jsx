import React, {useState} from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal/Modal';

const Home = () => {
  const [modalToggle, setModalToggle] = useState(false)

  const handleModalToggle = () => {
    setModalToggle(!modalToggle);
  }

  return (
    <div className='home'>
        <Header handleModalToggle={handleModalToggle} />
        <Modal open={modalToggle} handleModalToggle={handleModalToggle} />
    </div>
  )
}

export default Home