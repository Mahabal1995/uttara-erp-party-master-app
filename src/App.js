import { useState } from "react";
import "./App.css";
import InputTile from "./components/InputTile";

function App() {
  const [formValues, setFormValues] = useState({
    gstNo: "",
    accountName: "",
    accountCode: "",
    entryDate: "",
    nameOnInvoice: "",
    payTerm: "",
    shipTerm: "",
    freightType: "",
    passKey: "",
    csb: "",
    controlCode: "",
    mfr: "",
    currency: "",
    creditLimit: "",
    addLine1: "",
    addLine2: "",
    city: "",
    state: "",
    region: "",
    pin: "",
    country: "",
    contact: "",
    phone: "",
    email: "",
    designation: "",
    fax: "",
    mobile: "",
    tdsStatus: "",
    govt: "",
    dealerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the formValues, like sending it to an API

    console.log(formValues);

    try {
      const response = await fetch("http://localhost:3000/api/fetch-data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container bg-mainBg m-4 p-4 w-90">
          <div className="container-1">
            <h1 className="text-white mb-4 font-extrabold">Account Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputTile
                  label="GST No."
                  placeholder="Enter your name"
                  name="gstNo"
                  value={formValues.gstNo}
                  onChange={handleChange}
                />
                <InputTile
                  label="Account Name"
                  placeholder="Enter your name"
                  name="accountName"
                  value={formValues.accountName}
                  onChange={handleChange}
                />
                <InputTile
                  label="Account Code"
                  placeholder="Enter your name"
                  name="accountCode"
                  value={formValues.accountCode}
                  onChange={handleChange}
                />
                <InputTile
                  label="Entry Date"
                  placeholder="Enter your name"
                  name="entryDate"
                  value={formValues.entryDate}
                  onChange={handleChange}
                />
                <InputTile
                  label="Name on Invoice"
                  placeholder="Enter your name"
                  name="nameOnInvoice"
                  value={formValues.nameOnInvoice}
                  onChange={handleChange}
                />
                <InputTile
                  label="PayTerm"
                  placeholder="Enter your name"
                  name="payTerm"
                  value={formValues.payTerm}
                  onChange={handleChange}
                />
                <InputTile
                  label="ShipTerm"
                  placeholder="Enter your name"
                  name="shipTerm"
                  value={formValues.shipTerm}
                  onChange={handleChange}
                />
              </div>

              <div>
                <InputTile
                  label="Freight Type"
                  placeholder="Enter your name"
                  name="freightType"
                  value={formValues.freightType}
                  onChange={handleChange}
                />
                <InputTile
                  label="Pass Key"
                  placeholder="Enter your name"
                  name="passKey"
                  value={formValues.passKey}
                  onChange={handleChange}
                />
                <InputTile
                  label="Cust/Supp/Both C/S/B"
                  placeholder="Enter your name"
                  name="csb"
                  value={formValues.csb}
                  onChange={handleChange}
                />
                <InputTile
                  label="Control Code"
                  placeholder="Enter your name"
                  name="controlCode"
                  value={formValues.controlCode}
                  onChange={handleChange}
                />
                <InputTile
                  label="Mfr/Dealer"
                  placeholder="Enter your name"
                  name="mfr"
                  value={formValues.mfr}
                  onChange={handleChange}
                />
                <InputTile
                  label="Currency"
                  placeholder="Enter your name"
                  name="currency"
                  value={formValues.currency}
                  onChange={handleChange}
                />
                <InputTile
                  label="Credit Limit(in Lakhs)"
                  placeholder="Enter your name"
                  name="creditLimit"
                  value={formValues.creditLimit}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-mainBg m-4 p-4 w-90">
          <div className="container-2">
            <h1 className="text-white mb-4 font-extrabold">Address Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputTile
                  label="Line 1"
                  placeholder="Enter your name"
                  name="addLine1"
                  value={formValues.addLine1}
                  onChange={handleChange}
                />
                <InputTile
                  label="City"
                  placeholder="Enter your name"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <InputTile
                  label="State"
                  placeholder="Enter your name"
                  name="city"
                  value={formValues.state}
                  onChange={handleChange}
                />
                <InputTile
                  label="Region"
                  placeholder="Enter your name"
                  name="region"
                  value={formValues.region}
                  onChange={handleChange}
                />
              </div>

              <div>
                <InputTile
                  label="Line 2"
                  placeholder="Enter your name"
                  name="addLine2"
                  value={formValues.addLine2}
                  onChange={handleChange}
                />
                <InputTile
                  label="Pin"
                  placeholder="Enter your name"
                  name="pin"
                  value={formValues.pin}
                  onChange={handleChange}
                />
                <InputTile
                  label="Country"
                  placeholder="Enter your name"
                  name="country"
                  value={formValues.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-mainBg m-4 p-4 w-90">
          <div className="container-3">
            <h1 className="text-white font-extrabold mb-4">Contact Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputTile
                  label="Contact"
                  placeholder="Enter your name"
                  name="contact"
                  value={formValues.contact}
                  onChange={handleChange}
                />
                <InputTile
                  label="Phone"
                  placeholder="Enter your name"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                />
                <InputTile
                  label="Email"
                  placeholder="Enter your name"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <InputTile
                  label="Designation"
                  placeholder="Enter your name"
                  name="designation"
                  value={formValues.designation}
                  onChange={handleChange}
                />
                <InputTile
                  label="Fax"
                  placeholder="Enter your name"
                  name="fax"
                  value={formValues.designation}
                  onChange={handleChange}
                />
                <InputTile
                  label="Mobile"
                  placeholder="Enter your name"
                  name="mobile"
                  value={formValues.mobile}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-mainBg m-4 p-4 w-90">
          <div className="container-4">
            <h1 className="text-white mb-4 font-extrabold">Other Details</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputTile
                  label="TDS Status"
                  placeholder="Enter your name"
                  name="tdsStatus"
                  value={formValues.tdsStatus}
                  onChange={handleChange}
                />
                <InputTile
                  label="Govt"
                  placeholder="Enter your name"
                  name="govt"
                  value={formValues.govt}
                  onChange={handleChange}
                />
              </div>

              <div>
                <InputTile
                  label="Dealer Type"
                  placeholder="Enter your name"
                  name="dealerType"
                  value={formValues.dealerType}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <button
            type="submit"
            className="bg-mainBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
