import React, {Component}from "react";
import s from './AddContacts.module.css'
import PropTypes from 'prop-types';

class AddContacts extends Component {

    static propTypes= {
   name: PropTypes.string,
   phone: PropTypes.string
    }
    
    state = {
        name: '',
        phone: ''
    }

    nameChange = e => {
        this.setState({name:e.currentTarget.value})
    }
    phoneChange = e => {
        this.setState({phone:e.currentTarget.value})
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({name:'',phone:''})
    }


render() {
    return (

        <form className={s.AddContact__form} onSubmit={this.handleSubmit}>
            <div className={s.AddContact__input}>
                <label > <p className={s.AddContact__title}>name</p>  
                  <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={this.state.name}
                onChange={this.nameChange}
            />
                </label>
         </div>
           
            
            <div className={s.AddContact__input}>
             
                  <label > <p className={s.AddContact__title}>number</p>  
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={this.state.phone}
                onChange={this.phoneChange}
            />
              </label>
            </div>
       
            <button type="submit" className={s.AddContact__button}>Add</button>
        
        </form>

    )
}

}
export default AddContacts


