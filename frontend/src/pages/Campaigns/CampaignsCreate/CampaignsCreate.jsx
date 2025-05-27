
// css
import styles from './CampaignsCreate.module.css';
import styles_campaignsView from '../CampaignsView/CampaignsView.module.css';
import styles_accountDetails from '../../Users/AccountDetails/AccountDetail.module.css';

// hooks
import { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import SideBar from '../../../components/SideBar/SideBar';

// context
import { UserContext } from '../../../context/UserContext';


const CampaignsCreate = () => {
    // states
    const [ fieldsValues, setFieldsValue ] = useState({
        moderator_id: '', title: '', description: '', start_date: '', end_date: ''
    });

    // consts
    const navigate = useNavigate();
    const modal = useRef(null);
    const modal_title = useRef(null);
    const modal_msg = useRef(null);
    const modal_btt = useRef(null);
    const modal_btt_2 = useRef(null);
    const { userId } = useContext(UserContext);


    // userId for moderator_id
    useEffect(() =>{
        setFieldsValue({...fieldsValues, moderator_id: userId});
    }, [userId]);


    //handle form
    const handleForm = async (e) =>{
        e.preventDefault();

        console.log(fieldsValues);
    };


    return (
        <div className={ styles_campaignsView.container_campaigns }>
            { /* Modal */ }
            <div className='modal' ref={ modal }>
            <div className='modal-background'></div>
                <div className='modal-card'>
                    <header className='modal-card-head'>
                        <p className='modal-card-title' style={{ textAlign:'center' }} ref={ modal_title }>
                            Espere um pouco
                        </p>
                    </header>
                    <section className='modal-card-body'>
                        <p className='modal-card-title' ref={ modal_msg } style={{ textAlign:'center' }}>Mensagem de aviso...</p>
                    </section>
                    <footer className='modal-card-foot is-justify-content-center'>
                        <div className='div-buttons'>
                            <button className="button is-danger is-dark" ref={ modal_btt }>
                                Excluir
                            </button>
                            <button className="button is-primary is-dark" ref={ modal_btt_2 } style={{ marginLeft:'10px' }}>
                                Voltar
                            </button>
                        </div>
                    </footer>
                </div>
            </div>

            { /* SIDEBAR */ }
            <SideBar />

            { /* FEED CONTAINER */ }
            <div className={ styles_accountDetails.form_container }>
                <form onClick={ handleForm } className={ styles_accountDetails.user_panel_container }>
                    <h1 className='title is-1'>Criação de campanha</h1>
                    <hr className='hr' />

                    <h4 className="subtitle is-4">Por favor, preencha: </h4>

                    <div className={ styles_accountDetails.container_input }>
                        <label className="label title is-5" id="label">Titulo: </label>
                        <input className="input is-hovered" name='title' type="text" required 
                        placeholder='Ex: "Campanha o agasalho"' style={{ width:'80%' }}
                        value={ fieldsValues.title } onChange={(e) => setFieldsValue({...fieldsValues, title: e.target.value})}/>
                    </div>

                    <div className={`control ${styles_accountDetails.textarea_container}`}>
                        <label className="label title is-5" id="label">Descrição: </label>
                        <textarea className="textarea is-hovered" name='description' style={{ minHeight:'30vh' }}
                        placeholder='Ex: "Ajude a levar calor e esperança a quem mais precisa nesta temporada de frio. Doe agasalhos, cobertores e acessórios de inverno para famílias e pessoas em situação de vulnerabilidade. Juntos, podemos fazer a diferença! ❤️🧥. 
📍 Pontos de coleta: [Listar locais ou link] 
📅 Período: [Datas da campanha] Sua doação aquece o corpo e o coração!"'
                        value={ fieldsValues.description } onChange={(e) => setFieldsValue({...fieldsValues, description: e.target.value})}>
                                                
                        </textarea>
                    </div>

                    <div className={ styles_accountDetails.container_input }>
                        <label className="label title is-5" id="label">Data de inicio: </label>
                        <input className="input is-hovered" name='start-date' type="date" required 
                        style={{ width:'40%' }}
                        value={ fieldsValues.start_date } onChange={(e) => setFieldsValue({...fieldsValues, start_date: e.target.value})}/>
                    </div>

                    <div className={ styles_accountDetails.container_input }>
                        <label className="label title is-5" id="label">Data de fim: </label>
                        <input className="input is-hovered" name='end-date' type="date" required 
                        style={{ width:'40%' }}
                        value={ fieldsValues.end_date } onChange={(e) => setFieldsValue({...fieldsValues, end_date: e.target.value})}/>
                    </div>

                    <hr className='hr' />

                    <button className="button is-primary is-dark">
                        Publicar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CampaignsCreate;
