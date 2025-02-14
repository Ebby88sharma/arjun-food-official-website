import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

function App() {
  const [companyInfo, setCompanyInfo] = useState(null);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/company") 
      .then((response) => setCompanyInfo(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header style={{ backgroundColor: "#004080", padding: "10px", color: "white" }}>
        <h1>Arjun Food Traders</h1>
        <button onClick={() => setShowProducts(!showProducts)} style={{ marginLeft: "20px" }}>
          {showProducts ? "Go to Home" : "View Products"}
        </button>
      </header>


      {/* Main Content */}
      <main style={{ padding: "20px" }}>
        {showProducts ? <Products /> : <h2>Welcome to Arjun Food Traders</h2>}
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#222", color: "white", padding: "10px", textAlign: "center" }}>
        <p>© 2024 Arjun Food Traders, Leipzig</p>
      </footer>
    </div>
  );
}

export default App;
