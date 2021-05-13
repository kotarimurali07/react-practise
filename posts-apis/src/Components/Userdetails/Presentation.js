import React from "react";

function UserDetails(props) {
  const { name, email, phone, address } = props.user;
  if (Object.keys(props.user).length) {
    const addressDetails = Object.entries(address)
      .map(([key, value]) => {
        return value;
      })
      .filter((item) => typeof item === "string")
      .join(", ");
    return (
      <div className="bg-info rounded m-2">
        <div className="d-flex">
          <div>
            <img
              src="https://www.kindpng.com/picc/m/207-2073470_special-delivery-messages-sticker-3-mr-bean-cartoon.png"
              className="rounded m-2"
              width="90"
            />
          </div>
          <div className="m-2 bg-light rounded p-2 w-100 text-left">
            <b>{name}</b>
            <br />
            {email} <br />
            {phone}
            <br />
            {addressDetails}
          </div>
        </div>
      </div>
    );
  }
  return <p>Loading....</p>;
}

export default UserDetails;
