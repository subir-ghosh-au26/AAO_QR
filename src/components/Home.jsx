import React, { useState } from 'react';
import data from '../asset/data';
import bipard from "../asset/BIPARD.jpg";
import { Button, Form, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import "./home.css";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setError(null); // Reset error when input changes
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setError("Please enter a valid search term");
      setSearchResult(null);
      return;
    }

    const result = data.find((item) => item.Phone === searchTerm);

    if (result) {
      setSearchResult(result);
      setError(null);
    } else {
      setSearchResult(null);
      setError(<h1>No matching details found</h1>);
    }

  };

  const speech = () => {
    const text = `Hi ${searchResult.Name} Welcome to Beepard Gaya`
    const value = new SpeechSynthesisUtterance(text);
    value.rate = 1
    value.voice = speechSynthesis.getVoices()[10]
    window.speechSynthesis.speak(value)

  };


  return (
    <div className='container-sm'>
      <Row className='search'>
        <Col sm={4}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Enter Your Mobile Number:"
              className="me-2 rounded-pill"
              aria-label="Enter Your Mobile Number:"
              value={searchTerm}
              onChange={handleInputChange}
              maxLength={10}
            />
            <div>
              <Button variant="outline-primary" onClick={() => { handleSearch() }}>Search</Button>
            </div>
          </Form>
        </Col>
      </Row>


      {error && <p>{error}</p>}

      {searchResult && (
        <>

          <img src={bipard} alt="" width="120" height="120" />
          <h3>Bihar Institute Of Public Administration & Rural Development</h3>
          <h4>Gaya</h4>
          <motion.div animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}>
            <h2 className='text' style={{ backgroundColor: '#ff8886', padding: "10px", width: "700px", textAlign: 'center', marginLeft: '230px' }}>Hi, {searchResult.Name}{speech()} Welcome to BIPARD</h2>
          </motion.div>
          <table className='table table-hover table-success'>
            <tbody className='text-start fs-4 fw-bold'>
              <tr>
                <td>
                  Name
                </td>
                <td>{searchResult.Name}</td>
              </tr>
              <tr>
                <td>
                  Designation
                </td>
                <td>{searchResult.Designation}</td>
              </tr>
              <tr>
                <td>
                  Group
                </td>
                <td>{searchResult.Batch}</td>
              </tr>
              <tr>

                <td>
                  Your Course Coordinater
                </td>
                <td>{searchResult.Coordinater}<br />(Assistant Director)</td>
              </tr>
              <tr>
                <td>
                  Your Admin
                </td>
                <td>{searchResult.admin}</td>
              </tr>
              <tr>
                <td>
                  Admin Contact No
                </td>
                <td>
                  {searchResult.admin_ph}
                </td>
              </tr>
              <tr>
                <td>
                  Your Hostel Name
                </td>
                <td>{searchResult.Hostel}&nbsp;&nbsp;{searchResult.Hostel === "Nilgiri" ? <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.30834770908854!2d84.97928811348731!3d24.760976410051438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b004309d201%3A0x9370928aa40265c6!2sNilgiri!5e1!3m2!1sen!2sin!4v1726230435748!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hostel'></iframe> : <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.3084508000612!2d84.97903931672788!3d24.76092644627445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bbb4744336b%3A0xfc584a5806f3bcfe!2sArawali!5e1!3m2!1sen!2sin!4v1726230556573!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='hostel'></iframe>}</td>
              </tr>
              <tr>
                <td>
                  Your Allocated Mess
                </td>
                <td>
                  {searchResult.Mess}&nbsp;&nbsp;{searchResult.Mess === "Sujata_Mess" ? <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d342.1310640223616!2d84.97912429668487!3d24.7608061603529!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1726285611002!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='mess'></iframe> : <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d876.2634016250117!2d84.97845719697027!3d24.76155047158706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b687481f5f9%3A0x340cd9aa6b7d67ea!2sAnnapurna%20Mess!5e1!3m2!1sen!2sin!4v1690629068221!5m2!1sen!2sin" width="150" height="100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='annapurna'></iframe>}
                </td>
              </tr>
            </tbody>
          </table>




        </>
      )}
    </div>
  );
};
export default Home;