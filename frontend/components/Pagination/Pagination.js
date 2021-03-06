import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import PaginationStyles from './PaginationStyles';

const Pagination = ({ PAGINATION_QUERY, perPage, collection, page, pathname }) => {
  const { data, loading } = useQuery(PAGINATION_QUERY)

  if (loading) return null;
  const count = data.itemsConnection.aggregate.count;
  const pages = Math.ceil(count / perPage);

  return (
    <>
      <Head>
        <title>iShop! {collection} ~ Page {page} of {pages}</title>
      </Head>
      <PaginationStyles>
        <div className="wrap">
          <Link href={{
            pathname: pathname,
            query: { page: page - 1}
          }}>
            <a className="prev" aria-disabled={page <= 1}>← Prev</a>
          </Link>
            <p className="page-number">
                Page {page} of {pages}
            </p>
          <Link href={{
            pathname: pathname,
            query: { page: page + 1 }
          }}>
            <a className="next" aria-disabled={page >= pages}>Next →</a>
          </Link>
        </div>
      </PaginationStyles>
    </>
  )
        
}

export default Pagination;
