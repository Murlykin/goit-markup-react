import Icon from '../images/icons.svg';

const Modal = () => {
    return (
        <>
            <div className="backdrop is-hidden" data-modal>
                <div className="modal">
                    <form className="form">
                        <h2 className="form__text ">
                            Залиште свої дані, ми вам передзвонимо
                        </h2>
                        <div className="form__field">
                            <label className="form__label">Ім`я</label>
                            <div className="form__icones">
                                <input
                                    className="form__input"
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                                <svg className="form__icon" width="18" height="18">
                                    <use href={Icon + '#icon-person'}></use>
                                    
                                </svg>
                            </div>
                        </div>

                        <div className="form__field">
                            <label className="form__label">Телефон</label>
                            <div className="form__icones">
                                <input
                                    type="tel"
                                    className="form__input"
                                    name="tel"
                                    id="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                    placeholder="xxx-xxx-xx-xx"
                                />
                                <svg className="form__icon" width="18" height="18">
                                     <use href={Icon + '#icon-phone-2'}></use>
                                </svg>
                            </div>
                        </div>

                        <div className="form__field">
                            <label className="form__label">Пошта</label>
                            <div className="form__icones">
                                <input
                                    type="email"
                                    className="form__input"
                                    name="mail"
                                    id="mail"
                                />
                                <svg className="form__icon" width="18" height="18">
                                    <use href={Icon + '#icon-email-22'}></use>
                                    
                                </svg>
                            </div>
                        </div>

                        <div className="form__field">
                            <label className="form__label">Коментар</label>
                            <textarea
                                name="comment"
                                className="form__comment"
                                id="comment"
                                placeholder="Введіть текст"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <div className="agree__field">
                            <label className="agree__label">
                                <input
                                    type="checkbox"
                                    className="agree__input"
                                    name="agree"
                                    id="agree"
                                />
                                <span className="agree__icone"></span>
                                <div>
                                    Погоджуюся з розсилкою та приймаю  
                                    <a href="#" className="dek">
                                        Умови договору
                                    </a>
                                </div>
                            </label>
                        </div>
                        <button type="submit" className="modal__button">
                            Відправити
                        </button>

                        <button type="button" className="modal__close" data-modal-close>
                            <svg className="modal__img" width="18" height="18">
                                <use href={Icon + '#icon-close-black'}></use>
                             
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;
