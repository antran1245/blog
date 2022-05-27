import { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap';
import axios from "axios";
import '../sass/style.scss';

export default function Quote() {
    const [quote, setQuote] = useState(null);
    useEffect(()  => {
        const handleAxios = async() => {
            let resp = await axios.get('https://api.goprogram.ai/inspiration')
            setQuote({quote: resp.data.quote, author: resp.data.author})
        }
        handleAxios()
    }, [])
    return(
        <Row className="quote p-3">
            <Col xs={12} sm={{span: 4, offset: 4}} className="p-4">
                {
                quote && 
                    <>
                        <p><em>{quote.quote}</em></p>
                        <p className="d-flex justify-content-end"> <b>{quote.author}</b></p>
                    </>
                }
            </Col>
        </Row>
    );
}