
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './formPage.css';
import Formulario from '../../components/Form/Form.js'
import { useParams } from 'react-router-dom';
import items from '../../components/CardItem/CardData.js';


const Compra = () =>{
    const {id} = useParams()
    const item = items.find(prod => prod.id === Number(id));

    return (
        <div className=' containerr'>
            <div className='row-1'></div>
            <h5>Once you payed you be able to complete the form to get your course!</h5>
            <div className='button-link'> <a className="button-link-a" target="_blank"  rel="noreferrer" href={item.link}>Pay here</a> </div>

            <Formulario/>
        </div>
    )
}

export default Compra;