import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'reactstrap';
import { getScore, createScore, editScore, deleteScore } from '../redux/actions/scoreAction';
import Test from './test';


function Home() {
  const navigate = useNavigate()
    const [id, setId] = React.useState();
    const [name, setName] = React.useState();
    const [score, setScore] = React.useState();

    const dispatch1 = useDispatch();
    const { isLoading: loadingScore, data: scoreData } = useSelector((state) => state.score);

    useEffect(() => {
        dispatch1(getScore());
      }, []);
    
      const resetForm = () => {
        setId('');
        setName('');
        setScore('');
      };
    
      const handleSubmit = () => {
        const data = {
          name,
          score,
        };
        dispatch1(createScore(data));
        resetForm();
      };
    
      const handleEdit = (data) => {
        setId(data.id);
        setName(data.name);
        setScore(data.score);
      };
    
      const handleEditSubmit = () => {
        const data = {
          name,
          score,
        };
        dispatch1(editScore(id, data));
        resetForm();
      };

      const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
      }
      
    return (
        <React.Fragment>
            <Container>
                {/* Modal Popup Form */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{id? 'Update Data' : 'Create Data'}</h5>
                      </div>
                      <div className="modal-body d-flex flex-column">
                        <input type="text" value={name} className='col-form-label mb-2' onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input type="text" value={score} className='col-form-label' onChange={(e) => setScore(e.target.value)} placeholder="Score" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick={() => resetForm()}>Cancel</button>
                        <button type="button" className="btn btn-primary"
                        onClick={() => (!name || !score? alert("Data tidak boleh kosong!") : id? handleEditSubmit() :  handleSubmit())}>
                          {id? 'Update' : 'Submit'}
                        </button>
                      </div>
                    </div>`
                  </div>
                </div>

                <h1 className='fw-bold text-center py-4 mt-2' style={{borderBottom: "4px solid red", borderTop: "4px solid red"}}>Ceritanya Data Score Ujian Mahasiswa</h1>
                <div className="text-end" style={{position: "fixed", zIndex: "10", bottom: "0", right: "0"}}>
                <Button color='primary' variant='contained' onClick={() => {
                  handleLogout()}}>Logout</Button>
                    <Button type="button" color='primary' className='rounded-circle'style={{width: "60px", height: "60px", marginBottom: "40px", marginRight: "40px"}} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-solid fa-plus"></i></Button>
                </div>
                
                <Row>
                    {loadingScore? 'Loading' : scoreData?.map((item) => (
                        <Col lg='4' md='6' xs='12' className='p-3' key={item.id}>
                            <Card className='p-3 d-flex flex-column justify-content-between shadow-sm text-center' style={{minHeight: "250px"}}>
                                <div>
                                    <h2 className='fw-bold'>{`${item.name}`}</h2>
                                    <h5>{`Score : ${item.score}`}</h5>
                                </div>

                                <div className='d-flex flex-column'>
                                    <div className="d-flex">
                                        <Button type="button" color='warning' outline className='me-1 border border-3 border-warning vw-100'
                                        data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(item)}>Edit
                                        </Button>

                                        <Button type="button" color='danger' outline className='ms-1 border border-3 border-danger vw-100'
                                        onClick={() => dispatch1(deleteScore(item.id))}>Delete
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;
