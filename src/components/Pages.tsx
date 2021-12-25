import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage, selectLimit, selectTotalCount} from "../store/selectors";
import {setCurrentPage} from "../store/Device/actionDevice";

const Pages = () => {
    const totalCount = useSelector(selectTotalCount);
    const limit = useSelector(selectLimit);
    const currentPage = useSelector(selectCurrentPage);
    const pageCount = Math.ceil(totalCount / limit);
    const pages = [];
    const dispatch = useDispatch();
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className={'mt-5'}>
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={currentPage === page}
                    onClick={() => dispatch(setCurrentPage(page))}
                >{page}
                </Pagination.Item>)}
        </Pagination>
    );
};

export default Pages;