import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useLocation } from 'react-router-dom'

const New = () => {
    const { state } = useLocation()
    const { post } = state;
    console.log(post);

    return (
        <section id="new-section">
            <Container>
                <div className="d-flex flex-column py-5" data-aos="fade-up" data-aos-duration="3000">
                    <h1 className="titulo">{post.title}</h1>
                    {post.image && 
                        (
                            <div className="p-4" style={{ margin: '0 auto'}}>
                                <img src={post.image} alt={post.title} className="img-fluid box-shadow" style={{width: '250px', border: '5px solid gold'}}/>
                            </div>
                        )
                    }
                    <ReactQuill
                        theme="snow"
                        value={post.content}
                        readOnly
                        modules={{ toolbar: false }} // Deshabilita la barra de herramientas en modo de solo lectura
                    />
                </div>
            </Container>
        </section>
    );
};

export default New;
