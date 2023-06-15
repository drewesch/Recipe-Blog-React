import React from 'react';
import { Link } from "react-router-dom";
import CatImage from '../components/shared/CatImage';

function NoPage() {
    return (
        <div>
            <div>
                <CatImage/>
            </div>
            <p>Sorry, this page doesn't exist.</p>
            <Link to="/">
                <button type="button">Back to homepage</button>
            </Link>
        </div>
    );
}

export default NoPage;