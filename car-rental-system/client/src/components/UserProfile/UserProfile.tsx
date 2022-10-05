import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';
import { useState } from 'react';
import './UserProfile.css'
import { Context } from '../../context/Context';
import Header from '../Header';
import Footer from '../Footer';
import '@fortawesome/fontawesome-svg-core/styles.css'
import axios from 'axios';

export default function UserProfile() {

    const { user, dispatch } = useContext(Context);
    const [paid,setPaid] = useState(0);
    const [pending,setPending] = useState(0);
    const [newly_created,setNewlyCreated] = useState(0);

    useEffect(()=>{
        const data1=('http://localhost:5000/api/bookings/countDocuments/Prathibha') ;
            axios.get(data1).then(function(response){
                setNewlyCreated(response.data)
            });
        const data2=('http://localhost:5000/api/bookings/countDocuments/Prathibha/pending') ;
            axios.get(data2).then(function(response){
                setPending(response.data)
            });
        const data3=('http://localhost:5000/api/bookings/countDocuments/Prathibha/paid') ;
            axios.get(data3).then(function(response){
                setPaid(response.data)
            });
    })
    
    return (
        <div>
            <Header/>
            <div className="container d-flex justify-content-center">
                <div className="card-user p-3 py-4">
                    <div className="text-center">
                        <img src="https://i.imgur.com/stD0Q19.jpg" width="100" className="rounded-circle" />
                        <h3 className="mt-2">Prathibha</h3>
                        <span className="mt-1 clearfix">Bookings</span>

                        <div className="row mt-3 mb-3">

                            <div className="col-md-4">
                                <h5>New</h5>
                                <span className="num">{newly_created}</span>
                            </div>
                            <div className="col-md-4">
                                <h5>Pending</h5>
                                <span className="num">{pending}</span>
                            </div>
                            <div className="col-md-4">
                                <h5>Done</h5>
                                <span className="num">{paid}</span>
                            </div>

                        </div>

                        <hr className="line"/>


                            <div className="social-buttons mt-5">
                                <button className="neo-button"><i className="fab fa-facebook"></i> </button>
                                <button className="neo-button"><i className="fab fa-whatsapp"></i></button>
                                <button className="neo-button"><i className="fab fa-google"></i> </button>
                                <button className="neo-button"><i className="fab fa-twitter"></i> </button>
                            </div>

                            <div className="profile mt-5">

                                <button className="profile_button px-5">Edit profile</button>

                            </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
