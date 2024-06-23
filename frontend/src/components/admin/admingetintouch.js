import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactForms } from "../../actions/contactActions";

const AdminContact = () => {
  const dispatch = useDispatch();

  const contactFetch = useSelector((state) => state.contactFetch);
  const { loading, error, contacts } = contactFetch;

  useEffect(() => {
    dispatch(fetchContactForms());
  }, [dispatch]);

  const limitedContacts = contacts
    ? contacts.slice(0, 50).sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  return (
    <div className="adminContactContainer bg-white rounded-lg shadow-lg p-6">
      <h2 className="font-bold text-2xl mb-4">Contact Form Submissions</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {limitedContacts.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-xl mb-2">Latest Submissions</h3>
          <ul>
            {limitedContacts.map((contact) => (
              <li key={contact.id} className="mb-2">
                <div className="bg-gray-100 p-3 rounded-lg shadow-md">
                  <p className="font-bold">{contact.name}</p>
                  <p>Email: {contact.email}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Message: {contact.message}</p>
                  <p className="text-gray-500 text-sm">
                    Submitted on {new Date(contact.date).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {limitedContacts.length === 0 && !loading && (
        <p>No contact form submissions found.</p>
      )}
    </div>
  );
};

export default AdminContact;
