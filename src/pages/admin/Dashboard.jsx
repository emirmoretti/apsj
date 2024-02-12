import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/auth-context';
import 'react-quill/dist/quill.snow.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getFirebaseConfig } from '../../firebase-config';
import { Tab, Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Dashboard = () => {
    const app = initializeApp(getFirebaseConfig());
    const db = getFirestore(app);
    const navigate = useNavigate();
    const { currentUser, signOut } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);

    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const postsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    timestamp: new Date(doc.timestamp),
                    ...doc.data(),
                }));
                console.log(postsData)
                setPosts(postsData);
            } catch (error) {
                console.error('Error al obtener los datos de Firebase: ', error);
            }
        };
        fetchData();
    }, [db]);

    const createNewPost = () => {
        navigate('/form-post');
    };

    const deletePost = async (postId) => {
        try {
            await deleteDoc(doc(db, 'posts', postId));
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
            notifySuccess('Contenido eliminado con exito.');
            console.log('Contenido eliminado de Firebase');
        } catch (error) {
            notifyError('Error al eliminar contenido.')
            console.error('Error al eliminar el contenido de Firebase: ', error);
        }
    };

    const editPost = (id) => {
        const postToEdit = posts.find((post) => post.id === id);
        navigate(`/form-post/${id}`, { state: { postToEdit } });
    };

    const header = (
        <div className="d-flex flex-wrap align-items-center justify-content-between">
            <span className="text-xl text-900 font-bold">Panel Noticias</span>
            <div className='align-self-end'>
                <Button className='' onClick={createNewPost}>
                    Crear Noticia
                </Button>
            </div>
        </div>
    );

    return (
        <>
            <section className='container py-5'>
                <div className='d-flex flex-column align-content-center'>
                    <h3 className='underline'>Bienvenido! {currentUser?.email}</h3>
                    <p className=''> Status: {currentUser && <span className='text-success'>Active</span>}</p>
                    <div className='d-flex flex-column' data-aos="zoom-in" data-aos-duration="3000">
                        <DataTable value={posts} header={header} paginator className='box-shadow' 
                            rows={5}
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            size='small'
                            tableStyle={{ minWidth: '50rem' }}>
                            <Column field="title" header="Titulo" sortable></Column>
                            <Column header="Fecha de Publicación" sortable field='timestamp' body={(rowData) => rowData.timestamp && rowData.timestamp.toDate().toLocaleString()}></Column>
                            <Column
                                header="Acciones"
                                body={(rowData) => (
                                    <>
                                        <button className='btn btn-primary mx-2' onClick={() => editPost(rowData.id)}>Editar</button>
                                        <button className='btn btn-danger' onClick={() => deletePost(rowData.id)}>Eliminar</button>
                                    </>
                                )}
                            ></Column>
                        </DataTable>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard