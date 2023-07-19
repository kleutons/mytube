import * as C from './style';
import { RiVideoChatLine } from 'react-icons/ri';
import {HiOutlineUserCircle } from "react-icons/hi2";
import { ButtonText } from '../../components/button';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from 'react';
import Input from '../../components/Input';
import { VideoComponent } from '../../components/videoComponent';
import moment from "moment";



import imagem0 from '../../assets/lgChannel0.jpg';
import imagem1 from '../../assets/lgChannel1.jpg';
import imagem2 from '../../assets/lgChannel2.jpg';
import imagem3 from '../../assets/lgChannel3.jpeg';
import imagem4 from '../../assets/lgChannel4.jpg';
import imagem5 from '../../assets/lgChannel5.jpg';
import imagem6 from '../../assets/lgChannel6.jpg';
import imagem7 from '../../assets/lgChannel7.jpg';
import imagem8 from '../../assets/lgChannel8.jpg';
import imagem9 from '../../assets/lgChannel9.jpg';
import imagem10 from '../../assets/lgChannel10.jpg';






function Library(){

    const { logged } = useAuth();

    const navigate = useNavigate();

    return(
        <C.Container>
            
            { logged ?
                <>
                <PageChannel />
                </>
                :
                <>
                <RiVideoChatLine className="svgTitle" />
                <h2>Tenha acesso aos seus vídeos.</h2>
                Faça login para acessar os vídeos salvos
                
                <ButtonText onClick={() => navigate('/mytube/login')} svgIcon={<HiOutlineUserCircle />} text='Fazer Login' margin="15px 0" />
                </>
            }
             
        </C.Container>
        )
}

export default Library;


const PageChannel = () => {
    const { user_data } = useAuth();

    const [selectMenu, setSelectMenu] = useState('INICIO');
    const handleMenuClick = (menuItem:string) => {
        setSelectMenu(menuItem);
      };

    const renderSelectedPage = () => {
    switch (selectMenu) {
        case 'INICIO':
        return <SubPageHome />;
        case 'PLAYLISTS':
        return <SubPagePlaylists />;
        case 'COMUNIDADE':
        return <SubPageCommunity />;
        case 'CANAIS':
        return <SubPageChannels />;
        case 'SOBRE':
        return <SubPageAbout />;
        default:
        return null;
    }
      };
    

    return (
      <>
        <C.Header>
            <div className='iconChannel'>{user_data.nome?.charAt(0).toUpperCase()}</div>
            <div className='dataChannel'>
                <h2>{user_data?.nome}</h2>
                <span>{user_data?.email} | 10 inscritos </span>
                <div> Saiba mais sobre este canal &gt; </div>
            </div>
        </C.Header>  
        
        <C.ChannelMenu>
            <div className={selectMenu === 'INICIO' ? 'active' : ''} onClick={() => handleMenuClick('INICIO')}>INICIO</div>
            <div className={selectMenu === 'PLAYLISTS' ? 'active' : ''} onClick={() => handleMenuClick('PLAYLISTS')}>PLAYLISTS</div>
            <div className={selectMenu === 'COMUNIDADE' ? 'active' : ''} onClick={() => handleMenuClick('COMUNIDADE')}>COMUNIDADE</div>
            <div className={selectMenu === 'CANAIS' ? 'active' : ''} onClick={() => handleMenuClick('CANAIS')}>CANAIS</div>
            <div className={selectMenu === 'SOBRE' ? 'active' : ''} onClick={() => handleMenuClick('SOBRE')}>SOBRE</div>
        </C.ChannelMenu>

        
        <C.ContainerPages>
        {renderSelectedPage()}
        </C.ContainerPages>
        
      </>
    );
  };

