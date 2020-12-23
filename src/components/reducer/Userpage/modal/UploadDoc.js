import React, { useState } from 'react';
import ButtonContainer from './ButtonContainer';
import Modals from './Modal';


export default function UploadDoc() {
    const [show, setShow] = useState(false);
    const handleShow = () => {

        setShow(hi => !hi)
        console.log(show)
    }
    return (
        <div className="container">

            <div className="col-11 col-md-12 col-lg-12 py-4 ml-0  mx-auto">
                <h4 className="text-left text-nowrap mx-auto" >Uploaded Documents</h4>
                <div className="d-flex flex-wrap col-12 col-md-12 col-lg-12" style={{ alignItems: 'center', background: '#686868', boxShadow: '0px 0px 1.27907px rgba(0, 0, 0, 0.1), 0px 2.55814px 12.7907px rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(55.63px)', borderRadius: '10px' }}>

                    <div className=" col-md-3 my-2  col-lg-3  py-3" >
                        <img src="images/WomanFace2.png" className="d-flex " style={{ height: " 173px", width: "161px" }} />
                    </div>
                    <li name="string" id="string" style={{ display: 'none' }} />
                    <div className="col-9  mt-2 col-md-8 col-lg-8  mx-auto">
                        <p style={{ color: 'white' }}>A <abbr title="Corporate Affairs Commission">CAC</abbr> Certificate and a maximum of 5 pictures is needed to verify your business.</p>
                    </div>

                </div>


                {/* Button trigger modal */}
                <div className=" d-flex flex-wrap " style={{ gap: "20px" }}>
                    <ButtonContainer

                        onClick={handleShow}
                        name="Upload Document" />

                    <ButtonContainer className="py-3"
                        name="View Document "

                    />

                </ div>
            </ div>
            <Modals show={show} setShow={setShow} handleShow={handleShow} />

        </div >
    )
}
