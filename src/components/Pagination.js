import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


function Page(props) {
  console.log(props);

  return (
    <Pagination aria-label="Page navigation example" className="pageChange">
      <PaginationItem className="previous">
        <PaginationLink previous onClick={() => props.url(props.previous)} />
      </PaginationItem>
      <PaginationItem className="next">
        <PaginationLink next onClick={() => props.url(props.next)} />
      </PaginationItem>
    </Pagination>
  );
}

export default Page;