const SubPageHome = () => {

    function getLocalStorage(bd:string){
        return JSON.parse(localStorage.getItem(bd) || 'null') 
    }

    // Verificar se o item 'video_bd' existe no localStorage
    if (localStorage.getItem('video_bd') === null) {
        // O item não existe, então criamos um novo 
        const video_bd = {};       
        localStorage.setItem("video_bd", JSON.stringify(video_bd));
    }

    const { user_data } = useAuth();
    const user = user_data.email;    
    const [error, setError] = useState('');
    const [showModal, setshowModal ] = useState(false);
    const [video_bd, setVideo_bd] = useState( getLocalStorage('video_bd') );
    const [videosUser, setVideosUser ] = useState([]);

 
    function openModal(){
        setshowModal(true);
    }
    function closeModal(){
        setshowModal(false)
    }


    //- InsertVideo --
    const InsertVideo = (url:string, title:string, description: string) => {  
        let lastId = 0; // Variável para rastrear o último ID utilizado

        const dataHoraAtual = new Date();
        const date = dataHoraAtual.toISOString().slice(0, 19).replace('T', ' ');       
        
        if(!user){
            setError('Usuário não Encontrado!');
            return
        }

        // Obtém os dados do localStorage
        const storedData = localStorage.getItem('video_bd');
        let video_bd = storedData ? JSON.parse(storedData) : {};
        
        // Verifica se o usuário já possui vídeos cadastrados
        if( video_bd[user] ){
            lastId = video_bd[user].length + 1;  
            video_bd[user].push({ id: lastId, url, title, description, date });
        }else{
            lastId = 1;
            video_bd[user] = [{ id: lastId, url, title, description, date }];
        }

        localStorage.setItem("video_bd", JSON.stringify(video_bd));
        setVideo_bd( video_bd );
        return;
    }


    function handleSubmit(event: any){
        event.preventDefault(); // Evita o recarregamento da página
        setError('');
        const urlValue = event.currentTarget.querySelector('[name="url"]').value;
        const tituloValue = event.currentTarget.querySelector('[name="titulo"]').value;
        const descricaoValue = event.currentTarget.querySelector('[name="descricao"]').value;
        // Verificar se todos os campos estão vazios
        if (!urlValue || !tituloValue || !descricaoValue ) {
          const msg = 'Por favor, preencha todos os campos.';
          setError(msg);
        }else{
          InsertVideo(urlValue, tituloValue, descricaoValue);
          alert('Vídeo Enviado com Sucesso!')
          closeModal();
        }
        
      }


    function deleteVideoId( id: number ){
        
        const confirme = window.confirm('Deseja Excluir?');
        if (!confirme) {           
            console.log('Ação cancelada!');
            return;
        }

        const hasVideos = getLocalStorage('video_bd') ;
        
        interface IProps{
            id: number
        }

        if(user &&  hasVideos[user]){ 
            // Filtra Array
            const updateVideos = hasVideos[user].filter( (data:IProps) => data.id !== id )

            //Verifica de houve auteração
            if(updateVideos.length !== video_bd[user].length){
                hasVideos[user] = updateVideos;
                //Salva dados
                localStorage.setItem("video_bd", JSON.stringify(hasVideos));
                setVideo_bd( hasVideos );
                alert('Vídeo Excluído Com Sucesso!')
                return;
            }
        }else{
            alert('Usuario não encontrado!');
            return;
        }
    }


    
    useEffect(() => {
        
            setVideosUser(video_bd[user]);
    }, [user, video_bd, user_data.email]);

    function getPublishedTime(publishedAt: string) {
        const now = moment();
        const publishedTime = moment(publishedAt);
        const diffDays = now.diff(publishedTime, 'days');
    
        if (diffDays <= 0) {
          return 'hoje';
        } else if (diffDays === 1) {
          return 'há 1 dia';
        } else if (diffDays <= 7) {
          return `há ${diffDays} dias`;
        } else if (diffDays <= 30) {
          const diffWeeks = Math.floor(diffDays / 7);
          if (diffWeeks === 1) {
            return 'há 1 semana';
          } else {
            return `há ${diffWeeks} semanas`;
          }
        } else if (diffDays <= 365) {
          const diffMonths = Math.floor(diffDays / 30);
          if (diffMonths === 1) {
            return 'há 1 mês';
          } else {
            return `há ${diffMonths} meses`;
          }
        } else {
          const diffYears = Math.floor(diffDays / 365);
          if (diffYears === 1) {
            return 'há 1 ano';
          } else {
            return `há ${diffYears} anos`;
          }
        }
    }
    

      interface Videos {
            id: number;
            url: string;
            title:string;
            date:string;
            description:string
        }

    return(
        <>
            <h3>Seus Vídeos:</h3>
            <button onClick={openModal}>
                Enviar Vídeo
            </button>
            <C.ContainerVideoUser>
                { videosUser &&
                    videosUser.map((data:Videos) => (
                        // Realize as operações desejadas com cada vídeo
                        
                        <div key={`${data.id} ${data.title}`}>
                            <VideoComponent                            
                                title={data.title} 
                                thumbnail={data.url} 
                                channelImage='img/lgChannel.jpg' 
                                channelName={data.description}
                                details={`Data Envio: ${getPublishedTime(data.date)}`} 
                            />
                            <span className='excluir' onClick={() => deleteVideoId(data.id)}>X Excluir</span>                            
                        </div>
                        
                        
                    ))
                }
            </C.ContainerVideoUser>

            {showModal && (
                <div className="modal">
                    
                <form className="modal-content" onSubmit={handleSubmit}>
                    <button className="close-button" onClick={closeModal}>X</button>
                    <h2>Eviar um Novo vídeo:</h2>
                    <Input name='url' type='text' placeholder='URL da Capa do Vídeo, ex: https://image.server.com/imagen.jpg' required />
                    <Input name='titulo' type='text' placeholder='Titulo do vídeo' required />
                    <Input name='descricao' type='text' placeholder='Descrição do video' required/>

                    <label>{error}</label>

                    <footer>
                        <button type='submit' className='btnSalve' >Salvar Vídeo</button>
                        <button onClick={closeModal}>Fechar</button>
                    </footer>
                </form>
                </div>
            )}

        </>
    )
}


