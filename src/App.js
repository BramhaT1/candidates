
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import { Button, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import './App.css';
 
const firebaseConfig = {
  apiKey: "AIzaSyAlWdZDwJIS-7RqleGnEpR1XP6pMiyGga8",
    authDomain: "virtual-ats-4dd87.firebaseapp.com",
    databaseURL: "https://virtual-ats-4dd87-default-rtdb.firebaseio.com",      
    projectId: "virtual-ats-4dd87",      
    storageBucket: "virtual-ats-4dd87.appspot.com",      
    messagingSenderId: "1018264401112",      
    appId: "1:1018264401112:web:a8afa500da3cb5b40253ad",      
    measurementId: "G-XR6N8R5GX8"  
};
 
const MyApp = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const itemsPerPage = 5;
 
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const usersRef = ref(database, 'users');
 
    const loadData = async () => {
      try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const updatedData = {};
          Object.keys(snapshot.val()).forEach((key) => {
            updatedData[key] = {
              ...snapshot.val()[key],
              status: 'Pending',
            };
          });
          setData(updatedData);
        }
      } catch (error) {
        console.error('Error retrieving data: ', error);
      }
    };
 
    loadData();
  }, []);
 
  const renderPage = (page) => {
    // Your logic for rendering a specific page
  };
 
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      renderPage(currentPage - 1);
    }
  };
 
  const handleNextClick = () => {
    const totalPages = Math.ceil(Object.keys(data).length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      renderPage(currentPage + 1);
    }
  };
 
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    setSearchTerm(searchTerm);
  };
 
  const handleCheckboxChange = (key) => {
    setSelectedCandidates((prevSelected) => ({
      ...prevSelected,
      [key]: !prevSelected[key],
    }));
  };
 
  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    setSelectedCandidates(
      Object.keys(data).reduce((acc, key) => {
        acc[key] = !selectAll;
        return acc;
      }, {})
    );
  };
 
  const updateStatus = (statusToUpdate) => {
    const updatedData = { ...data };
    Object.keys(selectedCandidates).forEach((key) => {
      if (selectedCandidates[key]) {
        updatedData[key].status = statusToUpdate;
      }
    });
    setData(updatedData);
    setSelectedCandidates({});
  };
 
  const handleAcceptClick = () => {
    updateStatus('Accepted');
  };
 
  const handleRejectClick = () => {
    updateStatus('Rejected');
  };
 
  const handleHoldClick = () => {
    updateStatus('Hold');
  };
 
  const getStatus = (key) => {
    return data[key]?.status || 'Pending';
  };
 
  const filteredData = Object.keys(data).filter(
    (key) => data[key].name.toLowerCase().startsWith(searchTerm)
  );
 
  const slicedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
 
  return (
    <div className="main">
      <div className="total">
        <Typography variant="h4">
          Total Candidates: <span id="totalCandidates">{filteredData.length}</span>
        </Typography>
      </div>
      <br />
      <Typography variant="h3">Candidates List</Typography>
      <div className="search-buttons-container">
        <div className="search">
          <TextField
            type="text"
            id="searchName"
            placeholder="Search by Name"
            onChange={handleSearchChange}
          />
        </div>
        <div className="button-container">
          <Button className="accept" onClick={handleAcceptClick}>Accept</Button>
          <Button className="reject" onClick={handleRejectClick}>Reject</Button>
          <Button className="hold" onClick={handleHoldClick}>Hold</Button>
        </div>
      </div>
      <div className="side">
        <div id="userList">
          {data && (
            <>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Checkbox
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                      </TableCell>
                      <TableCell>Candidate Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Applied Role</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((key) => {
                      const user = data[key];
                      return (
                        <TableRow key={key}>
                          <TableCell>
                            <Checkbox
                              checked={selectedCandidates[key]}
                              onChange={() => handleCheckboxChange(key)}
                            />
                          </TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.job}</TableCell>
                          <TableCell>{getStatus(key)}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </div>
      </div>
      <Button onClick={handlePrevClick} id="prevButton">
        Previous
      </Button>
      <Button onClick={handleNextClick} id="nextButton">
        Next
      </Button>
      <br /><br /><br />
      <Button id="next-page-button">
        Next Page
      </Button>
    </div>
  );
};
 
export default MyApp;
 