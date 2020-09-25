
import React, {useState} from 'react';
import {Modal} from 'react-bulma-components';
import Header from './Header';
import AddButton from './Addbutton';
import ListProducts from './ListProducts';

const ProductLayout = () =>{
    const [isModalOpen, setIsModalOpen] = useState (false);
    return(
    <>
    <Header title="Productos"/>
    <AddButton AddButton onClick={()=> setIsModalOpen(true)}/>
    <ListProducts/>
    <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Card>
          <Modal.Card.Head showClose={false}>
            <Modal.Card.Title>
              Add Product
            </Modal.Card.Title>
          </Modal.Card.Head>
          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
   
    </>
    )  
}


export default ProductLayout;