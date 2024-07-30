import React from 'react'

const Accordian = () => {
  return (
    <div>
      <div className="row">
                                <div className="col-md-12">
                                    <h4 className="text-center text-primary mb-4">Our Key Events</h4>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseOne"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseOne"
                                                >
                                                    Corporate Events
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseOne"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseTwo"
                                                >
                                                    Employee Engagements
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseTwo"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseThree"
                                                >
                                                    Wedding Events
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseThree"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseFour"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseFour"
                                                >
                                                    Theme Parties
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFour"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseFive"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseFive"
                                                >
                                                    Birthday Parties
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseFive"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fifth item's accordion body.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseSix"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseSix"
                                                >
                                                    Standup Comedy Shows
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseSix"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the sixth item's accordion body.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#flush-collapseSeven"
                                                    aria-expanded="false"
                                                    aria-controls="flush-collapseSeven"
                                                >
                                                    Music Nights
                                                </button>
                                            </h2>
                                            <div
                                                id="flush-collapseSeven"
                                                className="accordion-collapse collapse"
                                                data-bs-parent="#accordionFlushExample"
                                            >
                                                <div className="accordion-body">
                                                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the seventh item's accordion body.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
    </div>
  )
}

export default Accordian
