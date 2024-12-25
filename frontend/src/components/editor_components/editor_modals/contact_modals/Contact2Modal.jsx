import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

const Contact2Modal = ({ isOpen, onClose }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    phoneNumbers: [""], // Initialize with an empty array for multiple phone numbers
    email: "",
    addresses: [{ heading: "", details: "" }], // Initialize with an array of objects for multiple addresses with heading and details
    imageUrl: "",
    bgColor: "",
    textColor: "",
  });

  useEffect(() => {
    // Fetch data from the API
    fetch(`${apiUrl}/contact/contact2/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          ...data,
          phoneNumbers: data.phoneNumbers || [""], // Ensure phoneNumbers is an array
          addresses: data.addresses || [{ heading: "", details: "" }], // Ensure addresses are initialized as an array of objects
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleBgColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      bgColor: color,
    }));
  };

  const handleTextColorChange = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      textColor: color,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDynamicFieldChange = (key, index, field, value) => {
    const updatedFields = [...formData[key]];
    updatedFields[index][field] = value;
    setFormData((prevData) => ({
      ...prevData,
      [key]: updatedFields,
    }));
  };

  const addField = (key) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: [...prevData[key], { heading: "", details: "" }], // Add a new address object with heading and details
    }));
  };

  const removeField = (key, index) => {
    const updatedFields = formData[key].filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      [key]: updatedFields,
    }));
  };

  const handleImageChange = async (e) => {
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };

    const file = e.target.files[0];
    const imageBase64 = await convertToBase64(file);
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        imageUrl: imageBase64,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log formData before sending it to check if new addresses are included
    console.log(formData);

    // Send PATCH request
    fetch(`${apiUrl}/contact/contact2/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Updated Data:", data);
        onClose();
      })
      .catch((error) => console.error("Error updating data:", error));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white p-8 rounded shadow-lg max-w-xl w-full max-h-screen overflow-y-auto relative my-8 mx-4">
        <h2 className="text-2xl mb-4">Edit Contact Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold">Subtitle</label>
            <textarea
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></textarea>
          </div>
          {/* <div className="mb-4">
            <label className="block font-bold">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg"
            ></input>
          </div> */}

          {/* Multiple Phone Numbers */}
          {/* <div className="mb-4">
            <label className="block font-bold">Phone Numbers</label>
            {formData.phoneNumbers.map((phone, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) =>
                    handleDynamicFieldChange("phoneNumbers", index, index, e.target.value)  // This fixes the issue
                  }
                  className="border p-2 rounded-lg flex-grow"
                />
                <button
                  type="button"
                  onClick={() => removeField("phoneNumbers", index)}
                  className="ml-2 bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("phoneNumbers")}
              className="mt-2 bg-green-500 text-white p-2 rounded"
            >
              Add Phone Number
            </button>
          </div> */}

          {/* Multiple Addresses with Heading and Details */}
          {/* <div className="mb-4">
            <label className="block font-bold text-2xl">Addresses</label>
            {formData.addresses.map((address, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="flex flex-col w-full">
                  <label className="block font-bold">Address Heading</label>
                  <input
                    type="text"
                    value={address.heading}
                    onChange={(e) =>
                      handleDynamicFieldChange("addresses", index, "heading", e.target.value)
                    }
                    className="border p-2 rounded-lg mb-2"
                  />
                  <label className="block font-bold">Address Details</label>
                  <textarea
                    value={address.details}
                    onChange={(e) =>
                      handleDynamicFieldChange("addresses", index, "details", e.target.value)
                    }
                    className="border p-2 rounded-lg"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => removeField("addresses", index)}
                  className="ml-2 bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField("addresses")}
              className="mt-2 bg-green-500 text-white p-2 rounded"
            >
              Add Address
            </button>
          </div> */}

          {/* Background and Text Color Pickers */}
          <div className="mb-4">
            <label className="block font-bold">Background Color</label>
            <div className="hex flex items-center">
              <HexColorPicker
                color={formData.bgColor}
                onChange={handleBgColorChange}
                className="mr-4"
              />
              <input
                type="text"
                name="bgColor"
                value={formData.bgColor}
                onChange={handleChange}
                className="border p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold">Text Color</label>
            <div className="hex flex items-center">
              <HexColorPicker
                color={formData.textColor}
                onChange={handleTextColorChange}
                className="mr-4"
              />
              <input
                type="text"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                className="border p-2 rounded-lg"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-bold">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="border p-2 rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-4 rounded-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white p-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact2Modal;
