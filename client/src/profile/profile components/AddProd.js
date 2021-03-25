import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import '../../css/AddProd.css';
import {createProd} from '../../actions/post.js';
function AddProd() {
    const [show, setShow] = useState(false);
    //state property
    const [prodData, setProdData] = useState(
        {type: 'post', title: '', desc: '', image: '', state: ''}
    );


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const handleform = (e) => {
        e.preventDefault();

       
        dispatch(createProd(prodData));
    }

    return (
        <div>
            < Button onClick={handleShow
} className="btn-add">
                <AddCircleOutlineIcon/>
            </Button>
          
                <Modal show={show} onHide={handleClose} animation={true}>
                    <Modal.Header>
                        <Modal.Title>Creating a product or a service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form autoComplete="off" noValidate="noValidate" onSubmit={handleform}>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                controlId="formGridState"
                                className="add-frm"
                                onSubmit={handleform}>
                                <Form.Control
                                    as="select"
                                    defaultValue="post"
                                    onChange={(e) => setProdData({
                                        ...prodData,
                                        type: e.target.value
                                    })}>
                                    <option >Choose...</option>
                                    <option value="Service">Service</option>
                                    <option value="Product">Product</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Enter the title"
                                    className="add-frm"
                                    value={prodData.title}
                                    onChange={(e) => setProdData({
                                        ...prodData,
                                        title: e.target.value
                                    })}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">

                                <Form.Control
                                    type="text"
                                    placeholder="Enter the Description"
                                    className="add-frm"
                                    name="desc"
                                    value={prodData.desc}
                                    onChange={(e) => setProdData({
                                        ...prodData,
                                        desc: e.target.value
                                    })}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">

                            <Form.Check
                                type="radio"
                                label="Offre"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                className="add-frm"
                                value="Offre"
                                onChange={(e) => setProdData({
                                    ...prodData,
                                    state: e.target.value
                                })}/>
                            <Form.Check
                                type="radio"
                                label="Request"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                className="add-frm"
                                value="Request"
                                onChange={(e) => setProdData({
                                    ...prodData,
                                    state: e.target.value
                                })}/>
                        </Form.Group>
                        <div class="files">
                            <FileBase
                                type="File"
                                multiple={false}
                                onDone={({base64}) => setProdData({
                                    ...prodData,
                                    image: base64
                                })}/>
                        </div>
                        <Button type="submit" className="btn-mod-add">
                            <AddCircleOutlineIcon/>
                            Add prod
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                       
                    </Modal.Footer>
                </Modal>
           
        </div>

    );
}
export default AddProd;