const SubPagePlaylists = () => {

    return(
        <>
            <h3>Playlists criadas:</h3>
        </>
    )
}

const SubPageCommunity = () => {

    return(
        <>  <h3>Comunidade:</h3>
            Publicar postagem
            <br/>
            As postagens aparecem aqui depois de publicadas e ficam visíveis para a comunidade
        </>
    )
}



const SubPageChannels = () => {

    const imagens = [
        { id: 0, name: 'Channel 00', icon: imagem0},
        { id: 1, name: 'Channel 01', icon: imagem1},
        { id: 2, name: 'Channel 02', icon: imagem2},
        { id: 3, name: 'Channel 03', icon: imagem3},
        { id: 4, name: 'Channel 04', icon: imagem4},
        { id: 5, name: 'Channel 05', icon: imagem5},
        { id: 6, name: 'Channel 06', icon: imagem6},
        { id: 7, name: 'Channel 07', icon: imagem7},
        { id: 8, name: 'Channel 08', icon: imagem8},
        { id: 9, name: 'Channel 09', icon: imagem9},
        { id: 10, name: 'Channel 10', icon: imagem10},
    ];

    return(
        <>
            <h3>Inscrições Exemplos:</h3>
            <C.ContainerVideoInsc>
            {imagens.map((imagem) => (
                <div key={imagem.name}>
                <img className='insc' key={imagem.id} src={imagem.icon} alt={`Imagem ${imagem.id}`} />
                <span>{imagem.name}</span>
                <span className='button'>Inscrito</span>
                </div>
            ))}
            </C.ContainerVideoInsc>
        </>
    )
}



const SubPageAbout = () => {

    return(
        <>
            <h3>Descrição do Canal:</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis incidunt ab aperiam tempora impedit ipsum dolorem molestias, porro cum, earum dolorum, enim a! Vero sapiente voluptatem veniam ipsa expedita.
            </p>
        </>
    )
}