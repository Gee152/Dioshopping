import { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {

    const url = 'http://localhost:500/message'
    const [message, setMassage] = useState([]);
    const [author,setAuthor] = useState ('');
    const [content, setContent] = useState('');
    const [validater, SetValidater] = useState(false);
    const [render,setRender] = useState(false);
    const [sucess, setSucess] = useState(false);

    useEffect(async () =>{
        const response = await fetch('http://localhost:5000/message')
        const date = await response.json();
        setMassage(date);        
    }, [render])

    const sendMessage = () => {
        SetValidater(false);
        if(author.length <= 0 || content.length <= 0)
                return SetValidater(!validater)
            
                const bodyform = {
                    email: author, 
                    message: content,
                }
    }
    fetch(url, {
        method: "POST",
        headers: {
            "contant-Type": "applicationjson"
        },
            body: JSON, stringify(bodyfarm)
    })
    .then[(response) => response.json()]
    .then((data) => {
        if(date.id) {
            
            setRender(true);
            setSucess(true);
            setTimeout(() => {
                setSucess(false);
            }, 5000)
        }
    })
    
    
    setAuthor('');
    setContent('');

    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" value={author} onChange={(event)=>{setAuthor(event.target.value)}} fullWidth/>
                <TextField id="message" label="Message" value={content} onChange={(event)=>{setContent(event.target.value)}} fullWidth/>
            </Grid>
                    {/*Alerta Bootstrap*/}
                    {validater &&
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Preencher os campos!</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"></button>
                    </div>
                    }

                    {/*Alerta Bootstrap*/}
                    {sucess &&
                    <div className="alert alert-sucess alert-dismissible fade show" role="alert">
                        <strong>Msg enviada!</strong>
                        
                    </div>
                    }

            <Button onClick={sendMessage} className="at-2" variant="contained" color="primary">
                Sent
            </Button>
                (massage.map((content) => {
                    return(
                            {/*Introduzido o card bootstrap*/}
                            <div className="card mt-2" key={(content.id)}>
                                <div className="card-body">
                                    <h5 className="card-title">{content.email}</h5>
                                    <p className="card-text">{content.message}</p>
                                    <p className="card-text"><small class="text-muted">{content.created_at}</small></p>
                                </div>
                            </div>
                    )
                }))       
        </>
    ) 
}
export default Contatos;
