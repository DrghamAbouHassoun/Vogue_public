import React, {useState} from 'react'
import { formatCreditCardNumber, formatCVC } from '../../helpers/formatCreditCardNumber';

const Modal = ({open, handleModalToggle}) => {
    const [number, setNumber] = useState();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState(''); 


    const handleInputChange = (e) => {
        switch(e.target.name) {
            case 'credit_card' :
                e.target.value = formatCreditCardNumber(e.target.value);
                setNumber(e.target.value);
            case "cvv" :
                e.target.value = formatCVC(e.target.value);
                setCvv(e.target.value);
            case "fullname" :
                setName(e.target.value);
            case "date" :
                setDate(e.target.value)
            default : return null;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(
            {
                name,
                date,
                cvv,
                number,
            }
        )
    }

    return (
        <div className={`custom-modal ${open ? "active" : ''}`}>
            <button className="modal-background" onClick={() => handleModalToggle(false)}></button>
            <form className="modal-form" onSubmit={handleSubmitForm}>
                <div className="form-header">    
                    <img src="./assets/images/users/user-1.png" alt='user icon' />
                    <h3>payment info</h3>
                </div>
                <div className="form-group">
                    <label htmlFor='fullname'>FULLNAME</label>
                    <input 
                        type="text" 
                        name='fullname' 
                        placeholder='Name'
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='credit_card'>CRIDIT CARD NUMBER</label>
                    <input
                        type="tel"
                        name="credit_card"
                        placeholder="0000 0000 0000 0000"
                        pattern="[\d| ]{16,22}"
                        value={number}
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="form-col-2">
                            <label htmlFor='exp'>EXP</label>
                            <input 
                                type="month" 
                                name='date'
                                placeholder='DD/MM/YY' 
                                value={date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-col-2">
                            <label htmlFor='cvv'>CVV</label>
                            <input 
                                type="text"
                                name='cvv'
                                maxLength={3} 
                                placeholder="123"
                                value={cvv}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="submit-button">CONFIRM PAYMENT</button>
            </form>
        </div>
    )
}

export default Modal