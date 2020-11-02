import React, { useState } from 'react';

const AddMovie = ({addMovie}) => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [erros, setErros] = useState({});

    const validForm = () =>{
        console.log('validation');
        let temp = {};
        let flag = true;

        if(title === ''){
            temp.title = "Title must be entered";
            flag = false;
        };
        if(subtitle === ''){
            temp.subtitle = "Subtitle must be entered";
            flag = false;
        };
        if(imageUrl === ''){
            temp.imageUrl = "Image url must be entered";
            flag = false;
        };
        if(description === ''){
            temp.description = "Description must be entered";
            flag = false;
        };

        setErros(temp);
        return flag;
    }

    const setToInitalValue = ()=>{
        setTitle('');
        setSubtitle('');
        setDescription('');
        setImageUrl('');
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!validForm()) return;

        const movie = {
            title,
            subtitle,
            imageUrl,
            description
        };

        addMovie(movie);

        setToInitalValue();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-group col-md-5">
                <label className="form-label">Title</label>
                <input className="form-control" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <div className="erros">{erros.title ? erros.title : null}</div>
            </div>
            <div className="form-group col-md-5">
                <label className="form-label">Subtitle</label>
                <input className="form-control" type="text" value={subtitle} onChange={(e)=> setSubtitle(e.target.value)}/>
                <div className="erros">{erros.subtitle ? erros.subtitle : null}</div>
            </div>
            <div className="form-group col-md-5">
                <label className="form-label">Image url</label>
                <input className="form-control" type="text" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)}/>
                <div className="erros">{erros.imageUrl ? erros.imageUrl : null}</div>
            </div>
            <div className="form-group col-md-5">
                <label className="form-label">Description</label>
                <textarea className="form-control"  value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <div className="erros">{erros.description ? erros.description : null}</div>
            </div>
            <div className="form-group col-md-5">
                <button className="btn btn-primary">Add new movie</button>
            </div>
        </form>
     );
}
 
export default AddMovie;