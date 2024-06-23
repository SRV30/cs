import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeContact } from "../../actions/homeContactActions";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const HomeContact = () => {
  const dispatch = useDispatch();
  const { contactInfo } = useSelector((state) => state.homeContact);

  useEffect(() => {
    dispatch(fetchHomeContact());
  }, [dispatch]);

  return (
    <div id="contact" className="main4 bg-blue-100 py-8 px-4">
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-blue-800 text-xl md:text-2xl font-semibold mb-4">
              CONTACT US
            </h4>
            <h3 className="text-3xl font-bold text-black mb-6">
              Get in touch today
            </h3>
            <p className="text-lg text-black mb-4">
              Reach out to City Smile Dental Clinic for any inquiries. Your
              perfect smile is just a call away.
            </p>
            <div className="flex items-center text-lg text-black mb-4">
              <IoIosCall className="text-blue-800 mr-2" />
              <a
                target="_blank"
                rel="noreferrer"
                href={`tel:${contactInfo.phone}`}
                className="text-blue-800"
              >
                Call Support
              </a>
            </div>
            <div className="flex items-center text-lg text-black mb-4">
              <FaWhatsapp className="text-green-500 mr-2" />
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/91${contactInfo.whatsappLink}`}
                className="text-green-500"
              >
                Whatsapp
              </a>
            </div>
            <div className="text-lg text-black">
              <h4 className="font-semibold mb-2">Hours</h4>
              <p>Monday: {contactInfo.hours1}</p>
              <p>Tuesday: {contactInfo.hours2}</p>
              <p>Wednesday: {contactInfo.hours3}</p>
              <p>Thursday: {contactInfo.hours4}</p>
              <p>Friday: {contactInfo.hours5}</p>
              <p>Saturday: {contactInfo.hours6}</p>
              <p>Sunday: {contactInfo.hours7}</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.3223172254798!2d84.9205162!3d26.6701722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993357dc707a59d%3A0x7e82dd9d06646d48!2sCity%20Smile%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1717578713604!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-md"
          ></iframe>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <p className="text-black">{contactInfo.address}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeContact;
