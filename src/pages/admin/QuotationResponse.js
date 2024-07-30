import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import AdminMenu from '../../components/AdminMenu'
import axios from 'axios'
import { toast } from 'react-hot-toast'


const QuotationResponse = ({eventtype}) => {
  const { id } = useParams()
  const [quotedAmount, setQuotedAmount] = useState(0)
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const apiUrl = eventtype === 'Public'
      ? 'http://localhost:5209/api/Quotation/add/pub/response'
      : 'http://localhost:5209/api/Quotation/add/pvt/response';

    const requestBody = eventtype === 'Public'
      ? {
          publicQuotationRequestId: id,
          quotedAmount: quotedAmount,
          responseMessage: responseMessage
        }
      : {
          privateQuotationRequestId: id,
          quotedAmount: quotedAmount,
          responseMessage: responseMessage
        };

    const response = await axios.post(apiUrl, requestBody);
      if (response.status === 200) {
        toast.success('Response submitted successfully')
        setQuotedAmount('');
        setResponseMessage('');
      } else {
        toast.error('Failed to submit response')
      }
    } catch (error) {
      toast.success('You Have Already Submitted Response')    
    }
  }

  return (
    <div>
      <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <h3>{eventtype} Event Quotation Response</h3>
              <form onSubmit={handleSubmit} >
                <div className="form-group">
                  <label htmlFor="quotedAmount">Quoted Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="quotedAmount"
                    value={quotedAmount}
                    onChange={(e) => setQuotedAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="responseMessage">Response Message</label>
                  <textarea
                    className="form-control"
                    id="responseMessage"
                    value={responseMessage}
                    onChange={(e) => setResponseMessage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%' }}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
      
    </div>
  )
}

export default QuotationResponse