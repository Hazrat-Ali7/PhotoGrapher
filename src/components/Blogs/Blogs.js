import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h3 className='text-danger text-center my-4'>Answering Questions!!</h3>


            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body className='bg-light'>
                        <p><span className='text-danger'>Authentication:</span> Authentication The process determines the identity of the user before disclosing sensitive information. This is crucial for systems or interfaces where the user's priority is to protect confidential information. In the process, the user makes a plausible claim about the identity of the individual (his or her) or entity.
                        Certificates or claims can be usernames, passwords, fingerprints, etc. Authentication and non-rejection, sort of issues are handled at the application level. The disqualification authentication process can significantly affect the availability of services.</p>

                        <p>
                        <span className='text-danger'>Authorization:</span> Authorization strategy is used to determine the permissions granted to an authorized user. Simply put, it examines whether it allows the user to access certain resources. Authorization occurs after the authentication event, where the user's identity is confirmed before the user's access list is then determined by searching the table and entries stored in the database.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    Google firebase is a platform that now offer active backend for building dynamic web and mobile applications. We can build client side app with firebase ,Firebase turns the client side app into a serverless app in no time, It also removes the need to manage database yourself at it does for us.Firebase is the technical and time savings alternative to write backend code for dynamic app. it also provides hosting facilities, It manages the cloud server configuration as it give access to other google app like sheets and drive. Firebase provides simple and build in third party authentications like facebook, github, apple.And Firebase reduces the development cost because its free and premium is not tht much costly.So we use firebase because its a good choice to deploy a working product on the cloud rapidly.And its covers the backend too.There are various others option for authentications like 1) Cloud based authentication 2)Token based authentication 3)Third party access(OAuth, API-token) 4)OpenId .
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <ul>

                            <li>Cloud Firstore</li>
                            <li>Cloud Functions</li>
                            <li>Authentications</li>
                            <li>Hosting</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default Blogs;