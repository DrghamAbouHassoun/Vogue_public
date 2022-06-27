import React from 'react'
import footerInfo from "../data/Footer.json";
import { useSelector } from 'react-redux';

const Footer = () => {
    const lang = useSelector(state => state.lang.language);

  return (
    <div className="customer-footer">
        <div className="custom-container">
        <div className={`footer-row ${lang ? "" : "ar"}`}>
            <div className="footer-col-2">
                <div className="footer-box">
                    <h1 className="footer-box-title">{lang ? footerInfo.boxOne.title[0] : footerInfo.boxOne.title[1]}</h1>
                    <p className="footer-box-description">
                        {lang ? footerInfo.boxOne.description[0] : footerInfo.boxOne.description[1]}
                    </p>
                    <div className={`social-list ${lang ? "" : "ar"}`}>
                        <a href="#">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-col-1">
                <div className={`footer-list ${lang ? "" : "ar"}`}>
                    {
                        footerInfo.listOne.map((element, index) => (
                            <a href="#">{lang ? element[0] : element[1]}</a>
                        ))
                    }
                </div>
            </div>
            <div className="footer-col-1">
                <div className={`footer-list ${lang ? "" : "ar"}`}>
                {
                footerInfo.listTwo.map((element, index) => (
                    <a href="#">{lang ? element[0] : element[1]}</a>
                ))
                }
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer