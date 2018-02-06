import React from 'react';

const Navigation = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <a className="btn btn-info" href='javascript:;' onClick={() => props.onChangeWeek(-1)}>Previous</a>
                </li>
                <li className="page-item">
                    <a className="btn btn-info" href='javascript:;' onClick={() => props.onChangeWeek(+1)}>Next</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;