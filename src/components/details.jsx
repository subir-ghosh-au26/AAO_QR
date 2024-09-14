import React from "react";
import data from '../asset/data';

function Details(){
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
      setError('No matching details found');
    }
  };
    return(
        {searchResult && (
        <>
      
        <img src={bipard} alt="" width="120" height="120" />
        <h3>Bihar Institute Of Public Administration & Rural Development</h3>
        <h4>Gaya</h4>
        <h2 className='text-info'>Hi, <span className='text-danger'>{searchResult.Name}</span> Welcome to BIPARD</h2>
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
              <td>Assistant Professor</td>
            </tr>
            <tr>
              
              <td>
                Your Course Coordinater
              </td>
              <td>{searchResult.cc}</td>
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
                {searchResult.admin_phone}
              </td>
            </tr>
            <tr>
              <td>
                Your Hostel Name
              </td>
              <td>{searchResult.hostel}</td>
            </tr>
            <tr>
              <td>
                Room No
              </td>
              <td>
                {searchResult.room}
              </td>
            </tr>
            <tr>
              <td>
                Bed No
              </td>
              <td>
                {searchResult.bed}
              </td>
            </tr>
          </tbody>
        </table>
        
        
      

    </>
    )}
    )
}

export default Details;