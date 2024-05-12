import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { signInUser } from '../../firebase'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getFirestore, addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../../firebase-config';

const FormPost = ({ editPostData }) => {
    const app = initializeApp(getFirebaseConfig());
    const db = getFirestore(app);
    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (state && state.postToEdit) {
            console.log(state, 'State')
            const { title, content, image } = state.postToEdit;
            setTitle(title);
            setValue(content);
            setImage(image);
        }
    }, [state]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };


    const saveContentToFirebase = async () => {
        try {
            const post = {
                userId: 'tu_id_de_usuario',
                title,
                content: value,
                timestamp: serverTimestamp(),
                image: image,
            };
            if (id) {
                await updateDoc(doc(db, 'posts', id), post);
            } else {
                await addDoc(collection(db, 'posts'), post);
            }
            console.log('Contenido guardado en Firebase');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error al guardar el contenido en Firebase: ', error);
        }
    };
    return (
        <section className='bg-white w-100 h-100'>
            <div className='container'>
                <div className='my-5'>
                    <div className='input-group mb-3'>
                        <label className='input-group-text'>Titulo de la Noticia</label>
                        <input
                            className='form-control'
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='input-group mb-3'>
                        <input className='form-control' type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />
                    <div className='py-2'>
                        <button className='btn btn-primary p-2' onClick={() => saveContentToFirebase()}>{ id ? 'Modificar' : 'Publicar'}</button>
                        <button className='btn btn-danger p-2 mx-2' onClick={() => navigate(-1)}>Cancelar</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormPost