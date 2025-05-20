import React from "react";
import { Modal, Button } from "react-bootstrap";

const FavouritesModal = ({ show, onHide, favourites, handleViewProfile }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>My Favourite Cleaners</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-muted mb-3">Here are the cleaners you've saved to favourites.</p>

        {favourites.length > 0 ? (
          <div className="row">
            {favourites.map((cleaner) => (
              <div className="col-md-4 mb-4" key={cleaner.id}>
                <div className="card shadow-sm h-100">
                   <img
                      src={`https://csit314-backend.onrender.com/${cleaner.image_path || "images/default.jpg"}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://csit314-backend.onrender.com/images/default.jpg";
                      }}
                      alt={`${cleaner.name}'s profile`}
                      className="card-img-top"
                      style={{
                        height: "230px",
                        objectFit: "contain",
                        backgroundColor: "#f8f9fa",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                    />
                  <div className="card-body text-center">
                    <h5 className="card-title">{cleaner.name}</h5>
                    <p className="card-text mb-1">
                      <strong>Experience:</strong> {cleaner.experience ? `${cleaner.experience} yrs` : "N/A"}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Preferred Areas:</strong> {cleaner.preferred_areas || "N/A"}
                    </p>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => {
                        onHide();
                        handleViewProfile(cleaner);
                      }}
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="alert alert-info text-center">You haven't saved any favourites yet.</div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FavouritesModal;
