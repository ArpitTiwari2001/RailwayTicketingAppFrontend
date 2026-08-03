import React, { useState } from 'react';

const SearchPassengerPage = () => {
  // Sample data with more passengers
  const [passengers, setPassengers] = useState([
    { id: 1, name: 'John Smith', transactionDate: '2025-03-11 10:10:10', confirmationNumber: '00000011' },
    { id: 2, name: 'Jane Doe', transactionDate: '2025-03-10 09:15:30', confirmationNumber: '00000012' },
    { id: 3, name: 'Robert Johnson', transactionDate: '2025-03-09 14:22:45', confirmationNumber: '00000013' },
    { id: 4, name: 'Emily Wilson', transactionDate: '2025-03-08 11:30:00', confirmationNumber: '00000014' }
  ]);
  
  // Filter states
  const [searchType, setSearchType] = useState('Passenger Full Name');
  const [searchValue, setSearchValue] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter passengers based on search criteria
  const filteredPassengers = passengers.filter(passenger => {
    if (!searchValue) return true;
    
    if (searchType === 'Passenger Full Name') {
      return passenger.name.toLowerCase().includes(searchValue.toLowerCase());
    } else if (searchType === 'Passenger ID') {
      return passenger.id.toString() === searchValue;
    } else if (searchType === 'Confirmation Number') {
      return passenger.confirmationNumber.toLowerCase().includes(searchValue.toLowerCase());
    }
    
    return true;
  });

  // Paginated data
  const totalPages = Math.max(1, Math.ceil(filteredPassengers.length / entriesPerPage));
  const indexOfLastPassenger = currentPage * entriesPerPage;
  const indexOfFirstPassenger = indexOfLastPassenger - entriesPerPage;
  const currentPassengers = filteredPassengers.slice(indexOfFirstPassenger, indexOfLastPassenger);
  
  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#6b21a8', // purple-800
      color: 'white',
    },
    sidebarHeader: {
      padding: '16px',
      borderBottom: '1px solid #7e22ce', // purple-700
    },
    sidebarTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    userContainer: {
      padding: '16px',
      borderBottom: '1px solid #7e22ce',
      display: 'flex',
      alignItems: 'center',
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#71717a', // gray-500
      marginRight: '12px',
    },
    username: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    nav: {
      padding: '16px',
    },
    navItem: {
      marginBottom: '16px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
    },
    activeNavItem: {
      marginBottom: '16px',
      backgroundColor: '#7e22ce', // purple-700
      padding: '8px',
      borderRadius: '4px',
    },
    mainContent: {
      flex: 1,
      backgroundColor: '#d1d5db', // gray-300
    },
    header: {
      backgroundColor: '#6b21a8', // purple-800
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '16px',
    },
    headerButton: {
      backgroundColor: '#7e22ce', // purple-700
      border: 'none',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      marginRight: '24px',
      cursor: 'pointer',
    },
    lastHeaderButton: {
      backgroundColor: '#7e22ce', // purple-700
      border: 'none',
      color: 'white',
      padding: '8px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    content: {
      padding: '24px',
    },
    pageTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#6b21a8', // purple-800
      textAlign: 'center',
      marginBottom: '24px',
    },
    searchContainer: {
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
    },
    searchLabel: {
      marginRight: '8px',
      fontSize: '18px',
      fontWeight: '600',
    },
    select: {
      border: '1px solid #ccc',
      padding: '8px',
      marginRight: '8px',
    },
    input: {
      border: '1px solid #ccc',
      padding: '8px',
      marginRight: '8px',
      width: '200px',
    },
    noteText: {
      marginBottom: '16px',
      color: '#4b5563', // gray-600
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '16px',
    },
    tableHeader: {
      backgroundColor: '#7e22ce', // purple-700
      color: 'white',
    },
    tableHeaderCell: {
      border: '1px solid #9333ea', // purple-600
      padding: '12px',
    },
    tableRow: {
      backgroundColor: '#e5e7eb', // gray-200
    },
    tableCell: {
      border: '1px solid #9333ea', // purple-600
      padding: '12px',
      textAlign: 'center',
    },
    linkCell: {
      border: '1px solid #9333ea', // purple-600
      padding: '12px',
      textAlign: 'center',
      color: '#3b82f6', // blue-500
    },
    paginationText: {
      marginBottom: '16px',
      textAlign: 'center',
    },
    entriesContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    entriesInput: {
      border: '1px solid #ccc',
      width: '64px',
      padding: '4px',
      textAlign: 'center',
      margin: '0 8px',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px',
    },
    actionButton: {
      backgroundColor: '#6b21a8', // purple-800
      color: 'white',
      border: 'none',
      padding: '8px 24px',
      cursor: 'pointer',
    },
  };

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h1 style={styles.sidebarTitle}>SoT Railways Ticketing System</h1>
        </div>
        
        <div style={styles.userContainer}>
          <div style={styles.userAvatar}></div>
          <span style={styles.username}>admin</span>
        </div>
        
        <nav style={styles.nav}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>View All Passengers</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Financial Reports</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Passengers Per Station</a></li>
            <li style={styles.activeNavItem}><a href="#" style={styles.navLink}>Search Passenger</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Analytics</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Dashboard</a></li>
          </ul>
        </nav>
      </div>
      
      {/* Main content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <button style={styles.headerButton}>English</button>
          <button style={styles.headerButton}>Menu</button>
          <button style={styles.lastHeaderButton}>Logout</button>
        </div>
        
        {/* Main content area */}
        <div style={styles.content}>
          <h2 style={styles.pageTitle}>Search Passenger</h2>
          
          {/* Search filters */}
          <div style={styles.searchContainer}>
            <label style={styles.searchLabel}>Search :</label>
            <select 
              style={styles.select}
              value={searchType}
              onChange={(e) => {
                setSearchType(e.target.value);
                setSearchValue(''); // Clear search value when changing search type
              }}
            >
              <option>Passenger Full Name</option>
              <option>Passenger ID</option>
              <option>Confirmation Number</option>
            </select>
            
            {/* Single search input field */}
            <input
              type="text"
              style={styles.input}
              placeholder={`Enter ${searchType}`}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            
            <select 
              style={styles.select}
              value={entriesPerPage}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > 0) {
                  setEntriesPerPage(value);
                  setCurrentPage(1); // Reset to first page when changing entries per page
                }
              }}
            >
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value={passengers.length}>All</option>
            </select>
          </div>
          
          <p style={styles.noteText}>* Click on Passenger ID to view individual passenger details</p>
          
          {/* Passenger table */}
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeader}>
                <th style={styles.tableHeaderCell}>Passenger ID</th>
                <th style={styles.tableHeaderCell}>Name</th>
                <th style={styles.tableHeaderCell}>Transaction Date/Time</th>
                <th style={styles.tableHeaderCell}>Confirmation Number</th>
              </tr>
            </thead>
            <tbody>
              {currentPassengers.length > 0 ? (
                currentPassengers.map(passenger => (
                  <tr key={passenger.id} style={styles.tableRow}>
                    <td style={styles.linkCell}>
                      <a href={`#passenger-${passenger.id}`}>{passenger.id}</a>
                    </td>
                    <td style={styles.tableCell}>{passenger.name}</td>
                    <td style={styles.tableCell}>{passenger.transactionDate}</td>
                    <td style={styles.tableCell}>{passenger.confirmationNumber}</td>
                  </tr>
                ))
              ) : (
                <tr style={styles.tableRow}>
                  <td colSpan="4" style={styles.tableCell}>No matching passengers found</td>
                </tr>
              )}
            </tbody>
          </table>
          
          <div style={styles.paginationText}>
            Showing {currentPage} out of {totalPages} pages
          </div>
          
          <div style={styles.entriesContainer}>
            <span>Showing</span>
            <input 
              type="number" 
              style={styles.entriesInput}
              value={entriesPerPage}
              min="1"
              max={filteredPassengers.length}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > 0) {
                  setEntriesPerPage(value);
                  setCurrentPage(1); // Reset to first page when changing entries per page
                }
              }}
            />
            <span>entries</span>
          </div>
          
          <div style={styles.buttonsContainer}>
            <button 
              style={{
                ...styles.actionButton,
                opacity: currentPage === 1 ? 0.5 : 1,
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }} 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Back
            </button>
            <button 
              style={{
                ...styles.actionButton,
                opacity: currentPage >= totalPages ? 0.5 : 1,
                cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer'
              }}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPassengerPage;