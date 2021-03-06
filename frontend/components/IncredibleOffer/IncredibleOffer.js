import React from 'react';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import IncredibleOfferStyles from './IncredibleOfferStyles';
import IncredibleOfferButtonLink from './IncredibleOfferButtonLink';
import formatMoney from '../../lib/formatMoney';
import formatLetters from '../../lib/formatLetters';
import PageInfo from '../../components/PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';

const IncredibleOffer = ({ collectionQuery,  variables, onCollectionPreview, spacing }) => {
  const { data, loading } = useQuery(collectionQuery, { variables });

  if (loading) return <Spinner spacing={spacing} />;

  return (
      <>
        {
          !onCollectionPreview && (
            <PageInfo 
              message1="Incredible Offer" 
              message2={`We have ${data.itemsInStore.length} items for you`} 
            />
          )
        }

        <IncredibleOfferStyles>
          {
            data.items.map(item => (
              <Link href={{ pathname: '/item', query: { id: item.id} }} key={item.id}>
                <a>
                  <div className="card">
                    <div className="image-box">
                      <img src={item.image1} alt={item.itemName} />
                    </div>
                    <div className="content">
                      <div className="discount-percent">{item.discountPercent}% discount</div>
                      <div className="item-name">{formatLetters(item.itemName)}</div>
                      <div className="amount"><s>{formatMoney(item.amount)}</s></div>
                      <div className="discount-amount">{formatMoney(item.newPrice)}</div>
                    </div>
                  </div>
                </a>
              </Link>
            ))
          }
        </IncredibleOfferStyles>

        {
          onCollectionPreview && (
            <IncredibleOfferButtonLink />
          )
        }
    </>
  )
} 

export default IncredibleOffer;
