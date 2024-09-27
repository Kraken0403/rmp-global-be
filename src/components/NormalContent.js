import React from 'react'
import Container from './Container'
import './NormalContent.scss'
const NormalContent = () => {
  return (
    <div className="nc">
        <Container> 
            <div className="nc-wrapper">
                <div className="nc-para">
                    <p>At RMP Global, we prioritize the protection and confidentiality of our clients' data, employing cutting-edge technology and strict policies to safeguard sensitive information. Our security practices are designed to meet global standards, ensuring that your data remains secure and always protected from unauthorized access.</p>
                    <p>The security of our customers’ data is a top priority for RMP Global. We operate a comprehensive framework to ensure data protection and security, including the following safeguards</p>
                </div>

                <div className="nc-points">
                    <h4>
                        IT Safeguards
                    </h4>
                    <ul>
                        <li>All workstations are installed with the latest anti-virus software which checks for updates daily.</li>
                        <li>We have anti-malware software on all computers which scans twice a day.</li>
                        <li>Default windows firewall software is configured to protect access to our company network.</li>
                        <li>Every computer is password protected. It is mandatory for each user to change the password every six weeks</li>
                        <li>Access to client information is restricted and available to users working on the assignment</li>
                        <li>We have multiple backup operations scheduled to prevent the loss of data.</li>
                        <li>Internet access is carefully controlled, with restricted access to certain sites to prevent security breaches. </li>
                        <li>We also maintain a paperless, eco-friendly office environment to further secure information.</li>
                        <li>With IP authentication we restrict external access.</li>
                    </ul>
                </div>

                <div className="nc-points">
                    <h4>
                        Physical Safeguards
                    </h4>
                    <ul>
                        <li>We have closed circuit cameras installed in our premises with 100% surveillance coverage of our workplace.</li>
                        <li>The entrance of our workplace has an access control system which permits only controlled entry.</li>
                        <li>We strictly follow the “No External Device” rule and have disabled the USB ports at all workstations.</li>
                        <li>Our company is a mobile free zone for executives and below employees, and it is compulsory for all employees to keep their mobile devices outside the work zone and placed in a secure locker before work commences </li>
                    </ul>
                </div>

                <div className="nc-points">
                    <h4>
                        Confidentiality
                    </h4>
                    <ul>
                        <li>All employees sign non-disclosure and non-compete agreements.</li>
                        <li>We have a detailed Data Protection Policy in compliance. We consider all data and information provided by the client as confidential and strictly the property of the client.</li>
                        <li>We have made our company a zero data breach zone with our Data Breach Policy. As per this policy no one at RMP Global shall ever disclose any client information to any third party without the prior consent of the company and client in writing</li>
                        <li>Our Data Retention and Destruction Policy states that all raw and processed data is destroyed once the work is complete upon client confirmation in writing</li>
                        <li>We ensure transparency in how data is collected, stored, and used, providing clients with peace of mind regarding their data security</li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NormalContent