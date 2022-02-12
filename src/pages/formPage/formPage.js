
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './formPage.css';
import Formulario from '../../components/Form/Form.js'

const Compra = () =>{
    return (
        <div className=' containerr'>
            <div className='row-1'></div>
            <h5>Complete the form to get your course!</h5>
            <Formulario/>
        </div>
    )
}

export default Compra;