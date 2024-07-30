import React from "react";
import Layout from "../components/Layout/Layout";
import "../css/home.css";
import Accordian from "../components/Accordian";

const Home = () => {
    return (
        <div>
            <Layout>
                <div classname="container" style={{ padding: "30px" }}>
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://i.pinimg.com/736x/e3/ad/f9/e3adf9f9d6c0f5a529ec357ea71bcd97.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://5.imimg.com/data5/GLADMIN/Default/2023/3/292980365/QI/JC/JC/135181622/exhibition-event-management-service.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.visionvivaah.com/blog/wp-content/uploads/2019/10/Best-Event-Management-Company-In-Mumbai.jpg"
                                    className="d-block w-100"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className=" text-center mt-5 text-primary">
                                WE ARE A FULL SERVICE EVENT MANAGEMENT COMPANY
                            </h2>
                            <hr></hr>
                        </div>
                        <div className="col-md-8 mt-2">
                            <h5 className="text-primary">Our Vision :</h5>
                            <p>
                                We have long and clear vision of being the foremost organization
                                in the world event management and corporate communication, while
                                sharing our success with our team members and our achievements
                                with the society.
                            </p>
                            <p>
                                We have passion and commitment to connect brands and their
                                customers. We have vision to deliver superlative communication
                                experience to brands for their customers, associates and
                                employees. We have vision to create environments where corporate
                                can communicate with their audience and vice versa.
                            </p>
                            <h5 className="text-primary mt-4">Our Services :</h5>
                            <p>
                                We offer bespoke branding and production for your corporate
                                event with our in-house fabrication and equipment hire. We offer
                                our production services for conferences, business meet,
                                exhibitions, live events, decor and decoration. We work closely
                                with your marketing team to create fantastic branding that
                                follows your brand guidelines and project objectives.We are a
                                best event management company.
                            </p>
                        </div>
                        <div className="col-md-4 mt-2 ">
                            <Accordian/>
                           
                        </div>


                        <div className="col-12 mt-4">
                            <h5 className="text-primary">Corporate Events :</h5>
                        </div>
                        <div className="col-12">
                            <p>We are 360 degree event management company engaged in corporate events professionally managed from start to finish . From conferences and meetings, to employee engagements, from grand openings to gala dinners, Showmakerz can deliver just the right tone, theme and energy for your corporate events planning.</p>
                            <p>When you choose Showmakerz you gain a partner who will give you personal attention, dedicated service, and the peace of mind knowing your event will run smoothly from beginning to end.</p>
                        </div>
                        <div className="col-12 mt-4">
                            <h5 className="text-primary">Social Events & Party Planning :</h5>
                            <p>Private parties and social events can be intimate and low-key or large and lively. Showmakerz has planned all types of special events. We specialize in creating memorable, customized parties to fit within your budget like anniversary parties, social get to gather, birthday celebrations, corporate parties or any special occasion.</p>
                            <p>If you are looking to organize any event, brand promotional campaigns, wedding or any other celebration, allow us to take your vision to the next level. We will take care of every detail so you can relax and enjoy your event. Please share your query with us and our team of expert event planner will revert you back with various options and cost estimation.</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-md-12">
                            <h3 className="text-center text-primary">Our Gallery</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://www.shutterstock.com/image-photo/moscow-february-6-2024-packed-600nw-2425625715.jpg" className="img-fluid" alt="Image 1" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://www.jetsupholidays.com/wp-content/uploads/2019/12/Corporate-Party-scaled.jpg" className="img-fluid" alt="Image 2" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MOmkUqyxeV4Q4rH-eoKvt7IGD7_GJZILxQ&usqp=CAU" className="img-fluid" alt="Image 3" />
                            </div>
                        </div>                        <div className="col-md-3"><div className="image-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFk6SQGMJI0YxXis8P2MPCN8fsALxxLML_9A&usqp=CAU" className="img-fluid" alt="Image 1" />
                        </div></div>
                        <div className="col-md-3">
                            <div className="image-container">
                                <img src="https://v3events.in/blog/wp-content/uploads/2020/10/Wedding-Planner-1.jpg" className="img-fluid" alt="Image 1" />
                            </div>
                        </div>
                        <div className="col-md-3"><div className="image-container">
                            <img src="https://www.weddingsutra.com/images/designs-by-sakshi-jerath-thumb-1.jpg" className="img-fluid" alt="Image 1" />
                        </div></div>
                        <div className="col-md-3"><div className="image-container">
                            <img src="https://dont-tell-comedy.mo.cloudinary.net/private/A18-AndreaCrowd.png" className="img-fluid" alt="Image 1" />
                        </div></div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://curlytales.com/wp-content/uploads/2023/11/Zakir-Khan-Comedy.jpg" className="img-fluid" alt="Image 1" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOxYVLB-Hn4lGGW8ZO4fO4viuEi0w6c1OJOw&usqp=CAU" className="img-fluid" alt="Image 2" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNG29E37x2pBGiuCUIvUny-dn4pUXW1xRTQ&usqp=CAU" className="img-fluid" alt="Image 3" />
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Home;
