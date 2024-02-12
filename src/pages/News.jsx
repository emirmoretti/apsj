import React, { useEffect, useState } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from '../firebase-config';
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";

const ITEMS_PER_PAGE = 6;

const News = () => {
  const app = initializeApp(getFirebaseConfig());
  const db = getFirestore(app);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(ITEMS_PER_PAGE);
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(postsData)
        postsData.sort((a, b) => b.timestamp - a.timestamp);

        setPosts(postsData);
      } catch (error) {
        console.error('Error al obtener los datos de Firebase: ', error);
      }
    };
    fetchData();
  }, [db]);

  const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Función para cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const generatePaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      // Si estamos cerca de la página actual, mostramos las páginas cercanas
      if (i === currentPage || i === currentPage - 1 || i === currentPage + 1 || i === 1 || i === totalPages) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => paginate(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
      // Si no, mostramos el elipsis
      else if (
        (i === currentPage - 2 && currentPage > 3) ||
        (i === currentPage + 2 && currentPage < totalPages - 2)
      ) {
        paginationItems.push(<Pagination.Ellipsis key={`ellipsis-${i} a`} />);
      }
    }

    return paginationItems;
  };

  return (
    <section id="news-section">
      <Container className="mb-5 py-5">
        <h1 className="titulo">Noticias</h1>
        <Container className="my-5" data-aos="fade-up" data-aos-duration="3000">
          <Row className="my-2">
            {currentPosts.length === 0 ? (
              <div>
                <p>No hay noticias disponibles en este momento.</p>
              </div>
            ) : (currentPosts.map(post => (
              <Col key={post.id} className="mb-4" xs={12} md={6}>
                <div className="card flex-md-row mb-4 box-shadow h-md-250">
                  <div className="card-body d-flex flex-column align-items-start">
                    <h3 className="mb-0">{post.title}</h3>
                    <div className="mb-1 text-muted">{post.timestamp.toDate().toLocaleString()}</div>
                    <div className="react-quill-container">
                      <ReactQuill
                        value={post.content}
                        readOnly
                        modules={{ toolbar: false }}
                      />
                    </div>
                    <Link to={{ pathname: `/noticias/${post.id}` }} state={{ post: post }}>Continuar leyendo</Link>
                  </div>
                  <img style={{ width: '250px', height: '250px' }} src={post.image || 'https://placehold.co/250x250?text=APJS'} alt="Post Image" className="card-img-right flex-auto d-none d-md-block" />
                </div>
              </Col>
            )))}
          </Row>
          <Row className="">
            <Pagination style={{ justifyContent: 'end' }}>
              <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
              <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
              {generatePaginationItems()}
              <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
              <Pagination.Last onClick={() => paginate(Math.ceil(posts.length / ITEMS_PER_PAGE))} disabled={currentPage === totalPages} />
            </Pagination>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default News;
